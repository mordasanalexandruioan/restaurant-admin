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