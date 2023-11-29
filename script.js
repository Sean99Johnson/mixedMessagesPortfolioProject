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
        'The goal is not to sail the boat, but rather to help the boat sail herself.',
        'Anyone can hold the helm when the sea is calm.',
        'It is the set of the sails, not the direction of the wind that determines which way we will go.',
        'A smooth sea never made for a skilled sailor.',
        'Come sail away with me.',
        'Freedom, open air, and adventure are found on the sea.',
        'Seas the day!',
        'Home is where the anchor drops.'],
    getTemperature() { //Returns temperature between 0 & 100 degrees Farenheight as a number.
        return Math.floor(Math.random()*101);
    },
    getWindSpeed() {
        
    }
};