import { IPizza } from "../../models"

let data: IPizza[] = [
    {
    id: 0,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    name: "Пепперони Фреш с перцем",
    description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус, острый перец",
    type: [0, 1],
    size: [25, 30, 35],
    price: [289, 479, 619],
    category: [0],
    rating: 4
    },
    {
    id: 1,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    name: "Сырная",
    description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
    type: [0],
    size: [25, 30, 35],
    price: [289, 479, 619],
    category: [1],
    rating: 6
    },
    {
    id: 2,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    name: "Цыпленок карри",
    description: "Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус",
    type: [0],
    size: [25, 30, 40],
    price: [419, 629, 749],
    category: [1],
    rating: 4
    },
    {
    id: 3,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
    name: "Кисло-сладкий цыпленок",
    description: "Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус",
    type: [1],
    size: [25, 30, 35],
    price: [419, 629, 749],
    category: [2],
    rating: 2
    },
    {
    id: 4,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    name: "Чизбургер-пицца",
    description: "Мясной соус болоньезе, соус бургер, маринованные огурчики, томаты, красный лук, моцарелла",
    type: [0, 1],
    size: [25, 30, 35],
    price: [419, 629, 749],
    category: [3],
    rating: 8
    },
    {
    id: 5,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
    name: "Крэйзи пепперони",
    description: "Пастрами из индейки, острая чоризо, пикантная пепперони, бекон, моцарелла, фирменный томатный соус",
    type: [0],
    size: [30, 35],
    price: [419, 629, 749],
    category: [2],
    rating: 2
    },
    {
    id: 6,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
    name: "Пепперони",
    description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус, кусочки сыра",
    type: [0, 1],
    size: [25, 30, 35],
    price: [419, 629, 749],
    category: [1],
    rating: 9
    },
    {
    id: 7,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    name: "Маргарита",
    description: "Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус",
    type: [0, 1],
    size: [25, 30, 35],
    price: [369, 539, 689],
    category: [4],
    rating: 10
    },
    {
    id: 8,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    name: "Четыре сезона",
    description: "Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, фирменный томатный соус",
    type: [0, 1],
    size: [25, 30, 35],
    price: [419, 629, 749],
    category: [5],
    rating: 10
    },
    {
    id: 9,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
    name: "Овощи и грибы 🌱",
    description: "Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус, итальянские травы",
    type: [0, 1],
    size: [25, 30, 35],
    price: [419, 629, 749],
    category: [5],
    rating: 7
    }
]

export {data}