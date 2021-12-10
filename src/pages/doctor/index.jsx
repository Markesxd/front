import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdNoteAdd } from 'react-icons/md';
import { TextArea } from '../../components/textArea/TextArea';
import style from './style.module.scss';

// Dados Banco
// data date NOT NULL,
// motivo text,
// sintomas varchar(255),
// diagnostico varchar(255),
// retorno date,
// anotacoes text,
// cpf_paciente varchar(20),
// cpf_medico varchar(20),
//

const Doctor = () => {
  const [description, setDescription] = useState('');
  const [findPatient, setFindPatient] = useState('');
  const [patient, setPatient] = useState('');
  const [findDoctor, setFindDoctor] = useState('');
  const [doctor, setDoctor] = useState('');
  const [returnRequired, setReturnRequired] = useState(false);
  const handleSearchDoctor = () => {
    // query buscar doutor
    // const data = null; // result query
    const data = { name: 'Diener', especially: 'Cardiologista', crm: '324234/MG' }; // result query

    if (data) {
      setDoctor(data);
    } else {
      alert('Médico Não Encontrado');
    }
  };
  const handleSearchPatient = () => {
    // query buscar paciente
    // const data = null; // result query
    const data = {
      name: 'Diener', birthDate: 22, healthPlan: 'Unimed', historical: 'link',
    }; // result query

    if (data) {
      setPatient(data);
    } else {
      alert('Paciente Não Encontrado');
    }
  };
  const handleSend = () => {
    const date = new Date();
    alert('send');
  };

  return (
    <div className={style.container}>
      <h1>Pagina do Doctor</h1>
      {/* Buscar Médico e Paciente */}
      <div className={style.findWrapper}>
        <div className={style.doctor}>
          <span>Buscar Médico: </span>
          <input type="text"
            placeholder="Digite o CPF"
            onChange={(e) => setFindDoctor(e.target.value)}
          />
          <button type='submit' onClick={handleSearchDoctor}>
            <FiSearch fontSize={13}/>
          </button>
          {doctor && (
          <div>Medico-------------------------------</div>
          )}
        </div>

        <div className='patient'>
          <span>Buscar Paciente: </span>
          <input type="text"
            placeholder="Digite o CPF "
            onChange={(e) => setFindPatient(e.target.value)}
          />
          <button type="submit" onClick={handleSearchPatient}>
            <FiSearch fontSize={13}/>
          </button>
          {patient && (
          <div>Paciente--------------------------</div>
          )}
        </div>
        {/* Exibir Info Users */}

      </div>
      {/* Fim Div Buscar Paciente e Médico */}

      {/* Inicio Div Descrição Consulta */}
      <div className={style.descriptionWrapper}>

        {/* Inicio div check Retorno */}
        <div className={style.requiredReturn}>
          <span>
            Necessário Retorno
          </span>
          <input type="checkbox" name="haveReturn"
                onChange={() => setReturnRequired(!returnRequired)} />
          {returnRequired && (<input type="date" name="return" id="" />)}
        </div>
        {/* Fim div check Retorno */}
        <div className={style.groupDescription}>
          <TextArea title="Descrição" id='Description'/>
          <TextArea title="Diagnóstico" id='Diagnostic'/>
        </div>
        <div className={style.groupDescription}>

          <TextArea title="Sintomas" id='symptoms'></TextArea>
          <TextArea title="Motivos" id='reasons'></TextArea>
        </div>
      </div>
      {/* Fim Div Descrição Consulta */}

      <button className={style.btnSend}type="submit" onClick={handleSend}>
        Adicionar  <MdNoteAdd/>
      </button>
    </div>
  );
};

export { Doctor };
