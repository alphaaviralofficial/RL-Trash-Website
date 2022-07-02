function getData(){
    httpGetAsync(c);
}

function c(text){
    const data = JSON.parse(text);
    document.getElementById("div1").innerHTML = "First Dustbin : "+data.a;
    document.getElementById("div2").innerHTML = "Second Dustbin : "+data.b;
}


function httpGetAsync(callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", 'https://flutter-f8ded-default-rtdb.firebaseio.com/dustbin.json', true); // true for asynchronous 
    xmlHttp.send(null);
}