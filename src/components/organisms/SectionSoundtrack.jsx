import SoundtrackCard from "../molecules/SoundtrackCard";
import moviesData from "../../data/moviesData";
import './SectionColors.css'


function SectionSoundtrack(){
    return(
        <div id="card_section_soundtrack">
            {
            moviesData.soundtrack.map(soundtrack =>
                <   SoundtrackCard image={soundtrack.image} title={soundtrack.title}></SoundtrackCard>
            )
        }
        {
            moviesData.tracklist.map(tracklist =>
                <   SoundtrackCard description={tracklist.description}></SoundtrackCard>
            )
        }
        </div>


    )
}

export default SectionSoundtrack;