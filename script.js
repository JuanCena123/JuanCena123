function clipboard() {
    var text = document.getElementById("email-text").innerText;
    text.select();
    navigator.clipboard.writeText(text.value);
}
