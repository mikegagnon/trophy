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

const TORDER = [
  "1story",
  "10stories",
  "20stories",
  "1hour",
];

const TrophyApp = {
  data() {
    return {
      counter: 0,
      trophies: [
        "10stories",
        "1story",
      ]
    }
  },
  methods: {
    getTrophyImgUrl(tid) {
      return `img/trophy/${BADGES[tid].img}`;
    },
    getTrophyName(tid) {
      return BADGES[tid].name;
    },
    addTrophy() {
      this.trophies.unshift("1hour");
    },
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  updated: function () {
    // TODO: I'm not confident this updated function is the best idea
    // TODO: test
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  },
}

const vt = Vue.createApp(TrophyApp).mount('#trophies-div')
