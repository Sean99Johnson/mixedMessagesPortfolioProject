//Object that stores data and methods for creating the random message.
const messageData = {
    sailboat: [
        'Moore 24',
        'Pearson Vanguard',
        'Dufour Arpege 30',
        'Alerion Express 28',
        'Mason 43/44',
        'Jeanneau Sun Odyssey 43DS',
        'Nor’Sea 27',
        'Freedom 40',
        'Beneteau Sense 50',
        'Nonsuch 30'],
    sailingQuotes: [
        'the goal is not to sail the boat, but rather to help the boat sail herself.',
        'anyone can hold the helm when the sea is calm.',
        'it is the set of the sails, not the direction of the wind that determines which way we will go.',
        'a smooth sea never made for a skilled sailor.',
        'freedom, open air, and adventure are found on the sea.',
        'seas the day!',
        'home is where the anchor drops.'],
    getTemperature() { //Returns temperature between 0 & 100 degrees Farenheight as a number.
        return Math.floor(Math.random()*101);
    },
    getWindSpeed() { //Returns wind speeds in increments of 5 between 0 & 40 kts as a number.
        return Math.floor(Math.random()*9)*5;
    }
};