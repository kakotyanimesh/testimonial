import { prisma } from "@repo/db";
import type { Request, Response } from "express";

export const getwidget = async (req: Request, res: Response) => {
  const { apikey } = req.query;

  if (!apikey || typeof apikey !== "string") {
    res.status(400).json({ msg: "No API key found" });
    return;
  }

  try {
    const dbCallAPI = await prisma.apiKey.findUnique({
      where: { key: apikey },
      include: {
        spaces: {
          include: {
            testimonials: {
              where: { approaved: true },
            },
          },
        },
      },
    });

    if (!dbCallAPI || !dbCallAPI.spaces) {
      res.status(401).json({ msg: "Invalid API key" });
      return;
    }

    const tM = dbCallAPI.spaces.testimonials;

    const cardStyles = `
      .t_container {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        justify-content: center;
        padding: 25px 50px 75px 100px;
        background: linear-gradient(to bottom, #fff, #dbeafe);
        font-family: sans-serif;
      }

      .t_card {
        width: 320px;
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 16px;
        transition: transform 0.2s ease;
        border: 1px solid #e2e8f0;
      }

      .t_card:hover {
        transform: translateY(-5px);
      }

      .t_stars {
        display: flex;
        gap: 4px;
      }

      .t_star {
        width: 16px;
        height: 16px;
        fill: #3b82f6;
        color: #3b82f6;
      }

      .t_content {
        font-size: 14px;
        color: #1e293b;
        line-height: 1.4;
      }

      .t_author {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: auto;
      }

      .t_author img {
        width: 48px;
        height: 48px;
        border-radius: 9999px;
        object-fit: cover;
        border: 2px solid #e2e8f0;
      }

      .t_author_info {
        display: flex;
        flex-direction: column;
      }

      .t_author_name {
        font-weight: 600;
        font-size: 15px;
      }

      .t_author_company {
        font-size: 13px;
        color: #64748b;
      }

      .t_video_wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        background: #000;
      }

      .t_video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .t_play_btn {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        background-color: rgba(59, 130, 246, 0.4);
        border: none;
        cursor: pointer;
      }

      .t_play_icon {
        width: 42px;
        height: 42px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        padding: 6px;
        fill: white;
      }
    `;

    const cardHTML = tM
      .map((t, idx) => {
        const filledStar = `<svg class="t_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10 12 2"/></svg>`;
        const emptyStar = `<svg class="t_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon fill="none" stroke="#3b82f6" stroke-width="2" points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10 12 2"/></svg>`;

        const starsHTML = Array.from({ length: 5 })
          .map((_, i) => (i < t.stars ? filledStar : emptyStar))
          .join("");

        const contentHTML = t.review
          ? `<div class="t_content">${t.review}</div>`
          : `
          <div class="t_video_wrapper" data-video-idx="${idx}">
            <video id="t_video_${idx}" class="t_video" src="${t.videoUrl}" preload="metadata"></video>
            <button class="t_play_btn" onclick="togglePlay(${idx})">
              <svg class="t_play_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M5 3v18l15-9-15-9z"/></svg>
            </button>
          </div>`;

        return `
        <div class="t_card">
          <div class="t_stars">${starsHTML}</div>
          ${contentHTML}
          <div class="t_author">
            <img src="${t.customerimage}" alt="${t.customername}" />
            <div class="t_author_info">
              <div class="t_author_name">${t.customername}</div>
              <div class="t_author_company">${t.customerCompany}</div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    const script = `
      (function () {
        const style = \`${cardStyles}\`;
        const container = document.createElement('div');
        const shadowHost = document.createElement('div');
        const shadow = shadowHost.attachShadow({ mode: 'open' });

        shadow.innerHTML = \`
          <style>\${style}</style>
          <div class="t_container">
            ${cardHTML}
          </div>
        \`;

        const logicScript = document.createElement('script');
        logicScript.textContent = \`
          function togglePlay(idx) {
            const video = document.getElementById('t_video_' + idx);
            const btn = document.querySelector('[data-video-idx="' + idx + '"] .t_play_btn');
            if (video.paused) {
              video.play();
              btn.style.display = 'none';
            } else {
              video.pause();
              btn.style.display = 'grid';
            }

            video.onended = () => {
              btn.style.display = 'grid';
            }
          }
        \`;

        shadow.appendChild(logicScript);
        container.appendChild(shadowHost);
        document.body.appendChild(container);
      })();
    `;

    res.setHeader("Content-Type", "application/javascript");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(script);
  } catch (error) {
    res.status(500).send(
      `Error: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};
