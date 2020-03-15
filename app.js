document.querySelectorAll('.heart').forEach(button => button.addEventListener('click', (e) => {
    button.classList.toggle('liked')
}))