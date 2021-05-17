const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `Rp 0 <span> / year </span>`;
        proPrice.innerHTML = `Rp 300.000 <span> / year </span>`;
    }else{
        starterPrice.innerHTML = `Rp 0 <span> / month </span>`;
        proPrice.innerHTML = `Rp 30.000 <span> / month </span>`; 
    }
})