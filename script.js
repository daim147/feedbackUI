const panel = document.getElementById("panel-container")

const panelrate = document.querySelector(".rating-container")

const rating = document.querySelectorAll(".rating")

const sendBtn = document.getElementById("send")


let selectRating = 'Satisfied'


panelrate.addEventListener('click', (e)=>{
    if(e.target.parentNode.classList.contains("rating") && e.target.nextElementSibling){
        removeAvtive()
        e.target.parentNode.classList.add("active")
        selectRating = e.target.nextElementSibling.innerHTML
       
    }
})

sendBtn.addEventListener("click", ()=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You</strong>
    <br>
    <strong>FeedBack: ${selectRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeAvtive(){
    for(let i = 0; i < rating.length; i++){
        rating[i].classList.remove("active")
    }
}