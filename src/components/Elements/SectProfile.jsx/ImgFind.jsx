export default function ImgFind(props) {
    const { link , arialabel , imgFind , alt } = props;
    
    return(
        <a href={link} aria-label={`${arialabel}`} target="blank">
            <img src={imgFind} className="w-12 h-12" alt={`${alt}`} />
        </a>
    );
}