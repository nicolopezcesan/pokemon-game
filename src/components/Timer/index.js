import React from 'react';
import PropTypes from 'prop-types';
import { useStopwatch } from 'react-timer-hook';

const Timer = props => {
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause
    } = useStopwatch({ autoStart: false });

    const formatSeconds = seconds => {
        return seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
    }

    const getTime = (minute, second) => {
        const seconds = formatSeconds(second)
        return (
            <div style={{ fontSize: '30px' }}>
                <span>{minute}</span>:<span>{seconds}</span>
            </div>
        )
    }

    const startTime = () => {
        start()
        props.start()
    }

    const endTime = () => {
        pause()
        const aa = getTime()
        debugger
        props.end()
    }

    const sendTime = () => {
        
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {!isRunning && <button onClick={startTime}>Jugar!</button>}
            {isRunning && getTime(minutes, seconds)}

            {props.stop && endTime}

            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
            {/* <button onClick={start}>Start</button> */}
            {/* <button onClick={pause}>Pause</button> */}
            {/* <button onClick={reset}>Reset</button> */}
        </div>
    );
}

Timer.propTypes = {
    start: PropTypes.func.isRequired,
    stop: PropTypes.bool.isRequired,
    getTime: PropTypes.func
}

export default Timer