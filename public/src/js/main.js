window.onload = () => {
    const clickme = document.querySelector('#clickme');
    const cookies = document.querySelector('#cookies');
    const showForm = document.querySelector('#showform');
    const formsignin = document.querySelector('#formsignin');
    
    
    clickme.addEventListener('click', hideCookies);
    showForm.addEventListener('click', signIn);
    
    function signIn(){
        formsignin.classList.toggle('show');
    }
    
    function hideCookies(){
        cookies.classList.toggle('hide');
    }
    
    ScrollReveal().reveal('.services', {delay:500});
    ScrollReveal().reveal('.about-us', {delay:500});
    ScrollReveal().reveal('.start-ups', {delay:500});
    ScrollReveal().reveal('.footer', {delay:500});
    }