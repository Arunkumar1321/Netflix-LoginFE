import T1 from "../asset/T1.jpg";
import T2 from "../asset/T2.jpg";
import T3 from "../asset/T3.jpg";
import T4 from "../asset/T4.jpg";
import T5 from "../asset/T5.jpg";
import T6 from "../asset/T6.jpg";
import T7 from "../asset/T7.jpg";
import T8 from "../asset/T8.jpg";
import T9 from "../asset/T9.jpg";
const Tvshows = ()=>{
    return(
        <div id="tvshows" className="m-5">
            <h1 className="text-3xl font-bold text-white ">Tv Shows</h1>
        
        <div>
            <div className="flex overflow-x-scroll  gap-3 cursor-pointer" style={{scrollbarWidth:"none",msOverflowStyle:"none"}}>
                <img src={T1} alt="Tv Show 1" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                <img src={T2} alt="Tv Show 2" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                <img src={T3} alt="Tv Show 3" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                <img src={T4} alt="Tv Show 4" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                <img src={T5} alt="Tv Show 5" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                <img src={T6} alt="Tv Show 6" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                <img src={T7} alt="Tv Show 7" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                <img src={T8} alt="Tv Show 8" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                <img src={T9} alt="Tv Show 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
            </div>

        </div>
        
        </div>
    )
}
export default Tvshows;