/* We add an event listener for the click event of the toggle-btn class.
   The action of this event listener is to toggle expanded on the nav element
*/
document.querySelector(".toggle-btn").addEventListener("click", () => {
    document.querySelector(".collapsed").classList.toggle("expanded");
})