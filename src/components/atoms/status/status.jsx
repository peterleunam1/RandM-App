import styles from './status.module.css';

export default function Status({status}) {
  const pictureColor = {
    "alive": styles.is_alive,
    "dead": styles.is_death,
    "unknown": styles.is_unknown,
  }

  const statusClass = pictureColor[status.toLowerCase()];

  return (
    <div className={`${styles.status__container} ${statusClass}`}>
      <strong className="text">{status}</strong>
    </div>
  );
}
