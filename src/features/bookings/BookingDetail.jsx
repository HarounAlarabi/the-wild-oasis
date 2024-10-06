import styled from "styled-components";
import { HiArrowDownOnSquare } from "react-icons/hi2";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useGetBooking } from "./useGetBooking";
import { useCheckOut } from "../check-in-out/useCheckOut";
import { useNavigate } from "react-router-dom";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const Navigate = useNavigate();
  const { booking, isLoading } = useGetBooking();
  const { checkout, isCheckingOut } = useCheckOut();
  const moveBack = useMoveBack();

  if (!booking) return;

  const { status, id: bookingId } = booking;
  if (isLoading) return <Spinner />;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed&&" && (
          <Button onClick={() => Navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
