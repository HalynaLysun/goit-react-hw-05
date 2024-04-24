import { Hearts } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <p>Please wait for the images</p>
      <Hearts
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
}
