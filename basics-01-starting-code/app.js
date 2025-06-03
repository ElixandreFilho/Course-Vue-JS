const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course an learn Vue!',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            githubLink: 'https://github.com/ElixandreFilho'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    } 
}); 

app.mount('#user-goal');