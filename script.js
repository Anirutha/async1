var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

div.append(input,button,active,deaths,recovered);
document.body.append(div);

async function foo(){
    try{
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/total/dayone/country/${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    let index=res2.length-1;
    console.log(res2[index].Active);
    active.innerHTML=`Total Active Cases: ${res2[index].Active}`;
    let index1=res2.length-1;
    console.log(res2[index1].Deaths);
    deaths.innerHTML=`Total Deaths Cases: ${res2[index1].Deaths}`;
    let index2=res2.length-1;
    console.log(res2[index2].Recovered);
    recovered.innerHTML=`Total Recovered Cases: ${res2[index2].Recovered}`;    
    }
    catch(error){
    console.log(error);
    }
}