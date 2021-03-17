const clock = {
    data() {
        return {
            h: 19,
            m: 38,
            s: 40
        }
    },

    methods: {
        updateClock() {
            var date = new Date();
            console.log(date);
            this.h = date.getHours();
            this.m = date.getMinutes();
            this.s = date.getSeconds();
        }
    },
    mounted() {
        setInterval(this.updateClock,1000);
    }
};

Vue.createApp(clock).mount("#clock");