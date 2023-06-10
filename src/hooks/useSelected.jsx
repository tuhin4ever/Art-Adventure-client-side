import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useSelected = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: selectCourse = [] } = useQuery({
    queryKey: ["selectCourse", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    // enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure(`/selectCourse?email=${user?.email}`);
      // console.log("res from axios", response);
      return response.data;
    },
  });
  return [selectCourse, refetch];
};

export default useSelected;
