const counter = 0;

window.addEventListener("DOMContentLoaded", move = () => {
    if(counter === 0){
        j = 1;
        const element = document.querySelector(".progress-done");
        let width = 50;
        let main = setInterval(frame, 50);

        function frame() {
            if(width >= 80) {
                clearInterval(main);
            }else {
                width++;
                element.style.width = width + "%";
                element.innerHTML = width + "%";
            }
        }
    }
});