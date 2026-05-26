import bg from "../asset/Netflix_bg.jpg"
const Backimage = () => {
    return(
        <div className="w-full fixed -z-10">
            <img src={bg} alt="netflix background" className="w-full object-cover"></img>
        </div>
    )
}
export default Backimage;