import { Suspense } from "react";
import NestList from "../_components/NestList";
import Spinner from "../_components/Spinner";
import Counter from "../_components/Counter";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;
// export const revalidate = 15;

export const metadata = {
  title: "Nests",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Nests
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious nests, located right in the heart of the Ukraine.
        Imagine waking up to beautiful mountain views, spending your days
        exploring the forests around, or just relaxing on your private
        terittory. Enjoy nature&apos;s beauty in your own little home away from
        home. The perfect spot for a peaceful, calm vacation. Welcome to
        paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <NestList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
