import { useState } from 'react';
import { ReportCard } from '../../components';
import style from './style.module.scss';
import api from '../../api';

const Manager = () => {
  const [initial, setInitial] = useState('0');
  const [final, setFinal] = useState('0');
  const [doctors, setDoctors] = useState(0);
  const [patients, setPatients] = useState(0);
  const [attendances, setAttendances] = useState(0);

  const handleInitialDate = (e) => {
    setInitial(e.target.value);
  };

  const handleFinalDate = (e) => {
    setFinal(e.target.value);
  };

  const handleGenerate = () => {
    const formatedInitial = initial.replace(/-/g, '');
    const formatedFinal = final.replace(/-/g, '');

    api.get(`/relatorio/tempo/${formatedInitial}/${formatedFinal}`)
      .then(({ data }) => {
        console.log(formatedInitial, formatedFinal, data);

        setPatients(data.Atendimentos);
        setDoctors(data.Medicos);
        setAttendances(data.Atendimentos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Relatório por Tempo</h1>
      <div className={style.form}>
        <span>De</span>
        <input type="date" onChange={handleInitialDate}/>
        <span> à </span>
        <input type="date" onChange={handleFinalDate}/>
        <button type='button' onClick={handleGenerate}>Gerar</button>
      </div>
      <div className={style.reportBox}>
        <h2 className={style.boxTitle}>Neste período: </h2>
        <ReportCard text="Atendimentos Realizados" number={attendances} />
        <ReportCard text="Pacientes Atendidos" number={patients} />
        <ReportCard text="Medicos em Serviço" number={doctors} />
      </div>
    </div>
  );
};

export { Manager };
