function callback(A){
    console.log("it is a callback function");
    A(B,1)
}
function abc(name,sec){
    console.log("Name:",name);
    sec(A)
}

function A(B,b){
    console.log("it is function-A",b)
    B(C,2)
}

function B(C,c){
    console.log("it is function-b",c)
    C(3)
}

function C(d){
    console.log("it is function-c",d)
}

// abc("hero",callback)

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res)=>{
    res.json()
}).then((data)=>{
    console.log(data)
})
