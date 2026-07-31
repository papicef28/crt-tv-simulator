// Channel Database - 999 Channels with Categories
const channelCategories = {
    news: ['BBC News', 'Sky News', 'CNN International', 'Reuters TV', 'Associated Press News', 'France 24', 'Deutsche Welle', 'Al Jazeera', 'CNBC', 'Bloomberg TV'],
    sports: ['ESPN', 'Sky Sports', 'BT Sport', 'Eurosport', 'NBC Sports', 'Fox Sports', 'DAZN', 'Peacock Sports', 'Tennis Channel', 'Golf Channel'],
    movies: ['HBO', 'Netflix', 'Amazon Prime Video', 'Disney+', 'Sony Movie Channel', 'Universal Channel', 'Warner TV', 'FX Movies', 'TCM', 'Paramount'],
    international: ['BBC America', 'International Channel', 'NHK World', 'CCTV News', 'Russia Today', 'Euronews', 'TRT World', 'WION', 'Oman TV', 'Qatar News'],
    music: ['MTV', 'MTV2', 'VH1', 'Country Music TV', 'Music Choice', 'BET Jams', 'Fuse', 'Revolt', 'AXS TV', 'Palladia'],
    documentaries: ['Discovery', 'National Geographic', 'BBC Documentary', 'History Channel', 'Animal Planet', 'Smithsonian', 'PBS', 'curiosity', 'Oxygen', 'Investigation Discovery'],
    kids: ['Cartoon Network', 'Disney Channel', 'Nickelodeon', 'CBeebies', 'CBBC', 'Boomerang', 'Kids WB', 'Treehouse', 'YTV', 'Teletoon'],
    entertainment: ['E!', 'Bravo', 'TLC', 'VH1', 'Oxygen', 'Lifetime', 'Hallmark', 'AMC', 'IFC', 'Syfy'],
    cooking: ['Food Network', 'Cooking Channel', 'HGTV', 'DIY Network', 'Fine Living', 'Taste', 'Lifetime Movie Network', 'W Network', 'OWN', 'TLC'],
    lifestyle: ['Oprah', 'Dr. Oz', 'Ellen', 'Today Show', 'Good Morning America', 'The View', 'Live with Kelly', 'Wendy Williams', 'Rachael Ray', 'Martha Stewart'],
    gaming: ['Twitch', 'Gaming TV', 'G4', 'Spike', 'TBS', 'Cartoon Network', 'Adult Swim', 'FunimationNow', 'Crunchyroll', 'IGN'],
    anime: ['Cartoon Network', 'Adult Swim', 'FunimationNow', 'Crunchyroll', 'Animelab', 'Hulu Anime', 'Netflix Anime', 'Anime Strike', 'HIDIVE', 'Tubi Anime'],
    religious: ['EWTN', 'Religious TV', 'GOD TV', 'Daystar', 'Trinity', 'CTN', 'Cornerstone', 'TBN', 'Inspiration', 'Hope Channel'],
    weather: ['Weather Channel', 'Local Weather', 'Weather Underground', 'Accuweather', 'The Weather Network', 'Weather Now', 'Storm Central', 'Climate Report', 'Severe Weather', 'Radar Plus'],
    business: ['Bloomberg', 'CNBC', 'Fox Business', 'MarketWatch', 'Investor Channel', 'BNN Bloomberg', 'Financial News', 'Stock Market TV', 'Trading View', 'eToro'],
};

const genreColors = {
    news: '#FF0000',
    sports: '#1E90FF',
    movies: '#9932CC',
    international: '#FFD700',
    music: '#FF1493',
    documentaries: '#228B22',
    kids: '#FF69B4',
    entertainment: '#FF6347',
    cooking: '#FF8C00',
    lifestyle: '#FF69B4',
    gaming: '#00FF00',
    anime: '#DC143C',
    religious: '#8B4513',
    weather: '#87CEEB',
    business: '#000080'
};

// Generate 999 channels
function generateChannels() {
    const channels = [];
    let channelId = 1;
    let channelNumber = 1;

    // Expand each category to create 999 channels
    const categories = Object.keys(channelCategories);
    const baseChannelsPerCategory = Math.floor(999 / categories.length);
    const remainder = 999 % categories.length;

    categories.forEach((category, catIndex) => {
        const baseChannels = channelCategories[category];
        const channelsToCreate = baseChannelsPerCategory + (catIndex < remainder ? 1 : 0);

        for (let i = 0; i < channelsToCreate; i++) {
            const baseName = baseChannels[i % baseChannels.length];
            const suffix = i >= baseChannels.length ? ` ${Math.floor(i / baseChannels.length) + 1}` : '';
            const channelName = baseName + suffix;

            // Generate time slots based on channel number
            const startHour = (channelNumber % 24);
            const endHour = (startHour + 1) % 24;

            channels.push({
                id: channelId,
                number: channelNumber,
                name: channelName,
                category: category,
                image: `images/channel-${channelNumber}.jpg`,
                color: genreColors[category] || generateRandomColor(),
                programs: [
                    {
                        title: `${channelName} Morning Show`,
                        time: `${String(startHour).padStart(2, '0')}:00 - ${String(endHour).padStart(2, '0')}:00`,
                        description: `Morning broadcast on ${channelName}`
                    },
                    {
                        title: `${channelName} Afternoon`,
                        time: `${String((startHour + 1) % 24).padStart(2, '0')}:00 - ${String((startHour + 2) % 24).padStart(2, '0')}:00`,
                        description: `Afternoon programming`
                    },
                    {
                        title: `${channelName} Prime Time`,
                        time: `${String((startHour + 2) % 24).padStart(2, '0')}:00 - ${String((startHour + 3) % 24).padStart(2, '0')}:00`,
                        description: `Evening entertainment`
                    }
                ]
            });

            channelId++;
            channelNumber++;

            if (channelNumber > 999) break;
        }
        if (channelNumber > 999) break;
    });

    return channels.slice(0, 999);
}

