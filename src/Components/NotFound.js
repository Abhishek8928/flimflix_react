


import { Link, useNavigate } from "react-router-dom";
import notfound from "../img/notfound.webp"
import useTitle from "../Utils/useTitle";
function NotFound() {
    const navigate = useNavigate();
    
    useTitle("Not found page")
    
    return (
        <div className='bg-[rgb(9,0,31)] fixed  h-screen w-screen flex justify-center items-center'>
            <Link className="absolute text-2xl top-[2%] right-[2%]">
            
                <i
                    onClick={() => navigate(-1)}
                    className=" ri-close-large-fill text-white mr-2"
                ></i>
            
            </Link>

            <img src={notfound} alt="" />

        </div>
    )
}

export default NotFound;
