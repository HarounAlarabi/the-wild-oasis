import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isLoading, data } = useQuery({
    queryKey: ["bookings-today"],
    queryFn: getStaysTodayActivity,
  });

  return { isLoading, data };
}
