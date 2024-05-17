//1º passo: Criação de uma matriz de adjacência
//2º passo: Definir o método para a solução inicial
//3º passo: Criar uma função que avalie a solução inicial
//4º passo: -------

//Importando as classes
    const GeraProblema = require('./GeraProblema')
    const Alg = require('./Alg')
    const gp = new GeraProblema()
    const alg = new Alg()
    const tamMatriz = 5
    const maxValue = 8 
    const matriz = gp.GerarMatriz(tamMatriz,maxValue)
    var sol = alg.Aleatoria(5)
    const avalia = gp.Avalia(5,sol,matriz)
    console.log(matriz)
    console.log('Solução Inicial-> '+sol)
    console.log('Avalia->'+avalia)
    var solse = alg.SubidaDeEncosta(sol)
    var avalse = gp.Avalia(5,solse,matriz)
    console.log('Subida de Encosta -> '+solse)
    console.log('Avalia Subida de Encosta-> '+avalse)
    var solsea = alg.SubidaDeEncostaAlt(sol,5,matriz)
    var avalsea = gp.Avalia(5,solsea,matriz)
    console.log('Subida de encosta alterad -> '+solsea)
    console.log('Avalia Subida de Encosta Alterada -> '+avalsea)
    var vmp = alg.VizinhoMaisProximo(matriz,maxValue)
    var avalvmp = gp.Avalia(tamMatriz,vmp,matriz)
    console.log('Vizinho mais próximo -> '+vmp)
    console.log('Avalia Vizinho mais próximo -> '+avalvmp)
  
    