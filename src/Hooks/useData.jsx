import { useQuery } from "@tanstack/react-query";

const useData = () => {
  const { data: data = [], isLoading: loading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/classes");
      return res.json();
    },
  });
  return [data, loading];
};

export default useData;
