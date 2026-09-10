import './App.css'

function App() {
 function testar (){
 let nome = prompt('Qual o seu nome: ')
 let bocaDoSapo = nome
 alert(nome + ', seu nome está na boca do sapo 🐸 ')
 }

  return (
    <div className="cont-app">
    <h1>JavaScript no React</h1>
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

function calcularMedia (){
let nota1 = Number((prompt("Qual o valor da primeira nota:")))
let nota2 = Number((prompt("Qual o valor da segunda nota:")))
let media = (nota1 + nota2) /2;
alert('Sua média final: ' + media)
}

export default App
