import React, {FC} from 'react';
import './Button.css';

interface ButtonProps {
    children: string
}

const Button: FC<ButtonProps> = ({ children }) => {
    return (
        <button className="Button--container Button">
            {children}
        </button>
    );
};

export default Button;