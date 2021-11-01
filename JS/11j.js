let n = prompt("ingrese un numero")
let a=0
let b=1
for(let i=2; i<=n; i=i++)
{
    let resultado = a + b;
    a=b;
    b=resultado;
    console.log(b)
}
