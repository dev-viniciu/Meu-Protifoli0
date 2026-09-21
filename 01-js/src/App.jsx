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
    let pesoBrutoTotal = Number(prompt('Qual o peso na balança (Caminhão + Carga): '))
    let tara = Number(prompt('Qual a tara do caminhão (Peso vazio): '))
    let pesoCarga = pesoBrutoTotal - tara

    alert('O peso somente da carga é de: ' + pesoCarga + ' kg')
  }
  function calcularChances(){
    let chance,vezesNoCelular
    vezesNoCelular = Number(prompt("Quantas vezes o candidato mexeu no celular? "))
    chance = (0.1/(1+500*vezesNoCelular))*100
    alert('As chances do candidato são de: ' + chance.toFixed(5))
  }
  function calcularLucro(){
    let totalBruto,premiacoes,presentesAgrados,comissoes,lucro
    totalBruto = Number(prompt('Qual o total bruto de hoje: '))
    premiacoes = Number(prompt('Qual as premiacões de hoje: '))
    presentesAgrados = Number(prompt('Qual o gasto com presentes e agradaos de hoje: '))
    comissoes= Number(prompt('Qual as comissões de hoje: '))
    lucro =  totalBruto - (premiacoes + presentesAgrados + comissoes ) 
    alert('O lucro foi de : ' + lucro)


  }
  function calcularDados (){
    let  suprimentosMercadorias ,vendaIngressos,vendaItens,lucroReal,lucroPercentual
    suprimentosMercadorias = Number(prompt('Quanto foi gasto com suprimentos e mercadorias: '))
    vendaIngressos = Number(prompt('Quanto foi arrecadado em venda de ingressos: '))
    vendaItens =Number(prompt('Quanto foi o faturamento em venda de ítens.'))
    lucroReal = (vendaIngressos + vendaItens) - suprimentosMercadorias
    lucroPercentual = (lucroReal / vendaItens) * 100
   alert('Lucro Real é: ' +lucroReal.toFixed(2))
   alert('Lucro percentual é: ' + lucroPercentual.toFixed(2) + '%')
  }
  function calcularGastos (){
   let shows,qtdBombas,qtdShows,precoBomba,calculoGastos
   shows = Number(prompt('Quanto shows a serem feitos: '))
   qtdBombas = 7;
   precoBomba = Number(prompt('Qual o preço das bombas de fumaça a serem compradas: '))

   calculoGastos = (precoBomba * qtdBombas * shows)
   qtdShows = (calculoGastos/ 7)
  
   alert('A quantidade de shows na agenda é: ' + qtdShows + 'shows')
   alert('Total a ser investido no show R$' + calculoGastos.toFixed(2))
  }
  function calcularResto(){
 let salario,moradia,agua,luz,internet,gasolina,streamings,telefone,outros,restoSalario
 salario = Number(prompt('Qual seu salário:'))
 moradia = Number(prompt('Quanto gasta com moradia: '))
 agua = Number(prompt('Quanto gasta com agua: '))
 luz = Number(prompt('Quanto gasta com luz: '))
 internet = Number(prompt('Quanto gasta com internet: '))
 gasolina = Number(prompt('Quanto gasta com gasolina: '))
 streamings = Number(prompt('Quanto gasta com streamings: '))
 telefone = Number(prompt('Quanto gasta com telefone: '))
 outros = Number(prompt('Quanto gasta com outros: '))

  restoSalario =  salario -(moradia + agua +luz +internet +gasolina +streamings + telefone + outros) 
  alert('Sobrou do salário R$ ' + restoSalario)
  }
  function calcularValorObra (){
    let valordeCompradeObra,precoRevenda
    valordeCompradeObra = Number(prompt('Por quanto comprou ela: '))
    precoRevenda = (valordeCompradeObra * 3)
    alert('O valor de venda deve ser R$ ' + precoRevenda)
  }
  function calcularPreco (){
    let peso,precoPromocao,valorRacao,pesoQuilo
    peso = Number(prompt('Qual o peso: '))
    precoPromocao = 10.00;
    valorRacao = precoPromocao*peso
    pesoQuilo = valorRacao / 1000;
    alert('O valor da sua compra de raçao foi de R$ ' + pesoQuilo)
  }
  function calcularChurrasco (){
   const taxaConsumo = {
    carne: 0.5,
    cerveja: 1.0,
    agua: 0.5,
    refri: 0.2
  };

  let qtdPessoa = Number(prompt('Qual a quantidade de pessoas: '))
  let taxaTotalPorPessoa = taxaConsumo.carne + taxaConsumo.cerveja + taxaConsumo.agua + taxaConsumo.refri;
  let valorDoChurras = (qtdPessoa * taxaTotalPorPessoa)
  alert('O valor do Churras foi de R$ ' + valorDoChurras)
  }

  function calcularJares (){
     let precoJares = 90
     let freteCaminhao = 450
     let jaresPorCaminhao = 50
     let qtdCaminhao = Number(prompt('Qual a quantidade de Caminhões: '))
     let custos = (qtdCaminhao * freteCaminhao)
     let ganhos = (qtdCaminhao*jaresPorCaminhao)* precoJares
     let lucroTemporada = (ganhos - custos)
     alert('O total do lucro por venda de jacarés foi de R$ ' + lucroTemporada)
     
  }
  function calcularToken(){
    let tokenPrompt = 5
    let texto = prompt('Digite seu texto: ')
    let totalGastoToken = (1 * texto.length) + 5
    let conversaoToken = 0.01 * totalGastoToken
    alert ('O total de token gastos foi : ' + totalGastoToken)
    alert('O total gasto em reais foi R$ ' +conversaoToken)
  }

