import React from 'react'
import PropTypes from "prop-types";
import './styles.css';

const Card = props => {

    const getBackgroundColor = item => {
        if (item && item.matched) return { 'backgroundColor': 'yellow' }
        if (item && item.selected) return { 'backgroundColor': 'aquamarine' }
        return { 'backgroundColor': 'transparent' }
    }

    const clickItem = () => {
        props.onClick(props.item)
    }

    return (
        <div className="card" style={getBackgroundColor(props.item)} onClick={clickItem}>
            <div className="image-container">
                <img className="image" src={props.item.image} alt='pokemon' />
            </div>
            <div>
                <span className="name">{props.item.name}</span>
            </div>
        </div>
    )
}


Card.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Card
