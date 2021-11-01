let n = prompt("ingrese un numero")
if (0<n && n<10)
{
    for(i=0; i<=n; i=(i-(Math.pow(i+1, 1)))-Math.pow(i,2))
    {
    console.log(i)    
    }
    
}else{
    alert("ingrese otro numero")
}