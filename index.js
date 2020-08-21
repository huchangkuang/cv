const previewVue = document.querySelector("#preview-vue")
const qrcode = document.querySelector(".account_vue")
const width = document.documentElement.clientWidth
function previewQrCode(target, show) {
    target.addEventListener("mouseenter", () => {
        show.classList.add("show")
    })
    target.addEventListener("mouseleave", () => {
        if (Array.from(show.classList).indexOf("show") >= 0) {
            show.classList.remove("show");
        }
    })
}
if (width > 500) {
    previewQrCode(previewVue, qrcode)
}