import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmStays, numDays, cabinCount }) {
  //1
  const numBookings = bookings.length;
  //2 sale
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  //3 checkin
  const checkin = confirmStays.length;

  //4 occupancy rate
  const occupancyRate =
    confirmStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        color="green"
        value={`$${sales}`}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        color="indigo"
        value={checkin}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        value={Math.round(occupancyRate * 100) + "%"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
