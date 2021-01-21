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
        //{tid: "10stories", color: false},
        //{tid: "1story", color: true}
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
      // If there are no trophies
      if (this.trophies.length == 0) {
        this.trophies.push({
          tid: TORDER[0],
          color: true,
        });
        return;
      }

      // See if we can colorize a grayed-out trophy
      let index = 0;
      let found = false;

      // Find the trophy that should become colored
      for (let i = 0; i < this.trophies.length; i++) {
        const elem = this.trophies[i];
        if (!elem.color) {
          index = i;
          found = true;
        }
      }

      if (found) {
        this.trophies[index].color = true;
        return;
      }

      // Else, find the next trophy to celebrate      
      const mostRecentTid = this.trophies[0].tid;
      // Find next trophy based on TORDER
      const recentTrophyIndex = TORDER.findIndex(tid => tid === mostRecentTid);
      const nextTrophyIndex = recentTrophyIndex + 1;

      // If there is no next trophy
      if (nextTrophyIndex == TORDER.length) {
        return;
      }

      const nextTrophyTid = TORDER[nextTrophyIndex];
      this.trophies.unshift({
        tid: nextTrophyTid,
        color: true,
      });


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
