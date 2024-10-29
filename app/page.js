import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.jpg";

export default function Page() {
  return (
    <main className="mt-32">
      <Image
        src={bg}
        fill
        quality={100}
        className="object-cover object-top"
        alt="Mountains and forests with two nests"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal text-outline">
          Discover Ukrainian village
        </h1>

        <Link
          href="/nests"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all border-4 border-accent-300 rounded-lg"
        >
          Explore luxury nests
        </Link>
      </div>
    </main>
  );
}
