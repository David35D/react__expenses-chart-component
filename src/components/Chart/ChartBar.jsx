import { useState } from "react";

import "./ChartBar.css";

const ChartBar = ({label, amount}) => {
    const [isHovering, setIsHovering] = useState(false);

    const mouseEnterHandler = () => {
        setIsHovering(true);
    }

    const mouseLeaveHandler = () => {
        setIsHovering(false);
    }

    let barFill = `chart-bar__fill`;
    let barFillHeight = '0%';
    let infoContent = null;

    if (amount > 0) {
        barFillHeight = amount * 1.62 + '%';
    }

    if (label === 'wed') {
        barFill += ` today`;
    }

    if (isHovering) {
        infoContent = <div className="chart-bar__info">${amount}</div>;
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {infoContent}
                <div 
                    className={barFill}
                    style={{
                        height: barFillHeight
                    }}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                ></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;