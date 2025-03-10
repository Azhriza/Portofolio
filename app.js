const garis = document.querySelector("#garis")
const menu = document.querySelector("#menu")
const hLinks = document.querySelectorAll(".hLinks")

garis.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  garis.classList.toggle("bg-white")
})

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    garis.classList.toggle("bg-white")
  })
})
