import { FC } from "react";

interface PropOverflay {
    onClose?: any
}

const Overflay: FC<PropOverflay> = ({ onClose }) => {

    return (
        <div 
            style={{
                backgroundColor: "rgba(0, 0, 0, .5)",
                zIndex: "1"
            }}
            className="fixed top-0 right-0 bottom-0 left-0"
            onClick={ onClose }
        >

        </div>
    )
}

export default Overflay;