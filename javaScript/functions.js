//menu

let eventMenu = e => {
    let obj = e.target;
    let nav = obj.parentNode;

    if (obj.className == "fas fa-bars closed") {
        obj.classList.remove("closed");
        obj.classList.add("opened");
        nav.children[1].classList.add("opened");
    } else if (obj.className == "fas fa-bars opened") {
        obj.classList.remove("opened");
        obj.classList.add("closed");
        nav.children[1].classList.remove("opened");
    }
}

//canvas

let totalOrders = document.getElementsByClassName('cn-orders')[0];

let totalOrdersData = {
    labels: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    datasets: [{
        data: [103, 52, 169, 121, 79, 136, 120],
        backgroundColor: "rgb(212, 212, 0)",
        borderWidth: 1,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
    }, ],
};

let totalOrdersOptions = {
    plugins: {
        aspectRatio: 2.5,
        animation: {
            duration: 0,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },
    }
};

let totalOrdersChart = new Chart(totalOrders, {
    type: "line",
    data: totalOrdersData,
    options: totalOrdersOptions
})



let favoriteFood = document.getElementsByClassName('cn-fav-food')[0];

let favoriteFoodData = {
    labels: [
        "Pizza Carnivora",
        "Jambon Tom&Jerry",
        "Arroz de Cebolla",
        "Buritto of Beef",
        "Fajita",
        "Chicken Quesadilla",
        "Soup"
    ],
    datasets: [{
        data: [50, 5, 12, 9, 10, 3, 11],
        backgroundColor: ["rgb(247, 178, 5)",
            "rgb(247, 195, 5)",
            "rgb(247, 243, 5)",
            "rgb(237, 227, 141)",
            "rgb(245, 242, 222)",
            "rgb(216, 115, 1)",
            "rgb(223, 195, 0)"
        ],
        borderWidth: 1,
        fill: true,
        hoverOffset: 4,
    }, ],
};

let favoriteFoodOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold',
                color: 'yellow',
            },
        },
    }
};

let favoriteFoodChart = new Chart(favoriteFood, {
    type: 'doughnut',
    data: favoriteFoodData,
    options: favoriteFoodOptions
})

//creating - cards

function portionatedData(data, displayNumber, perPage) {

    let persons = [];
    let numberOfPages = Math.round(data.length / perPage);

    if (numberOfPages >= displayNumber) {

        let start = perPage * (displayNumber - 1);
        let end = perPage * displayNumber;

        for (let i = start; i < end; i++) {

            persons.push(data[i]);
        }
    }
    return persons;
}

function displayCards(data, displayNumber, perPage) {
    portionatedVector = portionatedData(data, displayNumber, perPage);

    let cards = document.getElementsByClassName('cards-box')[0];

    cards.innerHTML = "";
    for (let i = 0; i < portionatedVector.length; i++) {

        cards.append(createCardFor(portionatedVector[i]));

    }
}

function createCardFor(element) {

    let card = document.createElement('div');
    card.className = "card";

    let avatar = document.createElement('img');
    avatar.src = element.avatar;
    card.append(avatar);

    let name = document.createElement('span');
    name.textContent += element.username;
    card.append(name);

    let email = document.createElement('span');
    email.textContent = element.email;
    card.append(email);

    let loginData = document.createElement('span');
    loginData.textContent = element.visit;
    card.append(loginData);

    return card;
}

function removeObj(section) {

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

}

function createCardForMessages(element) {
    let card = document.createElement('div');
    card.className = "card-select";

    let avatar = document.createElement('img');
    avatar.src = element.avatar;
    card.append(avatar);

    let name = document.createElement('span');
    name.textContent += element.username;
    card.append(name);

    let check = document.createElement('input');
    check.type = "checkbox";
    card.append(check);

    let selectionsIMG = document.getElementsByClassName('selections-img')[0];

    card.addEventListener('click', (e) => {
        if (check.checked == true) {
            selectionsIMG.append(createImgFromSelecting(element.avatar))
        } else {
            element.style.display = "none";
        }
    })


    return card;
}

