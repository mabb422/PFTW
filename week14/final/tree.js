Vue.component('family-member', {
    template: `<div v-bind:class="row">
          <div class="cell person-name">{{name}}</div>
          <div class="cell person-lifespan">{{lifespan}}</div>
          <div class="cell person-image"><img v-bind:src="image" class="list__data-image"></div>
          <div class="cell person-title">{{title}}</div>
          <div class="cell person-parents">{{parents}}</div>
          <div class="cell person-children">{{children}}</div>
          <div class="cell person-about">{{about}}</div>
         </div>`,
    props: ['name', 'lifespan', 'image', 'title', 'parents', 'children', 'about']
  });

const vm = new Vue({
    el: '#app',
    data: {
        people: [
            {
                name: 'Aerys Targaryen',
                lifespan: '244 A.C. - 283 A.C.',
                image: '',
                title: 'Aerys Targaryen the Second of His Name, Ser Prince of Dragonstone King of the Andals, the Rhoynar, and the First Men Lord of the Seven Kingdoms Protector of the Realm (AKA The Mad King, or King Scab)',
                parents: 'Prince Jaehaerys & Princess Shaera',
                children: 'Rhaegar (w. Elia Martell, Lyanna Stark), Shaena, Daeron, Aegon, Jaehaerys, Viserys, and Daenerys (h. Khal Drogo',
                about: 'The seventeenth and last member of the Targaryen dynasty to sit the Iron Throne, ruling from 262 AC to 283 AC. His only children that lived to adulthood by his sister/wife, Rhaella, were Rhaegar, Viserys, and Daenerys Targaryen. Aerys showed great promise at the start of his reign, bringing peace and prosperity to the Seven Kingdoms, but later descended into insanity. His paranoia and cruelty grew out of control. He was eventually killed by a member of his own Kingsguard, Ser Jaime Lannister, during Roberts Rebellion.'
            }, {
                name: 'Rhaella Targaryen',
                lifespan: '245 or 246 A.C. - 284 A.C.',
                image: '',
                title: 'Princess Queen, later Dowager Queen',
                parents: 'Prince Jaehaerys & Princess Shaera',
                children: 'Rhaegar (w. Elia Martell, Lyanna Stark), Shaena, Daeron, Aegon, Jaehaerys, Viserys, and Daenerys (h. Khal Drogo)',
                about: 'Rhaella was married at a young age to her older brother, Aerys, on the command of their father, Prince Jaehaerys. Jaehaerys had been influenced by a woods witch brought to court by Jenny of Oldstones. The woods witch prophesied that the prince that was promised would be born from Aerys and Rhaellas line, making Jaehaerys determined to marry his daughter to his son. King Aegon V Targaryen, whilst frustrated with his sons decision, allowed Jaehaerys to do as he wished. There was no fondness between Aerys and Rhaella on the day of their wedding.'
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }, {
                name: ' Targaryen',
                lifespan: '',
                image: '',
                title: '',
                parents: '',
                children: '',
                about: ''
            }
        ]
    },
});
