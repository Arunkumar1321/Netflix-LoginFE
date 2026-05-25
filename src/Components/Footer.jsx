const Footer =()=>{
    return(
        <div className="md:w-full h-full bg-black pt-10">
            <h1 className="text-gray-500 text-lg pt-5 ml-5">Questions? Call 000-800-040-1843</h1>
            <div className="w-full h-full bg-black">
                <ul id="footer_links" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center justify-center cursor-pointer ">
                    <li className="text-gray-500 text-sm ml-5 mt-5">FAQ</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Help Center</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Account</li>   
                    <li className="text-gray-500 text-sm ml-5 mt-2">Media Center</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Investor Relations</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Jobs</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Ways to Watch</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Terms of Use</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Privacy</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Cookie Preferences</li>
                    <li className="text-gray-500 text-sm ml-5 mt-2">Corporate Information</li>
                  
                </ul>
                
                  <h1 className="text-gray-500 ml-5 pt-5 pb-5">Copyright @ 2024 Netflix, Inc.</h1>
        </div>
            </div>
          
    )
}
export default Footer;