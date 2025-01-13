function rollDice() {
    const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    document.getElementById('dice').textContent = faces[Math.floor(Math.random() * 6)];
}
