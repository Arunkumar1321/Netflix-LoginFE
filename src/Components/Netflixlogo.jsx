import Logo from "../asset/Netflix_logo.png"
const Netflixlogo = ()=>{
    return(
        <div  className="w-full h-[500px] absolute z-8  top-[20%]">
        <img src={Logo} alt="Netflix Logo" className="w-full h-full"/>
        </div>
    )
}
export default Netflixlogo;