import React from "react";
import {padText} from '../helpers/helpers'

function card(props){
    return (
        <div className="Cards-list-item">
            <img className="Cards-list-img"
                 alt={`${props.card.name}.png`}
                 src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padText(props.card.id.toString(), 3)}.png`} />
            <div className="Cards-list-item-name">{props.card.name} | {props.card.base_experience}</div>
            <div className="Cards-list-item-type">{props.card.type}</div>
        </div>
    )
}

export default card;