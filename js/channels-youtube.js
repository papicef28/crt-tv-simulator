// YouTube Video IDs mapped to channels by category
const channelYouTubeVideos = {
    // News Channel Videos
    'BBC News': 'jNQXAC9IVRw',
    'Sky News': 'dQw4w9WgXcQ',
    'CNN International': 'kffacxfA7g4',
    'Reuters TV': 'Xo0qnV5yt1I',
    'Associated Press News': 'GCwT8nVJFJo',
    'France 24': 'B7zfKRxAenE',
    'Deutsche Welle': 'zxLLI-Uxc0I',
    'Al Jazeera': '9bZkp7q19f0',
    'CNBC': 'TfVnR5kEQJo',
    'Bloomberg TV': 'eJFp7E5YDGE',

    // Sports Channel Videos
    'ESPN': 'OPf0YbXqDm0',
    'Sky Sports': 'ZcJjMnSLW_I',
    'BT Sport': 'aqz-KE-bpKQ',
    'Eurosport': '9VDvgHVPLW4',
    'NBC Sports': 'E4gOvzMKgkY',
    'Fox Sports': 'IJ2_7w7K4nE',
    'DAZN': 'gVfgKzoVty0',
    'Peacock Sports': '4eEurIcD51I',
    'Tennis Channel': 'TfIIpS7tajE',
    'Golf Channel': 'WlbjW5B1PEY',

    // Movie Channel Videos
    'HBO': 'V75dMMIW2B4',
    'Netflix': 'SJUklFtsFe4',
    'Amazon Prime Video': 'rT63VyqHnKE',
    'Disney+': 'YSZtO7-HII0',
    'Sony Movie Channel': 'kJQP7kiw9Fk',
    'Universal Channel': 'UJ0L-5llzJo',
    'Warner TV': 'KdhSuP91slI',
    'FX Movies': 'HngAz1_HWnE',
    'TCM': '8hMYDjALwKI',
    'Paramount': 'uMvU7RZ-VyE',

    // International Channel Videos
    'BBC America': 'P4a6qfAaFeo',
    'International Channel': 'QqB7VR85q1w',
    'NHK World': 'oUFJJNQGwhk',
    'CCTV News': 'E0ZmTH2N0ew',
    'Russia Today': 'tYzMGcUty6s',
    'Euronews': 'NTRC_l4_q9g',
    'TRT World': 'HaI8hWqcXEI',
    'WION': 'B1l0rZHcWbk',
    'Oman TV': '5GUF5cVJEYE',
    'Qatar News': 'GhNJ8fB0aHw',

    // Music Channel Videos
    'MTV': 'giNKrUy1AKE',
    'MTV2': 'kJQP7kiw9Fk',
    'VH1': 'dQw4w9WgXcQ',
    'Country Music TV': '0diJNybk0Mw',
    'Music Choice': 'jNQXAC9IVRw',
    'BET Jams': 'HKQQAv5k9BC',
    'Fuse': 'MfBPQNe1HRY',
    'Revolt': 'hHqnbj7f9cg',
    'AXS TV': 'TfVnR5kEQJo',
    'Palladia': 'OPf0YbXqDm0',

    // Documentary Channel Videos
    'Discovery': 'YZ3K8FYyNEY',
    'National Geographic': 'r0sJ1EKSjIw',
    'BBC Documentary': 'jNQXAC9IVRw',
    'History Channel': '7Ew3gGVoGVE',
    'Animal Planet': 'XfR9iY5y94s',
    'Smithsonian': 'NyJDpDyb6s0',
    'PBS': 'i8p0Xd5dZWM',
    'curiosity': 'Y6kyRJvsTAk',
    'Oxygen': 'KdhSuP91slI',
    'Investigation Discovery': 'UgHGLB99D8o',

    // Kids Channel Videos
    'Cartoon Network': 'kOkQ4T5WO9E',
    'Disney Channel': 'YSZtO7-HII0',
    'Nickelodeon': 'F4tHL8reNCs',
    'CBeebies': 'jNQXAC9IVRw',
    'CBBC': 'dQw4w9WgXcQ',
    'Boomerang': 'JGwWNGJdvx8',
    'Kids WB': 'kJQP7kiw9Fk',
    'Treehouse': 'HKQQAv5k9BC',
    'YTV': 'hHqnbj7f9cg',
    'Teletoon': 'MfBPQNe1HRY',

    // Entertainment Channel Videos
    'E!': 'V75dMMIW2B4',
    'Bravo': 'SJUklFtsFe4',
    'TLC': 'rT63VyqHnKE',
    'VH1': 'dQw4w9WgXcQ',
    'Oxygen': 'KdhSuP91slI',
    'Lifetime': 'kOkQ4T5WO9E',
    'Hallmark': 'YSZtO7-HII0',
    'AMC': 'F4tHL8reNCs',
    'ABC Family': 'jNQXAC9IVRw',
    'Syfy': 'dQw4w9WgXcQ',

    // Cooking Channel Videos
    'Food Network': 'qepIT6AQMPA',
    'Cooking Channel': 'kOkQ4T5WO9E',
    'HGTV': 'YSZtO7-HII0',
    'DIY Network': 'F4tHL8reNCs',
    'Fine Living': 'jNQXAC9IVRw',
    'Taste': 'dQw4w9WgXcQ',
    'Lifetime Movie Network': 'kJQP7kiw9Fk',
    'W Network': 'HKQQAv5k9BC',
    'OWN': 'hHqnbj7f9cg',
    'TLC': 'rT63VyqHnKE',

    // Lifestyle Channel Videos
    'Oprah': 'SJUklFtsFe4',
    'Dr. Oz': 'V75dMMIW2B4',
    'Ellen': 'qepIT6AQMPA',
    'Today Show': 'kOkQ4T5WO9E',
    'Good Morning America': 'YSZtO7-HII0',
    'The View': 'F4tHL8reNCs',
    'Live with Kelly': 'jNQXAC9IVRw',
    'Wendy Williams': 'dQw4w9WgXcQ',
    'Rachael Ray': 'kJQP7kiw9Fk',
    'Martha Stewart': 'HKQQAv5k9BC',

    // Gaming Channel Videos
    'Twitch': 'hHqnbj7f9cg',
    'Gaming TV': 'MfBPQNe1HRY',
    'G4': 'OPf0YbXqDm0',
    'Spike': 'TfVnR5kEQJo',
    'TBS': 'IJ2_7w7K4nE',
    'Cartoon Network': 'kOkQ4T5WO9E',
    'Adult Swim': 'gVfgKzoVty0',
    'FunimationNow': 'ZcJjMnSLW_I',
    'Crunchyroll': 'aqz-KE-bpKQ',
    'IGN': '9VDvgHVPLW4',

    // Anime Channel Videos
    'Animelab': 'E4gOvzMKgkY',
    'Hulu Anime': '4eEurIcD51I',
    'Netflix Anime': 'TfIIpS7tajE',
    'Anime Strike': 'WlbjW5B1PEY',
    'HIDIVE': 'V75dMMIW2B4',
    'Tubi Anime': 'SJUklFtsFe4',

    // Religious Channel Videos
    'EWTN': 'rT63VyqHnKE',
    'Religious TV': 'kffacxfA7g4',
    'GOD TV': 'Xo0qnV5yt1I',
    'Daystar': 'GCwT8nVJFJo',
    'Trinity': 'B7zfKRxAenE',
    'CTN': 'zxLLI-Uxc0I',
    'Cornerstone': '9bZkp7q19f0',
    'TBN': 'TfVnR5kEQJo',
    'Inspiration': 'eJFp7E5YDGE',
    'Hope Channel': 'OPf0YbXqDm0',

    // Weather Channel Videos
    'Weather Channel': 'ZcJjMnSLW_I',
    'Local Weather': 'aqz-KE-bpKQ',
    'Weather Underground': '9VDvgHVPLW4',
    'Accuweather': 'E4gOvzMKgkY',
    'The Weather Network': 'IJ2_7w7K4nE',
    'Weather Now': '4eEurIcD51I',
    'Storm Central': 'TfIIpS7tajE',
    'Climate Report': 'WlbjW5B1PEY',
    'Severe Weather': 'V75dMMIW2B4',
    'Radar Plus': 'SJUklFtsFe4',

    // Business Channel Videos
    'Bloomberg': 'rT63VyqHnKE',
    'CNBC': 'kffacxfA7g4',
    'Fox Business': 'Xo0qnV5yt1I',
    'MarketWatch': 'GCwT8nVJFJo',
    'Investor Channel': 'B7zfKRxAenE',
    'BNN Bloomberg': 'zxLLI-Uxc0I',
    'Financial News': '9bZkp7q19f0',
    'Stock Market TV': 'TfVnR5kEQJo',
    'Trading View': 'eJFp7E5YDGE',
    'eToro': 'OPf0YbXqDm0'
};

// Get YouTube video ID for a channel
function getYouTubeVideoId(channelName) {
    return channelYouTubeVideos[channelName] || null;
}

// Get random video ID (fallback)
function getRandomYouTubeVideo() {
    const videos = Object.values(channelYouTubeVideos);
    return videos[Math.floor(Math.random() * videos.length)];
}
