let a = prompt ("ingrese el primer número: ")
let b = prompt ("ingrese el segundo número: ")
let c = prompt ("ingrese el tercer número: ")
if (a=!0)
{
    let d=b*b-4*a*c;
    if(d>0)
    {
        let x1=(-b + Math.sqrt(d))/(2*a);
        let x2=(-b - Math.sqrt(d))/(2*a);
        alert("x1="+x1 +"  ,x2"+x2);
    }
    else if(d==0)
    {
        let x= -b/(2*a);
        alert("x="+x);
    }
    else{
        alert("no existe soluciones en los reales");
    }

}
else{
    if(b==0 &&  c!=0)
    {
        alert("la ecuación es absurda");
    }else{
        alert("la ecuación es lineal");
        alert("x="+c/b);
    }
}