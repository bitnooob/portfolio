import React, {FC, useEffect, useState} from 'react';
import './Projects.css';
import ProjectCell from "./components/ProjectCell/ProjectCell";
import PanelAnimationWrapper from "../../components/PanelAnimationWrapper/PanelAnimationWrapper";

interface ProjectItemInterface {
    id: string
    date: string
    title: string
    description: string
    auditory: string
    stack: string
    link?: string | undefined
}

const Projects: FC = () => {

    const [list, setList] = useState<ProjectItemInterface[] | null>(null);

    useEffect(() => {
        loadList().then();
    }, []);

    const loadList = async () => {
        const data = await import('./list.json');
        setList(data.default);
    }

    return (
        <PanelAnimationWrapper>
            <div id="Projects" className="Projects--panel">
                <div className="Projects--panel">
                    <h1>Проекты</h1>

                    <div className="Projects--list">
                        {list && list.map((project: ProjectItemInterface, index: number) => (
                            <ProjectCell
                                key={index}
                                image={require(`../../assets/images/${project.id}.jpg`)}
                                date={project.date}
                                title={project.title}
                                description={project.description}
                                auditory={project.auditory}
                                stack={project.stack}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PanelAnimationWrapper>
    );
};

export default Projects;