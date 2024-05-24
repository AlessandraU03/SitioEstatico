import ColorsCard from "../molecules/ColorsCard";
import moviesData from "../../data/moviesData";
import './SectionColors.css'


function SectionColors(){
    return(
        <div id="cards_section_colors">
            {
            moviesData.sectionColors.map(sectionColors =>
                <ColorsCard heading={sectionColors.heading} subtitle={sectionColors.subtitle} image={sectionColors.image} text={sectionColors.text}></ColorsCard>
            )
        }
        </div>

    )
}

export default SectionColors;