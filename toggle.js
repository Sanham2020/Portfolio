let menu = document.getElementById("menu_icon")
menu_icon.addEventListener("click",function(){
    let nav_bar = document.getElementById("anchor")
    nav_bar.classList.toggle("fa-solid fa-bars")
    console.log(nav_bar)
})

// // Function to toggle the bar
// function geeksforgeeks() {
//     let x = document.getElementById("menu_icon");
     
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }
 
// Function to toggle the plus menu into minus
// function myFunction(x) {
//     x.classList.toggle("fa-minus-circle");
// }

