import Image from "../atoms/Image";
import Subtitle from "../atoms/Subtitle";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import './ColorsCard.css'

function ColorsCard(props){
  return(
    <div>
    <div id="cards_header_color">
        <div>
            <Heading heading={props.heading}></Heading>
        </div>
        </div>

        <div id="cards_colors">
      <Image image={props.image}></Image>
      <Subtitle subtitle={props.subtitle}></Subtitle>
      <Text text={props.text}></Text>
    </div>

   
    </div>
    
  )
}

export default ColorsCard;