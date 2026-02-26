export default defineAppConfig({
  menu: {
    headerMenu: [
      {
        label: "Мужчинам",
        to: "/"
      },
      {
        label: "Женщинам",
        to: "/"
      },
      {
        label: "Каталог",
        to: "/catalog"
      },
      {
        label: "Доставка",
        to: "/"
      },
      {
        label: "Блог",
        to: "/"
      },
      {
        label: "О нас",
        to: "/"
      }
    ],
    footerMenu: [
      {
        label: "Каталог",
        to: "/catalog",
        items: [
          { label: "Все бренды", to: "/" },
          { label: "Nike", to: "/" },
          { label: "Adidas", to: "/" },
          { label: "Puma", to: "/" },
          { label: "New Balance", to: "/" }
        ]
      },
      {
        label: "Помощь",
        to: "/",
        items: [
          { label: "Доставка", to: "/" },
          { label: "Заказ и оплата", to: "/" },
          { label: "Обмен и Возврат ", to: "/" },
          { label: "F. A. Q.", to: "/" }
        ]
      },
      {
        label: "Информация",
        to: "/",
        items: [
          { label: "Преимущества", to: "/" },
          { label: "Гарантия и безопасность", to: "/" },
          { label: "Индивидуальный заказ", to: "/" },
          { label: "Акции", to: "/" }
        ]
      },
      {
        label: "Компания",
        to: "/",
        items: [
          { label: "О нас", to: "/" },
          { label: "Блог", to: "/" },
          { label: "Отзывы", to: "/" },
          { label: "Контакты", to: "/" }
        ]
      }
    ]
  }
});
