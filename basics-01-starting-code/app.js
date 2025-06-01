const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course an learn Vue!',
            githubLink: 'https://github.com/ElixandreFilho'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    } 
}); 

app.mount('#user-goal');