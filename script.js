
        // Initialize Vanta.js on the full-screen background
        VANTA.NET({
            el: "#vanta-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xec4899,
            backgroundColor: 0x0f172a,
            points: 12.00,
            maxDistance: 24.00,
            spacing: 18.00
        });

        // Initialize AOS and Feather Icons
        document.addEventListener('DOMContentLoaded', () => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true
            });
            feather.replace();
            
            // Add click animation to social icons
            const socialIcons = document.querySelectorAll('.social-icon');
            socialIcons.forEach(icon => {
                icon.addEventListener('click', (e) => {
                    e.currentTarget.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        e.currentTarget.style.transform = '';
                    }, 300);
                });
            });
            
            // Add hover effect to card
            const card = document.querySelector('.profile-card');
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });