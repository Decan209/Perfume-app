import { FC } from 'react';
import Modal from '../../../components/Modal';

const NotAdmin: FC = () => {

    return (
        <Modal
            modalText='Only Admin use this feature, auto navigate to Home Page after'
            navigatePage='/'
            modalBtn='Navigate Home!'
        />
    )
}

export default NotAdmin;