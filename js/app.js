// Initialize the TV when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create TV instance
    const tv = new TVController();
    
    // Add some visual enhancements
    addVisualEnhancements();
    
    console.log('CRT TV Simulator initialized!');
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
    });
}