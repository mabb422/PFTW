
//Vue with Data inputs - based on weeks 7-9 activity
Vue.component('scam-detail', {
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
    scams: [
            {
                name: 'Aerys Targaryen',
                lifespan: '244 A.C. - 283 A.C.',
                image: '',
                title: 'Aerys Targaryen the Second of His Name, Ser Prince of Dragonstone King of the Andals, the Rhoynar, and the First Men Lord of the Seven Kingdoms Protector of the Realm (AKA The Mad King, or King Scab)',
                parents: 'Siblings Prince Jaehaerys & Princess Shaera',
                children: 'Rhaegar (w. Elia Martell, Lyanna Stark), Shaena, Daeron, Aegon, Jaehaerys, Viserys, and Daenerys (h. Khal Drogo',
                about: 'The seventeenth and last member of the Targaryen dynasty to sit the Iron Throne, ruling from 262 AC to 283 AC. His only children that lived to adulthood by his sister/wife, Rhaella, were Rhaegar, Viserys, and Daenerys Targaryen. Aerys showed great promise at the start of his reign, bringing peace and prosperity to the Seven Kingdoms, but later descended into insanity. His paranoia and cruelty grew out of control. He was eventually killed by a member of his own Kingsguard, Ser Jaime Lannister, during Roberts Rebellion.'
            }, {
                name: 'Rhaella Targaryen',
                lifespan: '245 or 246 A.C. - 284 A.C.',
                image: '',
                title: 'Princess Queen, later Dowager Queen',
                parents: 'Siblings Prince Jaehaerys & Princess Shaera',
                children: 'Rhaegar (w. Elia Martell, Lyanna Stark), Shaena, Daeron, Aegon, Jaehaerys, Viserys, and Daenerys (h. Khal Drogo)',
                about: 'Rhaella was married at a young age to her older brother, Aerys, on the command of their father, Prince Jaehaerys. Jaehaerys had been influenced by a woods witch brought to court by Jenny of Oldstones. The woods witch prophesied that the prince that was promised would be born from Aerys and Rhaellas line, making Jaehaerys determined to marry his daughter to his son. King Aegon V Targaryen, whilst frustrated with his sons decision, allowed Jaehaerys to do as he wished. There was no fondness between Aerys and Rhaella on the day of their wedding.'
            }, {
                name: 'Rhaegar Targaryen',
                lifespan: '259 A.C. - 283 A.C.',
                image: '',
                title: 'Prince of Dragonstone (AKA The Silver Prince, The Dragon Prince, The Last Dragon, The Prince that was Promised)',
                parents: 'Siblings King Aerys & Rhaella Targaryen',
                children: 'Rhaenys & Aegon Targaryen (mother Elia Martell), and Aegon Targaryen (AKA John Snow, mother Lyanna Stark)',
                about: 'Prince Rhaegar Targaryen was the firstborn son of King Aerys II Targaryen and his sister/wife, Queen Rhaella. As heir-apparent, he was the Prince of Dragonstone and crown prince for the Iron Throne. Rhaegar was popular with the smallfolk during his lifetime, but he died in Roberts Rebellion which was triggered in part by his supposed abduction of Lyanna Stark. He was slain in single combat by Robert Baratheon at the ruby ford during the Battle of the Trident. Rhaegar was the elder brother of the exiled last members of House Targaryen, Prince Viserys and Princess Daenerys.'
            }, {
                name: 'Viserys Targaryen',
                lifespan: '276 A.C. - 298 A.C.',
                image: '',
                title: 'King of the Andals, the Rhoynar, and the First Men (claimant) Lord of the Seven Kingdoms (claimant) Protector of the Realm (claimant) Prince of Dragonstone',
                parents: 'Siblings King Aerys & Rhaella Targaryen',
                children: 'None',
                about: 'Prince Viserys Targaryen[9] is the heir of his father, King Aerys II Targaryen, following the death of his older brother, Prince Rhaegar, during Roberts Rebellion. The war turned Viserys and his younger sister, Daenerys, Princess of Dragonstone, into exiles from the Seven Kingdoms who can only plot to regain control of the Iron Throne. He styles himself as Viserys of the House Targaryen, the Third of his Name, King of the Andals, the Rhoynar, and the First Men, Lord of the Seven Kingdoms and Protector of the Realm. In the Free Cities Viserys was mockingly dubbed The Beggar King, a name which spread towards the Seven Kingdoms.'
            }, {
                name: 'Daenerys Targaryen',
                lifespan: '298 A.C. - Present (in the book series)',
                image: '',
                title: 'Daenerys Stormborn, the Unburnt, Queen of Meereen, Queen of the Andals and the Rhoynar and the First Men, Khaleesi of Great Grass Sea, Breaker of Shackles, and Mother of Dragons, Princess of Dragonstone, Queen of the Seven Kingdoms, Lord of the Seven Kingdoms, Protector of the Realm (AKA Dany, Mhysa, The Silver Queen, Silver Lady, Dragonmother, The Dragon Queen, Breaker of Chains, Bride of Fire, Daughter of Death, Slayer of Lies, Child of Three, Aegon the Conqueror with Teats, Azor Ahai Returned, The Queen Across the Waters)',
                parents: 'Siblings King Aerys & Rhaella Targaryen',
                children: 'Rhaego (deceased), Dragons',
                about: 'Daenerys Targaryen, also known as Daenerys Stormborn, is one of the last confirmed members of House Targaryen, along with her older brother Viserys, who refers to her as Dany. She is the youngest child of King Aerys II Targaryen and his sister-wife, Queen Rhaella. Daenerys given to Dothraki Khal Drogo as his wife, in return for the promise of an army for Viserys to conquer the Iron Throne with. At their wedding, Daenerys receives three petrified dragon eggs, which she later hatches and raises three dragons from. She believes herself to be the true heir to the iron throne. '
            }, {
                name: 'Elia (Martell) Targaryen',
                lifespan: '256 A.C. - 283 A.C. ',
                image: '',
                title: 'Princess',
                parents: 'Unnamed Royalty of Dorne',
                children: 'Rhaenys and Aegon Targaryen',
                about: 'A Dornish princess from House Martell, ELia is the sister of Oran, Mors, Olyvar, and Oberyn Martell. She was married to the crown prince, Rhaegar Targaryen, and by him birthed Rhaenys and Aegon. Elia was assaulted and murdered by Ser Gregor Clegane in the Sack of Kings Landing during Roberts Rebellion.'
            }, {
                name: 'Lyanna (Stark) Targaryen',
                lifespan: '266 or 267 A.C. - 283 A.C.',
                image: '',
                title: 'Princess (AKA The She-Wolf, The Wolf Maid)',
                parents: 'Rickard and Lyarra Stark',
                children: 'Aegon Targaryen (AKA John Snow)',
                about: 'The only daughter of Lord Rickard Stark and his wife, Lady Lyarra Stark. She had two older brothers, Brandon and Eddard, and one younger brother, Benjen. Her supposed abduction by Prince Rhaegar Targaryen was the event that ultimately triggered Roberts Rebellion and led to the downfall of the Targaryen dynasty. According to Eddard, Lyanna had a touch of wildness to her, which was described as "the wolf blood" by her father.'
            }, {
                name: 'Rhaenys Targaryen',
                lifespan: '280 A.C. - 283 A.C.',
                image: '',
                title: 'Princess',
                parents: 'Rhaegar Targaryen and Elia Martell',
                children: 'None',
                about: 'After her birth, Rhaenys was presented at court by her father. Whilst her grandmother, Queen Rhaella Targaryen, embraced her warmly, her grandfather, King Aerys II Targaryen, refused to touch or hold her, claiming she smelled Dornish. Rhaenys was killed during the Sack of Kings landing during Roberts Rebellion.'
            }, {
                name: 'Aegon Targaryen',
                lifespan: '281 or 282 A.C. - 283 A.C.',
                image: '',
                title: 'Prince, King of the Andals, the Rhoynar, and the First Men, Lord of the Seven Kingdoms (AKA The Prince that was Promised)',
                parents: 'Rhaegar Targaryen and Elia Martell',
                children: 'None',
                about: 'A comet was seen above Kings Landing on the night Aegon was conceived, which led his father Rhaegar, Prince of Dragonstone, to believe that Aegon was the prince that was promised. The comet was seen as the bleeding star of the prophecy. He was killed during the Sack of Kings landing during Roberts Rebellion, although in the book series he may be alive as Young Griff.'
            }, {
                name: 'John Snow (also Aegon Targaryen)',
                lifespan: '283 A.C. - present',
                image: '',
                title: 'Lord Commander of the Nights Watch (AKA Lord Snow, Ser Allisers Bane, The Snow of Winterfell, The crow-come-over, The Bastard of Winterfell, Lord Crow, The Black Bastard of the Wall',
                parents: 'Eddard Stark and Unknown (Later discovered Rhaegar Targaryen and Lyanna Stark)',
                children: 'None, Dog Dad to Ghost',
                about: 'Unaware of the identity of his mother, Jon was raised at Winterfell. At the age of fourteen, he joins the Nights Watch, where he earns the nickname Lord Snow.'
            }
        ]
    },
});
//End Vue
