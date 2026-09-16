import './App.css'

function App() {
  function calcularPontos(){
    let vitorias = Number(prompt("Qunatas vitórias teve seu time: "))
    let empates = Number(prompt("Qunatas vitórias teve seu time: "))
    let pontos = vitorias*3 + empates*1
    alert( 'O seu time tem: ' + pontos +' pontos')
  }

  function trocarCalcados(){
    let precoCalcado = Number(prompt('Qual o preço do Calçado: '))
    let quantidadePares = Number(prompt("Qual aquantidade: "))
    let valeTrocas = precoCalcado *quantidadePares
    alert('A empresa vai recber em vales trocas R$ ' + valeTrocas.toFixed(2) + ' reais')
  }

  function verificarFucionarios(){
    let clt,estagiarios,pj,qtdFucionarios
    clt = Number(prompt('Quantos devs clt a empresa possui: ' ))
    estagiarios= Number(prompt('Quantos devs estagiários a empresa possui: ' ))
    pj = Number(prompt('Quantos  devs PJ a empresa possui: ' ))

    qtdFucionarios = clt +estagiarios+pj
    alert('A empresa possui: ' +qtdFucionarios + ' devs')
  }

  function calcularFrete(){
    let frete, peso, distancia ,volume
    peso = Number(prompt('Qual o peso: '))
    distancia = Number(prompt('Qual a distancia: '))
    volume = Number(prompt('Qual o volume: '))
    frete =15+(2*peso)+(0.05*distancia)+(10*volume)
    alert('O  valor do Frete é de R$ ' + frete)
  }

  function testar (){
    let nome = prompt('Qual o seu nome: ')
    let bocaDoSapo = nome
    alert(nome + ', seu nome está na boca do sapo 🐸 ')
  }

  function calcularEstoqueLaranjas() {
    let qtdInicial = Number(prompt("Qual a quantidade inicial de laranjas: "))
    let qtdFinal = Number(prompt("Qual a quantidade final de laranjas: "))
    let vendidas = qtdInicial - qtdFinal
    alert('Foram vendidas ' + vendidas + ' laranjas no dia.')
  }


  function calcularCustosIgreja() {
    let custoMensal = Number(prompt("Qual o custo mensal da igreja: "))
    let doacoesDia = Number(prompt("Quanto foi recebido de doações e dízimos hoje: "))
    let faltaPagar = custoMensal - doacoesDia
    alert('Falta R$ ' + faltaPagar.toFixed(2) + ' para pagar totalmente os custos mensais.')
  }

 
  function calcularSalarioJunin() {
    let salarioMensal = Number(prompt("Qual o salário mensal do Junin: "))
    let diasTrabalhados = Number(prompt("Quantos dias ele trabalha no mês: "))
    let salarioDiario = salarioMensal / diasTrabalhados
    let salarioSemanal = salarioDiario * 5 

    alert('Junin recebe R$ ' + salarioDiario.toFixed(2) + ' por dia trabalhado.\n' +
          'Salário semanal (escala 5x2): R$ ' + salarioSemanal.toFixed(2))
  }

  
  function calcularPesoCarga() {
    let pesoBrutoTotal = Number(prompt("Qual o peso na balança (Caminhão + Carga): "))
    let tara = Number(prompt("Qual a tara do caminhão (Peso vazio): "))
    let pesoCarga = pesoBrutoTotal - tara

    alert('O peso somente da carga é de: ' + pesoCarga + ' kg')
  }

  return (
    <div className="cont-app">
      <h1>JavaScript no React</h1>
      <h2>Exercicios Sumpipas</h2>

      <button onClick={calcularPontos}>Campeonato</button>
      <button onClick={trocarCalcados}>Trocas Pé Pequeno</button>
      <button onClick={verificarFucionarios}>Verificador de Fucionarios</button>
      <button onClick={calcularFrete}>Calcular Frete</button>
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>

      <hr />
      <button onClick={calcularEstoqueLaranjas}>Estoque Laranjas</button>
      <button onClick={calcularCustosIgreja}>Custos Igreja </button>
      <button onClick={calcularSalarioJunin}>Salário Junin </button>
      <button onClick={calcularPesoCarga}>Peso Veículos </button>
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