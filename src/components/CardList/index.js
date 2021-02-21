import React from 'react'
import Card from './../Card';
import PropTypes from "prop-types";

const CardList = props => {

    const foo = item => {
        console.log(item.name)
    }

    return (
        <div>
            {props.items.map((item, key) => (
                <Card
                    key={key}
                    item={item}
                    onClick={foo}
                />
            ))}
        </div>
    )
}

CardList.propTypes = {
    items: PropTypes.array.isRequired,
    // onClick: PropTypes.func.isRequired,
};


export default CardList
