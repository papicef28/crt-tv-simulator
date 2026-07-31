// Channel Database
const channelsDatabase = [
    {
        id: 1,
        number: 1,
        name: 'BBC One',
        image: 'images/bbc-one.jpg',
        color: '#FFD700',
        programs: [
            { title: 'EastEnders', time: '20:00 - 20:30', description: 'British soap drama' },
            { title: 'Sherlock', time: '21:00 - 22:00', description: 'Crime drama series' },
            { title: 'News at Ten', time: '22:00 - 22:30', description: 'Daily news bulletin' }
        ]
    },
    {
        id: 2,
        number: 2,
        name: 'BBC Two',
        image: 'images/bbc-two.jpg',
        color: '#FF6B6B',
        programs: [
            { title: 'Panorama', time: '20:30 - 21:00', description: 'Documentary series' },
            { title: 'Have I Got News', time: '21:00 - 21:30', description: 'Comedy panel show' },
            { title: 'Newsnight', time: '22:30 - 23:10', description: 'Current affairs' }
        ]
    },
    {
        id: 3,
        number: 3,
        name: 'ITV1',
        image: 'images/itv1.jpg',
        color: '#00B4D8',
        programs: [
            { title: 'Coronation Street', time: '19:30 - 20:00', description: 'British soap opera' },
            { title: 'Emmerdale', time: '20:00 - 20:30', description: 'Rural soap opera' },
            { title: 'Dancing on Ice', time: '20:30 - 22:00', description: 'Ice skating competition' }
        ]
    },
    {
        id: 4,
        number: 4,
        name: 'Channel 4',
        image: 'images/channel4.jpg',
        color: '#FF1493',
        programs: [
            { title: 'Come Dine With Me', time: '20:00 - 21:00', description: 'Reality cooking show' },
            { title: 'Hollyoaks', time: '18:30 - 19:00', description: 'Teen soap opera' },
            { title: 'The IT Crowd', time: '21:00 - 21:30', description: 'Comedy series' }
        ]
    },
    {
        id: 5,
        number: 5,
        name: 'Channel 5',
        image: 'images/channel5.jpg',
        color: '#00FF41',
        programs: [
            { title: 'Home and Away', time: '14:00 - 14:30', description: 'Australian soap' },
            { title: 'Neighbours', time: '14:30 - 15:00', description: 'Australian soap' },
            { title: 'The Gadget Show', time: '20:00 - 21:00', description: 'Technology review' }
        ]
    },
    {
        id: 6,
        number: 6,
        name: 'Dave',
        image: 'images/dave.jpg',
        color: '#FFA500',
        programs: [
            { title: 'Red Dwarf', time: '21:00 - 21:30', description: 'Sci-fi comedy' },
            { title: 'QI', time: '21:30 - 22:00', description: 'Quiz show' },
            { title: 'Mock the Week', time: '22:00 - 22:30', description: 'Comedy panel show' }
        ]
    },
    {
        id: 7,
        number: 7,
        name: 'Gold',
        image: 'images/gold.jpg',
        color: '#FFD700',
        programs: [
            { title: 'Only Fools and Horses', time: '20:00 - 20:30', description: 'Classic comedy' },
            { title: 'Fawlty Towers', time: '20:30 - 21:00', description: 'Comedy classic' },
            { title: 'The Two Ronnies', time: '21:00 - 21:30', description: 'Comedy sketch show' }
        ]
    },
    {
        id: 8,
        number: 8,
        name: 'ITV2',
        image: 'images/itv2.jpg',
        color: '#7B68EE',
        programs: [
            { title: 'The Only Way is Essex', time: '20:00 - 21:00', description: 'Reality TV show' },
            { title: 'Love Island', time: '21:00 - 22:30', description: 'Dating reality show' },
            { title: 'Celebrity Juice', time: '22:00 - 22:45', description: 'Celebrity comedy panel' }
        ]
    },
    {
        id: 9,
        number: 9,
        name: 'Sci-Fi',
        image: 'images/scifi.jpg',
        color: '#00CED1',
        programs: [
            { title: 'Doctor Who', time: '20:00 - 21:00', description: 'Science fiction series' },
            { title: 'Torchwood', time: '21:00 - 22:00', description: 'Sci-fi drama' },
            { title: 'Battlestar Galactica', time: '22:00 - 23:00', description: 'Sci-fi series' }
        ]
    },
    {
        id: 10,
        number: 10,
        name: 'Box Upfront',
        image: 'images/box.jpg',
        color: '#FF4500',
        programs: [
            { title: 'Latest Music Videos', time: '00:00 - 24:00', description: '24 hour music video channel' },
            { title: 'Chart Countdown', time: '12:00 - 13:00', description: 'Top 40 countdown' },
            { title: 'Throwback Hour', time: '18:00 - 19:00', description: '2000s music videos' }
        ]
    },
    {
        id: 11,
        number: 11,
        name: 'MTV',
        image: 'images/mtv.jpg',
        color: '#000000',
        programs: [
            { title: 'TRL Classic', time: '15:00 - 17:00', description: 'Total Request Live' },
            { title: 'Cribs', time: '20:00 - 20:30', description: 'Celebrity homes show' },
            { title: 'Pimp My Ride', time: '21:00 - 21:30', description: 'Car customization' }
        ]
    },
    {
        id: 12,
        number: 12,
        name: 'E!',
        image: 'images/e-news.jpg',
        color: '#FF0000',
        programs: [
            { title: 'E! News', time: '18:00 - 18:30', description: 'Entertainment news' },
            { title: 'Keeping up with Kardashians', time: '19:00 - 20:00', description: 'Reality show' },
            { title: 'Fashion Police', time: '20:00 - 20:30', description: 'Fashion critique' }
        ]
    }
];

// Get channel by number
function getChannel(channelNumber) {
    const channel = channelsDatabase.find(ch => ch.number === parseInt(channelNumber));
    return channel || channelsDatabase[0];
}

// Get all channels
function getAllChannels() {
    return channelsDatabase;
}

// Get channel by ID
function getChannelById(id) {
    return channelsDatabase.find(ch => ch.id === id);
}

// Get next channel
function getNextChannel(currentNumber) {
    const currentIndex = channelsDatabase.findIndex(ch => ch.number === currentNumber);
    const nextIndex = (currentIndex + 1) % channelsDatabase.length;
    return channelsDatabase[nextIndex];
}

// Get previous channel
function getPreviousChannel(currentNumber) {
    const currentIndex = channelsDatabase.findIndex(ch => ch.number === currentNumber);
    const prevIndex = (currentIndex - 1 + channelsDatabase.length) % channelsDatabase.length;
    return channelsDatabase[prevIndex];
}