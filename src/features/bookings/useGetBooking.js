import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export const useGetBooking = () => {
  const { bookingId } = useParams();
  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getBooking(bookingId),
  });
  return { booking, isLoading, error };
};
