import MovieCard from "../molecules/MovieCard";
import moviesData from "../../data/moviesData";
import './SectionMovies.css'

function SectionMovies(){
    return(
             <div id="cards_section_movie">
            {
            moviesData.movies.map(movies =>
                <MovieCard heading={movies.heading} subtitle={movies.subtitle} image={movies.image} description={movies.description}></MovieCard>
            )
        }
    </div>
        
    )
}

export default SectionMovies;