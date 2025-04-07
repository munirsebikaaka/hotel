import Heading from "../ui/heading";
import Row from "../ui/row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
