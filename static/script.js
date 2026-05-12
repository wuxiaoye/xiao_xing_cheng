document.addEventListener('DOMContentLoaded', function() {
    var aboutBtn = document.getElementById('about-btn');
    var contactBtn = document.getElementById('contact-btn');
    var aboutModal = document.getElementById('about-modal');
    var contactModal = document.getElementById('contact-modal');
    var aboutClose = document.getElementById('about-close');
    var contactClose = document.getElementById('contact-close');
    
    function createParticles() {
        var container = document.getElementById('particles');
        var particleCount = 30;
        
        for (var i = 0; i < particleCount; i++) {
            var particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
            particle.style.width = (Math.random() * 3 + 2) + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }
    
    createParticles();
    
    function openModal(modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal(modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    aboutBtn.addEventListener('click', function() {
        openModal(aboutModal);
    });
    
    contactBtn.addEventListener('click', function() {
        openModal(contactModal);
    });
    
    aboutClose.addEventListener('click', function() {
        closeModal(aboutModal);
    });
    
    contactClose.addEventListener('click', function() {
        closeModal(contactModal);
    });
    
    aboutModal.addEventListener('click', function(e) {
        if (e.target === aboutModal) {
            closeModal(aboutModal);
        }
    });
    
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            closeModal(contactModal);
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (aboutModal.classList.contains('show')) {
                closeModal(aboutModal);
            }
            if (contactModal.classList.contains('show')) {
                closeModal(contactModal);
            }
        }
    });
    
    document.body.addEventListener('mousemove', function(e) {
        var x = e.clientX / window.innerWidth - 0.5;
        var y = e.clientY / window.innerHeight - 0.5;
        var bgImage = document.querySelector('.bg-image');
        if (bgImage) {
            bgImage.style.transform = 'scale(1.05) translate(' + (x * 20) + 'px, ' + (y * 20) + 'px)';
        }
        
        var particles = document.querySelectorAll('.particle');
        particles.forEach(function(particle, index) {
            var speed = (index % 3 + 1) * 0.5;
            particle.style.transform = 'translate(' + (x * speed * 10) + 'px, ' + (y * speed * 10) + 'px)';
        });
    });
    
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    var logoCircle = document.querySelector('.logo-circle');
    if (logoCircle) {
        logoCircle.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(function() {
                logoCircle.style.animation = '';
            }, 500);
        });
    }
});