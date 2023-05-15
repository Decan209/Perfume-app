import { FC } from "react";

import Modal from "../../components/Modal";

const OrderSuccess: FC = () => {

    return (
        <Modal
            modalText="Order Success, auto navigate to Home Page after "
            navigatePage="/"
            modalBtn="Navigate Now"
        />
    );
};

export default OrderSuccess;
