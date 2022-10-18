const menu = [
  {
    id: 1,
    title: "Pirinç Pilavı",
    category: "Ana Yemek",
    price: "24,99  TL",
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/09/tereyagli-pilav-one-cikan.jpg",
    desc: `Enfes tereyağı ile yapılmış taneleri sayılan şehriyeli pilav.<br><br>Bir porsiyonu ortalama 318/kcal içerir.`,
  },
  {
    id: 2,
    title: "Karnı Yarık",
    category: "Ana Yemek",
    price: "39,99  TL",
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/08/100-gram-kiymayla-karniyarik-one-cikan.jpg",
    desc: `Bol kıymalı ve fırında yapılmış karnı yarık.<br><br>100 gram kıyma ile yapılmakta olup bir porsiyonu ortalama 566/kcal içerir.`,
  },
  {
    id: 3,
    title: "Köri Soslu Tavuk",
    category: "Ana Yemek",
    price: "69,99  TL",
    img:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/kori-soslu-tavuk-yemekcom.jpg",
    desc: `Harika köri sos ile pişirilmiş tavuk. Pirinç pilavı ve salata ile servis edilir.<br><br>Bir porsiyonu ortalama 318/kcal içerir.`,
  },
  {
    id: 4,
    title: "İslim Kebabı",
    category: "Ana Yemek",
    price: "34,99  TL",
    img:
    "https://cdn.yemek.com/mncrop/940/625/uploads/2015/07/islim-kebabi-tarifi-2.jpg",
    desc: `Dana kıyması ile yapılmış harika islim kebebı.<br><br>Bir porsiyonu ortalama 358/kcal içerir.`,
  },
  {
    id: 5,
    title: "İrmik Helvası",
    category: "Tatlı",
    price: "29,99  TL",
    img:
    "https://cdn.yemek.com/mncrop/940/625/uploads/2014/11/irmik-helvasi-yemekcom.jpg",
    desc: `Tane tane dökülen irmik helvası. Dondurma ile birlikte sıcak servis edilir.<br><br>Bir porsiyonu ortalama 565/kcal içerir.`,
  },
  {
    id: 6,
    title: "Çi Börek",
    category: "Ara Sıcak",
    price: "29,99  TL",
    img:
    "https://cdn.yemek.com/mncrop/940/625/uploads/2018/01/cig-borek-tarifi-guncelleme.jpg",
    desc: `Yağ çekmemiş, ev yapımı çi börek.<br><br>Bir porsiyonu ortalama 305/kcal içerir.`,
  },
  {
    id: 7,
    title: "İçli Köfte",
    category: "Ara Sıcak",
    price: "19,99  TL",
    img:
    "https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/icli-kofte-2-yemekcom.jpg",
    desc: `Kızartma yöntemi ile pişirilmiş içli köfte.<br><br>Bir porsiyonu ortalama 337/kcal içerir.`,
  },
  {
    id: 8,
    title: "Ayran",
    category: "İçecek",
    price: "9,99  TL",
    img:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Yayik_ayrani.jpg/220px-Yayik_ayrani.jpg",
    desc: `Ev yapımı yayık ayran. Soğuk servis edilir.`,
  },
  {
    id: 9,
    title: "Limonata",
    category: "İçecek",
    price: "14,99  TL",
    img:
    "https://cdn.yemek.com/mncrop/940/625/uploads/2014/08/ev-yapimi-limonata-yemekcom.jpg",
    desc: `Ev yapımı limonata. Nane ile birlikte soğuk servis edilir.`,
  },
  { id: 10, 
    title: "Sütlaç",
    category: "Tatlı",
    price: "19,99  TL",
    img:
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/05/sutlac-guncelleme-sunum-1.jpg",
    desc: "Doğal çiftlik sütü ile yapılmış enfes sütlaç.<br><br>Bir porsiyonu ortalama 265/kcal içerir."
  }
  
];

let btnContainerDOM = document.querySelector(".btn-container");
const section = document.querySelector(".section-center");
const menuItemDOM = document.getElementsByClassName("menu-items");


let anayemekmenu =[];
let arasicakmenu = [];
let icecekmenu = [];
let tatlimenu = [];

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

for (let i = 0; i < menu.length; i++) {
  if(menu[i].category === "Tatlı"){
    tatlimenu.push(menu[i]);
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
btnDOMFunction("Tatlı", "tatlimenu");



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