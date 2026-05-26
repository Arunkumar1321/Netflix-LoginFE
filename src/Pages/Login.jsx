import Loginnew from "../Components/Loginnew";
import Netflixlogo from "../Components/Netflixlogo";
import Overlay from "../Components/Overlay";
import Backimage from "../Components/Backimage";
const Login = () => {
    return(
        <div className="w-full h-full overflow-hidden">
        <Netflixlogo/>
        <Overlay />
        <Backimage />
        <Loginnew/>
       
        </div>
    )   
}
export default Login;