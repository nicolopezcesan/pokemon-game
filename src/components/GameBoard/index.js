import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardList from './../CardList';
import { generateUniqueId, getPokemonImage } from './../../utils';

const GameBoard = props => {

    const [boardItems, setBoardItems] = useState([])
    const [isBlockBoard, setIsBlockBoard] = useState(false)

    useEffect(() => {
        const structureItems = () => {
            const duplicateElements = [...props.items, ...props.items]
            const boardItems = duplicateElements.map((i) => structureItem(i))
            shuffleCards(boardItems)
            setBoardItems(boardItems)
        }
        structureItems();
    }, [props.items]);

    useEffect(() => {
        const verifyStateBoard = () => {
            const selectedCards = getSelectedCards()
            if (selectedCards.length < 2) return null
            const isMatchCards = verifyMatch(selectedCards)
            isMatchCards ? setMatchCards(selectedCards) : unselectCards(selectedCards)
        }
        verifyStateBoard()
    }, [boardItems])


    const verifyMatch = selectedCards => {
        const isMatchCards = verifyMatchCards(selectedCards)
        return isMatchCards
    }

    const getSelectedCards = () => {
        return boardItems.filter(e => e.selected && !e.matched)
    }

    const structureItem = item => {
        return {
            key: generateUniqueId(),
            image: getPokemonImage(item),
            name: item.name,
            selected: false,
            matched: false
        }
    }

    const selectItem = item => {
        const canSelect = canSelectCard(item)
        if (canSelect) {
            setSelectItem(item)
        }
    }

    const canSelectCard = item => {
        if (isBlockBoard) return false
        if (cardIsMatched(item) || cardIsSelected(item)) return false
        return true;
    }

    const cardIsMatched = item => {
        return item.matched
    }

    const cardIsSelected = item => {
        return item.selected
    }

    const verifyMatchCards = selectedCards => {
        const isMatch = (selectedCards[0].name === selectedCards[1].name)
        return isMatch
    }

    const unselectCards = selectedCards => {
        setTimeout(() => {
            const updateBoardItems = boardItems.map((bi) => {
                if (selectedCards.some(i => i.key === bi.key)) {
                    return { ...bi, selected: false }
                }
                return bi
            })
            setBoardItems(updateBoardItems);
        }, 1000);
    }

    const setSelectItem = async item => {
        const updateBoardItems = boardItems.map((bi) => {
            if (bi.key !== item.key) return bi
            return { ...item, selected: !item.selected }
        })
        setBoardItems(updateBoardItems);
    }

    const setMatchCards = items => {
        const updateBoardItems = boardItems.map((bi) => {
            if (items.some(i => i.key === bi.key)) {
                return { ...bi, matched: true }
            }
            return bi
        })
        setBoardItems(updateBoardItems);
    }

    const shuffleCards = boardItems => {
        return boardItems.sort(() => Math.random() - 0.5)
    }

    return (
        <CardList items={boardItems} actionItem={selectItem} />
    )
}

GameBoard.propTypes = {
    items: PropTypes.array.isRequired,
}

export default GameBoard
