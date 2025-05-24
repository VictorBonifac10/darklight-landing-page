let dark = false
const back = document.querySelector("body")
const log = document.querySelector("#logo")
const nameLogo = document.querySelector("#name")
const linkHeader = document.querySelectorAll(".link-top-header")
const botao = document.querySelector("#dark-light")
const img = document.querySelector("#img-darklight")
const paragraph = document.querySelector("p")
const subTitle = document.querySelector("#subtitle")
const titlePrincipal = document.querySelector("#title")
const iconSocial = document.querySelectorAll(".box")


function darkMode() {
    if (dark === false) {
        //liga o modo escuro

        back.style.background = "#272737" //background

        log.src = "./assets/img/logo-yellow.svg" //logo
        nameLogo.style.color = "#fff"

        linkHeader.forEach(linkHeader => { //header
            linkHeader.style.color = "#ffdf56"
        });

        botao.style.color = "#fff"
        botao.style.border = "1.5px solid #ffdf56"

        img.src = "./assets/img/undraw_relaunch-day_k3qo.svg" //img

        paragraph.style.color = "#fff" //textos
        subTitle.style.color = "#fff"
        title.style.color = "#ffdf56"

        iconSocial.forEach(iconSocial => { //icones
            iconSocial.style.background = "#ffdf56"
        });

        dark = true; // agora estamos no modo claro

    } else {
        // VOLTA para o modo claro
        back.style.backgroundColor = "#ffffff";
        log.src = "./assets/img/logo-purple.svg";
        nameLogo.style.color = "#3c3c54";

        linkHeader.forEach(link => {
            link.style.color = "#3c3c54";
        });

        botao.style.color = "#3c3c54"
        botao.style.border = "1.5px solid #a36bf3"

        img.src = "./assets/img/undraw_nature_yf30.svg";

        paragraph.style.color = "#3c3c54";
        subTitle.style.color = "#3c3c54";
        titlePrincipal.style.color = "#a36bf3";

        iconSocial.forEach(icon => {
            icon.style.backgroundColor = "#a36bf3";
        });

        dark = false; // agora estamos no modo escuro
    }

}


