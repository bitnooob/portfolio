import React, {FC} from 'react';
import {animated, useSpring} from "@react-spring/web";

interface PanelAnimationWrapperProps {
    children: React.ReactNode
}

const PanelAnimationWrapper: FC<PanelAnimationWrapperProps> = ({ children }) => {

    const [animationStyle] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
        }),
        []
    );

    return (
        <animated.div style={animationStyle}>
            {children}
        </animated.div>
    );

};

export default PanelAnimationWrapper;