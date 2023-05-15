import { FC } from "react";
import Modal from "../Modal";

const NotUser: FC = () => {
  return (
    <Modal
      modalText="You must be logged in to use this feature, auto navigate to Sign In Page after"
      navigatePage="/customeraccount"
      modalBtn="Login now"
    />
  );
};

export default NotUser;
