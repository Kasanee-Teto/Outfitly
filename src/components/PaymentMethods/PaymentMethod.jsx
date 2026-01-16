export default function PaymentMethod({ image, label, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: selected ? "2px solid #0d6efd" : "2px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        background: selected ? "#eef4ff" : "#fff",
        maxWidth: "320px",
        transition: "all 0.2s ease",
      }}
    >
      <img
        src={image}
        alt={label}
        style={{ width: "60px", height: "40px", objectFit: "contain" }}
      />
      <span>{label}</span>
    </div>
  );
}