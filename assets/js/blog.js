/**
 * Blog Functionality - Adriano & Couto Advocacia
 */

(function() {
    'use strict';

    // Blog Filter System
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    const noResults = document.getElementById('noResults');
    const postsGrid = document.getElementById('postsGrid');

    if (filterButtons.length > 0 && blogCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter posts
                filterPosts(filterValue);
            });
        });
    }

    function filterPosts(category) {
        let visibleCount = 0;

        blogCards.forEach(card => {
            // Add fade out animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    visibleCount++;
                    
                    // Fade in animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            }, 300);
        });

        // Show or hide no results message
        setTimeout(() => {
            if (visibleCount === 0) {
                noResults.style.display = 'block';
                postsGrid.style.minHeight = '400px';
            } else {
                noResults.style.display = 'none';
                postsGrid.style.minHeight = 'auto';
            }
        }, 350);

        // Scroll to top of blog posts
        const blogFilters = document.querySelector('.blog-filters');
        if (blogFilters) {
            const offset = blogFilters.offsetTop - 100;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            const submitBtn = this.querySelector('button[type="submit"]');
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNewsletterMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Inscrevendo...';
            
            // Simulate API call (replace with actual implementation)
            setTimeout(() => {
                showNewsletterMessage('Inscrição realizada com sucesso! Você receberá nossos artigos em breve.', 'success');
                emailInput.value = '';
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Inscrever-se';
            }, 2000);
            
            /* WordPress integration:
            fetch(wp_ajax.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'newsletter_subscription',
                    nonce: wp_ajax.nonce,
                    email: email
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showNewsletterMessage('Inscrição realizada com sucesso!', 'success');
                    emailInput.value = '';
                } else {
                    showNewsletterMessage(data.message, 'error');
                }
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Inscrever-se';
            })
            .catch(error => {
                showNewsletterMessage('Erro ao processar inscrição. Tente novamente.', 'error');
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Inscrever-se';
            });
            */
        });
    }

    function showNewsletterMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.newsletter-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `newsletter-message ${type}`;
        messageDiv.textContent = message;

        // Insert after form
        newsletterForm.parentNode.insertBefore(messageDiv, newsletterForm.nextSibling);

        // Auto remove after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }

    // Blog Card Hover Effects
    const blogCardElements = document.querySelectorAll('.blog-card');
    blogCardElements.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            if (this.style.display !== 'none') {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Read More Button Analytics (optional)
    const readMoreButtons = document.querySelectorAll('.blog-read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.blog-card');
            const title = card.querySelector('.blog-card-title').textContent;
            const category = card.querySelector('.blog-category').textContent;
            
            console.log('Artigo clicado:', { title, category });
            
            // Here you would typically track with Google Analytics
            // gtag('event', 'blog_read', { article_title: title, category: category });
            
            // For now, just show an alert (remove in production)
            alert('Em breve: ' + title);
        });
    });

    // Lazy load images as user scrolls
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('.blog-card-image img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Category counter
    function updateCategoryCounters() {
        filterButtons.forEach(button => {
            const filter = button.getAttribute('data-filter');
            let count = 0;

            if (filter === 'all') {
                count = blogCards.length;
            } else {
                blogCards.forEach(card => {
                    if (card.getAttribute('data-category') === filter) {
                        count++;
                    }
                });
            }

            // Add count badge (optional)
            const existingBadge = button.querySelector('.count-badge');
            if (existingBadge) {
                existingBadge.textContent = count;
            }
        });
    }

    // Initialize counters
    updateCategoryCounters();

    // Search functionality (optional - can be added later)
    const searchInput = document.getElementById('blogSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let visibleCount = 0;

            blogCards.forEach(card => {
                const title = card.querySelector('.blog-card-title').textContent.toLowerCase();
                const excerpt = card.querySelector('.blog-card-excerpt').textContent.toLowerCase();

                if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (visibleCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        });
    }

    // Smooth animations for blog cards on initial load
    window.addEventListener('load', function() {
        blogCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    });

    // Share buttons (can be added to individual posts later)
    function shareArticle(platform, url, title) {
        let shareUrl = '';
        
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }

    // Make share function available globally
    window.shareArticle = shareArticle;

    // Print current year in dates
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.blog-date').forEach(dateElement => {
        // This ensures dates are current - in production, dates should come from the database
    });

})();


