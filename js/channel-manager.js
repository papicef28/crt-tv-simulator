// Channel Manager - Handles UI for editing and managing channels
class ChannelManager {
    constructor(tv) {
        this.tv = tv;
        this.editingChannelId = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Settings button
        document.getElementById('btnSettings').addEventListener('click', () => this.openSettings());
        document.getElementById('closeSettings').addEventListener('click', () => this.closeSettings());

        // Tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Add channel form
        document.getElementById('btnAddChannel').addEventListener('click', () => this.handleAddChannel());
        document.getElementById('newChannelNumber').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleAddChannel();
        });

        // Edit channel modal close
        document.getElementById('closeEditChannel').addEventListener('click', () => this.closeEditChannel());
        document.getElementById('btnCancelEdit').addEventListener('click', () => this.closeEditChannel());
        document.getElementById('btnSaveEdit').addEventListener('click', () => this.handleSaveEdit());
        document.getElementById('btnDeleteChannel').addEventListener('click', () => this.handleDeleteChannel());

        // Reset channels
        document.getElementById('btnResetChannels').addEventListener('click', () => this.handleResetChannels());

        // Modal close on background click
        document.getElementById('settingsModal').addEventListener('click', (e) => {
            if (e.target.id === 'settingsModal') this.closeSettings();
        });
        document.getElementById('editChannelModal').addEventListener('click', (e) => {
            if (e.target.id === 'editChannelModal') this.closeEditChannel();
        });
    }

    openSettings() {
        document.getElementById('settingsModal').classList.add('show');
        this.loadChannelList();
    }

    closeSettings() {
        document.getElementById('settingsModal').classList.remove('show');
    }

    switchTab(tabName) {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        event.target.classList.add('active');
        const contentElement = document.getElementById(tabName);
        if (contentElement) {
            contentElement.classList.add('active');
        }
    }

    loadChannelList() {
        const channelSettingsList = document.getElementById('channelSettingsList');
        const channels = getAllChannels();
        const categories = getAllCategories();

        channelSettingsList.innerHTML = '';

        // Group by category
        const grouped = {};
        categories.forEach(cat => {
            grouped[cat] = channels.filter(ch => ch.category === cat);
        });

        // Display each category
        Object.keys(grouped).forEach(category => {
            if (grouped[category].length === 0) return;

            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-section';

            const categoryTitle = document.createElement('h3');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryDiv.appendChild(categoryTitle);

            const channelListDiv = document.createElement('div');
            channelListDiv.className = 'channel-items-grid';

            grouped[category].forEach(channel => {
                const item = document.createElement('div');
                item.className = 'channel-item-edit';
                item.draggable = true;
                item.dataset.channelId = channel.id;
                item.innerHTML = `
                    <div class="channel-item-header">
                        <span class="channel-item-number">${String(channel.number).padStart(3, '0')}</span>
                        <span class="channel-item-name">${channel.name}</span>
                    </div>
                    <div class="channel-item-actions">
                        <button class="btn-edit-channel" title="Edit">✎</button>
                    </div>
                `;

                item.querySelector('.btn-edit-channel').addEventListener('click', () => {
                    this.openEditChannel(channel);
                });

                // Drag and drop support
                item.addEventListener('dragstart', (e) => {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('channelId', channel.id);
                });

                channelListDiv.appendChild(item);
            });

            categoryDiv.appendChild(channelListDiv);
            channelSettingsList.appendChild(categoryDiv);
        });
    }

    openEditChannel(channel) {
        this.editingChannelId = channel.id;
        document.getElementById('editChannelNumber').value = channel.number;
        document.getElementById('editChannelName').value = channel.name;
        document.getElementById('editChannelColor').value = channel.color;
        document.getElementById('editChannelModal').classList.add('show');
    }

    closeEditChannel() {
        document.getElementById('editChannelModal').classList.remove('show');
        this.editingChannelId = null;
    }

    handleSaveEdit() {
        const number = document.getElementById('editChannelNumber').value;
        const name = document.getElementById('editChannelName').value;
        const color = document.getElementById('editChannelColor').value;

        if (!number || !name) {
            alert('Please fill in all fields');
            return;
        }

        const channel = getChannelById(this.editingChannelId);
        if (channel) {
            updateChannel(this.editingChannelId, number, name, color, channel.category);
            this.closeEditChannel();
            this.loadChannelList();

            // Update TV display if editing current channel
            if (this.tv.currentChannel === parseInt(number)) {
                this.tv.displayChannel(parseInt(number));
            }
        }
    }

    handleDeleteChannel() {
        if (confirm('Are you sure you want to delete this channel?')) {
            deleteChannel(this.editingChannelId);
            this.closeEditChannel();
            this.loadChannelList();
        }
    }

    handleAddChannel() {
        const number = document.getElementById('newChannelNumber').value;
        const name = document.getElementById('newChannelName').value;
        const color = document.getElementById('newChannelColor').value;

        if (!number || !name) {
            alert('Please fill in channel number and name');
            return;
        }

        addChannel(number, name, color, 'entertainment');
        document.getElementById('newChannelNumber').value = '';
        document.getElementById('newChannelName').value = '';
        document.getElementById('newChannelColor').value = '#00FF41';
        this.loadChannelList();
        alert(`Channel ${number} - ${name} added successfully!`);
    }

    handleResetChannels() {
        if (confirm('This will reset all channels to the default 999 channels. Continue?')) {
            resetChannels();
            this.loadChannelList();
            this.tv.currentChannel = 1;
            this.tv.displayChannel(1);
            alert('Channels reset to defaults');
        }
    }
}
