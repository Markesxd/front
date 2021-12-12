import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdNoteAdd } from 'react-icons/md';
import { TextArea } from '../../components/textArea/TextArea';
import style from './style.module.scss';

import api from '../../api';

// Dados Banco
// data date NOT NULL,
// motivo text,
// sintomas varchar(255), = symptoms
// diagnostico varchar(255), = diagnostic
// retorno date,
// anotacoes text, = description
// cpf_paciente varchar(20),
// cpf_medico varchar(20),
//

const Doctor = () => {
  // state users
  const [findPatient, setFindPatient] = useState('');
  const [patient, setPatient] = useState('');
  const [findDoctor, setFindDoctor] = useState('');
  const [doctor, setDoctor] = useState('');
  // fim state users
  //  state consulta
  const [description, setDescription] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnostic, setDiagnostic] = useState('');
  const [reasons, setReasons] = useState('');
  const [dateReturn, setDateReturn] = useState();
  const [dateNow, setDateNow] = useState('');
  //  fim state consulta
  const [returnRequired, setReturnRequired] = useState(false);
  const handleSearchDoctor = () => {
    // query buscar doutor
    // const data = null; // result query
    const data = { name: 'Diener', especially: 'Cardiologista', crm: '324234/MG' }; // result query
    alert(findDoctor);
    if (data) {
      setDoctor(data);
    } else {
      alert('Médico Não Encontrado');
    }
  };
  const handleSearchPatient = () => {
    // query buscar paciente
    // const data = null; // result query
    api.get(`/atendimento/${findPatient}`).then(({ data }) => setFindPatient(data));
    alert(findPatient);
    const data = {
      name: 'Diener', age: 22, healthPlan: 'Unimed', historical: 'link',
    }; // result query

    if (data) {
      setPatient(data);
    } else {
      alert('Paciente Não Encontrado');
    }
  };
  const handleSend = () => {
    setDateNow(new Date());
    const dataSend = {
      doctor,
      patient,
      description,
      symptoms,
      reasons,
      diagnostic,
      dateNow,
      dateReturn,
    };
    api.post('/atendimento', dataSend).then(({ data }) => console.log(data));
    console.log(dataSend);
    alert(`${dataSend.doctor.name} - ${dataSend.patient.name} - ${dataSend.reasons} - ${dataSend.diagnostic} - ${dataSend.description} - ${dataSend.symptoms}`);
  };

  return (
    <div className={style.container}>
      <h1>Atendimento</h1>
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
            <div className={style.infoUser}>
              <span>Nome: {doctor.name}</span>
              <span>Especialidade: {doctor.especially}</span>
              <span>CRM: {doctor.crm}</span>
            </div>
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
            <div className={style.infoUser}>
              <span>Nome: {doctor.name}</span>
              <span>Idade: {patient.age}</span>
              <span>Plano de Saúde: {patient.healthPlan}</span>
              <span>Prontuario: <a href={patient.historical} target="_blank" rel="noopener noreferrer">Aqui</a></span>

            </div>
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
          {returnRequired && (<input type="date" name="return" onChange={(e) => setDateReturn(e.target.value)} />)}
        </div>
        {/* Fim div check Retorno */}
        <div className={style.groupDescription}>
          <TextArea title="Descrição" id='Description' setChange={setDescription}/>
          <TextArea title="Diagnóstico" id='Diagnostic' setChange={setDiagnostic}/>
        </div>
        <div className={style.groupDescription}>

          <TextArea title="Sintomas" id='symptoms' setChange={setSymptoms}/>
          <TextArea title="Motivos" id='reasons' setChange={setReasons}/>
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
