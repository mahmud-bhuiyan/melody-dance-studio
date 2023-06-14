import { useQuery } from "@tanstack/react-query";

const useData = () => {
  const { data: data = [], isLoading: loading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(
        "https://melody-dance-studio-server.vercel.app/classes"
      );
      return res.json();
    },
  });
  return [data, loading];
};

export default useData;
