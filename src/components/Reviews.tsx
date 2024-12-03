import ReviewCard from "./ReviewCard";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Shoguntoto",
    username: "@thomasdev59",
    body: "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles.",
    img: "/profile-picture/picture-1.webp",
  },
  {
    name: "Shoguntoto",
    username: "@thomasdev59",
    body: "Ezis répond à toutes les questions afin de nous aider le plus possible dans notre objectif.",
    img: "/profile-picture/picture-2.webp",
  },
  {
    name: "Hocine",
    username: "@hocine",
    body: "J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions.",
    img: "/profile-picture/picture-3.webp",
  },
  {
    name: "Youtmax654",
    username: "@youtmax654",
    body: "Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de traviller sur un projet.",
    img: "/profile-picture/picture-4.webp",
  },
  {
    name: "Baptiste",
    username: "@baptiste_lechat",
    body: "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.",
    img: "/profile-picture/picture-5.webp",
  },
  {
    name: "Le D",
    username: "sport_devweb",
    body: "Le fait d'avoir accès à un discord et une communauté fait vraiment la différence.",
    img: "/profile-picture/picture-6.webp",
  },
  {
    name: "Shoguntoto",
    username: "@thomasdev59",
    body: "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.",
    img: "/profile-picture/picture-7.webp",
  },
  {
    name: "Lois",
    username: "@lois",
    body: "Je suis surpris de la qualité des ressources et de la pertinence du contenu pour lequel je me suis abonné !",
    img: "/profile-picture/picture-8.webp",
  },
  {
    name: "Youtmax654",
    username: "@youtmax654",
    body: "Cette idée de challenges est de loin la meilleure que j'ai pu trouver sur internet parmi mes recherches.",
    img: "/profile-picture/picture-9.webp",
  },
  {
    name: "LucasQust",
    username: "@lucasqust",
    body: "C’est vraiment lourd, les challenges sont cool, l’environnement qu’Ezis à mit en place est top !",
    img: "/profile-picture/picture-3.webp",
  },
  {
    name: "Jojok63",
    username: "@jojok_63",
    body: "Une communauté très réactive, toujours prête à vous aider quelque soit le sujet.",
    img: "/profile-picture/picture-4.webp",
  },
  {
    name: "Eihposenna",
    username: "@eihposenna",
    body: "Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes.",
    img: "/profile-picture/picture-5.webp",
  },
  {
    name: "Shoguntoto",
    username: "@thomasdev59",
    body: "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles.",
    img: "/profile-picture/picture-1.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function Reviews() {
  return (
    <div className="flex flex-col">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl gap-4">
        <Marquee pauseOnHover className="[--duration:80s] p-0">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:80s] p-0">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}

export default Reviews;
