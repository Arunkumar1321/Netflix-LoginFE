import M1 from "../asset/M1.jpg";
import M2 from "../asset/M2.jpg";
import M3 from "../asset/M3.jpg";
import M4 from "../asset/M4.jpg";
import T1 from "../asset/T1.jpg";
import T2 from "../asset/T2.jpg";
import T3 from "../asset/T3.jpg";
import T4 from "../asset/T4.jpg";
import R1 from "../asset/R1.jpg";
import R2 from "../asset/R2.jpg";
import R3 from "../asset/R3.jpg";
import R4 from "../asset/R4.jpg";
import R5 from "../asset/R5.jpg";

const Recent = () => {
    return(<div id="recent" className="md:m-5">
                    <h1 className="text-3xl font-bold text-white ">Recently Added</h1>
                
                <div>
                    <div className="flex overflow-x-scroll  gap-3 cursor-pointer" style={{scrollbarWidth:"none",msOverflowStyle:"none"}}>
                        <img src={R5} alt="Movie 1" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                        <img src={T1} alt="Movie 2" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                        <img src={R1} alt="Movie 3" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={M2} alt="Movie 4" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={R3} alt="Movie 5" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={M4} alt="Movie 6" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={M1} alt="Movie 7" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={T2} alt="Movie 8" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={M3} alt="Movie 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={R4} alt="Movie 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        <img src={T3} alt="Movie 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                         <img src={R2} alt="Movie 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                         <img src={T4} alt="Movie 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                    </div>
        
                </div>
                
                </div>
    )
}
export default Recent;  