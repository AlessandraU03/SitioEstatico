import ColorsCard from "../molecules/ColorsCard";
import moviesData from "../../data/moviesData";
import './SectionColors.css'


function SectionColors(){
    return(
        <div id="cards_section_colors">
            {
            moviesData.sectionColors.map(sectionColors =>
                <ColorsCard subtitle={sectionColors.subtitle} title={sectionColors.title} image={sectionColors.image} description={sectionColors.description}></ColorsCard>
            )
        }
        </div>

    )
}

export default SectionColors;