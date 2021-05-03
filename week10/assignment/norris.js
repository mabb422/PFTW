Vue.component('norris-joke', {
    template: `<div class="joke">
    <p>{{joke}}</p>
    </div>`,
    props: ['joke']
});

const vm = new Vue ({
    el: "#icndbApp",
    data: {
        jokes:[]
    },
    mounted () {
        axios
            .get('http://api.icndb.com/jokes/random')
            .then(response => {
                console.log('response', response);
                vm.jokes = response.data;
                console.log(vm.joke);
            });
    }
});