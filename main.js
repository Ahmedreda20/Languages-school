const openBar = document.querySelector('.btn-mobile-nav');
const closeBar = document.querySelector('.close-mobile-nav');
const containerBar = document.querySelector('.nav-mobile-container');

openBar.addEventListener('click' , function(){
    containerBar.style.display = "block";
});
closeBar.addEventListener('click' , function(){
    containerBar.style.display = "none";

});