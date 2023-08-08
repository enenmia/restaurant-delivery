import {menuArray as menuItems}from './data.js'
import {orderArray}from './data.js'
let orderArea=document.getElementById("order-area")
let Order=document.getElementById("order")
let TtlPriceArea=document.getElementById("ttl-price")
const modal=document.getElementById("modal")
const modalBtn=document.getElementById("modal-btn")
const completeBtn=document.getElementById("complete-btn")
const addBtn=document.getElementById("add-btn")
let Ending=document.getElementById("ending")
let cardDetail=document.getElementById("card-detail")
modalBtn.addEventListener("click",function(){
    modal.classList.remove('show');
    modal.classList.add('hidden');
    order.classList.add('hidden');
    Ending.classList.remove('hidden');
    Ending.classList.add('show');   
})
// declineBtn.addEventListener('mouseenter', function(){
//     modalChoiceBtns.classList.toggle('modal-btns-reverse')
// }) 
let fullName;

cardDetail.addEventListener('submit', function(e){
    e.preventDefault()
    
    const cardDetailData = new FormData(cardDetail)
    fullName = cardDetailData.get('fullName')
    if(fullName){
    Ending.innerHTML=`Thanks, ${fullName}! Your order is on its way!`}
})



document.getElementById('feed').addEventListener('click', function(event) {
    const addButton = event.target.closest('.add-btn');
    if (addButton) {
        // const addName = addButton.dataset.addname;
        // const addPrice = addButton.dataset.addprice;
        // handleAddOrder(addName, addPrice);
        // handleAddTotal(addPrice);

        document.getElementById('order').removeAttribute('hidden'); // Show the "order" area
    }
});

completeBtn.addEventListener("click", function() {
    modal.classList.remove('hidden');
    modal.classList.add('show');
});


// function handleCompleteClick(i){
//     modalBtn.classList.toggle('hidden')
// }
document.addEventListener('click',function(e){
        if (e.target.dataset.addname && e.target.dataset.addprice){
        handleAddOrder(e.target.dataset.addname,e.target.dataset.addprice)
        handleAddTotal(e.target.dataset.addprice)}

})
let total=0;
function handleAddOrder(addname,addprice){

    orderArea.innerHTML+=`
    <div class="order-flex">
    <p>${addname} $${addprice}</p>
    </div>
    `
}
function handleAddTotal(i){
    // let total=0;
    total+=Number(i);
    TtlPriceArea.innerHTML=`
    <p>Total Price $${total}</p>
    `
}


function getFeedHtml(){
    
    let feedHtml=``
    // let orderedHtml=``
    
    menuItems.forEach(function(item){
        // item.forEach(function(orderedItem){
        //     orderedHtml+=`
        //     <p>Your Order</p>
        //     <p>${orderedItem.name}</p>
        //     `
        // })
        feedHtml+=`
            <div class="item-class">
                <img src="images/${item.name}.png" class="item-pic">
                <div class="details">
                    <p class="item-title" id="${item.name}-title">${item.name}</p>
                    <p class="item-ingredients" data-ingredients="${item.id}">${item.ingredients}</p>
                    <p class="item-price" id="${item.name}-price">$<span>${item.price}</span></p>
                </div>
                <img src="images/add-btn.png" class="add-btn" id="add-btn" data-addname="${item.name}" data-addprice="${item.price}">
            </div>

        `
    })
    return feedHtml
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
            // <div class="${item.name}-class">
            //             </div>
            //             <div class="hidden" id= "ordered-${item.id}">
            // ${orderedHtml}
            // </div>