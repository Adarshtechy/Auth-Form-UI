const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (wrapper.classList.contains('active-popup') && 
        !wrapper.contains(e.target) && 
        e.target !== btnPopup) {
        wrapper.classList.remove('active-popup');
    }
});

// Optional: Press ESC to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapper.classList.contains('active-popup')) {
        wrapper.classList.remove('active-popup');
    }
});