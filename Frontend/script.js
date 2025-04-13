let home = document.querySelector(".home");
let services = document.querySelector(".services");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

function borderHome(){
    services.style.borderBottom = "";
    about.style.borderBottom = "";
    contact.style.borderBottom = "";
    home.style.borderBottom = "3px solid black";
}
function borderServices(){
    home.style.borderBottom = "";
    about.style.borderBottom = "";
    contact.style.borderBottom = "";
    services.style.borderBottom = "3px solid black";
}
function borderAbout(){
    home.style.borderBottom = "";
    services.style.borderBottom = "";
    contact.style.borderBottom = "";
    about.style.borderBottom = "3px solid black";
}
function borderContact(){
    home.style.borderBottom = "";
    services.style.borderBottom = "";
    about.style.borderBottom = "";
    contact.style.borderBottom = "3px solid black";
}

function openChatbot() {
    // Replace the URL below with your actual chatbot link
    window.open('https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/12/11/20250412114555-44TMZL3D.json', '_blank');
  }




  let cards = document.querySelectorAll(".card");
  
        let stackArea = document.querySelector(".stack-area");
  
        function rotateCards() {
          let angle = 0;
          cards.forEach((card, index) => {
            if (card.classList.contains("away")) {
              card.style.transform = `translateY(-120vh) rotate(-48deg)`;
            } else {
              card.style.transform = ` rotate(${angle}deg)`;
              angle = angle - 20;
              card.style.zIndex = cards.length - index;
            }
          });
        }
  
        rotateCards();
  
        window.addEventListener("scroll", () => {
          let distance = window.innerHeight * 0.5;
  
          let topVal = stackArea.getBoundingClientRect().top;
  
          let index = -1 * (topVal / distance + 1);
  
          index = Math.floor(index);
  
          for (i = 0; i < cards.length; i++) {
            if (i <= index) {
              cards[i].classList.add("away");
            } else {
              cards[i].classList.remove("away");
            }
          }
          rotateCards();
        });
