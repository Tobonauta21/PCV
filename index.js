//1º passo: Criação de uma matriz de adjacência
//2º passo: Definir o método para a solução inicial
//3º passo: Criar uma função que avalie a solução inicial
//4º passo: -------

//Importando as classes
    const GeraProblema = require('./GeraProblema')
    const Alg = require('./Alg')
    const gp = new GeraProblema()
    const alg = new Alg()
    const matriz = gp.GerarMatriz(5,5)
    const sol = alg.Aleatoria(5)
    const avalia = gp.Avalia(5,sol,matriz)

    console.log(matriz)
    console.log('Solução Inicial-> '+sol)
    console.log('Avalia->'+avalia)
 
  
    