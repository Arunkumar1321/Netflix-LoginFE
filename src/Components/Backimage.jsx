import bg from "../asset/Netflix_bg.jpg"
const Backimage = () => {
    return(
        <div className="w-full h-[1000px] fixed -z-10">
            <img src={bg} alt="netflix background" className="w-full h-full object-cover"></img>
        </div>
    )
}
export default Backimage;