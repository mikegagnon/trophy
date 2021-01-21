// Michael N. Gagnon

const BADGES = {
  "1story": {
    img: "smile-book.png",
    name: "1 story read",
    award: "Job well done! You read a story!",
    announce: "Read a story to earn this trophy.",
  },
  "10stories": {
    img: "vol1.png",
    name: "10 stories read",
    award: "Great work! You  have read 10 stories!",
    announce: "Read 10 stories to earn this trophy.",
  },
  "20stories": {
    img: "open-book.png",
    name: "20 stories read",
    award: "Wow! You  have read 20 stories!",
    announce: "Read 20 stories to earn this trophy.",
  },
  "1hour": {
    img:"books.png",
    name: "1 hour of reading",
    award: "Double wow! You have logged an hour of reading!",
    announce: "Log one hour of reading to earn this trophy.",
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
      modalTid: "1story",
      trophies: [
        {tid: "10stories", color: false},
        {tid: "1story", color: true}
      ]
    }
  },
  methods: {
    openModal(tid) {
      this.modalTid = tid;
      $('#trophy-modal').modal({});
    },
    getModalTitle() {
      return BADGES[this.modalTid].name;
    },
    getModalImgUrl() {
      return `img/trophy/${BADGES[this.modalTid].img}`;
    },
    getModalDesc() {
      return BADGES[this.modalTid].announce;
    },
    getTrophyImgUrl(tid) {
      return `img/trophy/${BADGES[tid].img}`;
    },
    getTrophyName(tid) {
      return BADGES[tid].name;
    },
    getTrophyClass() {
      if (!this.isTrophyAwarded(this.modalTid)) {
        return "trophy-gray";
      } else {
        return "";
      }
    },
    isTrophyAwarded(tid) {
      // Find the trophy that should become colored
      for (let i = 0; i < this.trophies.length; i++) {
        const elem = this.trophies[i];
        console.log(elem.color);
        if (elem.tid === tid && elem.color) {
          return true;
        }
      }

      return false;
    },
    addNextTrophy() {
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
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  },
}

const vt = Vue.createApp(TrophyApp).mount('#trophies-div')
