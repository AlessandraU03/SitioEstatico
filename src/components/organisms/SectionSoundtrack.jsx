import React from 'react';
import SoundtrackCard from "../molecules/SoundtrackCard";
import moviesData from "../../data/moviesData";
import './SectionSoundtrack.css';

function SectionSoundtrack() {
  return (
    <div id="card_section_soundtrack">
      {moviesData.soundtracks.map((soundtrack, index) => (
        <SoundtrackCard 
          image={soundtrack.image} 
          heading={soundtrack.heading} 
          songs={soundtrack.songs}
        />
      ))}
    </div>
  );
}

export default SectionSoundtrack;
