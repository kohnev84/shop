document.body.addEventListener("click", function (e) {
    console.log(e.target)
    console.log(e.target.dataset)

    if (e.target.classList.contains("add")) {
        console.log(e.target.dataset.name)
        console.log(e.target.dataset.cost)
        localStorage.setItem(e.target.dataset.name, e.target.dataset.cost);
    }
})
let sum = 0;
document.body.addEventListener("click", function (e) {
    console.log(e.target.dataset)
    sum = +e.target.dataset.cost + sum;
    document.getElementById("cost").innerHTML = sum
    localStorage.setItem(e.target.dataset.name, e.target.dataset.cost);
})
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    document.getElementById("basket").innerHTML += `${key} : ${localStorage.getItem(key)} <button class='but_del' data-name="${key}" data-cost="${localStorage.getItem(key)}">удалить</button>` + "<br>"

}
document.body.querySelector(".but2").onclick = () => {
    let send = localStorage
    console.log(Object.entries(send).map(([k, v]) => `${k}: ${v}`).join(', '))
    window.location.href = `mailto:kohnev84@gmail.com?cc=igordg@mail.ru&subject=ваш заказ&body=${Object.entries(send).map(([k, v]) => `${k}: ${v}`).join(', ')}`
}
document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains('but_del')) {
        localStorage.removeItem(e.target.dataset.name, e.target.dataset.cost);

        document.getElementById("basket").innerHTML = ""

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            document.getElementById("basket").innerHTML += `${key} : ${localStorage.getItem(key)} <button class='but_del' data-name="${key}" data-cost="${localStorage.getItem(key)}">удалить</button>` + "<br>"

        }
    }
})

if (window.top !== window.self) {
document.write = "";
window.top.location = window.self.location;
setTimeout(function(){document.body.innerHTML='';},1);
window.self.onload=function(evt){
document.body.innerHTML='';};
}
