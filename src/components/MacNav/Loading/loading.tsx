import { ThreeCircles } from "react-loader-spinner";

export const LoadingAnimation = () => {
  return (
    <ThreeCircles
      visible={true}
      height="30"
      width="30"
      color="#e8fef9"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
