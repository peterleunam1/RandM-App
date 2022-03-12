import "./status.css";

export default function Status({ color }) {
  const pictureColor =
    color === "alive" || color === "Alive"
      ? "is-alive"
      : color === "dead" || color === "Dead"
      ? "is-death"
      : color === "unknown" || color === "Unknown"
      ? "is-unknow"
      : "";
  return (
    <div className={pictureColor}>
      <strong className="text">{color}</strong>
    </div>
  );
}
