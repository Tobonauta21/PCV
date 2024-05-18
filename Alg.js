//Exportando módulos
    const GeraProblema = require('./GeraProblema')
    const gp = new GeraProblema()
//Criação da classe de algortimos
    class Alg{

         Contain(array, element) {
            return array.indexOf(element) !== -1;
        }
        
        Aleatoria(tam){

            var sol = []
            while (sol.length < tam) {
                var randomNumber = Math.floor(Math.random() * tam);
        
                if (!this.Contain(sol, randomNumber)) {
                    sol.push(randomNumber);
                }
            }
        
            return sol;            
        }

        VizinhoMaisProximo(matriz,maxInteger){
            var ncidades = matriz.length
            var cidAtual = 0

            var MelhorRota = []
            var visitadas = []

            MelhorRota.push(cidAtual)
            visitadas[cidAtual] = true

            for(var i =0; i < ncidades; i ++){
                var proxCid = -1 
                var menorDistancia = maxInteger

                for(var j = 0; j < ncidades; j++){
                    if(!visitadas[j] && matriz[cidAtual][j] < menorDistancia){
                        proxCid = j
                        menorDistancia = matriz[cidAtual][j]
                    }
                    
                }

                if(proxCid != -1){
                    MelhorRota.push(proxCid)
                    visitadas[proxCid] = true
                    cidAtual = proxCid
                }

            }

            MelhorRota.push(MelhorRota[0])

            return MelhorRota



        }

        SubidaDeEncosta(sol){
            
            var ind1 = Math.floor(Math.random()*sol.length)
            var ind2 = Math.floor(Math.random()*sol.length)
            var aux1 = sol[ind1]
            var aux2 = sol[ind2]
            sol[ind1] = aux2
            sol[ind2] = aux1

            return sol
        }

        SubidaDeEncostaAlt(sol, tmax, m) {
            var solucaoAntiga = sol.slice(); // Faz uma cópia da solução antiga
            var AvaliaSolAntiga = gp.Avalia(sol.length, sol, m);
            var ind1 = Math.floor(Math.random() * sol.length);
            var ind2 = Math.floor(Math.random() * sol.length);
            var aux1 = sol[ind1];
            var aux2 = sol[ind2];
            var i = 0;
        
            while (i < tmax) {
                sol[ind1] = aux2;
                sol[ind2] = aux1;
        
                var AvaliaSolNova = gp.Avalia(sol.length, sol, m);
                
                if (AvaliaSolNova < AvaliaSolAntiga) {
                    // Se a nova solução for melhor, atualiza a solução antiga
                    solucaoAntiga = sol.slice();
                    AvaliaSolAntiga = AvaliaSolNova;
                }
        
                i++;
            }
        
            return solucaoAntiga;
        }

        TemperaSimulada(){

        }

    //Funções Auxiliares para algoritmo genético
        // Função auxiliar para criar um vetor de zeros
    npzerosVetor(tam) {
        return new Array(tam).fill(0);
    }

    // Função auxiliar para criar uma matriz de zeros
    npzerosMatriz(n, tp) {
        return Array.from({ length: tp }, () => new Array(n).fill(0));
    }

    // Função para embaralhar um array
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Função para criar um cromossomo
    Cromossomo(n) {
        let ind = this.npzerosVetor(n);
        for (let i = 0; i < n; i++) {
            ind[i] = i;
        }
        return this.shuffle(ind);
    }

    // Função para criar a população inicial
    popIni(n, tp) {
        let pop = this.npzerosMatriz(n, tp);
        for (let i = 0; i < tp; i++) {
            pop[i] = this.Cromossomo(n);
        }
        return pop;
    }


    
    //Rotina Algoritmo Genético
        AlgoritmoGenetico(){

        }
    } 
    
//Exportando a classe
    module.exports = Alg