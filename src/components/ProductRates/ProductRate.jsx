import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductRate({ value = 0, onChange }) {
    const maxStars = 5;
    const [hovered, setHovered] = useState(null);

    const displayValue = hovered ?? value;

    return (
        <div className="d-inline-flex gap-1">
            {Array.from({ length: maxStars }, (_, i) => {
                const starValue = i + 1;
                const filled = starValue <= displayValue;

                return (
                    <button
                        key={starValue}
                        type="button"
                        className="btn p-0 border-0 bg-transparent"
                        onMouseEnter={() => setHovered(starValue)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => onChange?.(starValue)}
                        aria-label={`Rate ${starValue} stars`}
                    >
                        {filled ? (
                            <FaStar className="text-warning" />
                        ) : (
                            <FaRegStar className="text-secondary" />
                        )}
                    </button>
                );
            })}
        </div>
    );
}
