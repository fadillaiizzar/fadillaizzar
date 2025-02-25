export default function DetailSertif(props) {
    const { imgSertif , text , textpenjelas } = props;
    return(
        <>
            <div className="mt-7 grid grid-cols-2 lg:grid-cols-5">
                <div className="col-span-2 rounded-lg lg:mx-auto shadow-2xl">
                    <img src={imgSertif} alt="sertif" className=" w-full h-full sm:w-[450px] sm:h-[300px] rounded-lg"/>
                </div>

                <div className="col-span-3 px-0 lg:px-5 py-3 flex flex-col justify-center">
                    <p className="font-semibold mb-0 lg:mb-5">{text}</p>
                    <p className="">{textpenjelas}</p>
                </div>
            </div>
        </>
    );
}