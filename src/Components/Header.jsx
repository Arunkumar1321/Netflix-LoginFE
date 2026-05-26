import logo from "../asset/N_logo.png";
import SearchIcon from "../asset/search.png";
import profile from "../asset/pp.png";
import Cast from "../asset/cast_icon.png";
const Header = () => {
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div  className="flex items-center justify-between bg-black sticky top-0 z-50 pb-4">
     <div className="w-40 h-14 mt-4">
        <img src={logo} alt="Netflix Logo" className="w-full h-full object-contain" />
     </div>
     
        <ul className="hidden md:flex gap-8 text-white font-netflix text-lg mt-4 p-2 cursor-pointer">
            <li className="hover:text-gray-400" onClick={() => handleScroll("tvshows")}>Tv Shows</li>
            <li className="hover:text-gray-400" onClick={() => handleScroll("movies")}>Movies</li>
            <li className="hover:text-gray-400" onClick={() => handleScroll("recent")}>Recently Added</li>
            <li className="hover:text-gray-400" onClick={()=>{handleScroll("mylist")}}>My List</li>
           
        </ul>
        <div className="flex justify-center items-center w-[350px] border border-zinc-700 p-2 rounded-2xl md:hidden">
        <input type="text" placeholder="Search for any movies,TV shows" className="bg-transparent w-full  text-red-500 pl-2 focus:outline-none "></input>
        <li><img src={SearchIcon} alt="Search" className="w-6 h-6 mb-1 " /></li>
        </div>
        <ul className="flex ml-3 gap-8 p-2">
            <li><img src={Cast} alt="Cast" className="w-8 h-8" /></li>
          
            <li><img src={profile} alt="Profile" className="w-8 h-8 mr-4" /></li>
        </ul>
   

     </div>
    );
};

export default Header;


