import React from 'react'
import PropTypes from "prop-types";

const Card = props => {
    const styles = {
        'border': '1px solid',
        'padding': '10px',
        'margin': '10px 10px',
        'display': 'inline-block'
    }

    const clickItem = () => {
        props.onClick(props.item)
    }

    return (
        <div style={styles} onClick={clickItem}>
            {props.item.name}
        </div>
    )
}


Card.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Card
