import React from "react";
import Subtitle from "../atoms/Subtitle";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import './CastCard.css';


function CastCard(props){
    return(
        <div id="card_cast">
            <div id="cards_movie_psj">
            <Subtitle subtitle={props.subtitle}></Subtitle>
                <Image image={props.image}></Image>
                <Text text={props.text}></Text>
            </div>
        </div>
    );
}

export default CastCard;
