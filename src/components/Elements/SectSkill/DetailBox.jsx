import { useState } from "react";

export default function DetailBox(props) {
    const { imgDetail , alt , text } = props;

    const [ showText , setShowText ] = useState(false);

    const handleClick = () => {
        setShowText(!showText)
    }

    return(
        <div className="w-48 h-48 bg-cbeige flex items-center justify-center relative cursor-pointer rounded-lg" onClick={handleClick}>
            <img src={imgDetail} className="w-full h-full p-10" alt={`${alt}`}/>

            {showText && (
                <div className="absolute bg-black opacity-70 inset-0 flex justify-center items-center rounded-lg">
                    <p className="text-white text-lg">{text}</p>
                </div>
            )}
        </div>
    );
}