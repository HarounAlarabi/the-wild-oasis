import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading>All Cabins</Heading>
        <p>Filter and Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <Row>
        <button onClick={<CreateCabinForm />}>Create Cabin</button>
      </Row>
    </>
  );
}

export default Cabins;
