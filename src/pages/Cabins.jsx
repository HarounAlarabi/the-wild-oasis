import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import { useState } from "react";
import Button from "../ui/Button";
import CreateEditCabinForm from "../features/cabins/CreateEditCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading>All Cabins</Heading>
        <p>Filter and Sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm(!showForm)}>Add Cabin</Button>
        {showForm && <CreateEditCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
