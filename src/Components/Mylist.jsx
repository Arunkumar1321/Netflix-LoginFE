
import M4 from "../asset/M4.jpg";
import M8 from "../asset/M8.jpg";
import M9 from "../asset/M9.jpg";
import R2 from "../asset/R2.jpg";
import R3 from "../asset/R3.jpg";
import R5 from "../asset/R5.jpg";
import T1 from "../asset/T1.jpg";
import T4 from "../asset/T4.jpg";

const Mylist = () => {
    return(
         <div id="mylist" className="md:m-5">
                        <h1 className="text-3xl font-bold text-white ">My List</h1>
                    
                    <div>
                        <div className="flex overflow-x-scroll  gap-3 cursor-pointer" style={{scrollbarWidth:"none",msOverflowStyle:"none"}} >
                            <img src={M4} alt="Movie 1" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                            <img src={R2} alt="Movie 2" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0 "/>
                            <img src={T1} alt="Movie 3" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                            <img src={R5} alt="Movie 5" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                            <img src={M9} alt="Movie 6" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                            <img src={R3} alt="Movie 7" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                            <img src={M8} alt="Movie 8" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                            <img src={T4} alt="Movie 9" className="w-48 h-64 rounded-lg object-cover m-2 shrink-0"/>
                        </div>
            
                    </div>
                    
                    </div>
    )
}
export default Mylist;