import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useStudent = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    //   use axios secure with react query
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
      queryKey: ["isStudent", user?.email],
      enabled: !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/student/${user?.email}`);
        // console.log("is student response", res);
        return res.data.student;
      },
    });
    return [isStudent, isStudentLoading];
};

export default useStudent;