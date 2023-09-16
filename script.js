const outputElement=document.getElementById('output');
const btn=document.getElementById('btn');
const numberElement=document.getElementById('number');
const smallElement=document.getElementById('small-letters');
const capitalElement=document.getElementById('cap-letters');
const symbols=document.getElementById('symbols');
const btncopy=document.getElementById('btncopy');
btncopy.addEventListener('click',()=>{
    if(outputElement.value.length>0){
        navigator.clipboard.writeText(outputElement.value)
        alert("Copied To ClipBoard")
    }
    else{
        alert("No Password")
    }
})


let maping=[
{
    ele:numberElement,
    fun:generatenumber
},
{
    ele:smallElement,
    fun:generatesmall
},
{
    ele:capitalElement,
    fun:generatecap
},
{
    ele:symbols,
    fun:generatesymbol
}
]

function generatenumber(){
    let num='0123456789'
    
    return num[Math.floor(Math.random()*num.length)];
}

function generatecap(){
    let cap='ABCDEFGHIJKLMNOPQRSTUVWXYz';

    return cap[Math.floor(Math.random()*cap.length)];
}
function generatesmall(){
    let small='abcdefghijklmnopqrstuvwxyz';

    return small[Math.floor(Math.random()*small.length)];
}
function generatesymbol(){
    let symbol="@#$%^&*()><?|.,";
    return symbol[Math.floor(Math.random()*symbol.length)];
}
console.log(generatesymbol())

btn.addEventListener('click',generatepassword);

function generatepassword(){
    let len=document.getElementById('length').value;
    let p=''
    let valid=maping.filter(({ele})=>ele.checked)
    console.log(valid);
    for(let i=0;i<len;i++){
        let r_index=Math.floor(Math.random()*valid.length)
        let letter=valid[r_index].fun()
        console.log(letter)
        p+=letter
    }
    console.log(p)
    outputElement.value=p
}
