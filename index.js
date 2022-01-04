

// const getFaceId = (expression, params) =>{
//     // let element = document.getElementById('getface')
//     // element.classList.toggle(expression)
//     document.getElementById('getface').className = "face "+ expression
//     params.className = "active"
//     document.getElementsByClassName('active')[0].replace(" active", "")
// }


let btns = document.getElementsByClassName("btn");

//Attach evenlistener to all the 7 buttons
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (ev) {

        //Change the image based on class ex: sad, smile, confused, etc
        document.getElementById('getface').className = "face " + ev.target.value

        //get buttons which are already active and remove it, so that we can attach active class to current button
        let current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "");

        //Add class active to currently selected button
        this.className += " active";
    });
}