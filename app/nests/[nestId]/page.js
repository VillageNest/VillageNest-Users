import Nest from "@/app/_components/Nest";

import Spinner from "@/app/_components/Spinner";
import { getNest, getNests } from "@/app/_lib/data-service";

import { Suspense } from "react";

// export const metadata = {
//   title: "Nest",
// };

export async function generateMetadata({ params }) {
  const { name } = await getNest(params.nestId);
  return { title: `Nest ${name}` };
}

export async function generateStaticParams() {
  const nests = await getNests();

  const ids = nests.map((nest) => ({ nestId: String(nest.id) }));

  return ids;
}

export default async function Page({ params }) {
  const nest = await getNest(params.nestId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Nest nest={nest} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {nest.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}></Suspense>
      </div>
    </div>
  );
}
