import React, {FC} from 'react';
import './ProjectCell.css';

interface ProjectCellProps {
    image: string
    date: string
    title: string
    description: string
    auditory: string
    stack: string
    link?: string | undefined
}

const ProjectCell: FC<ProjectCellProps> = ({ image, date, title, description, auditory, stack, link }) => {
    return (
        <div className="ProjectCell--container">
            <div className="ProjectCell--content">
                <div className="ProjectCell--left">
                    <img src={image} alt=""/>
                </div>

                <div className="ProjectCell--right">
                    <p className="ProjectCell--date">{date}</p>
                    {link ? (
                        <a href={link} target="_blank" rel="noreferrer">
                            <h2>{title}</h2>
                        </a>
                    ) : (
                        <h2>{title}</h2>
                    )}

                    <div className="ProjectCell--right--texts">
                        <p><b>Описание:</b> {description}</p>
                        <p><b>Аудитория:</b> {auditory}</p>
                        <p><b>Стек:</b> {stack}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCell;