// Michael N. Gagnon

const BADGES = {
  "1story": {
    img: "smile-book.png",
    name: "1 story read",
  },
  "10stories": {
    img: "vol1.png",
    name: "10 stories read",
  },
  "20stories": {
    img: "open-book.png",
    name: "20 stories read",
  },
  "1 hour of reading": {
    img:"books.png",
    name: "1 hour of reading",
  },
};

const TrophyApp = {
  data() {
    return {
      counter: 0,
      trophies: [
        "1story",
        "10stories",
      ]
    }
  },
  methods: {
    getTrophyImgUrl(tname) {
      return `img/emojis/${BADGES[tname].img}`;
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

Vue.createApp(TrophyApp).mount('#trophies-div')
