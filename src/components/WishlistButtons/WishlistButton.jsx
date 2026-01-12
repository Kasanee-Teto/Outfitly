import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function WishlistButton() {
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        alert("Added to wishlist");
    };

    return (
        <button
            type="button"
            className="btn btn-outline-danger d-inline-flex align-items-center gap-2 w-100"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        >
            {hovered ? <FaHeart /> : <FaRegHeart />}
            <span>Add to Wishlist</span>
        </button>
    );
}
