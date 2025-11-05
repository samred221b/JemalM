// ===================================
// JEMAL MOHAMMED AGENCY - JAVASCRIPT
// Interactive Features & Functionality
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // NAVIGATION
    // ===================================
    
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scroll and active link
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Close mobile menu
                    navLinks.classList.remove('active');
                    
                    // Scroll to section
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    navLinkItems.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ===================================
    // TESTIMONIALS CAROUSEL
    // ===================================
    
    const carousel = document.getElementById('testimonialsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (carousel) {
        const testimonials = carousel.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        
        // Hide all testimonials except first
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Create dots
        if (dotsContainer) {
            testimonials.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }
        
        function showSlide(index) {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            testimonials[index].style.display = 'block';
            
            // Update dots
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            showSlide(currentIndex);
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showSlide(currentIndex);
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showSlide(currentIndex);
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Auto-play carousel
        setInterval(nextSlide, 5000);
    }
    
    // ===================================
    // JOB FILTERS
    // ===================================
    
    const countryFilter = document.getElementById('countryFilter');
    const jobTypeFilter = document.getElementById('jobTypeFilter');
    const salaryFilter = document.getElementById('salaryFilter');
    const searchBtn = document.getElementById('searchBtn');
    const jobsGrid = document.getElementById('jobsGrid');
    
    function filterJobs() {
        if (!jobsGrid) return;
        
        const countryValue = countryFilter ? countryFilter.value : 'all';
        const jobTypeValue = jobTypeFilter ? jobTypeFilter.value : 'all';
        const salaryValue = salaryFilter ? salaryFilter.value : 'all';
        
        const jobCards = jobsGrid.querySelectorAll('.job-card');
        
        jobCards.forEach(card => {
            const cardCountry = card.getAttribute('data-country');
            const cardType = card.getAttribute('data-type');
            const cardSalary = card.getAttribute('data-salary');
            
            const countryMatch = countryValue === 'all' || cardCountry === countryValue;
            const typeMatch = jobTypeValue === 'all' || cardType === jobTypeValue;
            const salaryMatch = salaryValue === 'all' || cardSalary === salaryValue;
            
            if (countryMatch && typeMatch && salaryMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', filterJobs);
    }
    
    if (countryFilter) {
        countryFilter.addEventListener('change', filterJobs);
    }
    
    if (jobTypeFilter) {
        jobTypeFilter.addEventListener('change', filterJobs);
    }
    
    if (salaryFilter) {
        salaryFilter.addEventListener('change', filterJobs);
    }
    
    // ===================================
    // JOB APPLICATION MODAL
    // ===================================
    
    const modal = document.getElementById('applicationModal');
    const closeModal = document.querySelector('.close-modal');
    const applyBtns = document.querySelectorAll('.apply-btn');
    const jobTitle = document.getElementById('jobTitle');
    const applicationForm = document.getElementById('applicationForm');
    
    applyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const job = this.getAttribute('data-job');
            if (jobTitle) jobTitle.textContent = job;
            if (modal) modal.classList.add('active');
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (modal) modal.classList.remove('active');
        });
    }
    
    // Close modal on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Handle form submission
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('Thank you for your application! We will review it and contact you soon.');
            
            // Reset form
            applicationForm.reset();
            
            // Close modal
            if (modal) modal.classList.remove('active');
        });
    }
    
    // ===================================
    // COUNTRY TABS
    // ===================================
    
    const countryTabs = document.querySelectorAll('.country-tab');
    const countryContents = document.querySelectorAll('.country-content');
    
    countryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCountry = this.getAttribute('data-country');
            
            // Remove active class from all tabs
            countryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content
            countryContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show target content
            const targetContent = document.getElementById(`${targetCountry}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // ===================================
    // FAQ ACCORDION
    // ===================================
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // ===================================
    // CONTACT FORM
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email') || 'No email provided';
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create email body
            const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
            `.trim();
            
            // Create mailto link
            const mailtoLink = `mailto:jemal.recruitment@gmail.com?subject=Contact Form: ${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            setTimeout(() => {
                alert('Your email client will open. Please send the email to complete your inquiry.');
                // Reset form
                contactForm.reset();
            }, 500);
        });
    }
    
    // ===================================
    // LANGUAGE SWITCHER
    // ===================================
    
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            langBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected language
            const lang = this.getAttribute('data-lang');
            
            // In a real application, you would load translations here
            console.log(`Language switched to: ${lang}`);
            
            // For now, just show an alert
            if (lang === 'am') {
                alert('የአማርኛ ትርጉም በቅርቡ ይመጣል');
            } else if (lang === 'ar') {
                alert('الترجمة العربية قادمة قريبا');
            }
        });
    });
    
    // ===================================
    // SMOOTH SCROLL FOR HERO SCROLL ICON
    // ===================================
    
    const heroScroll = document.querySelector('.hero-scroll');
    
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const destinationsSection = document.querySelector('.destinations');
            if (destinationsSection) {
                destinationsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.destination-card, .category-card, .service-card, .job-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===================================
    // POPULATE JOB LISTINGS DYNAMICALLY
    // ===================================
    
    const jobListings = [
        {
            title: 'Hotel Receptionist',
            country: 'kuwait',
            countryFlag: '🇰🇼',
            location: 'Kuwait City, Kuwait',
            type: 'hospitality',
            salary: '$600 - $750/month',
            salaryRange: 'medium',
            time: 'Full Time',
            badge: 'New',
            requirements: [
                'Good English communication',
                'Customer service experience',
                'Professional appearance'
            ]
        },
        {
            title: 'Professional Driver',
            country: 'saudi',
            countryFlag: '🇸🇦',
            location: 'Riyadh, Saudi Arabia',
            type: 'driver',
            salary: '$700 - $850/month',
            salaryRange: 'medium',
            time: 'Full Time',
            badge: 'Hot',
            requirements: [
                'Valid driving license (3+ years)',
                'Clean driving record',
                'Basic English or Arabic'
            ]
        },
        {
            title: 'Domestic Helper',
            country: 'kuwait',
            countryFlag: '🇰🇼',
            location: 'Kuwait',
            type: 'domestic',
            salary: '$400 - $500/month',
            salaryRange: 'low',
            time: 'Live-in',
            badge: null,
            requirements: [
                'Experience in housekeeping',
                'Cooking skills preferred',
                'Age 25-45'
            ]
        },
        {
            title: 'Construction Worker',
            country: 'saudi',
            countryFlag: '🇸🇦',
            location: 'Jeddah, Saudi Arabia',
            type: 'construction',
            salary: '$550 - $700/month',
            salaryRange: 'medium',
            time: 'Full Time',
            badge: 'New',
            requirements: [
                'Construction experience',
                'Physically fit',
                'Team player'
            ]
        },
        {
            title: 'Healthcare Assistant',
            country: 'kuwait',
            countryFlag: '🇰🇼',
            location: 'Kuwait City, Kuwait',
            type: 'healthcare',
            salary: '$800 - $1000/month',
            salaryRange: 'high',
            time: 'Full Time',
            badge: 'Hot',
            requirements: [
                'Healthcare certification',
                'Patient care experience',
                'Good English skills'
            ]
        },
        {
            title: 'Restaurant Server',
            country: 'saudi',
            countryFlag: '🇸🇦',
            location: 'Dammam, Saudi Arabia',
            type: 'hospitality',
            salary: '$500 - $650/month',
            salaryRange: 'medium',
            time: 'Full Time',
            badge: null,
            requirements: [
                'Restaurant experience preferred',
                'Customer service skills',
                'Basic English'
            ]
        }
    ];
    
    // Function to create job card HTML
    function createJobCard(job) {
        const badgeHTML = job.badge ? 
            `<span class="job-badge ${job.badge.toLowerCase() === 'hot' ? 'hot' : ''}">${job.badge}</span>` : '';
        
        const requirementsHTML = job.requirements.map(req => `<li>${req}</li>`).join('');
        
        return `
            <div class="job-card" data-country="${job.country}" data-type="${job.type}" data-salary="${job.salaryRange}">
                <div class="job-header">
                    <div class="job-flag">${job.countryFlag}</div>
                    ${badgeHTML}
                </div>
                <h3>${job.title}</h3>
                <div class="job-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${job.location}
                </div>
                <div class="job-details">
                    <div class="job-detail-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>${job.salary}</span>
                    </div>
                    <div class="job-detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${job.time}</span>
                    </div>
                </div>
                <div class="job-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                        ${requirementsHTML}
                    </ul>
                </div>
                <button class="btn btn-primary btn-block apply-btn" data-job="${job.title} - ${job.location}">
                    <i class="fas fa-paper-plane"></i> Apply Now
                </button>
            </div>
        `;
    }
    
    // Populate jobs grid if it exists
    if (jobsGrid) {
        jobsGrid.innerHTML = jobListings.map(job => createJobCard(job)).join('');
        
        // Re-attach event listeners to new apply buttons
        const newApplyBtns = jobsGrid.querySelectorAll('.apply-btn');
        newApplyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const job = this.getAttribute('data-job');
                if (jobTitle) jobTitle.textContent = job;
                if (modal) modal.classList.add('active');
            });
        });
    }
    
    // ===================================
    // OPPORTUNITY CARDS - APPLY BUTTONS
    // ===================================
    
    const opportunityApplyBtns = document.querySelectorAll('.btn-apply');
    
    opportunityApplyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const jobName = this.getAttribute('data-job');
            if (jobTitle) jobTitle.textContent = jobName;
            if (modal) modal.classList.add('active');
        });
    });
    
    // ===================================
    // ANIMATED COUNTERS
    // ===================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number
            let displayValue = Math.floor(current);
            
            // Add suffix based on the stat
            const label = element.nextElementSibling?.textContent || '';
            if (label.includes('Workers')) {
                element.textContent = displayValue.toLocaleString() + '+';
            } else if (label.includes('Countries')) {
                element.textContent = displayValue + '+';
            } else if (label.includes('Success')) {
                element.textContent = displayValue + '%';
            } else if (label.includes('Years')) {
                element.textContent = displayValue + '+';
            } else {
                element.textContent = displayValue;
            }
        }, 16);
    }
    
    // Observe stats section for animation trigger
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                statNumbers.forEach(stat => {
                    animateCounter(stat);
                });
            }
        });
    }, { threshold: 0.5 });
    
    // Observe the stats container
    const statsContainer = document.querySelector('.about-stats');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }
    
    // ===================================
    // INITIALIZE
    // ===================================
    
    console.log('Jemal Mohammed Agency website loaded successfully!');
    
});
