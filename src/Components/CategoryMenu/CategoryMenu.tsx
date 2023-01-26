import "./CategoryMenu.css";
import uuid from 'react-uuid';
import { useState } from "react";

const catalog = [
  {
    title: "Электроника",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Одежда",
    types: [
      {
        megaTitle: "Женский",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Мужский",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Детский",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Спецодежда",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Дом и Сад",
    types: [
      {
        megaTitle: "Посуда",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Хозяственные товары",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Товары для вешей",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Детские товары",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Красота и здоровье",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Бытовая техника",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Спорт и отдых",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Аптека",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Строительство и ремонт",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
  {
    title: "Продукты питания",
    types: [
      {
        megaTitle: "Телефон",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Ноутбук",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Телевизор",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Аксессуар",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
      {
        megaTitle: "Камера",
        products: [
          "More to Explore",
          "TV & Video",
          "Audio & Theater",
          "Camera, Photo",
          "Cell Phones",
          "Headphones",
          "Video Games",
          "Wireless Speakers",
        ],
      },
    ],
  },
];

function CategoryMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="category-menu">
      <div className="category-heading" onClick={() => setOpenMenu(!openMenu)}>
        <h2 className={`categories-toggle ${openMenu ? "open-cm" : "close-cm"}`}>
          <span>Каталог</span>
        </h2>
      </div>
      <div
        id="cate-toggle"
        className={`category-menu-list ${openMenu ? "open-cat" : "close-cat"}`}>
        <ul>
          {catalog.map((productTypes: any) => (
            <li className="right-menu" key={uuid()}>
              <a href="#">{productTypes.title}</a>
              <ul className="cat-mega-menu">
                {productTypes.types.map((p: any) => (
                  <li key={uuid()} className="right-menu cat-mega-title">
                    <a href="#">{p.megaTitle}</a>
                    <ul>
                      {p.products.map((product: any) => (
                        <li key={uuid()}>
                          <a href="#">{product}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryMenu;
