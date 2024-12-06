import "./Avatar.css";

export default function Avatar({className=''}) {
    return <img src={"/avatar.png"} className={`Avatar__container ${className}`} />
}
