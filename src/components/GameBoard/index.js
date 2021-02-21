import React from 'react';
import PropTypes from 'prop-types';
import CardList from './../CardList';

const GameBoard = props => {

    const items = [...props.items, ...props.items]

    return (
        props.items.length > 0 && <CardList items={items} />
    )
}

GameBoard.propTypes = {
    items: PropTypes.array.isRequired,
}

export default GameBoard
