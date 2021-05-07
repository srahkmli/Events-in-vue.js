const app = Vue.createApp({
  data() {
    return {
      enteredGaol: '',
      goals: [],
      person: { name: 'sara', age: 20, field: 'programmer' }

    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGaol);
      this.enteredGaol = '';
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
if (true) {
  // ...
}