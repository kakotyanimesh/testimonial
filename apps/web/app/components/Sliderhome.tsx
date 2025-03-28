"use client"
import InfiniteSlider from "@repo/ui/slider";
import TcardOne, { TcardProps } from "@repo/ui/tcardOne";

export default function SliderHome() {
  return (
    <div className="overflow-hidden">
      <InfiniteSlider
        duration="10"
        slides={TcardArray.map((t, k) => (
          <TcardOne
            key={k}
            content={t.content}
            imageUrl={t.imageUrl}
            stars={t.stars}
            author={t.author}
            authorCompany={t.authorCompany}
            isActive={t.isActive}
          />
        ))}
      />
    </div>
  );
}

const TcardArray: TcardProps[] = [
  {
    stars: 3,
    author: "Animesh",
    authorCompany: "Company.to",
    content:
      "ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page.",
    imageUrl: "https://i.pravatar.cc/150?img=5",
    isActive: false,
  },
  {
    stars: 4,
    author: "kAKOTY",
    authorCompany: "Company.to",
    content:
      "ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page.",
    imageUrl: "https://i.pravatar.cc/150?img=7",
    isActive: false,
  },
  {
    stars: 4,
    author: "kAKOTY",
    authorCompany: "Company.to",
    content:
      "ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page.",
    imageUrl: "https://i.pravatar.cc/150?img=7",
    isActive: false,
  },
];
