import Spider from "../asset/Spidey.png";
import Logo from "../asset/N_logo.png";
import Poverlay from "./PO";
const Poster = ()=>{
    return(
        <div>
          
        <div className="text-white mt-5 relative w-full h-[700px]">
            <Poverlay />
           <img src={Spider} alt="spiderman" className="w-full h-[700px] rounded-lg object-cover"/>
           <div className="absolute top-1/2  left-4  w-fit h-fit z-20">
              <div className="flex items-center gap-2">
             <img src={Logo} alt="Netflix Logo" className=" w-12 h-auto" />
             <h1 className="text-2xl font-bold font-netflix tracking-widest mt-2">FILM</h1>
             </div>
             <h1 className="text-3xl font-bold mt-2 font-netflix">Amazing Spider-Man 2</h1>
             <p className="text-lg font-medium mt-2 w-[400px]">After being bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spiderman</p>
             <div>
                <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 font-medium hover:bg-red-700 transition duration-300">Play</button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded mt-4 ml-2 font-medium hover:bg-gray-700 transition duration-300">More Info</button> 
             </div>
           </div>
         
        </div>
        </div>
    )
}
export default Poster;