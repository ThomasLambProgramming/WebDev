import './ChartBar.css';

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                {/* Here style wants a javascript object to then fill in css styles, works differently in react and is a bit weird
                but we can set the css height of the style dynamically this way, we can also have more than just the height set but a whole
                css class at once */}
                <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
}

export default ChartBar;