function generateRandomColor() {
    const hue = Math.random() * 360;
    const saturation = 70 + Math.random() * 30;
    const lightness = 45 + Math.random() * 20;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Load channels from localStorage or use generated defaults
function loadChannels() {
    const saved = localStorage.getItem('crtChannels');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Error loading saved channels:', e);
            return generateChannels();
        }
    }
    return generateChannels();
}

// Save channels to localStorage
function saveChannels(channels) {
    try {
        localStorage.setItem('crtChannels', JSON.stringify(channels));
    } catch (e) {
        console.error('Error saving channels:', e);
        if (e.name === 'QuotaExceededError') {
            console.warn('LocalStorage full. Saving to limited size.');
            const limited = channels.slice(0, 100);
            localStorage.setItem('crtChannels', JSON.stringify(limited));
        }
    }
}

// Main channels database
let channelsDatabase = loadChannels();

// Get channel by number
function getChannel(channelNumber) {
    const channel = channelsDatabase.find(ch => ch.number === parseInt(channelNumber));
    return channel || channelsDatabase[0];
}

// Get all channels
function getAllChannels() {
    return channelsDatabase.sort((a, b) => a.number - b.number);
}

// Get channels by category
function getChannelsByCategory(category) {
    return channelsDatabase.filter(ch => ch.category === category).sort((a, b) => a.number - b.number);
}

// Get all categories
function getAllCategories() {
    return Object.keys(channelCategories);
}

// Get channel by ID
function getChannelById(id) {
    return channelsDatabase.find(ch => ch.id === id);
}

// Get next channel
function getNextChannel(currentNumber) {
    const sorted = getAllChannels();
    const currentIndex = sorted.findIndex(ch => ch.number === currentNumber);
    const nextIndex = (currentIndex + 1) % sorted.length;
    return sorted[nextIndex];
}

// Get previous channel
function getPreviousChannel(currentNumber) {
    const sorted = getAllChannels();
    const currentIndex = sorted.findIndex(ch => ch.number === currentNumber);
    const prevIndex = (currentIndex - 1 + sorted.length) % sorted.length;
    return sorted[prevIndex];
}

// Add new channel
function addChannel(number, name, color, category = 'entertainment') {
    const newId = Math.max(...channelsDatabase.map(ch => ch.id), 0) + 1;
    const newChannel = {
        id: newId,
        number: parseInt(number),
        name: name,
        category: category,
        image: `images/channel-${number}.jpg`,
        color: color,
        programs: [
            { title: `${name} Show 1`, time: '20:00 - 21:00', description: `Featured program on ${name}` },
            { title: `${name} Show 2`, time: '21:00 - 22:00', description: `Evening show on ${name}` },
            { title: `${name} Show 3`, time: '22:00 - 23:00', description: `Late night on ${name}` }
        ]
    };

    // Check if channel number already exists
    const existingIndex = channelsDatabase.findIndex(ch => ch.number === newChannel.number);
    if (existingIndex !== -1) {
        channelsDatabase.splice(existingIndex, 1);
    }

    channelsDatabase.push(newChannel);
    saveChannels(channelsDatabase);
    return newChannel;
}

// Update channel
function updateChannel(id, number, name, color, category = 'entertainment') {
    const channel = getChannelById(id);
    if (channel) {
        // Check if new number already exists and remove it
        const existingIndex = channelsDatabase.findIndex(ch => ch.number === parseInt(number) && ch.id !== id);
        if (existingIndex !== -1) {
            channelsDatabase.splice(existingIndex, 1);
        }

        channel.number = parseInt(number);
        channel.name = name;
        channel.color = color;
        channel.category = category;
        saveChannels(channelsDatabase);
        return channel;
    }
    return null;
}

// Delete channel
function deleteChannel(id) {
    const index = channelsDatabase.findIndex(ch => ch.id === id);
    if (index !== -1) {
        channelsDatabase.splice(index, 1);
        saveChannels(channelsDatabase);
        return true;
    }
    return false;
}

// Reset to defaults
function resetChannels() {
    channelsDatabase = generateChannels();
    saveChannels(channelsDatabase);
}

// Rearrange channels by number
function rearrangeChannels(newOrder) {
    const updated = newOrder.map((id, index) => {
        const channel = getChannelById(id);
        if (channel) {
            channel.number = index + 1;
        }
        return channel;
    }).filter(ch => ch !== null);

    channelsDatabase = updated;
    saveChannels(channelsDatabase);
}

// Get total channel count
function getTotalChannels() {
    return channelsDatabase.length;
}

// Search channels
function searchChannels(query) {
    const lowerQuery = query.toLowerCase();
    return channelsDatabase.filter(ch =>
        ch.name.toLowerCase().includes(lowerQuery) ||
        ch.category.toLowerCase().includes(lowerQuery) ||
        ch.number.toString().includes(query)
    ).sort((a, b) => a.number - b.number);
}

// Get channels in range
function getChannelsInRange(start, end) {
    return channelsDatabase.filter(ch => ch.number >= start && ch.number <= end).sort((a, b) => a.number - b.number);
}