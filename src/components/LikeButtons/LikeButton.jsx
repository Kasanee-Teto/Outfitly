import { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [hovered, setHovered] = useState(false);

    const isFilled = liked || hovered;

    const handleClick = () => {
        const next = !liked;
        setLiked(next);

        if (next) {
            alert("You liked this");
        }
    };

    return (
        <button
            type="button"
            className={`btn d-inline-flex align-items-center gap-2 w-100 ${
                liked ? "btn-primary" : "btn-outline-primary"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        >
            {isFilled ? <FaThumbsUp /> : <FaRegThumbsUp />}
            <span>{liked ? "Liked" : "Like"}</span>
        </button>
    );
}
