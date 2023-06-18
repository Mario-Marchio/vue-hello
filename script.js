console.log(`Vue ok`,Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return{
            text : `mario`
        }
    }
});

app.mount(`#root`);