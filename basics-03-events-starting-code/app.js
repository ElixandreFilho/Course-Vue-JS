const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput(){
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      //ou forma mais curta
      // this.counter --;
    }
  }
});

app.mount('#events');
