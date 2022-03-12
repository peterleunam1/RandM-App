import Status from "../../atoms/status/status";
import "./character.css";
import { useState } from "react";
import Modal from "../../organisms/modal/modal";

export default function Character({
  name,
  status,
  url,
  species,
  gender,
  origin,
  type,
  location,
}) {
  type === "" ? (type = "typeless") : type;

  const [statusModal, setStatusModal] = useState(false);

  return (
    <div className="li" onClick={() => setStatusModal(!statusModal)}>
      <div className="image">
        <img className="avatar" src={url} alt={name} />
        <div className="status">
          <Status color={status} />
        </div>
      </div>
      <div className="caption">
        <h5 className="figcaption">
          <b>Name:</b> {name}
        </h5>
      </div>
      <Modal
        status={statusModal}
        updateStatus={setStatusModal}
        url={url}
        name={name}
        Nstatu={status}
        species={species}
        gender={gender}
        origin={origin}
        type={type}
        location={location}
      />
    </div>
  );
}
