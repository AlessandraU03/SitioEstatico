import Image from "../atoms/Image";
import Subtitle from "../atoms/Subtitle";
import Description from "../atoms/Description";
import Heading from "../atoms/Heading";
import './MovieCard.css'

function MovieCard(props){
  return(
    <div>
    <div id="cards_header">
        <div>
            <Heading heading={props.heading}></Heading>
        </div>

        <div>
            <Subtitle subtitle={props.subtitle}></Subtitle>
        </div>
        </div>

        <div id="cards_movie">
      <Image image={props.image}></Image>
      <Description description={props.description}></Description>
    </div>

   
    </div>
    
  )
}

export default MovieCard;