document.querySelectorAll('.clients__block img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop_up').style.display = 'block';
        document.querySelector('.pop_up img').src = img.getAttribute('src');
    }
});

document.querySelector('.pop_up img').onclick = () => {
    document.querySelector('.pop_up').style.display = 'none';
}