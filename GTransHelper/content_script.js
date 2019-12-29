console.log('GTransHelper 0.1 launched.')
textarea = document.getElementById('source')
textarea.addEventListener('input', onSourceInput)

function onSourceInput() {
    textarea.value = textarea.value.replace(/\n/g, '')
}