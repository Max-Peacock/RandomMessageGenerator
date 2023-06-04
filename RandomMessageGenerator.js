const quotes = ['I came, I saw, I conquered.', 'Following the light of the sun, we left the Old World.',
'It is not necessary to bury the truth. It is sufficient merely to delay it until nobody cares.', 'The death of one man is a tragedy. The death of millions is a statistic.',
'Either I conquer Istanbul or Istanbul conquers me.','To conquer a nation, first disarm its citizens.', 'Even if the skies were shorter than my knees, I would not kneel.'];
const leaders = ['Julius Caesar','Christopher Columbus', 'Napoleon Bonaparte', 'Josef Stalin', 'Mehmed the Conqueror', 'Adolf Hitler', 'Cyrus The Great'];
const dates = ['100BC', '1500AD', '1805AD','1938AD', '1455AD','1935', '565BC'];


const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
const randomLeaderIndex = Math.floor(Math.random() * leaders.length);
const randomDateIndex = Math.floor(Math.random() * dates.length);
const randomQuote = quotes[randomQuoteIndex];
const randomLeader = leaders[randomLeaderIndex];
const randomDate = dates[randomDateIndex];

console.log('Quote:', randomQuote);
console.log('Leader:', randomLeader);
console.log('Date:', randomDate);
