import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './style.module.scss';

const Doctor = () => {
  const [description, setDescription] = useState('');
  const [findPatient, setFindPatient] = useState('');
  const [findDoctor, setFindDoctor] = useState('');

  const handleSearchDoctor = () => {
    alert(findDoctor);
  };
  const handleSearchPatient = () => {
    alert(findPatient);
  };
  const handleSend = () => {
    alert('send');
  };

  return (
    <div>
      <div className={style.container}>
        <h1>Pagina do Doctor</h1>
        {/* Buscar Médico e Paciente */}
        <div className="headerWrapper">
          <span>CPF Médico</span>
          <input type="text"
            placeholder="Buscar medico"
            onChange={(e) => setFindDoctor(e.target.value)}
          />
          <button type='submit' onClick={handleSearchDoctor}>
            <FiSearch/>
          </button>

          <span>CPF Paciente</span>
          <input type="text"
            placeholder="Buscar paciente"
            onChange={(e) => setFindPatient(e.target.value)}
          />
          <button type="submit" onClick={handleSearchPatient}>
            <FiSearch fontSize={16}/>
          </button>

          <input type="date" name="" id="" />
        </div>
        {/* Fim Div Buscar Paciente e Médico */}

        {/* Inicio Div Descrição Consulta */}
        <div className={style.description}>
          <textarea
            name="" id=""
            cols="50" rows="10"
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            />
          <textarea
            name="" id=""
            cols="50" rows="10"
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            />
          <textarea
            name="" id=""
            cols="50" rows="10"
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            />
        </div>
        {/* Fim Div Descrição Consulta */}
        <button type="button" onClick={handleSend}>Criar</button>
      </div>
    </div>
  );
};

export { Doctor };
