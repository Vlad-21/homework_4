let userLinks = [
    {
        title: "First website:",
        url: null,
    },
    {
        title: "Second website:",
        url: null,
    },
    {
        title: "Third website:",
        url: null,
    },
];
let myLinks = [
    {
        title: "First website:",
        url: 'facebook.com',
    },
    {
        title: "Second website:",
        url: 'instagram.com',
    },
    {
        title: "Third website:",
        url: 'youtube.com',
    },
];
let fontModel = ['Gill Sans', 'sans-serif', 'cursive', 'system-ui'];
let titlePositionModel = [
    {
        name: 'Left',
        position: 'flex-start'
    },
    {
        name: 'Center',
        position: 'center'
    },
    {
        name: 'Right',
        position: 'flex-end'
    },
];



checkUserWebsites();
openSettings();

function checkUserWebsites() {
    let container = document.querySelector('.main__head__text__links');
    let question = confirm("Сould you please write your 3 favorite sites?");
    if (question) {
        createLinksHelper(userLinks, true, container);
    } else {
        alert("Okay! Then I offer you my own!");
        createLinksHelper(myLinks, false, container);
    }
};


function openSettings() {
    let popupClass = '.c_popup__container';
    let [
        body,
        popup,
        colorButtonContainer,
        fontButtonContainer,
        closeButton,
        titlePositionButton,
        title,
    ] = getElementHelper([
        'body',
        '#popup',
        `${popupClass}__background__container`,
        `${popupClass}__font-type__container`,
        `${popupClass}__close`,
        `${popupClass}__title-position__container`,
        '.main__head__title-cont',
    ]);
    popup.style.display = "flex";
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    changeBackgroundColor(body, colorButtonContainer);
    changeFontPage(body, fontButtonContainer, fontModel);
    changeTitlePosition(title, titlePositionButton, titlePositionModel);
    changeColorForLinks();
    changeMainText();
    changeMarkInList();
}

function changeBackgroundColor(bodyElement, element) {
    let colorButton = document.createElement('input');
    colorButton.className = 'c_popup__container__background__container__input';
    colorButton.value = '#ffffff';
    colorButton.type = "color";
    colorButton.addEventListener('input', (event) => {
        bodyElement.style.background = event.target.value;
    });
    element.appendChild(colorButton);
}

function changeFontPage(bodyElement, element, array) {
    for (let item of array) {
        let fontButton = document.createElement('div');
        fontButton.className = 'c_popup__container__font-type__container--item';
        fontButton.innerText = 'AaBbCc';
        fontButton.style.fontFamily = item;
        fontButton.addEventListener('click', () => {
            bodyElement.style.fontFamily = item;
        })
        element.appendChild(fontButton);
    }
}

function changeTitlePosition(bodyElement, element, array) {
    for (let item of array) {
        let positionButton = document.createElement('div');
        positionButton.className = 'c_popup__container__title-position__container--item';
        positionButton.innerText = item.name;
        positionButton.addEventListener('click', () => {
            bodyElement.style.alignItems = item.position;
        })
        element.appendChild(positionButton);
    }
}

function changeColorForLinks() {
    let elementArray = [
        {
            name: 'Paragraph Color',
            value: 'main__head__text',
        },
        {
            name: 'Text color',
            value: 'main__head__text__links'
        },
        {
            name: 'Link color',
            value: 'main__head__text__links__link'
        }
    ];
    let buttonContainer = document.querySelector('.c_popup__container__change-link-color__container');
    for (let item of elementArray) {
        let inputContainer = document.createElement('div');
        inputContainer.className = 'c_popup__container__change-link-color__container__item';
        let input = document.createElement('input');
        let text = document.createElement('p');
        text.className = 'c_popup__container__change-link-color__container__item--text';
        text.innerText = item.name;
        input.type = "color";
        input.className = "c_popup__container__change-link-color__container__item--input";
        input.name = item.name;
        input.placeholder = item.name;
        input.value = '#c0c0c0';
        input.addEventListener('input', (event) => {
            if (item.value === 'main__head__text') {
                let element = document.querySelector(`.${item.value}`);
                element.style.background = event.target.value;
                return;
            } else if (item.value === 'main__head__text__links__link') {
                let elements = document.querySelectorAll(`.${item.value}`);
                elements.forEach((links) => {
                    links.style.color = event.target.value;
                })
            } else {
                let element = document.querySelector(`.${item.value}`);
                element.style.color = event.target.value;
            }
        });
        inputContainer.appendChild(text);
        inputContainer.appendChild(input);
        buttonContainer.appendChild(inputContainer);
    }
}


function changeMainText() {
    let [
        inputColor,
        inputSize,
        inputWeight,
        mainText,
    ] = getElementHelper([
        '.c_popup__container__change-main-text--container__item__color',
        '.c_popup__container__change-main-text--container__item__size',
        '.c_popup__container__change-main-text--container__item__weight',
        '.main__text',
    ]);
    inputColor.addEventListener('input', (event) => {
        mainText.style.color = event.target.value;
    });
    inputSize.addEventListener('input', (event) => {
        mainText.style.fontSize = `${event.target.value}px`;
    });
    inputWeight.addEventListener('input', (event) => {
        mainText.style.fontWeight = event.target.value;
    });
}


function changeMarkInList() {
    let marksModel = [
        {
            name: 'Circle',
            value: 'circle'
        },
        {
            name: 'Square',
            value: 'square'
        },
        {
            name: 'Upper Roman',
            value: 'upper-roman'
        },
        {
            name: 'Lower Alpha',
            value: 'lower-alpha'
        },
        {
            name: 'Disc',
            value: 'disc',
        },
        {
            name: 'Number',
            value: 'number',
        }
    ];
    let list = document.querySelector('ul');
    let container = document.querySelector('.c_popup__container__change-mark-for-list__container');
    for (let item of marksModel) {
        let button = document.createElement('div');
        button.className = 'c_popup__container__change-mark-for-list__container--item';
        button.innerText = item.name;
        button.addEventListener('click', () => {
            list.style.listStyleType = item.value;
        });
        container.appendChild(button);
    }
}


function getElementHelper(array) {
    let result = [];
    for (let item of array) {
        result.push(document.querySelector(item));
    };
    return result;
}

function createLinksHelper(array, withQuestion, container) {
    for (let item of array) {
        if (withQuestion) {
            item.url = prompt(`${item.title}`);
        };
        let a = document.createElement('a');
        a.className = "main__head__text__links__link";
        a.innerText = item.url;
        a.href = `https://${item.url}`;
        a.target = "blank"
        container.appendChild(a);
    }
}