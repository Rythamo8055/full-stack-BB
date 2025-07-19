const body=document.body;
body.append("this is vishnu")
const div1=document.createElement("div");
body.append(div1);
const div2=document.createElement("div");
body.append(div2);
//console.log(document.getElementById("name").textContent); 
//console.log(document.getElementById("age").textContent);
const element=document.getElementById("example");
console.log(element.textContent);
console.log(element.innerText);
const div3=document.createElement("div");
div3.textContent="this is div3";
body.append(div3);



// const spanhi=document.getElementById("#hi");
const spanhi=document.querySelector("#hi");
const spanbye=document.querySelector("#bye");

spanbye.remove();
spanbye.style.color="red";

spanbye.style.color="red";
spanhi.remove();
spanhi.getAttribute("id");