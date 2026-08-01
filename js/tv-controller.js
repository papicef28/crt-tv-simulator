// TV Controller Class with YouTube Integration
class TVController {
    constructor() {
        this.currentChannel = 1;
        this.isPowered = true;
        this.volume = 50;
        this.brightness = 100;
        this.color = 100;
        this.isMuted = false;
        this.youtubePlayer = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.displayChannel(this.currentChannel);
        this.updatePowerLight();
        this.updateTotalChannelsDisplay();
        
        // Wait for YouTube player to be ready
        setTimeout(() => {
            this.youtubePlayer = window.youtubePlayer;
            this.playChannelVideo();
        }, 2000);
    }

    setupEventListeners() {
        // Channel controls
        document.getElementById('btnNextChannel').addEventListener('click', () => this.changeChannel(1));
        document.getElementById('btnPrevChannel').addEventListener('click', () => this.changeChannel(-1));
        
        // Direct input
        const directInput = document.getElementById('directChannelInput');
        document.getElementById('btnGo').addEventListener('click', () => this.goToChannel(directInput.value));
        directInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.goToChannel(directInput.value);
        });

        // Volume control
        document.getElementById('volumeSlider').addEventListener('input', (e) => this.setVolume(e.target.value));

        // Brightness control
        document.getElementById('brightnessSlider').addEventListener('input', (e) => this.setBrightness(e.target.value));

        // Color control
        document.getElementById('colorSlider').addEventListener('input', (e) => this.setColor(e.target.value));

        // Main controls
        document.getElementById('btnPower').addEventListener('click', () => this.togglePower());
        document.getElementById('btnMenu').addEventListener('click', () => this.openChannelGuide());
        document.getElementById('btnMute').addEventListener('click', () => this.toggleMute());

        // Modal close
        document.getElementById('closeChannelGuide').addEventListener('click', () => this.closeChannelGuide());
        document.getElementById('channelGuideModal').addEventListener('click', (e) => {
            if (e.target.id === 'channelGuideModal') this.closeChannelGuide();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    changeChannel(direction) {
        if (!this.isPowered) return;
        
        if (direction === 1) {
            const nextChannel = getNextChannel(this.currentChannel);
            this.currentChannel = nextChannel.number;
        } else {
            const prevChannel = getPreviousChannel(this.currentChannel);
            this.currentChannel = prevChannel.number;
        }
        
        this.displayChannel(this.currentChannel);
        this.playChannelVideo();
        this.playChannelChangeSound();
    }

    goToChannel(channelNumber) {
        if (!this.isPowered) return;
        
        const channel = getChannel(channelNumber);
        if (channel) {
            this.currentChannel = channel.number;
            this.displayChannel(this.currentChannel);
            this.playChannelVideo();
            document.getElementById('directChannelInput').value = '';
            this.playChannelChangeSound();
        } else {
            alert('Channel not found!');
        }
    }

    displayChannel(channelNumber) {
        const channel = getChannel(channelNumber);
        if (!channel) return;

        // Update channel info
        document.getElementById('channelNumber').textContent = String(channel.number).padStart(3, '0');
        document.getElementById('channelName').textContent = channel.name;
        document.getElementById('channelDisplaySmall').textContent = String(channel.number).padStart(3, '0');

        // Update video area with channel color
        const videoArea = document.getElementById('videoArea');
        videoArea.style.background = `linear-gradient(135deg, ${channel.color}30 0%, ${channel.color}10 100%)`;

        // Update program info
        const program = channel.programs[Math.floor(Math.random() * channel.programs.length)];
        document.getElementById('programTitle').textContent = program.title;
        document.getElementById('programTime').textContent = program.time;

        // Apply brightness and color filters
        this.updateScreenFilters();
    }

    playChannelVideo() {
        if (!this.youtubePlayer || !this.isPowered) return;

        const channel = getChannel(this.currentChannel);
        if (!channel) return;

        // Get YouTube video ID for this channel
        const videoId = getYouTubeVideoId(channel.name) || getRandomYouTubeVideo();

        if (videoId) {
            console.log(`Playing video: ${videoId} for channel: ${channel.name}`);
            this.youtubePlayer.playVideo(videoId);
            this.youtubePlayer.showPlayer();
            this.updateYouTubeVolume();
        } else {
            this.youtubePlayer.showNoVideoMessage();
        }
    }

    updateYouTubeVolume() {
        if (!this.youtubePlayer) return;

        const volume = this.isMuted ? 0 : this.volume;
        this.youtubePlayer.setVolume(volume);
    }

    setVolume(value) {
        this.volume = parseInt(value);
        document.getElementById('volumeValue').textContent = this.volume;
        if (this.isMuted) this.isMuted = false;
        this.updateYouTubeVolume();
    }

    setBrightness(value) {
        this.brightness = parseInt(value);
        document.getElementById('brightnessValue').textContent = this.brightness;
        this.updateScreenFilters();
    }

    setColor(value) {
        this.color = parseInt(value);
        document.getElementById('colorValue').textContent = this.color;
        this.updateScreenFilters();
    }

    updateScreenFilters() {
        const screen = document.querySelector('.screen');
        const brightnessPercent = this.brightness / 100;
        const colorPercent = this.color / 100;
        
        screen.style.filter = `brightness(${brightnessPercent}) saturate(${colorPercent})`;
    }

    togglePower() {
        this.isPowered = !this.isPowered;
        const powerBtn = document.getElementById('btnPower');
        const screen = document.querySelector('.screen');
        
        if (this.isPowered) {
            powerBtn.classList.remove('off');
            screen.style.opacity = '1';
            this.playPowerSound();
            this.playChannelVideo();
        } else {
            powerBtn.classList.add('off');
            screen.style.opacity = '0.2';
            this.playPowerOffSound();
            if (this.youtubePlayer) {
                this.youtubePlayer.stopVideo();
            }
        }
        
        this.updatePowerLight();
    }

    updatePowerLight() {
        const light = document.getElementById('powerLight');
        if (this.isPowered) {
            light.classList.add('active');
        } else {
            light.classList.remove('active');
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const muteBtn = document.getElementById('btnMute');
        
        if (this.isMuted) {
            muteBtn.textContent = 'MUTE ON';
            muteBtn.style.background = 'linear-gradient(180deg, #ff6b6b, #cc0000)';
            this.youtubePlayer.setVolume(0);
        } else {
            muteBtn.textContent = 'MUTE';
            muteBtn.style.background = 'linear-gradient(180deg, #555, #333)';
            this.youtubePlayer.setVolume(this.volume);
        }
    }

    openChannelGuide() {
        if (!this.isPowered) return;
        
        const modal = document.getElementById('channelGuideModal');
        const channelList = document.getElementById('channelList');
        channelList.innerHTML = '';

        const channels = getAllChannels();
        channels.forEach(channel => {
            const item = document.createElement('div');
            item.className = 'channel-item';
            item.style.borderLeft = `4px solid ${channel.color}`;
            item.innerHTML = `
                <span class="channel-item-number">${String(channel.number).padStart(3, '0')}</span>
                <span class="channel-item-name">${channel.name}</span>
                <span class="channel-item-category">${channel.category}</span>
            `;
            item.addEventListener('click', () => {
                this.goToChannel(channel.number);
                this.closeChannelGuide();
            });
            channelList.appendChild(item);
        });

        modal.classList.add('show');
    }

    closeChannelGuide() {
        document.getElementById('channelGuideModal').classList.remove('show');
    }

    updateTotalChannelsDisplay() {
        const totalElement = document.getElementById('totalChannels');
        if (totalElement) {
            totalElement.textContent = getTotalChannels();
        }
    }

    handleKeyboard(e) {
        if (!this.isPowered) return;

        const key = e.key.toLowerCase();
        
        // Number keys for direct channel input
        if (key >= '0' && key <= '9') {
            const input = document.getElementById('directChannelInput');
            if (input.value.length < 4) {
                input.value += key;
            }
        }
        
        // Arrow keys for channel navigation
        if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
            this.changeChannel(1);
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
            this.changeChannel(-1);
        }
        
        // Enter to select channel
        if (e.key === 'Enter') {
            const input = document.getElementById('directChannelInput');
            if (input.value) {
                this.goToChannel(input.value);
                input.value = '';
            }
        }

        // Space to play/pause
        if (e.key === ' ') {
            e.preventDefault();
            if (this.youtubePlayer) {
                this.youtubePlayer.togglePlayPause();
            }
        }
    }

    playChannelChangeSound() {
        // Simulate audio with visual feedback
        const screen = document.querySelector('.screen');
        screen.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.8)';
        setTimeout(() => {
            screen.style.boxShadow = 'inset 0 0 20px rgba(0, 0, 0, 0.8)';
        }, 100);
    }

    playPowerSound() {
        // Power on sound simulation
        this.playChannelChangeSound();
    }

    playPowerOffSound() {
        // Power off sound simulation
        const screen = document.querySelector('.screen');
        screen.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.8)';
    }
}
