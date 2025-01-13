console.log("bad js executed")

const email = document.getElementById("email")
const password = document.getElementById("password")

console.log("email", email)
console.log("password", password)

email.addEventListener("input", (e) => {
    console.log(e.target.value)
})

password.addEventListener("input", (e) => {
    console.log(e.target.value)
})

