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

cardInner.style.scale = valueAtPercentage({
  from: 1,
  to: toScale + 0.05, // reduce scale down factor
  percentage: percentageY
})

cardInner.style.filter = `brightness(${valueAtPercentage({
  from: 1,
  to: 0.85, // reduce dimming
  percentage: percentageY
})})`

  