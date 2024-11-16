import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to VillageNest
        </h1>

        <div className="space-y-8">
          <p>
            Discover the charm, simplicity, and authenticity of rural retreats
            with VillageNest. Our platform connects you with a carefully curated
            selection of unique cottages, rustic cabins, and charming country
            homes nestled in scenic rural areas, providing you with a chance to
            escape the everyday and fully immerse yourself in the beauty of
            nature.
          </p>
          <p>
            At VillageNest, each stay is designed not only to offer a serene
            getaway but also to support local communities and their traditions.
            Experience a truly enriching journey as you step away from the city,
            unwind in pristine natural surroundings, and delve into the rich
            cultural heritage shared by our rural hosts.{" "}
          </p>
        </div>
      </div>

      <div className="col-span-2 ">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of nest"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src={image2}
          fill
          className="object-cover"
          alt="Family that manages VillageNest"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Why VillageNest?
        </h1>

        <div className="space-y-8">
          <p>
            In many rural regions, the true beauty of local life and culture
            often goes unnoticed, limited by low visibility and the lack of
            accessible lodging options.
          </p>
          <p>
            VillageNest bridges this gap by providing a platform where travelers
            can easily find and book genuine, authentic accommodations in
            breathtaking, unspoiled landscapes.
          </p>
          <p>
            Our platform empowers rural communities by bringing sustainable
            tourism to their doorsteps, boosting local economies, and fostering
            a deeper appreciation for regional culture and traditions. We aim to
            revitalize these communities by encouraging travelers to embrace the
            slower pace of countryside living and by sharing their unique
            cultural experiences with a wider audience.{" "}
          </p>
          <div>
            <a
              href="/nests"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all rounded-lg"
            >
              Explore our luxury nests
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
