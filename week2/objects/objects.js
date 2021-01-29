
const games = window.prompt("Of my 5 favorite games, which number do you want to know about?")
const myGames = [{ 
    game: "Cribbage", 
    gameType: "card game", 
    maxPlayers: 3, 
    bestToken: "the darkest pegs available", 
    shortDescription: "Do Math. Move Pegs. Ruthelessly steal points if your house rules allow it"
    },
    {
    game: "Trivial Pursuit", 
    gameType: "board game", 
    maxPlayers: 6, 
    bestToken: "purple", 
    shortDescription: "Finally use all your useless knowledge, get correct answers in 6 categories to win."
    },
    {
    game: "Monopoly", 
    gameType: "board game", 
    maxPlayers: 8, 
    bestToken: "Scottie Dog", 
    shortDescription: "Buy Properties. Build a Hotel Empire. Collect $200. Ruin Friendships"
    },
    {
    game: "Gin Rummy", 
    gameType: "card game", 
    maxPlayers: 3, 
    bestToken: "not applicable", 
    shortDescription: "Make sets of 3-4 cards in a single number or runs in one suit. Yell 'Thats the one!' when you win."
    },
    {
    game: "Jigsaws", 
    gameType: "puzzle game", 
    maxPlayers: "infinite", 
    bestToken: "not applicable", 
    shortDescription: "Waste hours putting pieces together just for the thrill of completion. You win if the dog doesn't eat any pieces." 
}];
window.alert(
    "You've selected " + myGames[games - 1].game +
    ", a " + myGames[games - 1].gameType +
    " with an optimal maximum of " + myGames[games - 1].maxPlayers +
    " players. The best game token is " + myGames[games - 1].bestToken +
    ". How do you play, you ask? " + myGames[games - 1].shortDescription);