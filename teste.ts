function calcular(num1:number, num2:number, operador:string){
    if (operador == "+"){
        let soma =num1+ num2; 
        return "soma de "+num1+" e "+num2+" é "+soma;
    }
    if (operador == "-"){
        let subtração =num1+ num2; 
        return "subtração de "+num1+" e "+num2+" é "+subtração;
    }
    if (operador == "/"){
        let divisao =num1+ num2; 
        return "divisão de "+num1+" e "+num2+" é "+divisao;
    }
    if (operador == "*"){
        let multiplicaçao =num1+ num2; 
        return "multiplicação de "+num1+" e "+num2+" é "+multiplicaçao;
    }
}