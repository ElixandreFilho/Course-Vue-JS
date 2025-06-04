const app = Vue.createApp({
    data() {
        return {
            name: 'Elixandre Filho',
            age: 25,
            imageUrl: 'https://static.corinthians.com.br/uploads/j1EOK6Rs/1748744470953bac4124f58a0f29f0f977093fc41b.jpg',
             
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    }
});

app.mount('#assignment');