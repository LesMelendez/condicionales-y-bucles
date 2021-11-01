let a = prompt("ingrese un numero")
let b = prompt("ingrese el segundo numero")
let c = prompt("ingrese el  tercer numero")
if(Math.abs (a-b)<Math.abs(c)<Math.abs(a+b))
{
    if(a==b&&b==c)
    {
        alert("Es equilatero");
    }
    else if (a==b||b==c||c==a)
    {
        alert("Es isósceles");
    }else{
        alert("es escaleno")
    }
}else{
    alert("el triangulo no existe")
}


