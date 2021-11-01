let y = prompt("ingrese un numero")
for(let i=0; i<=y; i=i+1)
{
    while(y%i==0)
    {
       console.log(i)
    }
    console.log(y)
}