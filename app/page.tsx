import Logo from "@/components/Logo";
import Reviews from "@/components/Reviews";
import SpikesLink from "@/components/SpikesLink";

export default function Home() {
  return (
    <main className="main">
      <h1 className="sr-only">
        Spikes - Transforme ton portfolio en aimant à client.
      </h1>
      <div className="bg-gradient-to-b from-purple-500/10 via-black to-purple-500/10">
        <div className="flex flex-col min-h-svh h-full">
          <div className="py-12 flex justify-center">
            <Logo />
          </div>
          <div className="flex flex-col flex-auto justify-center">
            <h2 className="sr-only">Spikes Reviews</h2>
            <Reviews />
          </div>
          <div className="py-12 flex justify-center">
            <SpikesLink />
          </div>
        </div>
      </div>
    </main>
  );
}
