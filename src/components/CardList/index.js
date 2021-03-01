import React from 'react'
import Card from './../Card';
import PropTypes from "prop-types";
import './styles.css';

const CardList = props => {

    const clickItem = item => {
        props.actionItem(item)
    }

    return (
        <div className="board">
            {
                props.items.length > 0
                && props.items.map((item, key) => (
                    <Card key={key} item={item} onClick={clickItem} />
                ))
            }
        </div>
    )
}

CardList.propTypes = {
    items: PropTypes.array.isRequired,
    actionItem: PropTypes.func.isRequired,
};


export default CardList
