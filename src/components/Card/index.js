import React from 'react'
import PropTypes from "prop-types";
import './styles.css';

const Card = props => {

    const getBackgroundColor = item => {
        if (item && item.matched) return { 'backgroundColor': 'yellow' }
        if (item && item.selected) return { 'backgroundColor': '#a2a6a7' }
        return { 'backgroundColor': 'transparent' }
    }

    const clickItem = () => {
        props.onClick(props.item)
    }

    const getStyle = () => {
        const container = 'card-container'
        const isRotate = props.item.selected ? ' rotate' : ''
        return `${container}${isRotate}`
    }

    return (
        <div className={getStyle()} onClick={clickItem}>
            <div className="card card__back" style={getBackgroundColor(props.item)}>
                <div className="image-container">
                    <img className="image" src={props.item.image} alt='pokemon' />
                </div>
                <div className="name-container">
                    <span className="name">{props.item.name}</span>
                </div>
            </div>
            <div className="card card__front">
                <div className="image-container">
                    <img className="image" src={`https://nextdex.vercel.app/pokedex.png`} alt='pokeball' />
                </div>
            </div>
        </div>
    )
}


Card.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Card
