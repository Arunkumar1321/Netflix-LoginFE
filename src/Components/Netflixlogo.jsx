import Logo from "../asset/Netflix_logo.png"
const Netflixlogo = ()=>{
    return(
        <div  className="md:w-52 h-28 absolute top-4 left-4 z-50">
        <img src={Logo} alt="Netflix Logo" className="w-full h-full"/>
        </div>
    )
}
export default Netflixlogo;