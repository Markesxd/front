import styles from './style.module.scss';
/* eslint-disable react/prop-types */
const TextArea = ({ title, id }) => {
  return (
    <div className={styles.container}>

      <h4>{title}:</h4>
      <div className={styles.textArea} >
        <textarea
      id={id}
      cols="60" rows="15"
      placeholder={title}
      // onChange={(event) => setDescription(event.target.value)}
      />
      </div>
    </div>
  );
};

export { TextArea };
