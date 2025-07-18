
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(showBirthdayGreeting, 300);
});
// Navigation
function redirectToPage() {
    window.open('new.html', '_blank');
}
        function launchConfetti() {
            const colors = [
                '#FFD700', // gold
                '#FF69B4', // pink
                '#00FFFF', // cyan
                '#7CFC00', // lawn green
                '#FF4500', // orange red
                '#1E90FF', // dodger blue
                '#FFFFFF', // white
                '#FF6347', // tomato
                '#40E0D0', // turquoise
                '#FFB6C1'  // light pink
            ];
            const shapes = ['circle', 'rect', 'triangle'];
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            for (let i = 0; i < 120; i++) {
                const piece = document.createElement('div');
                piece.className = 'confetti-piece';
                const color = colors[Math.floor(Math.random() * colors.length)];
                piece.style.background = color;
                piece.style.left = Math.random() * 100 + 'vw';
                piece.style.top = '-40px';
                piece.style.opacity = 0.85 + Math.random() * 0.15;
                piece.style.width = 10 + Math.random() * 8 + 'px';
                piece.style.height = 10 + Math.random() * 8 + 'px';
                piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                piece.style.transform = `rotate(${Math.random() * 360}deg)`;
                piece.style.transition = `transform 2.5s cubic-bezier(.62,.01,.19,1), top 2.5s cubic-bezier(.62,.01,.19,1)`;
                // Add some rotation and wiggle
                const rotate = 360 + Math.random() * 1080;
                const wiggle = (Math.random() - 0.5) * 80;
                setTimeout(() => {
                    piece.style.top = (60 + Math.random() * 30) + 'vh';
                    piece.style.transform = `translateX(${wiggle}px) rotate(${rotate}deg)`;
                }, 100);
                confetti.appendChild(piece);
            }
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(launchConfetti, 600); // Launch after entering
        });
        const isMobile = window.innerWidth < 600;
const confettiCount = isMobile ? 30 : 100;


