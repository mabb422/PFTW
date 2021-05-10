
//Vue with Data inputs - based on weeks 7-9 activity
Vue.component('scam-detail', {
    template: `<div v-bind:class="row">
          <div class="cell scam-name">{{name}}</div>
          <div class="cell scam-scammer">{{scammer}}</div>
          <div class="cell scam-how">{{how}}</div>
          <div class="cell scam-flags">{{flags}}</div>
          </div>`,
    props: ['name', 'scammer', 'how', 'flags']
  });

const vm = new Vue({
    el: '#app',
    data: {
    scams: [
            {
                name: 'Loan Scam',
                scammer: 'The Scammer poses as a Loan Officer from a legitimate (or legitimate sounding, but fake) bank or loan issuer.',
                how: 'The victim will either find the supposed loan company through an online search, or will be approached by someone (usually online) about being qualified for a loan. Once the scammer thinks they have the victim convinced, they will ask for bank acount, or online banking details (login, password, account/routing numbers, etc). The scammer will either mail a chack or do a mobile deposit to the victims account, but tell the victim there is an error or their credit score was not high enough. The victim is asked to send the money back via wire, gift cards, moneygram, or electronic money transfers (e.g. cashapp, zelle).',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, anything seems too good to be true, issuer asks for mobile banking passwords, issuer asks for money to be returned via a third party (banks do this internally when actually necessary), issuer requests funds be sent to a third party, issuer asks for gift cards',
            }, {
                name: 'Mystery Shopper Scam',
                scammer: 'The scammer poses as an employer for mystery shopping positions.',
                how: 'The victim will either find the employer with an internet search or will be approached by someone online for a mystery shopper job. Once "hired", the victim is mailed a check and instructions to deposit it and keep part "as payment", but withdraw the rest for the job. They are then instructed to either puchase gift cards to send back to the scammer, or asked to do a money transfer (via moneygram, western union, walmart money tranfer, USPS) under the guise of evaluating the stores process for this.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, employment/payment seems too good to be true, issuer asks for money transfers via a third party, issuer requests gift cards, an employer is never met in person for an interview or otherwise.',
            }, {
                name: 'Personal Assistant Scam',
                scammer: 'The Scammer poses as a business person hiring a personal assistant, typically with an unexpectedly high wage.',
                how: 'The victim will either find the supposed position with an internet search or will be approached by someone online for a job as a personal assistant. Once "hired", the scammer sends the victim a check and asks them to either buy giftcards or do money transfers to either puchase supplies for their position, or pay someone else on behalf of the supposed employer.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, employment/payment seems too good to be true, issuer asks for money transfers via a third party, issuer requests gift cards, an employer is never met in person for an interview or otherwise.',
            }, {
                name: 'Romance Scam',
                scammer: 'The Scammer is a catfish, and poses as anyone they create or choose, usually someone rich and attractive, and has job or other excuse to explain being very busy and/or abroad.',
                how: 'The victim is approached on social media or a dating site by someone interested in dating them. Scammers will make themselves look like an attractive dating prosepect, and over time create an entirely fake relationship with believing victims. They will eventaully say they have been cut off from their accounts from some reason, and ask for money for any number of reasons (e.g. they or a family member are ill, they are stuck in another state country, they are dealing with inheritance issues). In this scam they will either mail a check for the victim to deposit and send money back to them, although sometimes they dont need to mail a fake check and just promise to pay the victim back once they are able to access their accounts. The victim is often to emotioanlly invested to see red flags and wants to support their supposed partner. Although there are countless variations, this is how the "Nigerian Prince Scam" works.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, anything seems too good to be true, romantic partner always has an excuse they cannot call/video-chat/visit and never meets the possible victim in person, romantic partner asks for money to be sent abroad, partner requests buying/sending gift cards.',
            }, {
                name: 'Sugar Baby Scam',
                scammer: 'Similar to romance scams, the scammer poses as someone lonely who is "just looking for someone to spoil".',
                how: 'The victim is approached online by someone claiming they want to spoil someone. They may ask for bank account and online banking details or might mail a check to the victim. The victim is typically told to keep part and send the remainder to a third party as a favor to their new benefactor.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, anything seems too good to be true, benefactor does not want to call/video-chat/visit and does not want to meet Sugar Baby in person, benefactor asks for money to be sent abroad, benefactor requests buying/sending gift cards.',
            }, {
                name: 'Car Wrap, or Decals Scam',
                scammer: 'The Scammer poses as an employee for a legtimate business looking to hire people to advertize their brand with car decals.',
                how: 'Similar to the mystery shopper scam, the victim will either find the employer with an internet search or will be approached by someone online. Once "hired", the victim is mailed a check and instructions to deposit it and keep part "as payment", but withdraw the rest to send to the decal shop that will wrap their car, which does not actually exist.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, employment/payment seems too good to be true, issuer asks for money transfers via a third party, issuer does not request driving records or background check.',
            }, {
                name: 'Prize Winner Scam',
                scammer: 'The Scammer poses as a representitive of a lottery, contest, or something similar (e.g. Publishers Clearing House).',
                how: 'The victim is conatcted and told they have won something, but will need to cover taxes or fees from things like shipping or processing to get their winnings. The victim is told theyre being sent a portion of the winnings which they will need to send elsewhere to pay for these taxes/fees. Sometimes no fake check is involved, just the request for money in order to "release winnings" to victims.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, anything seems too good to be true, issuer asks for money transfers via a third party, contest/lottery is not something the victim remembers signing up for.',
            }, {
                name: 'Overpayment Scam',
                scammer: 'The Scammer poses as a buyer for sales online, such as ebay or craigslist.',
                how: 'The victim is typically approached online about something they have listed for sale, especially larger items like cars or furniture. The scammer says they cannot pick up the item themselves, and offers to send extra money for the victim to hold the item. The victim is sent a check for way above the sales price, and is instructed to send money to "movers" which the scammer has hired. There are no movers, and their was no intent to actually purchase the item. This scam is sometimes seen with a slight avriation where the product is a rental unit.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, anything seems too good to be true, seller is asked to pay mover as opposed to buyer paying them directly.',
            }, {
                name: 'Beggar Scam',
                scammer: 'The Scammer poses as a person in need, often an actual old friend or distant family member, although sometimes they find victims without any relationship.',
                how: 'The victim may be approached in a number of ways, online or in person. The scammer will often use a fake social media account or someones real social media account they have taken over to pose as an old friend or relative in need. If the victim is approached in person the victim is usually random so they do not pose as a known entity. The scammer will say they do not have access to their accounts, and will ask the victim to cash a check for them, which they say they will let the victim keep part of or reward the victim somehow.',
                flags: 'Spelling/grammar errors in communications, pushy behaviors, anything seems too good to be true, request comes from someone victim is not extremely close with, request or mannerisms seem uncharactertic of the requestor (or uncharacteristic of their relationship with the victim).',
            }
        ]
    },
});
//End Vue
