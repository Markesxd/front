/* eslint-disable react/prop-types */
import style from './style.module.scss';

const ReportCard = ({ text, number }) => {
  return (
    <div className={style.card}>
      <h2>{text}</h2>
      <span>{number}</span>
    </div>
  );
};

export default ReportCard;
