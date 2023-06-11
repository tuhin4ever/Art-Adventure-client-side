import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.price = Number(data.price);
    data.available_seats = Number(data.available_seats);
    data.status = "pending";
    data.enrolled = 0;
    console.log(data);
    axiosSecure.post("/addClass", data).then((response) => {
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Class added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    reset();
  };

  return (
    <div className="w-full relative  flex flex-col items-center justify-center min-h-screen ">
      <div className="relative h-screen mt-10">
        <SectionTitle heading="Add Class" subHeading="New Classes" />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col md:flex-row mb-4">
            <input
              className="p-3 m-1 border-2 rounded-md w-full md:w-auto"
              defaultValue={user.displayName}
              {...register("instructor")}
              readOnly
            />
            <input
              className="p-3 m-1 border-2 rounded-md w-full md:w-auto"
              defaultValue={user.email}
              {...register("email")}
              readOnly
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <input
              required
              className="p-3 m-1 border-2 rounded-md w-full md:w-auto"
              placeholder="Toy Name"
              {...register("name")}
            />
            <input
              required
              className="p-3 m-1 border-2 rounded-md w-full md:w-auto"
              placeholder="Picture URL"
              {...register("image")}
            />
          </div>
          <br />
          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="number"
              required
              className="p-3 m-1 border-2 rounded-md w-full md:w-auto"
              placeholder="Price"
              {...register("price")}
            />
            <input
              type="number"
              required
              className="p-3 m-1 border-2 rounded-md w-full md:w-auto"
              placeholder="Available Seats"
              {...register("available_seats")}
            />
          </div>
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="text-center">
            <input
              className="w-4/12 btn btn-primary btn-sm text-white Permanent-text rounded-lg   bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
