// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 1,
            input: ''
        };
    },
    methods: {
        nibai() {
            this.count = this.count*2;
        },
        nibunoiti() {
            this.count = this.count/2;
        },
        reset() {
            this.count = 1;
        },
        increment() {
            this.count = this.count + this.input;
        },
        decrement() {
            this.count = this.count - this.input;
        }

        
    }
});