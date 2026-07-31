// Initialize the TV when the page loads
let tv, channelManager;

document.addEventListener('DOMContentLoaded', () => {
    // Create TV instance
    tv = new TVController();
    
    // Create Channel Manager instance
    channelManager = new ChannelManager(tv);
    
    // Add some visual enhancements
    addVisualEnhancements();
    
    console.log('CRT TV Simulator initialized!');
    console.log('Total channels:', getTotalChannels());
});

// Visual Enhancements
function addVisualEnhancements() {
    // Add ambient light effect
    const screen = document.querySelector('.screen');
    
    // Create a subtle glow effect that pulses
    setInterval(() => {
        const glow = Math.random() * 2 + 3;
        screen.style.boxShadow = `inset 0 0 20px rgba(0, 0, 0, 0.8), 0 0 ${glow}px rgba(0, 255, 0, 0.1)`;
    }, 1000);
}

// Prevent double-tap zoom on mobile
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// Add performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
        console.log('CRT TV - 999 Channels Full Stack Web Application');
        console.log('Features:');
        console.log('✓ 999 Channels across 15 categories');
        console.log('✓ Channel editing and management');
        console.log('✓ Channel arrangement by numbers');
        console.log('✓ Add/Delete channels dynamically');
        console.log('✓ LocalStorage persistence');
        console.log('✓ Realistic CRT TV simulation');
    });
}

// Global keyboard shortcuts help
window.addEventListener('keydown', (e) => {
    // Press ? for help (optional feature)
    if (e.key === '?') {
        showKeyboardHelp();
    }
});

function showKeyboardHelp() {
    console.log('=== CRT TV Simulator - Keyboard Shortcuts ===');
    console.log('Arrow Keys (↑/↓ or ←/→): Change channels');
    console.log('Number Keys (0-9): Direct channel input');
    console.log('Enter: Confirm channel selection');
    console.log('P: Toggle Power');
    console.log('M: Toggle Mute');
    console.log('?: Show this help message');
    console.log('==========================================');
}
