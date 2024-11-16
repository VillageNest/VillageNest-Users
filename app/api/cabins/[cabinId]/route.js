import { getBookedDatesByNestId, getNest } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { nestId } = params;

  try {
    const [nest, bookedDates] = await Promise.all([
      getNest(nestId),
      getBookedDatesByNestId(nestId),
    ]);

    return Response.json({ nest, bookedDates });
  } catch {
    return Response.json({ message: "Nest not found" });
  }
}

// export async function POST() {}
