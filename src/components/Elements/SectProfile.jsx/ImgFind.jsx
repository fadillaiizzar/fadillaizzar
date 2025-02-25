export default function ImgFind(props) {
    const { link , arialabel , imgFind , alt } = props;
    
    return(
        <a href={link} aria-label={`${arialabel}`} target="blank">
            <img src={imgFind} className="w-12 h-12 drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)]" alt={`${alt}`} />
        </a>
    );
}