let A = prompt("ingrese el primer numero") 
let B = prompt("ingrese el segundo numero")
let C = prompt("ingrese el tercer numero")
if(-100<=A && A<=100 && -100<=B && B<=100 && -100<=C && C<=100)
{
    if(A<=B && B<=C) 
    {
    alert("C")
    }
    else if(A>=B && B>=C)
    {
    alert("D")
    }
    else if(A==B&&B==C) 
    {
    alert("I")
    }
}
else
{
    alert("X")
}



