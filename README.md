# CRT TV 2011 Channels - Full Stack Web Application

A nostalgic, interactive CRT television simulator built with HTML, CSS, and JavaScript. Experience the look and feel of a classic CRT TV from 2011 with a fully functional channel guide and controls.

## Features

### Display
- **Authentic CRT Screen**: Realistic curved screen with scanline effects
- **Green phosphor glow**: Classic green text on black background
- **Flicker animation**: Subtle CRT flicker effect for authenticity
- **Program information**: Real-time display of current program and time

### Controls
- **Channel Navigation**: Previous/Next buttons for smooth channel switching
- **Direct Channel Input**: Type channel numbers and press GO to jump to a channel
- **Volume Control**: Adjustable volume slider with real-time display
- **Brightness Control**: Modify screen brightness for viewing preference
- **Color Control**: Adjust color saturation levels
- **Power Button**: Turn the TV on/off with visual feedback
- **Menu Button**: Open channel guide to browse all available channels
- **Mute Button**: Quickly mute/unmute audio

### Channels (12 Total)
1. BBC One
2. BBC Two
3. ITV1
4. Channel 4
5. Channel 5
6. Dave
7. Gold
8. ITV2
9. Sci-Fi
10. Box Upfront
11. MTV
12. E!

Each channel features:
- Unique branding colors
- Program schedule
- Program descriptions
- Themed content

### Keyboard Shortcuts
- **Arrow Keys** (↑/↓ or ←/→): Navigate between channels
- **Number Keys** (0-9): Direct channel input
- **Enter**: Confirm channel selection

## Project Structure

```
crt-tv-simulator/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   ├── channels.js     # Channel database and utilities
│   ├── tv-controller.js # TV control logic
│   └── app.js          # Application initialization
├── images/             # Channel logos and images (placeholder)
└── README.md           # This file
```

## Files

### index.html
Contains the complete structure of the CRT TV interface including:
- Screen display area
- Control panel with all buttons and sliders
- Channel guide modal
- References to CSS and JavaScript files

### css/styles.css
Comprehensive styling featuring:
- CRT TV shell with 3D effects
- Authentic control panel design
- Scanline animation effects
- Responsive design for mobile and desktop
- Hover and active states for all controls
- Glow effects and shadows for depth

### js/channels.js
Channel management module:
- `channelsDatabase`: Complete channel listing with programs
- `getChannel(number)`: Retrieve channel by number
- `getAllChannels()`: Get all available channels
- `getNextChannel()` / `getPreviousChannel()`: Navigation helpers

### js/tv-controller.js
Main TV controller class handling:
- Channel switching and direct input
- Volume, brightness, and color adjustments
- Power state management
- Mute functionality
- Keyboard shortcuts
- Event listener setup
- Sound effect simulations

### js/app.js
Application initialization:
- Creates TV controller instance on page load
- Visual enhancements and effects
- Performance monitoring

## How to Use

1. **Open the TV**
   - Load `index.html` in a modern web browser

2. **Change Channels**
   - Click `<` and `>` buttons to navigate
   - Type channel numbers and click GO
   - Use arrow keys on keyboard

3. **Adjust Settings**
   - Drag volume, brightness, and color sliders
   - See real-time updates on the screen

4. **Browse Channels**
   - Click MENU to open the channel guide
   - Click any channel to jump directly to it

5. **Power Control**
   - Click POWER button to turn TV on/off
   - Red power light indicates power state

## Browser Compatibility

- Chrome/Chromium: Full support
- Firefox: Full support
- Safari: Full support
- Edge: Full support
- Mobile browsers: Responsive design with touch support

## Customization

### Adding New Channels
Edit `js/channels.js` and add new objects to the `channelsDatabase` array:

```javascript
{
    id: 13,
    number: 13,
    name: 'Your Channel',
    image: 'images/your-channel.jpg',
    color: '#YOURCOLOR',
    programs: [
        { title: 'Program 1', time: '20:00 - 21:00', description: 'Description' },
        // ... more programs
    ]
}
```

### Modifying Colors
Edit `:root` CSS variables in `css/styles.css`:

```css
:root {
    --crt-dark: #1a1a1a;      /* Dark TV shell color */
    --crt-accent: #0f0;       /* Text/accent color (default green) */
    --screen-bg: #001a00;     /* Screen background */
}
```

### Adjusting Effects
- Scanline intensity: Modify `.scanlines` background opacity
- Flicker speed: Change `flicker` animation duration
- Glow effects: Adjust `text-shadow` and `box-shadow` values

## Features Showcase

✨ **Authentic CRT Appearance**
- Realistic cathode ray tube screen rendering
- Scanline effects that recreate vintage look
- Proper color grading and filtering

📺 **Interactive Controls**
- All buttons are fully functional
- Sliders provide smooth adjustments
- Real-time feedback on all actions

🎨 **Visual Polish**
- 3D shadow effects on the TV shell
- Glowing text with text-shadow effects
- Smooth transitions and animations
- Responsive design for all screen sizes

⌨️ **Keyboard Support**
- Full keyboard navigation
- Shortcut keys for quick access
- Seamless mouse and keyboard integration

## Performance

- Lightweight implementation (~50KB total)
- Smooth 60fps animations
- Optimized CSS animations
- Minimal JavaScript overhead

## Future Enhancements

- [ ] Audio feedback for button presses
- [ ] Actual channel thumbnails/posters
- [ ] Program guide with detailed listings
- [ ] Recording/DVR functionality
- [ ] Subtitle support
- [ ] Multiple TV models (CRT variants)
- [ ] Screen damage effects (optional)
- [ ] Different era presets (70s, 80s, 90s, 2000s)

## License

MIT License - Free to use and modify

## Credits

Created as a nostalgic tribute to classic CRT television sets.

---

**Enjoy your retro viewing experience!** 📺✨