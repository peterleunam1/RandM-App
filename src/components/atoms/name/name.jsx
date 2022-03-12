import "./name.css";

export default function Name({ name = "Pedro Agames R" }) {
  return (
    <>
      <strong className="name">{name}</strong>
    </>
  );
}
