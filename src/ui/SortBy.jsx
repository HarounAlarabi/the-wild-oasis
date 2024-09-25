import Select from "../ui/Select";
import { useUrl } from "../features/cabins/useUrl";

function SortBy({ options }) {
  const { updateUrl, searchParams } = useUrl();

  const sortBy = searchParams.get("sortBy") || "";
  const handleChange = (e) => {
    updateUrl("sortBy", e.target.value);
  };

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
