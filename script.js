const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-1", 
    "quad-circle-2", 
    "quad-circle-3", 
    "quad-circle-4",
    "triangle-1", 
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle", 
];

const colors = ["#3d0c6b", "#db0707", "#0b9e10", "#3b8708"];
const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random( ) * shapes.length);
        let j = Math.floor(Math.random( ) * colors.length);
          box.classList.add(shapes[i]);
          box.style.backgroundColor = colors[j];
    });
};


btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);

