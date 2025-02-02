const app = Vue.createApp({
    data() {
        return {
           books: [
            {
                title: "You Don't Know Js",
                author: "Kyle Simpon",
                age: 54
            },
            {
                title: "Eloquent JavaScript",
                author: "Marijn Haverbeke",
                age: 43
            },
            {
                title: "JavaScript: The Good Parts",
                author: "Douglas Crockford",
                age: 32
            },
            {
                title: "JavaScript: The Definitive Guide",
                author: "David Flanagan",
                age: 32
            },
            {
                title: "JavaScript for Kids",
                author: "John Resig",
                age: 32
            },
            {
                title: "JavaScript: The Good Parts",
                author: "Douglas Crockford",
                age: 32
            },
           ],
          showBooks: true,
          link: 'http://www.google.com' 
        }
    },
    methods: {
       
    }
});
app.mount('#app')