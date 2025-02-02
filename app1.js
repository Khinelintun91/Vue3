const app=Vue.createApp({
    data(){
        return{
            title:"You Don't Know Js",
            author:"Kyle Simpon",
            age: 54
        }
    },
   methods: {
    mouseOverHandler(){
        console.log("Mouse Over")
    },
    mouseLeaveHandler(){
        console.log("Mouse Leave")
    },
    mouseDoubleClickHandler(){
        console.log("Mouse Double Click")
    }
   }
   
    
});
app.mount('#app')