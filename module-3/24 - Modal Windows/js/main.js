const myModal= document.querySelector(".overlay");

window.addEventListener("load",function(){
    /**The setTimeout has 2 arguments- The first one is a function to execute 
     * and the second one is a number of milliseconds after which the function will exercute
     */
    this.setTimeout(function open(event){
        myModal.style.display="block";}, 1000);
    })

    document.querySelector("#close").addEventListener("click", function(){
        myModal.style.display="none";
    })