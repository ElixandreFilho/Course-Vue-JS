const app = Vue.createApp({
  data() {
    return {
      email: ''
    }
  },
  methods: {
    submitEmail() {
      alert(`E-mail enviado: ${this.email}`)
    }
  }
}).mount('#app')
