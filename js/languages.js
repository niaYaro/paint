const languageBox = document.querySelector('.language');
languageBox.innerHTML += 
`<div class="flags-box">
    <img class="flag-general" id="uk" src="img/uk-flag-icon.svg" alt="">
    <img class="flag-general" id="ua" src="img/ua-flag-icon.svg" alt="">
    <img class="flag-general" id="fr" src="img/fr-flag-icon.svg" alt="">
    <img class="flag-general" id="es" src="img/es-flag-icon.svg" alt="">
</div>
<div class="language-arrow-down">
    <img src="img/arrow-down-black-icon.svg" alt="">
</div>`

const languageChangingButton = document.querySelector('.language-arrow-down');
languageChangingButton.addEventListener('click', changeLanguage);

function changeLanguage () {
    languageBox.classList.toggle('narrow');
    languageBox.classList.toggle('expand');
}

const flags =document.querySelector('.flags-box');

const ukLanguage = document.getElementById('uk');
const uaLanguage = document.getElementById('ua');
const frLanguage = document.getElementById('fr');
const esLanguage = document.getElementById('es');

const flagsArray = [ukLanguage, uaLanguage, frLanguage, esLanguage];

ukLanguage.addEventListener('click', chooseUk);
uaLanguage.addEventListener('click', chooseUa);
frLanguage.addEventListener('click', chooseFr);
esLanguage.addEventListener('click', chooseEs);

function chooseUa () {
    languageBox.innerHTML = ''; 
    languageBox.innerHTML += 
`<div class="flags-box">
    <img class="flag-general" id="ua" src="img/ua-flag-icon.svg" alt="" onclick="chooseUa ()">
    <img class="flag-general" id="uk" src="img/uk-flag-icon.svg" alt="" onclick="chooseUk ()">
    <img class="flag-general" id="fr" src="img/fr-flag-icon.svg" alt="" onclick="chooseFr ()">
    <img class="flag-general" id="es" src="img/es-flag-icon.svg" alt="" onclick="chooseEs ()">
</div>
<div class="language-arrow-down" onclick="changeLanguage ()">
    <img src="img/arrow-down-black-icon.svg" alt="">
</div>`;
    languageBox.classList.toggle('narrow');
    languageBox.classList.toggle('expand');
}
function chooseFr () {
    languageBox.innerHTML = ''; 
    languageBox.innerHTML += 
`<div class="flags-box">
    <img class="flag-general" id="fr" src="img/fr-flag-icon.svg" alt="" onclick="chooseFr ()">
    <img class="flag-general" id="ua" src="img/ua-flag-icon.svg" alt="" onclick="chooseUa ()">
    <img class="flag-general" id="uk" src="img/uk-flag-icon.svg" alt="" onclick="chooseUk ()">
    <img class="flag-general" id="es" src="img/es-flag-icon.svg" alt="" onclick="chooseEs ()">
</div>
<div class="language-arrow-down" onclick="changeLanguage ()">
    <img src="img/arrow-down-black-icon.svg" alt="">
</div>`;
    languageBox.classList.toggle('narrow');
    languageBox.classList.toggle('expand');
}
function chooseEs () {
    languageBox.innerHTML = ''; 
    languageBox.innerHTML += 
`<div class="flags-box">
    <img class="flag-general" id="es" src="img/es-flag-icon.svg" alt="" onclick="chooseEs ()">
    <img class="flag-general" id="ua" src="img/ua-flag-icon.svg" alt="" onclick="chooseUa ()">
    <img class="flag-general" id="uk" src="img/uk-flag-icon.svg" alt="" onclick="chooseUk ()">
    <img class="flag-general" id="fr" src="img/fr-flag-icon.svg" alt="" onclick="chooseFr ()">
</div>
<div class="language-arrow-down" onclick="changeLanguage ()">
    <img src="img/arrow-down-black-icon.svg" alt="">
</div>`;
    languageBox.classList.toggle('narrow');
    languageBox.classList.toggle('expand');
}
function chooseUk () {
    languageBox.innerHTML = ''; 
    languageBox.innerHTML += 
`<div class="flags-box">
    <img class="flag-general" id="uk" src="img/uk-flag-icon.svg" alt="" onclick="chooseUk ()">
    <img class="flag-general" id="ua" src="img/ua-flag-icon.svg" alt="" onclick="chooseUa ()">
    <img class="flag-general" id="fr" src="img/fr-flag-icon.svg" alt="" onclick="chooseFr ()">
    <img class="flag-general" id="es" src="img/es-flag-icon.svg" alt="" onclick="chooseEs ()">
</div>
<div class="language-arrow-down" onclick="changeLanguage ()">
    <img src="img/arrow-down-black-icon.svg" alt="">
</div>`;
    languageBox.classList.toggle('narrow');
    languageBox.classList.toggle('expand');
}