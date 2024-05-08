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

        SubidaDeEncosta(){

        }

        SubidaDeEncostaAlt(){

        }

        TemperaSimulada(){

        }

        AlgoritmoGenetico(){

        }
    } 
    
//Exportando a classe
    module.exports = Alg