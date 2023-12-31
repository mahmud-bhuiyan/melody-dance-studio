import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: enrolled = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/enrolled?email=${user?.email}`);
      return res.data;
    },
    // queryFn: async () => {
    //   const res = await fetch(
    //     `https://melody-dance-studio-server.vercel.app/enrolled?email=${user?.email}`,
    //     { headers: { authorization: `bearer ${token}` } }
    //   );
    //   return res.json();
    // },
  });
  return [enrolled, refetch];
};

export default useCart;
