import Logo from "../asset/Netflix_logo.png"
const Netflixlogo = ()=>{
    return(
        <div  className="absolute z-8  top-[20%]  w-full h-[500px] ">
        <img src={Logo} alt="Netflix Logo" className="w-full h-full object-cover"/>
        </div>
    )
}
export default Netflixlogo;