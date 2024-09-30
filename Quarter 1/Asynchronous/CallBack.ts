function Washing(callback: ()=> void){
    console.log("Washing started...");
    setTimeout(()=>{
    console.log("Washing completed");
    callback();
    }, 6000);
    
}
function Soaking(callback: ()=> void){
    console.log("Soaking started...");
    setTimeout(()=>{
        console.log("Soaking completed");
        callback();
    }, 4000);
    
}

function Drying(){
    console.log("Drying started...");
setTimeout(()=>{
    console.log("Drying Completed");
},4000)}
Washing(()=>{
    Soaking(()=>{
     Drying();
})});