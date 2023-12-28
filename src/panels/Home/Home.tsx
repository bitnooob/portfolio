import React, {FC, useEffect} from 'react';
import MeCard from "./components/MeCard/MeCard";
import AboutCard from "./components/AboutCard/AboutCard";
import Button from "../../components/Button/Button";
import './Home.css'
import {Link} from "react-router-dom";
import PanelAnimationWrapper from "../../components/PanelAnimationWrapper/PanelAnimationWrapper";

const CONTACTS = [
    {
        href: "https://t.me/bitnoob",
        icon: require("../../assets/vectors/telegram.svg").default,
        color: "#30A7DA",
    },
    {
        href: "mailto:artemrzheuczky@gmail.com",
        icon: require("../../assets/vectors/mail.svg").default,
        color: "#FF9E00",
    },
    {
        href: "https://github.com/bitnooob",
        icon: require("../../assets/vectors/github.svg").default,
        color: "#fff",
    },
];

const Home: FC = () => {
    return (
        <PanelAnimationWrapper>
            <div id="Home" className="Home--panel">
                <div className="Home--container">
                    <div className="Home--content">
                        <MeCard
                            title="Артём"
                            text="Веб-разработчик"
                            contacts={CONTACTS}
                        />

                        <AboutCard
                            skills={['JavaScript', 'NodeJS', 'React', 'Redux', 'HTML', 'CSS', 'Fastify', 'Git', 'MySQL', 'SQL', 'Linux']}
                            text='Разработчик с более чем 4 годами опыта в сфере веб-разработки. Преимущественно разрабатываю веб-приложения на JavaScript, с использованием React. Успешно реализовал десятки реальных проектов.'
                            button={
                                <Link to='/projects'><Button >Мои проекты</Button></Link>
                            }
                        />
                    </div>
                </div>
            </div>
        </PanelAnimationWrapper>
    );
};

export default Home;