function calcularFrellas(){
  let taxaConsultor = 500
  let horaFrellas = 350
  let horasTrabalho = Number(prompt('Em quantas horas quer que seu projeto fique pronto: '))
  let ganhoTotal = (horaFrellas * horasTrabalho) + taxaConsultor
  let lucoFrellas =(horaFrellas * horasTrabalho)
  alert('O preço que deve ser cobrado é R$ ' + ganhoTotal)
  alert('O lucro do freela foi de R$ ' + lucoFrellas)
}
function calcularRelatorios(){
 let relatoriosPF = 40
 let relatoriosPJ = 33
 let tempoRelatoriosPF = 12 
 let tempoRelatoriosPJ = 42 
 let valorTotalPF = 2350
 let valorTotalPJ = 8900
 let qtdRelatorios = (relatoriosPF + relatoriosPJ)
 let qtdHoras = (tempoRelatoriosPF + tempoRelatoriosPJ)
 let qtdValor = (valorTotalPF + valorTotalPJ)
 let mediaPF = valorTotalPF / relatoriosPF
 let mediaPR = valorTotalPJ / relatoriosPJ
 let mediaTempoPF = tempoRelatoriosPF /relatoriosPF
 let mediaTempoPJ = tempoRelatoriosPJ /relatoriosPJ
alert(
  '------📒RESUMO RELATÓRIOS------\n' +
  'Quantidade Relatórios: ' + qtdRelatorios + '\n' +
  'Quantidade Horas: ' + qtdHoras + '\n' +
  'Valor Total: R$ ' + qtdValor.toFixed(2) + '\n\n' +
  '--- Médias PF ---\n' +
  'Média Valor PF: R$ ' + mediaPF.toFixed(2) + '\n' +
  'Média Tempo PF: ' + mediaTempoPF.toFixed(2) + 'h\n\n' +
  '--- Médias PJ ---\n' +
  'Média Valor PJ: R$ ' + mediaPR.toFixed(2) + '\n' +
  'Média Tempo PJ: ' + mediaTempoPJ.toFixed(2) + 'h'
)


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
      <button onClick={calcularDados}>Calcular Faturamneto</button>
      <button onClick={calcularValorObra}>Valor da Obra</button>
      <button onClick={calcularChurrasco}>Valor do Churrasco</button>
      <button onClick={calcularToken}>Tokens Gastos</button>
       <button onClick={calcularRelatorios}>Relatórios</button>


  

      <hr />
      <button onClick={calcularEstoqueLaranjas}>Estoque Laranjas</button>
      <button onClick={calcularCustosIgreja}>Custos Igreja </button>
      <button onClick={calcularSalarioJunin}>Salário Junin </button>
      <button onClick={calcularPesoCarga}>Peso Veículos </button>
      <button onClick={calcularChances}>Calcular Chances </button>
      <button onClick={calcularLucro}>Lucro </button>
      <button onClick={calcularGastos}>Quatidades </button>
      <button onClick={calcularResto}>Resto do Salário</button>
      <button onClick={calcularPreco}>Preço da Ração</button>
      <button onClick={calcularJares}>Lucro Jares</button>
      <button onClick={calcularFrellas}>Frellancer</button>
      

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
