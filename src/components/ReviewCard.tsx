import Image from "next/image";

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden p-px bg-gradient-to-b from-[#4C3182] to-[#11032C] rounded-xl">
      <div className="bg-[#0C0024] h-full p-4 rounded-xl">
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </div>
    </figure>
  );
};

export default ReviewCard;
