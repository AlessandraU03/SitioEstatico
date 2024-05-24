import MovieCard from "../molecules/MovieCard";
import moviesData from "../../data/moviesData";
import CastCard from "../molecules/CastCard";
import './SectionMovies.css'

function SectionMovies(){
    return(
             <div id="card_section_movie">
            {
            moviesData.movies.map(movies =>
                <MovieCard title={movies.title} heading={movies.heading} image={movies.image} text={movies.text} 
                ></MovieCard>
                
            )
        }
        {moviesData.cast.map(cast =>
            <CastCard subtitle={cast.subtitle} image={cast.image} text={cast.text}></CastCard>
        )}
    </div>
        
    )
}

export default SectionMovies;