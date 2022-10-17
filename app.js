const menu = [
  {
    id: 1,
    title: "Pirinç Pilavı",
    category: "Ana Yemek",
    price: "24,99  TL",
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/09/tereyagli-pilav-one-cikan.jpg",
    desc: `Enfes tereyağı ile yapılmış taneleri sayılan şehriyeli pilav.<br>Bir porsiyonu ortalama 318/kcal içerir.`,
  },
  {
    id: 2,
    title: "Karnı Yarık",
    category: "Ana Yemek",
    price: "29,99 TL",
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/08/100-gram-kiymayla-karniyarik-one-cikan.jpg",
    desc: `Bol kıymalı ve fırında yapılmış karnı yarık.<br>100 gram kıyma ile yapılmakta olup bir porsiyonu ortalama 566/kcal içerir.`,
  },
  {
    id: 3,
    title: "Nohut",
    category: "Ana Yemek",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "İçli Köfte",
    category: "Ara Sıcak",
    price: 5.99,
    img:
    "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Paçanga",
    category: "Ara Sıcak",
    price: 12.99,
    img:
    "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Sigara Böreği",
    category: "Ara Sıcak",
    price: 9.99,
    img:
    "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Kola",
    category: "İçecek",
    price: 15.99,
    img:
    "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Meyve Suyu",
    category: "İçecek",
    price: 12.99,
    img:
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Maden Suyu",
    category: "İçecek",
    price: 3.99,
    img:
    "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btnContainerDOM = document.querySelector(".btn-container");
const section = document.querySelector(".section-center");
const menuItemDOM = document.getElementsByClassName("menu-items");


let anayemekmenu =[];
let arasicakmenu = [];
let icecekmenu = [];

for (let i = 0; i < menu.length; i++) {
  if(menu[i].category === "Ana Yemek"){
    anayemekmenu.push(menu[i]);
    
  }
}

for (let i = 0; i < menu.length; i++) {
  if(menu[i].category === "Ara Sıcak"){
    arasicakmenu.push(menu[i]);
  }
}

for (let i = 0; i < menu.length; i++) {
  if(menu[i].category === "İçecek"){
    icecekmenu.push(menu[i]);
  }
}

function btnDOMFunction (category, menuName){
  let btnDOM = document.createElement("button");
  btnContainerDOM.append(btnDOM);
  // btnDOM.type = "button";
  // btnDOM.classList.add("btn", "btn-danger");
  btnDOM.innerHTML = `<button type = "button" class= "btn btn-light" onclick = "createDOMFunction(${menuName})">${category}</button>`;
  btnDOM.id = category;
};

btnDOMFunction("Hepsi", "menu");
// let btnDOMAll = document.querySelector("#All");
// btnDOMAll.addEventListener("click", addClickFunction);
btnDOMFunction("Ana Yemek", "anayemekmenu");
// let btnDOMKorea = document.querySelector("#Korea");
// btnDOMKorea.addEventListener("click", addClickFunction);
btnDOMFunction("Ara Sicak", "arasicakmenu");
// let btnDOMJapan = document.querySelector("#Japan");
btnDOMFunction("İçecek", "icecekmenu");
// let btnDOMChina = document.querySelector("#China");



function createDOMFunction (category){
  if (menuItemDOM.length > 0) {
    let counter = menuItemDOM.length;
      for (let i = 0; i < counter; i++) {
        section.removeChild(section.firstElementChild);
        // menuItemDOM[0].remove();
      }
      for(let i = 0; i < category.length; i++){
        let createCol = document.createElement("div");
        createCol.classList.add("menu-items", "col-lg-6", "col-sm-12");
        section.appendChild(createCol);
        createCol.innerHTML = `
        <img
          src=${category[i].img}
          alt=${category[i].title}
          class="photo"
        />
        <div class="menu-info">
          <div class="menu-title">
            <h4>${category[i].title}</h4>
            <h4 class="price">${category[i].price}</h4>
          </div>
          <div class="menu-text">
            ${category[i].desc}
          </div>
        </div>
      
    `
      }
    }

else {
    for(let i = 0; i < category.length; i++){
    let createCol = document.createElement("div");
    createCol.classList.add("menu-items", "col-lg-6", "col-sm-12");
    section.appendChild(createCol);
    createCol.innerHTML = `
    <img
      src=${category[i].img}
      alt=${category[i].title}
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${category[i].title}</h4>
        <h4 class="price">${category[i].price}</h4>
      </div>
      <div class="menu-text">
        ${category[i].desc}
      </div>
    </div>
  
`
  }
  }
  
}

function addClickFunction (event){
  event.preventDefault();
}

createDOMFunction(menu);