import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import { useFetchCabin } from "../cabins/useFetchCabin";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, confirmedStays, numDays } = useRecentStays();
  const { bookings, isLoading: isLoading2 } = useRecentBookings();
  const { cabins, isLoading: isLoading3 } = useFetchCabin();

  if (isLoading || isLoading2 || isLoading3) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabinsCount={cabins.length}
        numDays={numDays}
      />

      <div>Chart</div>
      <div>Table</div>
      <div>Recent Activity</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
