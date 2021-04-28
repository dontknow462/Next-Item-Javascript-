

const btn = document.querySelector(".next")
const nam = document.querySelector(".name")
const numba = document.querySelector(".numba")
const img=document.querySelector(".img")
const dta = [{
    name: "Something A",
    number: 47,
    image: "https://cdn.pixabay.com/photo/2020/04/21/06/41/flower-5071405__340.jpg"

},
{
    name: "Something B",
    number: 50,
    image: "https://cdn.pixabay.com/photo/2020/07/06/01/33/sky-5375005__340.jpg"

},
{
    name: "Something C",
    number: 99,
    image: "https://cdn.pixabay.com/photo/2020/09/16/11/48/donkeys-5576167__340.jpg"

},
{
    name:"Something",
    number:1,
    image:"https://cdn.pixabay.com/photo/2021/04/06/19/20/balance-6157258__340.jpg"
}]
let num = 0

function t(person) {
    let item = dta[person]
    nam.textContent = item.name
    numba.textContent = item.number
    img.src=item.image
}
btn.addEventListener("click", () => {
    num++

    if (num > dta.length - 1) {
        num = 0
    }

    t(num)

})



