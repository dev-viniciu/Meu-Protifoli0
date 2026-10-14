import './App.css'
import Jogo from './components/Jogo'
import Pousada from './components/Pousada'
import Ganso from './components/Ganso'
import TesteGanso from './components/TesteGanso'
import Fumaca from './components/Fumaca'
import Eventos from './components/Eventos'
import Palco  from './components/Palco'
import Transporte from './components/Transporte'

function App() {
  

  return (
    <div className="app">
      <h1>03 estados e componentes</h1>
      <Transporte/>
      <Palco/>
      <Eventos/>
      <Fumaca/>
      <TesteGanso/>
      <Ganso />
      <Pousada />
      <Jogo />

    </div>
  )
}

export default App
