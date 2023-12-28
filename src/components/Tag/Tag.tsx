import React, {FC} from 'react';
import './Tag.css';

interface TagProps {
    children: string
}

const Tag: FC<TagProps> = ({ children }) => {
    return (
        <div className="Tag--container Tag">
            {children}
        </div>
    );
};

export default Tag;