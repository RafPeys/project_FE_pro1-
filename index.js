const array1 = [
  {
    years: "26",
    title: "Лет",
    description: "на рынке",
  },
  {
    years: "26",
    title: "Лет",
    description: "на рынке",
  },
  {
    years: "26",
    title: "Лет",
    description: "на рынке",
  },
  {
    years: "26",
    title: "Лет",
    description: "на рынке",
  },
];

const array2 = [
  {
    img: "./images/arena.jpg",
    title: "Арена",
    description:
      "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
  },
  {
    img: "./images/arena.jpg",
    title: "Арена",
    description:
      "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
  },
  {
    img: "./images/arena.jpg",
    title: "Арена",
    description:
      "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.",
  },
];

const array3 = [
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
];

const array4 = [
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
  {
    img: "./images/icon.png",
    title: "Строительство офисных зданий",
  },
];

const array5 = [
  {
    img: "./images/adress.png",
    title: "Адрес:",
    description: "УЛИЦА МИРА 140, ОФИС 140-142",
  },
  {
    img: "./images/telefon.png",
    title: "Телефон:",
    description: "8 (812) 111-22-33 8 (812) 111-22-33",
  },
  {
    img: "./images/watch.png",
    title: "Время Работы:",
    description: "ПН-СБ 10:00 - 20:00",
  },
  {
    img: "./images/e-mail.png",
    title: "E-Mail:",
    description: "INFO@VIP.RU",
  },
];

// Первый массив
const heroContainer = document.querySelector(".hero_dates");

function heroItem(element) {
  const item = document.createElement("li");
  item.setAttribute("class", "hero_item");
  const years = document.createElement("p");
  years.setAttribute("class", "hero_years");
  const title = document.createElement("p");
  title.setAttribute("class", "hero_list_title");
  const description = document.createElement("p");
  description.setAttribute("class", "hero__list_description");
  years.innerText = element.years;
  title.innerText = element.title;
  description.innerText = element.description;
  item.append(years, title, description);

  return item;
}

function createList() {
  heroContainer.append(...array1.map((element) => heroItem(element)));
}
console.log(heroContainer);
createList();

// второй массив
const projects = document.querySelector(".projects_dates");

function projectsItem(element) {
  const item2 = document.createElement("li");
  item2.setAttribute("class", "projects_item");
  const img = document.createElement("img");
  img.setAttribute("class", "projects_image");
  const container = document.createElement("div");
  container.setAttribute("class", "projects_box");
  const projectsTitle = document.createElement("p");
  projectsTitle.setAttribute("class", "projects_title");
  const projectsDescr = document.createElement("p");
  projectsDescr.setAttribute("class", "projects_descr");

  img.setAttribute("src", element.img);
  img.setAttribute("alt", element.title);
  projectsTitle.innerText = element.title;
  projectsDescr.innerText = element.description;

  item2.append(img, container, projectsTitle, projectsDescr);

  return item2;
}

function createListProjects() {
  projects.append(...array2.map((element) => projectsItem(element)));
}
createListProjects();

// третий массив
const build = document.querySelector(".buildings_dates");

function buildingProjects(element) {
  const item3 = document.createElement("li");
  item3.setAttribute("class", "services_item3");
  const image = document.createElement("img");
  image.setAttribute("class", "service_img3");
  const imgtitle = document.createElement("p");
  imgtitle.setAttribute("class", "service_title3");

  image.setAttribute("src", element.img);
  image.setAttribute("alt", element.title);
  imgtitle.innerText = element.title;

  item3.append(image, imgtitle);

  return item3;
}

function createListProjects2() {
  build.append(...array3.map((element) => buildingProjects(element)));
}
createListProjects2();

// Четвертый массив
const build2 = document.querySelector(".buildings_dates2");

function buildingProjects2(element) {
  const item4 = document.createElement("li");
  item4.setAttribute("class", "services_item4");
  const image2 = document.createElement("img");
  image2.setAttribute("class", "service_img4");
  const imgtitle2 = document.createElement("p");
  imgtitle2.setAttribute("class", "services_title4");

  image2.setAttribute("src", element.img);
  image2.setAttribute("alt", element.title);
  imgtitle2.innerText = element.title;

  item4.append(image2, imgtitle2);

  return item4;
}

function createListProjects3() {
  build2.append(...array4.map((element) => buildingProjects2(element)));
}
createListProjects3();

// Пятый массив
const contacts = document.querySelector(".contacts_dates");

function renderContactItem(element) {
  const item = document.createElement("li");
  item.setAttribute("class", "contacts_item");
  const img = document.createElement("img");
  img.setAttribute("class", "constacts_img");
  const title = document.createElement("p");
  title.setAttribute("class", "contacts_title");
  const description = document.createElement("p");
  description.setAttribute("class", "contacts_descr");

  img.setAttribute("src", element.img);
  img.setAttribute("alt", element.title);
  title.innerText = element.title;
  description.innerText = element.description;

  item.append(img, title, description);

  return item;
}

function renderContacts() {
  contacts.append(...array5.map((element) => renderContactItem(element)));
}
renderContacts();
