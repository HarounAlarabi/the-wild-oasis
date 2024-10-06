import styled from "styled-components";
import { useEffect, useState } from "react";
import BookingDataBox from "../bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useGetBooking } from "../bookings/useGetBooking";
import { useCheckIn } from "./useCheckIn";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckInBooking() {
  const moveBack = useMoveBack();
  const { booking, isLoading } = useGetBooking();
  const { checkIn, isCheckingIn } = useCheckIn();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);
  if (!booking) return;

  const {
    id: bookingId,
    guests,
    totalPrice,
    guestsNum,
    hasBreakfast,
    nightsNum,
  } = booking;

  const breakfastOption = settings?.breakfastPrice * nightsNum * guestsNum;

  if (isLoading || isLoadingSettings) return <Spinner />;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: breakfastOption,
          totalPrice: totalPrice + breakfastOption,
        },
      });
    } else {
      checkIn({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          checked={addBreakfast}
          onChange={() => {
            setAddBreakfast((add) => !add);
            setConfirmPaid(false);
          }}
        >
          Add breakfast for ${breakfastOption} per night
        </Checkbox>
      </Box>
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {guests.fullName} has paid total amount for
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + breakfastOption)} 
            (${formatCurrency(totalPrice)} + ${formatCurrency(
                breakfastOption
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckInBooking;
