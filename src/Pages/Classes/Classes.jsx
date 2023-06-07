import useClasses from "../../hooks/useClasses";

export const Classes = () => {
  const [classes, ] = useClasses();
    console.log(classes);
  return <div>Classes</div>;
};
