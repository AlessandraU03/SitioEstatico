import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Description from "../atoms/Description";
import Heading from "../atoms/Heading";
import './ColorsCard.css'

function ColorsCard(props){
  return(
    <div>
    <div id="cards_header_color">
        <div>
            <Heading heading={props.heading}></Heading>
        </div>

        <div>
            <Subtitle subtitle={props.subtitle}></Subtitle>
        </div>
        </div>

        <div id="cards_colors">
      <Image image={props.image}></Image>
      <Title title={props.title}></Title>
      <Description description={props.description}></Description>
    </div>

   
    </div>
    
  )
}

export default ColorsCard;