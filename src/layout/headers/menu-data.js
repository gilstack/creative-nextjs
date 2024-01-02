const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "A Trendor",
    link: "#",
    sub_menus: [
      { link: "/about", title: "A Agência" },
      { link: "/about", title: "Nossa Equipe" },
      { link: "/faq", title: "Perguntas Frequentes" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Marketing",
    link: "/service-1",
    sub_menus: [
      { link: "#", title: "Identidade Visual" },
      { link: "#", title: "Gestão de Mídias" },
      { link: "#", title: "Gestão de Tráfego" },
      { link: "#", title: "Inbound Marketing" },
      { link: "#", title: "E-mail Marketing" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Desenvolvimento",
    link: "/service-1",
    sub_menus: [
      { link: "#", title: "Criação de Sites" },
      { link: "#", title: "Lojas Online" },
      { link: "#", title: "Landing Pages" },
      { link: "#", title: "SEO" },
    ],
  },
  {
    id: 4,
    mega_menu: true,
    has_dropdown: false,
    title: "Portfólio",
    link: "/portfolio-2",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contato",
    link: "/contact",
  },
];
export default menu_data;
