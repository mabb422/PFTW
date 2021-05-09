Vue.component('family-member', {
    template: `<div v-bind:class="row">
          <div class="cell person-name">{{name}}</div>
          <div class="cell person-image"><img v-bind:src="image" class="list__data-image"></div>
          <div class="cell person-title">{{title}}</div>
          <div class="cell person-parents">{{parents}}</div>
          <div class="cell person-children">{{children}}</div>
          <div class="cell person-about">{{about}}</div>
         </div>`,
    props: ['name', 'image', 'title', 'parents', 'children', 'about']
  });

const vm = new Vue({
    el: '#app',
    data: {
        people: [
            {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }
        ]
    },
});
