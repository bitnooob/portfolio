import React, {FC} from 'react';
import './IconButton.css';

interface IconButtonProps {
    icon: string
    color: string
}

const IconButton: FC<IconButtonProps> = ({ icon, color }) => {
    return (
        <button
            className='IconButton--container Button'
            style={{ background: color }}
        >
            <img src={icon} alt="" />
        </button>
    );
};

export default IconButton;