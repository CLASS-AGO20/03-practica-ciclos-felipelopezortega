export default class App {

    factorial(numero){

        let fact = 1

        for(let i=2 ; i<=numero; i = i + 1){

            fact = fact * i
        }

        return fact
    }

    /*convertirAString(numero){

        let i=1
        
        while()

    }*/

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


}

let app = new App();

//Función factorial
console.log(app.factorial(5))

//Función asteriscos

//Función divisible
console.log(app.obtenerDivisibles(6))