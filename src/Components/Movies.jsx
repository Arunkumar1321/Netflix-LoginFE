import M1 from "../asset/M1.jpg";
import M2 from "../asset/M2.jpg";
import M3 from "../asset/M3.jpg";
import M4 from "../asset/M4.jpg";
import M5 from "../asset/M5.jpg";
import M6 from "../asset/T6.jpg";
import M7 from "../asset/M7.jpg";
import M8 from "../asset/M8.jpg";
import M9 from "../asset/M9.jpg";
const Movies = ()=>{

    return(  <div id="movies" className="m-5">
                <h1 className="text-3xl font-bold text-white ">Movies</h1>
            
            <div>
                <div className="flex overflow-x-scroll  gap-3 cursor-pointer" style={{scrollbarWidth:"none",msOverflowStyle:"none"}}>
                    <img src={M1} alt="Movie 1" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                    <img src={M2} alt="Movie 2" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                    <img src={M3} alt="Movie 3" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                    <img src={M4} alt="Movie 4" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                    <img src={M5} alt="Movie 5" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                    <img src={M9} alt="Movie 6" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                    <img src={M7} alt="Movie 7" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                    <img src={M8} alt="Movie 8" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                    <img src={M6} alt="Movie 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                </div>
    
            </div>
            
            </div>

    )
}
export default Movies;