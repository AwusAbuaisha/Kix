const slot1 = document.querySelector(".slot1")
const modal1 = document.getElementById("modal1")
const backBtn1 = document.querySelector(".BackBtn1")
const slotContainer = document.querySelector(".grid-container")
const modalContainer = document.querySelector(".modals")

// slot1.addEventListener("click", ()=>{
//  modal1.style.opacity = '0%'
//  modal1.style.display = 'block'
//  setTimeout(()=>{
//   modal1.style.opacity = '100%'
//  }, 0)
 
// })

// backBtn1.addEventListener("click", ()=>{
//  modal1.style.opacity = '0'
//  setTimeout(()=>{
//   modal1.style.display = 'none'
//  }, 1000)
// })

//----Testing
//   |
//  |
// v

let products = []
let productElements = []
let productModalElements = []
let backBtns = []
let purchaseBtns = []
products.push(
 {
  "name":"Jordan 4 Retro Motorsport", 
  "description":"The Air Jordan 4 Retro Motorsports 2017 was inspired by a friends and family colorway of 2006 made for the fourth anniversary of MJ's Motorsports Racing squad.",
  "image":"IMG/j4-1.png"
 },
 {
  "name": "Jordan 4 Retro White Cement",
  "description":"The Air Jordan 4 Retro White Cement 2016 features the classic 1989 colorway White/Fire Red/Black/Tech Gray.",
  "image":"IMG/j4-2.png"
 },
 {
  "name": "Jordan 4 University Blue",
  "description":"The Air Jordan 4 “University Blue” is a brand new colorway of Michael Jordan's fourth signature shoe that released in 2021.",
  "image":"IMG/j4-3.png"
 },
 {
  "name": "Jordan 4 University Blue",
  "description":"The Air Jordan 4 “University Blue” is a brand new colorway of Michael Jordan's fourth signature shoe that released in 2021.",
  "image":"IMG/j4-3.png"
 },
 {
  "name": "Jordan 4 'Cactus Jack'",
  "description":"pays tribute to the city's bygone football team with a Durabuck leather upper dressed in University Blue and a Varsity Red insole.",
  "image":"IMG/j4-4.png"
 },
 {
  "name": "Jordan 4 'Alternate 89'",
  "description":"The Air Jordan 4 Retro 'Alternate 89' features a design based on the Chicago Bulls' white and red home uniform.",
  "image":"IMG/j4-5.png"
 },
 {
  "name": "Jordan 4 Black Cat",
  "description":"Offered in several colorways, the Jordan Black Cat sneaker was initially launched in Bred colorway. The Jordan Black Cat Bred has a Black and Red combination with hits of glow-in-the-dark green at the sole.",
  "image":"IMG/j4-6.png"
 },
)
for(let i = 0; i < products.length; i++){
 let pElement = document.createElement("div")
 let pImg = document.createElement("img")
 let pName = document.createElement("h2")
 pImg.src = products[i].image
 pName.innerHTML = products[i].name
 pElement.className = 'testSlot'
 pElement.appendChild(pImg)
 pElement.appendChild(pName)
 productElements.push(pElement)

 let pModal = document.createElement("div")
 let pModalName = document.createElement("h1")
 let pModalImg = document.createElement("img")
 let pModalDescription = document.createElement("h2")
 let pModalPurchaseBtn = document.createElement("button")
 let pModalBackBtn = document.createElement("button")
 pModalImg.src = products[i].image
 pModalName.innerHTML = products[i].name
 pModalDescription.innerHTML = products[i].description
 pModalPurchaseBtn.innerHTML = 'Purchase'
 pModalBackBtn.innerHTML = 'Back'
 pModalPurchaseBtn.className = 'PurchaseBtn1'
 pModalBackBtn.className = 'BackBtn1'
 pModal.id = "modal1"
 pModal.appendChild(pModalName)
 pModal.appendChild(pModalImg)
 pModal.appendChild(pModalDescription)
 pModal.appendChild(pModalPurchaseBtn)
 pModal.appendChild(pModalBackBtn)
 backBtns.push(pModalBackBtn)
 purchaseBtns.push(pModalPurchaseBtn)
 productModalElements.push(pModal)
}

for (let i = 0; i < productElements.length; i++){
 slotContainer.appendChild(productElements[i])
 for (let j = 0; j < productModalElements.length; j++){
  modalContainer.appendChild(productModalElements[j])
  productElements[j].addEventListener("click", ()=>{
   productModalElements[j].style = "#modal1 img{filter: drop-shadow(30px 20px 20px #000);}#modal1 h1{color: white;text-align: center;font-size: 60px;margin: 10px;text-shadow: 5px 5px 0 #555;}#modal1 h2{color: white;text-align: center;font-size: 30px;margin: 10px;text-shadow: 5px 5px 0 #555;}#modal h1 span{font-size: 60px;margin: 10px; }"
   productModalElements[j].style.opacity = '0%'
   productModalElements[j].style.display = 'block'
   setTimeout(()=>{
    productModalElements[j].style.opacity = '100%'
   }, 0)
  })
  for (let k = 0; k < backBtns.length; k++){
   backBtns[k].addEventListener("click", ()=>{
    productModalElements[j].style.opacity = '0'
    setTimeout(()=>{
     productModalElements[j].style.display = 'none'
    }, 1000)
   })
  }
 }
}
