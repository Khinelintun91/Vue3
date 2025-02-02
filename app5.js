const app = Vue.createApp({
    data() {
        return {
           books: [
            {
                title: "You Don't Know Js",
                author: "Kyle Simpon",
                age: 54,
                img:'img/1.jpg',
                isFav: true
            },
            {
                title: "Eloquent JavaScript",
                author: "Marijn Haverbeke",
                age: 43,
                img:'img/2.jpeg',
                isFav: true
            },
            {
                title: "JavaScript: The Good Parts",
                author: "Douglas Crockford",
                age: 32,
                img:'img/3.jpg',
                isFav: false
            },
            {
                title: "JavaScript: The Definitive Guide",
                author: "David Flanagan",
                age: 32,
                img:'img/4.jpg',
                isFav: false
            },
            {
                title: "JavaScript for Kids",
                author: "John Resig",
                age: 32,
                img:'img/5.jpg',
                isFav: true
            },
            
           ],
          showBooks: true,
          link: 'http://www.google.com' 
        }
    },
    methods: {
       
    },
    computed: {
        filteredBooks(){
            return this.books.filter(book=>{
                return book.isFav;
            })
    }
    }
});
app.mount('#app')