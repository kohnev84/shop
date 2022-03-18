let sum = 0;
document.body.addEventListener("click", function (e) {
    console.log(e.target)
    console.log(e.target.dataset)

    if (e.target.classList.contains("add")) {
        console.log(e.target.dataset.name)
        console.log(e.target.dataset.cost)
        sum = +e.target.dataset.cost + sum;
        document.getElementById("cost").innerHTML = sum
        localStorage.setItem(e.target.dataset.name, e.target.dataset.cost);
    }
})



