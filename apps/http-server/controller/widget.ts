import { prisma } from "@repo/db";
import type { Request, Response } from "express";

export const getwidget = async (req: Request, res: Response) => {
  const { apikey } = req.query;

  if (!apikey || typeof apikey !== "string") {
    res.status(400).json({ msg: "No API key found" });
    return;
  }

  try {
    const testimonialData = await prisma.apiKey.findUnique({
      where : {
        key : apikey
      },
      include : {
        spaces : {
          include : {
            testimonials : {
              where : {
                approaved : true
              }
            }
          }
        }
      }
    })

    // console.log(testimonialData?.spaces.testimonials);

    const testimonialCard = testimonialData?.spaces.testimonials.map((t, i) => {
      const filledStar = `<svg class="t_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon fill="#3b82f6" points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10 12 2"/></svg>`;
      const emptyStar = `<svg class="t_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon fill="none" stroke="#3b82f6" stroke-width="2" points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10 12 2"/></svg>`;

      const stars = Array.from({length : 5}).map((_, i) => (i < t.stars ? filledStar : emptyStar)).join("")
      return `
        <div class="testimonialCard">
              <div class="stars">
                ${stars}
              </div>
              <h1>${t.review}</h1> 
              <div class="tcard_customer_div">
                <img src="${t.customerimage}" alt="user image"/>
                <div class="tcard_customer_innerDiv">
                  <h3>${t.customername}</h3>
                  <p>${t.customerCompany}</p>

                </div>
              </div>
        </div>
        
      `
    }).join("")

    const html = `
      <div class="t_container">
        ${testimonialCard}
      </div>
    `

    const style = `
      .stars {
        display : flex;
        width : 70px;
        color : blue;
      }
      .tcard_customer_div img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .tcard_customer_div h3{
        font-family: "Inter", sans-serif;
        font-size: 0.875rem; /* which is 14px by default */
    }
    .tcard_customer_div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .tcard_customer_innerDiv {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
    }
    .tcard_customer_innerDiv h3{
        margin: 0;
        font-size: 0.95rem;
        /* font-weight: 500; */
        color: #1d4ed8;
    }
    .tcard_customer_innerDiv p {
        margin: 0;
        font-size: 0.875rem;
        color: #6b7280;
    }

    .t_container {
        display: grid;
        gap: 10px;
        margin-left: 20.5rem;
        margin-right: 20.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
        /* background-color: red; */
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    @media (min-width: 768px) {
        .t_container {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
    
        .t_container > .testimonialCard:nth-last-child(1):nth-child(3n + 1) {
          grid-column: 2 / span 1; /* center column */
        }
    
        .t_container > .testimonialCard:nth-last-child(2):nth-child(3n + 1),
        .t_container > .testimonialCard:nth-last-child(1):nth-child(3n + 2) {
          justify-self: end;
        }
    
        .t_container > .testimonialCard:nth-last-child(1):nth-child(3n + 2) {
          justify-self: start;
        }
    }       


    .testimonialCard {
        border: 1px solid blue ;
        background-color: #dbeafe;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        transition: transform 0.2s ease;
    }
    .testimonialCard:hover {
        transform: translateY(-4px);
    }   
    `
  
    const script = `
      (function iffee() {
            const style = document.createElement("style")
            style.textContent = \`${style}\`
            document.head.appendChild(style)
            const divOne = document.createElement("div")
            divOne.innerHTML = \`${html}\`
            document.body.appendChild(divOne)
        })()
    `
    res.setHeader("Content-Type", "application/javascript")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(200).send(script)
  } catch (error) {
    error instanceof Error ? res.status(500).send(`Error while sending testimonial data ${error}`) :
    res.status(500).send(`Error while sending testimonial data through script `)
  }
};
