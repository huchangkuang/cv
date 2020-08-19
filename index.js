const previewVue = document.querySelector("#preview-vue")
const qrcode = document.querySelector(".QRcode")
console.log(previewVue, qrcode)
previewVue.addEventListener("mouseenter", () => {
    qrcode.classList.add("show")
})
console.log(qrcode.classList)
previewVue.addEventListener("mouseleave", () => {
    if (Array.from(qrcode.classList).indexOf("show") >= 0) {
        qrcode.classList.remove("show");
    }
})