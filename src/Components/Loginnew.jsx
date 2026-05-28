import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Loginnew = ()=>{

    const [user,setuser]=useState("")
    const [password,setpassword]=useState("")
    const navigate = useNavigate();
    const handlelogin=async()=>{
         if(!user || !password){
            alert("Please fill all the fields")
            return;
         }
         const emailregex=/^\w+@gmail\.com$/
         const phoneregex=/^\d{10}$/
            if(!emailregex.test(user) && !phoneregex.test(user)){
                alert("Please enter a valid email or phone number")
                return;
            }

        try{
            console.log("sending ..",user,password)
       const data = await axios.post("https://netflix-loginbe-2.onrender.com/",{
        user,
        password})
        if(data.data===true){
            alert("Login successful")
            navigate("/netflix")
        }else{
            alert("User not found. Please sign up first.")
            navigate("/sign")
        }
        setuser("")
        setpassword("")
       }
       catch(err){
        console.log("error in login",err)
       }
    }


    return(
        <div className="w-full h-full flex items-center justify-center">
        <div className="bg-black p-5 px-20 rounded-2xl absolute top-52 z-20  font-netflix " style={{width:"450px",height:"500px"}} >
           <h1 className="text-white text-4xl font-bold my-8">Log in</h1>
           <input value={user} onChange={(e)=>setuser(e.target.value)} type="text" placeholder="Email or phone number" className="bg-[#333333] text-white placeholder:text-gray-500 border-none focus:outline-none p-4 w-full cursor-pointer rounded-md my-2"></input>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" className="bg-[#333333] text-white placeholder:text-gray-500 border-none focus:outline-none p-4 w-full cursor-pointer rounded-md my-2"></input>
           <button onClick={handlelogin} className="bg-red-600 text-white font-bold py-3 w-full rounded-md my-8 cursor-pointer hover:bg-red-700 duration-100">Log In</button>
           <div className="  flex flex-col gap-4">
            <p className="text-gray-400 cursor-pointer hover:underline">Log in with Facebook</p>
            <p className="text-gray-500">New to Netflix? <span className="text-white cursor-pointer hover:underline"> <Link to="/sign">Sign up now.</Link></span></p>
           </div>
        </div>
        </div>
    )
}
export default Loginnew;