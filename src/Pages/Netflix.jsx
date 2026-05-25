import Desc from "../Components/Desc";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Movies from "../Components/Movies";
import Mylist from "../Components/Mylist";
import Poster from "../Components/Poster";
import Recent from "../Components/Recent";
import Tvshows from "../Components/Tvshow";

const Netflix = () => {
    return(
        <div className="w-full h-full bg-black">
        <Header/>
        <Poster/>
        <Tvshows/>
        <Movies/>
        <Recent/>
        <Mylist/>
        <Desc/>
        <Footer/>
        </div>
    )
}
export default Netflix;