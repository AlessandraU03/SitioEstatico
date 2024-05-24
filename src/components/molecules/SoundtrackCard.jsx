import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import './SoundtrackCard.css';

function SoundtrackCard(props) {
  return (
    <div id="card_soundtrack">
      <Image image={props.image} />
        <Heading heading={props.heading} />
        <div className="songs">
          {props.songs.map((song) => (
            <div className="song-item">
              {song.title} {song.duration}
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default SoundtrackCard;
