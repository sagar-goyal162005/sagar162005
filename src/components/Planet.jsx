export default function Planet({ label, size, onClick }) {
  return (
    <button type="button" className="planet" style={{ width: size, height: size }} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
}
