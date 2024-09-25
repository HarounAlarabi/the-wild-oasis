import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useFetchCabin } from "./useFetchCabin";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";
function CabinTable() {
  const { cabins, isLoading } = useFetchCabin();
  console.log(cabins);
  const [searchParam] = useSearchParams("");
  if (isLoading) return <Spinner />;
  //Filter cabins based on discount
  const filteredValue = searchParam.get("discount");
  let filteredCabins = cabins;
  if (filteredValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filteredValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  //Sort cabins based on sortBy
  const sortBy = searchParam.get("sortBy") || "startDate-asc";
  const [field, order] = sortBy.split("-");
  const modifier = order === "asc" ? 1 : -1;
  const sortCabins = filteredCabins.sort(
    (a, b) => [a[field] - b[field]] * modifier
  );
  return (
    <Table columns=" 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={sortCabins}
        render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
      />
    </Table>
  );
}

export default CabinTable;
