import {
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, cabinsCount, numDays }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

  const numCheckIns = confirmedStays.length;

  const occupancyRate =
    confirmedStays.reduce((acc, stay) => acc + stay.nightsNum, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        color="indigo"
        value={numCheckIns}
        icon={<HiCalendarDays />}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        value={Math.round(occupancyRate * 100) + "%"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
