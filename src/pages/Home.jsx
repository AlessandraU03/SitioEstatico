import SectionMovies from '../components/organisms/SectionMovies';
import './Home.css';
import SectionSoundtrack from '../components/organisms/SectionSoundtrack';
import SectionColors from '../components/organisms/SectionColors';

function Home() {
  return (
    <div id="cards_home">
      <div>
      <SectionMovies></SectionMovies>
      </div>

      <div>
      <SectionColors></SectionColors>
      </div>

      <div>
      <SectionSoundtrack></SectionSoundtrack>
      </div>
    </div>
    
  )
}

export default Home;
