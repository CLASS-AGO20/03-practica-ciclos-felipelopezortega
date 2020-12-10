export default class App {

    factorial(numero){

        let fact = 1

        for(let i=2 ; i<=numero; i = i + 1){

            fact = fact * i
        }

        return fact
    }




}

let app = new App();

console.log(app.factorial(5))