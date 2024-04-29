const btns = document.querySelectorAll(".btn");
const input=document.querySelector("#screen");
const result=document.querySelector("#ans");
const remove=document.querySelector("#remove");
const deleter=document.querySelector("#delete");
const anti=document.querySelector("#anti");

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        if(input.value=="ERROR"){
            input.value="";
            input.style.textAlign="end";
        }
        input.value+=btn.value;

    });
})


deleter.addEventListener("click",()=>{
    input.value=input.value.slice(0,-1);
})


remove.addEventListener("click",()=>{
    input.value="";
})

result.addEventListener("click",()=>{
    try{

        input.value=eval(input.value);
    }
    catch(error){
        input.value="ERROR";
        input.style.textAlign="center";
    }
})
