const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
      confirmedInput: '',
    };
  },
  methods: {
    confirmedName() {
      this.confirmedInput = this.yourName;
    },
    submitForm() {
      alert('submitted!');
    },
    setName(event, lastName) {
      this.yourName = event.target.value + ' ' + lastName;
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
    }
  }
});

app.mount('#events');
