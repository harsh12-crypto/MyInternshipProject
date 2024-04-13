const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");
const ultraPrice = document.getElementById("ultra-price");


toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `8,000Rs`;
        proPrice.innerHTML = `12,000Rs`;
        ultraPrice.innerHTML = `25,000Rs `;

    }else{
        starterPrice.innerHTML = `9,000Rs `;
        proPrice.innerHTML = '15,000Rs'; 
        ultraPrice.innerHTML = `30,000Rs`;

    }
})