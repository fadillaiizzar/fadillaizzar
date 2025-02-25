export default function HeadingSatu(props) {
    const { mb = "mb-10" , mdMb = "md:mb-5" , pt ,  px , pb , htext } = props;

    return(
        <h1 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.6)'}} className={`${mb} ${mdMb} ${pt} ${px} ${pb} text-2xl font-semibold text-center`}>{htext}</h1>
    );
}