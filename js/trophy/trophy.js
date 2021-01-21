// Michael N. Gagnon


// TODO: place advice and explain
// Advice from: https://stackoverflow.com/questions/37078423/how-can-add-bootstrap-tooltip-inside-vue-js

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
  "1hour": {
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
    getTrophyImgUrl(tid) {
      return `img/emojis/${BADGES[tid].img}`;
    },
    getTrophyName(tid) {
      return BADGES[tid].name;
    },
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

Vue.createApp(TrophyApp).mount('#trophies-div')
