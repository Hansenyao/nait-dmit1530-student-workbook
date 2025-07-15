
/**The code that we have here is kind of generic, adding click event listeners
 * for multiple buttons, where each one has a sibbling that can appear and disappear
 */

const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((toggleButton) => {
    /**Note that when we use the "this" variable, we cannot use arrow functions
     * we replace by an anonymous function. "this" refers to the lement on which the event
     * occurs (also known as the target of the event)
     */
    toggleButton.addEventListener("click", function (event) {
        /*We use stopPropagation to prevent the event from
        prpagating to the parent, in case the parent also a listener for the 
        same event */
        event.stopPropagation(); 
        this.nextElementSibling.classList.toggle("expanded");
    });
});


//The code below is a simpler version that we can use in this case as we have only one such button

/*
const toggleButton= document.querySelector(".toggle-btn");

toggleButton.addEventListener("click",function(event){
    event.stopPropagation();
    this.nextElementSibling.classList.toggle("expanded");
})

*/