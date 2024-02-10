let target = document.querySelectorAll(".btn")
let p1 = document.querySelector(".p1")
target.forEach(prem => {
    prem.addEventListener("click", () => {
        prem.innerText === "Clear" ? p1.innerText = "" :
            prem.innerText === "=" ? p1.innerText = eval(p1.innerText) :
                p1.innerText += prem.innerText
    })
})