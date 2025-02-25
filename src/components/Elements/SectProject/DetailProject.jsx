export default function DetailProject(props) {
    const { text , penjelasan , imgProject , tools1 , tools2 , link } = props;

    return(
        <div className="bg-cbeige p-4 rounded-lg shadow-2xl">
            <div className="font-semibold mb-1">{text}</div>

            <p className="mb-4">{penjelasan}</p>

            <div className="w-full h-auto mb-3 rounded-lg">
                <img src={imgProject} alt="imgproyek" className="w-full h-full rounded-lg border-2 border-cteal" />
            </div>

            <div className="flex text-center w-full">
                <div className={`flex gap-2 text-sm`}>
                    <div className="bg-cteal text-cbeige p-1 px-4 rounded-lg h-auto">{tools1}</div>
                    <div className="bg-cteal text-cbeige p-1 px-4 rounded-lg h-auto">{tools2}</div>
                </div>
            </div>

            <button onClick={() => window.open(link, "_blank")} className="w-full text-sm bg-cteal hover:bg-cdeepnavy text-cbeige mt-3 p-1 rounded-lg flex gap-2 items-center justify-center">
                <span className="material-symbols-outlined">language</span>
                BROWSE
            </button>
        </div>
    );
}