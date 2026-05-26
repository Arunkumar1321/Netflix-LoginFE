import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Backimage from "../Components/Backimage";
import Netflixlogo from "../Components/Netflixlogo";
import Overlay from "../Components/Overlay";
import axios from "axios";
const Sign = () => {
     const [user,setuser]=useState("")
    const [password,setpassword]=useState("")
    const [cpassword,setcpassword]=useState("")
    const navigate=useNavigate();
    const handleSign= async()=>{
        if(!user || !password || !cpassword){
            alert("Please fill all the fields")
            return
        }
        if(password !== cpassword){
            alert("Passwords do not match")
            return
        }
            const emailregex=/^\w+@gmail\.com$/
            const phoneregex=/^\d{10}$/
            if(!emailregex.test(user) && !phoneregex.test(user)){
                alert("Please enter a valid email or phone number")
                return;
            }
            try{
                const data = await axios.post("https://netflix-loginbe-1.onrender.com/sign", {
                    user,
                    password
                })
                console.log("data from server",data)
                if(data.data===true){
                    alert("Sign up successful")
                    navigate("/")
                } else {
                    alert("Sign up failed. User already exists.")
                    navigate("/")
                }
            }
            catch(err){
                console.log("error in sign up",err)
            }

    }
   
    return(
        <div className="w-full min-h-screen overflow-hidden">
        <Backimage/>
        <Overlay/>
        <Netflixlogo/>
     <div className="w-full min-h-screen flex items-center justify-center">
        <div className="bg-black p-5 px-20 rounded-2xl absolute top-52 z-20  font-netflix " style={{width:"450px",height:"500px"}} >
           <h1 className="text-white text-4xl font-bold my-8">Sign Up</h1>
           <input value={user} onChange={(e)=>setuser(e.target.value)} type="text" placeholder="Email or phone number" className="bg-[#333333] text-white placeholder:text-gray-500 border-none focus:outline-none p-4 w-full cursor-pointer rounded-md my-2"></input>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" className="bg-[#333333] text-white placeholder:text-gray-500 border-none focus:outline-none p-4 w-full cursor-pointer rounded-md my-2"></input>
            <input value={cpassword} onChange={(e)=>setcpassword(e.target.value)} type="password" placeholder="Confirm Password" className="bg-[#333333] text-white placeholder:text-gray-500 border-none focus:outline-none p-4 w-full cursor-pointer rounded-md my-2"></input>
           <button onClick={handleSign} className="bg-red-600 text-white font-bold py-3 w-full rounded-md my-8 cursor-pointer hover:bg-red-700 duration-100">Sign Up</button>
           <div className="  flex flex-col gap-4">
            <p className="text-gray-500">Already have an account ? <span className="text-white cursor-pointer hover:underline"> <Link to="/">Log in.</Link></span></p>
           </div>
        </div>
        </div>
        </div>
    )
}
export default Sign;