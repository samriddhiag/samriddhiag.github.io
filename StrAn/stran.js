function myjavasc()
{
    var variable=document.getElementById("Takestr").value;
    var V="AEIOUaeiou";
    var N="0123456789";
    var C="BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz"
    var vcount=0;
    var ncount=0;
    var ccount=0;
    var schcount=0;
    var spcount=0;
    for(i=0;i<variable.length;i++)
    {
        if(V.indexOf(variable[i])!=-1)
        vcount+=1;
        else if(variable[i]==' ')
        spcount+=1
        else if(N.indexOf(variable[i])!=-1)
        ncount+=1;
        else  if(C.indexOf(variable[i])!=-1)
        ccount+=1;
        else
        schcount+=1;
    }
    document.getElementById("vow").textContent=vcount;
    document.getElementById("conso").textContent=ccount;
    document.getElementById("no").textContent=ncount;
    document.getElementById("sp").textContent=spcount;
    document.getElementById("splch").textContent=schcount;
    
}