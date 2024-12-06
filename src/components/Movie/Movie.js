import "./Movie.css"
import PlayIcon from "@src/icons/PlayIcon";
export default function Movie({className='', name, img}) {

    return <div className={`${className} Movie__container`}>
        <img className={'Movie__background'} src={`https://image.tmdb.org/t/p/original/${img}`} />
        <div>
            <h2 className={'Movie__name'}>{name}</h2>
        </div>
        <PlayIcon className={"Movie__play"}/>
    </div>
}
