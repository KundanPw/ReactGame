import Icon from "../Icon/Icon";
import './Card.css';

function Card({iconName, onPlay}){
    function playMove() {
        onPlay();
    }
    return(
        <div className="card" onClick={playMove} >
            <Icon name={iconName} />
        </div>
    )
}

export default Card;