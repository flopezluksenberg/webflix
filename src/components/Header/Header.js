import "./Header.css"
import HamburgerIcon from "@src/icons/HamburgerIcon";
import Avatar from "@src/components/Avatar/Avatar";

export default function Header({className=''}) {
    return <header className={`${className} Header__container`}>
        <HamburgerIcon className={'Header__hamburger'} />
        <img src={"/watermark.png"}  className={'Header__watermark'}/>
        <Avatar className={'Header__avatar'} />
    </header>
}
