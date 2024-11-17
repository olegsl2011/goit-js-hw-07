document.addEventListener('DOMContentLoaded', () => {
    const refs = {
        nameInput: document.querySelector('#name-input'),
        nameOutput: document.querySelector('#name-output')
    }

    refs.nameInput.addEventListener('input', (e) => {
        refs.nameOutput.textContent = e.target.value.trim() || 'Anonymous'
    })
})
