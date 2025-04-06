document.querySelectorAll('.clients__block img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop_up').style.display = 'flex';
        document.querySelector('.pop_up img').src = img.getAttribute('src');
    }
});

document.querySelector('.pop_up').onclick = () => {
    document.querySelector('.pop_up').style.display = 'none';
}