import React, {FC} from 'react';
import './MeCard.css';
import IconButton from "../../../../components/IconButton/IconButton";

interface ContactInterface {
    href: string
    icon: string
    color: string
}

interface MeCardProps {
    title: string
    text: string
    contacts: ContactInterface[]
}

const MeCard: FC<MeCardProps> = ({ title, text, contacts }) => {
    return (
        <div className="MeCard--container">
            <div className="MeCard--memoji">
                <img src={require('../../../../assets/vectors/memoji.svg').default} alt="" />
            </div>

            <div className="MeCard--description">
                <h1>{title}</h1>
                <span>{text}</span>
            </div>

            <div className='MeCard--buttons'>
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.href}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <IconButton
                            icon={contact.icon}
                            color={contact.color}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MeCard;