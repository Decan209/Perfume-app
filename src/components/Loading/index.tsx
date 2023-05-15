import Overflay from "../overflay/Overflay";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 flex justify-center items-center">
      <Overflay />
      <div className="loading-spinner z-20"></div>
    </div>
  );
};

export default Loading;
