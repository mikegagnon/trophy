// Michael N. Gagnon

const TrophyApp = {
  data() {
    return {
      counter: 0,
      trophies: ["a", "b"],
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

Vue.createApp(TrophyApp).mount('#trophies-div')
