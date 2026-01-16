import React from "react";

const ShareButton = ({ url, text }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Bagikan Link",
                    text: text,
                    url: url,
                });
                console.log("Link dibagikan!");
            } catch (err) {
                console.error("Gagal membagikan:", err);
            }
        } else {
            const waUrl = `https://wa.me/?text=${encodeURIComponent(`${url}\n\n${text}`)}`;
            window.open(waUrl, "_blank");
        }
    };

    return (
        <div className="p-2">
            <button onClick={handleShare} style={{ padding: "8px 12px", cursor: "pointer", color: "white", borderRadius: "6px", borderStyle: "none",backgroundColor:"#0072ff" }}>
                Share
            </button>
        </div>
    );
};
export default ShareButton;