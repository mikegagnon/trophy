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
      ],
      /*
      // BADGES is a constant. Making constants accessible within Vue templates seems to be an exercise in judgement.
      // I am not particularly sophisticated when it comes to Vue, so I chose the simplest approach: defining
      // the constant data inside with the dynamic data
      BADGES: {
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
      },
      */
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
