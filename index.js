// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
updatDOM()
});

function updatDOM() {
    document.querySelector('#text').textContent = 'This is really cool!'
}
console.log(document.querySelector('#text'));