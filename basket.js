let sum = 0;
document.body.addEventListener("click", function (e) {
    console.log(e.target.dataset)
    if (e.target.classList.contains('but_del')) {
        localStorage.removeItem(e.target.dataset.name, e.target.dataset.cost);

        document.getElementById("basket").innerHTML = ""
        let sum_basket2 = 0
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            sum_basket2 = sum_basket2 + Number(localStorage.getItem(key))
            document.getElementById("basket").innerHTML += `${key} : ${localStorage.getItem(key)} <button class='but_del' data-name="${key}" data-cost="${localStorage.getItem(key)}">удалить</button>` + "<br>"

        }
        document.getElementById("cost").innerHTML = sum_basket2
    }
})
let sum_basket = 0
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    sum_basket = sum_basket + Number(localStorage.getItem(key))
    document.getElementById("basket").innerHTML += `${key} : ${localStorage.getItem(key)} <button class='but_del' data-name="${key}" data-cost="${localStorage.getItem(key)}">удалить</button>` + "<br>"

}
document.getElementById("cost").innerHTML = sum_basket
document.body.querySelector(".but2").onclick = () => {
    let send = localStorage
    console.log(Object.entries(send).map(([k, v]) => `${k}: ${v}`).join(', '))
    window.location.href = `mailto:kohnev84@gmail.com?cc=igordg@mail.ru&subject=ваш заказ&body=${Object.entries(send).map(([k, v]) => `${k}: ${v}`).join(', ')}`
}
