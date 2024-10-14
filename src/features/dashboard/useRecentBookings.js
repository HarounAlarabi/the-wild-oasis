// import { subDays } from "date-fns";
// import { useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getBookingsAfterDate } from "../../services/apiBookings";

// export function useRecentBookings() {
//   const [searchParams] = useSearchParams();

//   const lastParam = searchParams.get("last");
//   const numDays = !lastParam ? 7 : Number(lastParam);

//   const queryDate = subDays(new Date(), numDays).toISOString();

//   const { isLoading, data: bookings } = useQuery({
//     queryFn: () => getBookingsAfterDate(queryDate),
//     queryKey: ["bookings", `last-${numDays}`],
//   });

//   return { isLoading, bookings };
// }

import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  // Ensure that 'last' is defined, fallback to default 7 days if it's missing or invalid
  const lastParam = searchParams.get("last");
  const numDays =
    lastParam === null || isNaN(Number(lastParam)) ? 7 : Number(lastParam);

  const queryDate = subDays(new Date(), numDays).toISOString();

  // Fetch bookings with correct date range
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
}
