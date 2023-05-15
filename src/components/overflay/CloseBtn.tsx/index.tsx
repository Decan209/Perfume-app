import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface PropCloseBtn {
    onClose: any
}

const CloseBtn: FC<PropCloseBtn> = ( { onClose } ) => {
  return (
    <div
      className="mr-4 absolute right-0 cursor-pointer flex justify-center items-center"
      style={{
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        backgroundColor: "#f4f4f4",
        border: "0",
      }}
      onClick={onClose}
    >
      <AiOutlineClose size={20} />
    </div>
  );
};

export default CloseBtn;
