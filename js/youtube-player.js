// YouTube Video Player Integration
class YouTubePlayer {
    constructor() {
        this.currentVideoId = null;
        this.player = null;
        this.isPlaying = false;
        this.youtubeAPIReady = false;
        this.init();
    }

    init() {
        this.loadYouTubeAPI();
    }

    // Load YouTube IFrame API
    loadYouTubeAPI() {
        if (window.YT) {
            this.youtubeAPIReady = true;
            return;
        }

        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Set up global callback for when API is ready
        window.onYouTubeIframeAPIReady = () => {
            this.youtubeAPIReady = true;
            this.createPlayer();
        };
    }

    // Create YouTube player
    createPlayer() {
        const playerContainer = document.getElementById('youtubePlayerContainer');
        if (!playerContainer || this.player) return;

        this.player = new YT.Player('youtubePlayer', {
            width: '100%',
            height: '100%',
            videoId: 'dQw4w9WgXcQ', // Default video
            events: {
                'onReady': (event) => this.onPlayerReady(event),
                'onStateChange': (event) => this.onPlayerStateChange(event)
            },
            playerVars: {
                'controls': 0,
                'showinfo': 0,
                'rel': 0,
                'modestbranding': 1,
                'fs': 0,
                'iv_load_policy': 3
            }
        });
    }

    onPlayerReady(event) {
        console.log('YouTube player ready');
        this.player.setVolume(50);
    }

    onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            this.isPlaying = true;
        } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            this.isPlaying = false;
        }
    }

    // Play video by ID
    playVideo(videoId) {
        if (!videoId) {
            this.showNoVideoMessage();
            return;
        }

        this.currentVideoId = videoId;

        if (this.player) {
            this.player.loadVideoById(videoId);
            this.player.playVideo();
        } else {
            // If player not ready, try again in a moment
            setTimeout(() => this.playVideo(videoId), 1000);
        }
    }

    // Stop video
    stopVideo() {
        if (this.player) {
            this.player.stopVideo();
            this.isPlaying = false;
        }
    }

    // Set volume
    setVolume(volume) {
        if (this.player && volume >= 0 && volume <= 100) {
            this.player.setVolume(volume);
        }
    }

    // Pause/Resume
    togglePlayPause() {
        if (!this.player) return;

        if (this.isPlaying) {
            this.player.pauseVideo();
        } else {
            this.player.playVideo();
        }
    }

    // Show no video message
    showNoVideoMessage() {
        const playerContainer = document.getElementById('youtubePlayerContainer');
        if (playerContainer) {
            const youtubePlayer = document.getElementById('youtubePlayer');
            if (youtubePlayer) {
                youtubePlayer.style.display = 'none';
            }

            const noVideoMsg = document.getElementById('noVideoMessage');
            if (noVideoMsg) {
                noVideoMsg.style.display = 'flex';
            }
        }
    }

    // Show video player
    showPlayer() {
        const youtubePlayer = document.getElementById('youtubePlayer');
        const noVideoMsg = document.getElementById('noVideoMessage');

        if (youtubePlayer) youtubePlayer.style.display = 'block';
        if (noVideoMsg) noVideoMsg.style.display = 'none';
    }

    // Get current video ID
    getCurrentVideoId() {
        return this.currentVideoId;
    }

    // Check if API is ready
    isAPIReady() {
        return this.youtubeAPIReady && this.player;
    }
}

// Create global YouTube player instance
const youtubePlayer = new YouTubePlayer();
