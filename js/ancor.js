const ancors = document.querySelectorAll('a[href*="#"]')

for (let ancor of ancors) {
    ancor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = ancor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}