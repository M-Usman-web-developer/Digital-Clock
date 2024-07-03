let time= document.getElementById('timer')
let date = document.getElementById('date')


setInterval(() => {
    let a = new Date()
    let b = new Date()
    time.innerHTML = a.toLocaleTimeString()
    date.innerHTML = b.toLocaleDateString()
}, 1000);