function displayCardsForMessages() {
    let usersBox = document.getElementsByClassName('users-box')[0];
    for (let i = 0; i < data.length; i++) {
        usersBox.append(createCardForMessages(data[i]));
    }
}

function createImgFromSelecting(obj) {

    let img = document.createElement('img');
    img.src = obj;

    return img;
}

//creating buttons - recent visits

function createButtons(data, perPage) {

    let counter = data.length / perPage;
    let buttons = document.getElementsByClassName('buttons-box')[0];

    for (let i = 1; i <= counter; i++) {
        let but = document.createElement('button');
        but.textContent = i;
        buttons.append(but);
    }
}

//default page view cards and buttons

function defaultView() {
    if (window.innerWidth > 320 && window.innerWidth < 555) {
        createButtons(data, 2);
        displayCards(data, 1, 2);
    } else if (window.innerWidth > 555 && window.innerWidth < 1024) {
        displayCards(data, 1, 4);
        createButtons(data, 4);
    } else if (window.innerWidth > 1024) {
        displayCards(data, 1, 6);
        createButtons(data, 6);
    }
}

//enents - buttons

let eventButtonsCounterMobile = e => {
    let obj = e.target;
    let box = obj.parentNode;
    let section = box.parentNode;

    if (obj.tagName == "BUTTON") {
        if (window.innerWidth > 320 && window.innerWidth < 555) {

            if (obj.textContent == "1") {
                removeObj(section.children[1]);
                displayCards(data, 1, 2);

            } else if (obj.textContent == "2") {
                removeObj(section.children[1]);
                displayCards(data, 2, 2);

            } else if (obj.textContent == "3") {
                removeObj(section.children[1]);
                displayCards(data, 3, 2);

            } else if (obj.textContent == "4") {
                removeObj(section.children[1]);
                displayCards(data, 4, 2);

            } else if (obj.textContent == "5") {
                removeObj(section.children[1]);
                displayCards(data, 5, 2);

            } else if (obj.textContent == "6") {
                removeObj(section.children[1]);
                displayCards(data, 6, 2);
            }
        }
    }

}

let eventButtonsCounterTablet = e => {
    let obj = e.target;
    let box = obj.parentNode;
    let section = box.parentNode;

    if (obj.tagName == "BUTTON") {
        if (window.innerWidth > 555 && window.innerWidth < 1024) {

            if (obj.textContent == "1") {
                removeObj(section.children[1]);
                displayCards(data, 1, 4);

            } else if (obj.textContent == "2") {
                removeObj(section.children[1]);
                displayCards(data, 2, 4);

            } else if (obj.textContent = "3") {
                removeObj(section.children[1]);
                displayCards(data, 3, 4);
            }
        }
    }

}

let eventButtonsCounterDesktop = e => {
    let obj = e.target;
    let box = obj.parentNode;
    let section = box.parentNode

    if (obj.tagName == "BUTTON") {
        if (window.innerWidth > 1024) {

            if (obj.textContent == "1") {
                removeObj(section.children[1]);
                displayCards(data, 1, 6);

            } else if (obj.textContent == "2") {
                removeObj(section.children[1]);
                displayCards(data, 2, 6);

            }
        }
    }

}


//events - window

let eventWindowResize = e => {
    let buttonsBox = document.getElementsByClassName('buttons-box')[0];
    let cardsBox = document.getElementsByClassName('cards-box')[0]
    if (window.innerWidth > 320 && window.innerWidth < 555) {
        removeObj(buttonsBox);
        createButtons(data, 2);
        removeObj(cardsBox);
        displayCards(data, 1, 2);
    } else if (window.innerWidth > 555 && window.innerWidth < 1024) {
        removeObj(buttonsBox);
        createButtons(data, 4);
        removeObj(cardsBox);
        displayCards(data, 1, 4);
    } else if (window.innerWidth > 1024) {
        removeObj(buttonsBox);
        createButtons(data, 6);
        removeObj(cardsBox);
        displayCards(data, 1, 6);
    }
}