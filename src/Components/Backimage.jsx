import bg from "../asset/Netflix_bg.jpg"
const Backimage = () => {
    return( <div className="md:w-full h-full relative -z-20 overflow-hidden">
            <img src={bg} alt="Netflix Background" className="w-full h-full object-cover" />
        </div>)
}
export default Backimage;