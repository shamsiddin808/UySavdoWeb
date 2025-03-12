let selects = document.querySelector('.language-select')


selects.addEventListener('change', function () {

    const selectedLanguage = this.value

    if (selectedLanguage === "RU") {
        window.location.href = "./LangRu.html";
    }
    if (selectedLanguage === "UZ") {
        window.location.href = "index.html";
    }
    if (selectedLanguage === "EN") {
        window.location.href = "./LangEng.html";
    }
    if (selectedLanguage === "TUR") {
        window.location.href = "./LangеTur.html";
    }

})

function updateFlag() {
    const selectElement = document.getElementById("selectLanguage");
    const selectedOption =
        selectElement.options[selectElement.selectedIndex];
    const flagIcon = document.getElementById("flagIcon");

    flagIcon.src = selectedOption.getAttribute("data-flag");
}

updateFlag();