import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import { useState } from 'react';
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaia: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaia: '##E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaia: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaia: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaia: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaia: '#FFF5D9'
    },
    {
      nome: 'Inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaia: '#FFEEDF'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
      console.log(colaborador);
      setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
       key={time.nome} 
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaia}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />)}

      <Rodape />
    </div>
  );
}

export default App;
