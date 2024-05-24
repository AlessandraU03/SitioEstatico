import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import './MovieCard.css'

function MovieCard(props){
  return(
    <div>
    <div id="cards_header">
        <div>
            <Title title={props.title}></Title>
        </div>

        <div>
            <Heading heading={props.heading}></Heading>
        </div>
        </div>

        <div id="cards_movie">
      <Image image={props.image}></Image>
      <Text text={props.text}></Text>
      <Subtitle subtitle={props.subtitle}></Subtitle>
    </div>
   
    </div>
    
  )
}

export default MovieCard;