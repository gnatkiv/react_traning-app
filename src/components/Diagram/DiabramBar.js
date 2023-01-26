

import './DiagramBar.css';

const DiabramBar = (props) => {

    let barFillHeight;

/*     if(props.maxValue > 0) {
       barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
    } */

    barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';


    return (
        <div className="diagram-bar">
            <div className="diagram-bar__inner">
                <div style={{height: barFillHeight}} className="diagram-bar__fill"></div>
            </div>
            <div className="diagram-bar__label">{props.label}</div>
        </div>
    )
}

export default DiabramBar;