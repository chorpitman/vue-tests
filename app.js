const App = {
    data() {
        return {
            myPlaceholder: 'Add name of note',
            title: 'Notes List',
            inputValue: '',
            notes: ['Notes1']
        }
    },
    methods: {
        addNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
            }
        },
        deleteNote(idx, event) {
            console.log(event)
            this.notes.splice(idx, 1)
        },
        toUpperCase(string) {
            return string.toUpperCase()
        }
    },
    computed: {
        doubleLengthComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (this.inputValue.length === 10) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')