function convert() 
{
    var temp = document.getElementById("select");
    var valueSelected = temp.value;
    if (valueSelected == "m")
     {
        var convertC = mToc();
        var convertK = mTok();
        return document.getElementById("result").value=convertC +"c"+ "=" +convertK +"k";
    }
    else if (valueSelected == "c")
     {
        var convertK = cTok();
        var convertM = cTom();
        return document.getElementById("result").value=convertK +"k"+ "=" +convertM +"m";
    }
    else if (valueSelected == "k") 
    {
        var convertC = kToc();
        var convertM = kTom();
        return document.getElementById("result").value=convertC +"c"+ "=" +convertM +"m";
    }
    function mToc()
    {
        var M=document.getElementById("initial").value;
        return M/100;
    }
    function mTok()
    {
        var M=document.getElementById("initial").value;
        return M*1000;
    }
    function cTom()
    {
        var C=document.getElementById("initial").value;
        return C*100;
    }
    function cTok()
    {
     
        var C=document.getElementById("initial").value;
        return C*1000;
    }   
    function kToc()
    {
     
        var K=document.getElementById("initial").value;
        return K/1000;
    }   
    function kTom()
    {
     
        var K=document.getElementById("initial").value;
        return K/1000;
    }   

    }
