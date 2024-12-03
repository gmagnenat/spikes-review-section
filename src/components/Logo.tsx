import Link from "next/link";
import { SpikesIcon } from "./spikes_icon";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 focus:outline-purple-500 focus:outline-offset-4 focus:outline-none"
    >
      <SpikesIcon className="w-8 h-8" role="img" aria-label="Spikes" />
      <p className="font-bold">Spikes</p>
    </Link>
  );
};
export default Logo;
