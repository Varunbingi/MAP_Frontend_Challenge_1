/* eslint-disable react/prop-types */
import { useState } from "react";
import SkeletonUi from "./SkeletonUi";
const Card=({props})=>{
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoaded = () => {
      setImageLoaded(true);
    };
    return(
        
        <div className="flex flex-col w-[400px] h-[500px]  text-white  relative   ">
            {!imageLoaded && (
                <div ><SkeletonUi/></div>
            )}
            <h1 className="font-semibold text-2xl pb-6  ">{props?.title}</h1>
            <img src={props?.image} alt=""  className={`card-image ${imageLoaded ? 'loaded' : 'loading'} hover:scale-105 transition-all ease-in-out rounded-md`} onLoad={handleImageLoaded} />
            <h1 className="w-1/2 absolute bottom-0  m-5 font-semibold ">{props?.description}</h1>
        </div>
    )
}

export default Card;
