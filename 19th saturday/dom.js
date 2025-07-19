document.addEventListener("DOMContentLoaded",function(){
    const body=document.body;
body.append("this is vishnu")
const div1=document.createElement("div");
body.append(div1);
const div2=document.createElement("div");
body.append(div2);
const element=document.getElementById("example");
console.log(element.textContent);
console.log(element.innerText);
const div3=document.createElement("div");
div3.textContent="this is div3";
body.append(div3);



    
});
