export default function BtnNav(props) {
    const { href , padx = "px-4" , radius , backg ="bg-cbeige" , onClick , textnav } = props;

    return(
        <a href={href} className={`${padx} ${radius} ${backg} opacity-90 flex justify-center py-4 max-w-min`} onClick={onClick}>
            <p className="text-cteal hover:text-cdeepnavy text-md">{textnav}</p>
        </a>
    );
}