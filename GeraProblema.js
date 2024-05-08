//Classe que vai gerar a matriz de adjecência e avaliar
    class GeraProblema{

        GerarMatriz(tam, lim) {
            var matriz = new Array(tam);
        
            for (var i = 0; i < tam; i++) {
                matriz[i] = new Array(tam)
        
                for (var j = 0; j < tam; j++) {
                    if(i ===j){
                        matriz[i][j] = 0
                    }else{
                        matriz[i][j] = Math.floor(Math.random()*(lim-1)+1)
                    }
                    
                }
            }
        
            return matriz;
        }


        Avalia(tam,sol,matriz){
            var valor = 0
            
            for(var i =0; i < tam-1;i++){
                valor += matriz[sol[i]][sol[i+1]]
                console.log(valor)
            }
            
            valor += matriz[sol[tam-1]][sol[0]]
            
            return valor
        }

    }

//Exportando Classe
    module.exports = GeraProblema