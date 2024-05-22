import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Description from "../atoms/Description";
import Heading from "../atoms/Heading";
import './SoundtrackCard.css'

function SoundtrackCard(props){
  return(
    <div>
        <div id="card_soundtrack">
      <Image image={props.image}></Image>
      <Title title={props.title}></Title>
    </div>
    </div>
    
  )
}

export default SoundtrackCard;