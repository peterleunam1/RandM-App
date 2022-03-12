import Status from "../../atoms/status/status";
import "./modal.css";

export default function Modal({
  status,
  updateStatus,
  type,
  name,
  url,
  Nstatu,
  species,
  gender,
  origin,
  location,
}) {
  return (
    <>
      {status && (
        <div className="overlay">
          <div className="containerM">
            <h5>Break the cycle, Morty. Rise up. Focus on the science. </h5>
            <button onClick={() => updateStatus}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <div className="info">
              <img className="avatar2" src={url} alt={name} />
              <section className="details">
                <div className="status">
                  <Status status={Nstatu} />
                </div>
                <strong>
                  {" "}
                  <b className="color">Specie: </b>
                  {species}
                </strong>
                <br />
                <strong>
                  {" "}
                  <b className="color">Type: </b>
                  {type}
                </strong>
                <br />
                <strong>
                  {" "}
                  <b className="color">Gender: </b>
                  {gender}
                </strong>
                <br />
                <strong>
                  {" "}
                  <b className="color">Origin: </b>
                  {origin}
                </strong>
                <br />
                <strong>
                  {" "}
                  <b className="color">Location: </b>
                  {location}
                </strong>
              </section>
            </div>
            <h3 className="newName">{name}</h3>
          </div>
        </div>
      )}
    </>
  );
}
