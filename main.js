// Get Variables

let questions = document.querySelectorAll(".faq-side .question .title");

questions.forEach(q => {
  q.onclick = function(e) {
    e.target.parentElement.parentElement.classList.toggle('show')
  }
})