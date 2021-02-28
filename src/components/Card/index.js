import React from 'react'
import PropTypes from "prop-types";

const Card = props => {

    const getStyles = () => {
        return {
            'border': '1px solid',
            'padding': '10px',
            'margin': '10px 10px',
            'display': 'inline-block',
            'cursor': 'pointer',
            'backgroundColor': getBackgroundColor(props.item)
        }
    }

    const getBackgroundColor = item => {
        if (item && item.matched) return 'yellow'
        if (item && item.selected) return 'aquamarine'
        return 'transparent'
    }

    const clickItem = () => {
        // Card
        // debugger
        props.onClick(props.item)
    }

    return (
        <div style={getStyles()} onClick={clickItem}>
            {props.item.name}
        </div>
    )
}


Card.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Card
