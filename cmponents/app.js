const app = Vue.createApp({
    data() {
        return {
            friends: [{
                id: '101',
                name: 'sara',
                phone: '9891222222',
                email: 'srahkmli',
            },
            {
                id: '102',
                name: 'amir',
                phone: '9891222222',
                email: 'ameri',
            },
            ],
        };
    },
    methods: {}
});
app.component('friend-contact', {
    template: ` <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>`,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: '101',
                name: 'sara',
                phone: '9891222222',
                email: 'srahkmli',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
});

app.mount('#app');