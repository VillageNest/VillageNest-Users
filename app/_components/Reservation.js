import { auth } from "../_lib/auth";
import { getBookedDatesByNestId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ nest }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByNestId(nest.id),
  ]);
  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookedDates} nest={nest} />
      {session?.user ? (
        <ReservationForm nest={nest} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
