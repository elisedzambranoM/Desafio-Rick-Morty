Vue.component("list-component", {
  data() {
    return {
      mensaje: "hola",
      characters: [
        {
          name: "Rick",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
          name: "Morty",
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
          name: "Summer",
          image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
          name: "Jerry",
          image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
          name: "Beth",
          image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
      ],
    };
  },
  template: "#list-component",
});
