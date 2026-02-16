import { useState } from "react";

 function LikeButton(){
    const [likes, setlikes] = useState(0);

    function AddLike(){
        setlikes (likes + 1);
    }
    function DecreaseLikes(){
        setlikes (likes - 1);
    }
    function reset(){
        setlikes (0);
    }

    return(
        <div className="card">
            <h3>Like Button</h3>
            <p className="big">{likes}</p>
            <button className="Likebutton" onClick={AddLike}>Like</button><hr />
            <button className="DecreaseLikebutton" onClick={DecreaseLikes}>LessLikes</button><hr />
            <button className="ResetLikes" onClick={reset}>Reset</button>

            <p className="muted">
                even named in react camelcase (onClick , onChange);
            </p>
        </div>
    );
}
 export default LikeButton
