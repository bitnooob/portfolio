import React, {FC, JSX} from 'react';
import './AboutCard.css';
import Tag from "../../../../components/Tag/Tag";

interface AboutCardProps {
    skills: string[]
    text: string
    button: JSX.Element
}

const AboutCard: FC<AboutCardProps> = ({ skills, text, button }) => {
    return (
        <div className="AboutCard--container">
            <div className="AboutCard--content">
                <h2>Обо мне</h2>

                <div className='AboutCard--skills'>
                    {skills.map((skill, index) => (
                        <Tag key={index}>{skill}</Tag>
                    ))}
                </div>

                <p>{text}</p>

                {button}
            </div>
        </div>
    );
};

export default AboutCard;