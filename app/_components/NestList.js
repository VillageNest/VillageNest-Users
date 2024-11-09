import { unstable_noStore as noStore } from "next/cache";

import NestCard from "@/app/_components/NestCard";
import { getNests } from "../_lib/data-service";

async function NestList({ filter }) {
  // noStore();

  const nests = await getNests();

  if (!nests.length) return null;

  let displayedNests;
  if (filter === "all") displayedNests = nests;
  if (filter === "small")
    displayedNests = nests.filter((nest) => nest.maxCapacity <= 3);
  if (filter === "medium")
    displayedNests = nests.filter(
      (nest) => nest.maxCapacity >= 4 && nest.maxCapacity <= 7
    );
  if (filter === "large")
    displayedNests = nests.filter((nest) => nest.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedNests.map((nest) => (
        <NestCard nest={nest} key={nest.id} />
      ))}
    </div>
  );
}

export default NestList;
