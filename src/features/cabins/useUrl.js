import { useSearchParams } from "react-router-dom";

export const useUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateUrl = (key, value) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  return { searchParams, updateUrl };
};
