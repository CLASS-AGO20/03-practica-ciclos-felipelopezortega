export default class App {

    factorial(numero){

        let fact = 1

        for(let i=2 ; i<=numero; i = i + 1){

            fact = fact * i
        }

        return fact
    }

    convertirAString(numero){

        let i=1
        let canti = ""
        
        while(i<=numero){

            canti = canti + "*"

            i++
        }

        return canti
    }

    obtenerDivisibles(numero){

        let i = 1
        let divi = 0

        do{

            if(numero%i==0){

                divi ++
            }else{

            }

            i++

        }while(i<=numero)

        return divi
    }

    elevar(numero, potencia){

        let i = 1
        let po = 1

        do{

            po = po * numero

            i++

        }while(i<=potencia)

        return po
    }

}

let app = new App();

//Función factorial
console.log(app.factorial(5))

//Función asteriscos
console.log(app.convertirAString(5))

//Función divisible
console.log(app.obtenerDivisibles(6))

//Función elevar
console.log(app.elevar(3,4))
