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

        VizinhoMaisProximo(){

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
                console.log('Avalia nova solução -> ' + AvaliaSolNova);
                
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

        AlgoritmoGenetico(){

        }
    } 
    
//Exportando a classe
    module.exports = Alg