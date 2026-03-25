// ===================================
// JEMAL MOHAMMED AGENCY - JAVASCRIPT
// Interactive Features & Functionality
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // MULTI-LANGUAGE TRANSLATIONS
    // ===================================
    
    const translations = {
        en: {
            nav: {
                home: "Home",
                about: "About Us",
                opportunities: "Opportunities",
                gallery: "Gallery",
                services: "Services",
                contact: "Contact"
            },
            hero: {
                headline: "Jemal Mohammed Ahmed <span class=\"gradient-text\">Foreign Recruitment and Employment Agency</span>",
                subheadline: "We specialize in sending skilled and dedicated workers to the Middle East — with trust, transparency, and care.",
                description: "Jemal Mohammed Ahmed Foreign Employment Agency is your trusted partner in building international careers. We connect talented Ethiopian professionals with reputable employers in Saudi Arabia, ensuring ethical recruitment practices and comprehensive support throughout your journey.",
                applyNow: "Apply Now",
                viewOpportunities: "View Opportunities"
            },
            about: {
                title: "About Jemal Mohammed Ahmed",
                subtitle: "Your Trusted Partner in Overseas Employment",
                description1: "With over 15 years of experience in international recruitment, Jemal Mohammed Ahmed Foreign Employment Agency has become a trusted name in connecting Ethiopian talent with global opportunities. Our commitment to ethical practices, transparency, and comprehensive support sets us apart in the industry.",
                description2: "We specialize in recruitment for the Middle East, particularly Saudi Arabia, ensuring that our workers receive fair treatment, competitive salaries, and proper working conditions. Our team provides end-to-end support from initial consultation to successful job placement.",
                description3: "As a fully licensed agency by the Ethiopian Ministry of Labor and Social Affairs, we operate in strict compliance with both Ethiopian and international labor laws. We believe in transparency, fair treatment, and creating opportunities that truly change lives.",
                readMore: "Read More",
                workersPlaced: "Workers Placed",
                activeCountries: "Active Countries",
                successRate: "Success Rate",
                yearsExperience: "Years Experience",
                govApproved: "Government Approved",
                govDesc: "Fully licensed and regulated by Ethiopian authorities",
                ethical: "Ethical Recruitment",
                ethicalDesc: "Committed to fair practices and worker protection",
                support: "Continuous Support",
                supportDesc: "Ongoing assistance and welfare checks even after you've started your new job abroad."
            },
            services: {
                title: "Our Services",
                subtitle: "Professional recruitment solutions for international employment",
                recruitment: {
                    title: "Recruitment Services",
                    description: "Comprehensive recruitment solutions tailored to your needs"
                },
                visa: {
                    title: "Visa Processing",
                    description: "Fast and reliable visa processing for international employment"
                },
                training: {
                    title: "Pre-Departure Training",
                    description: "Comprehensive orientation covering cultural awareness, language basics, job expectations, and worker rights."
                },
                support: {
                    title: "Continuous Support",
                    description: "Ongoing assistance and welfare checks even after you've started your new job abroad."
                },
                travel: {
                    title: "Travel Arrangements",
                    description: "Flight booking and travel coordination to ensure safe arrival at your destination."
                }
            },
            opportunities: {
                title: "Job Opportunities",
                subtitle: "Explore exciting career opportunities in the Middle East"
            },
            testimonials: {
                title: "What Our Workers Say",
                subtitle: "Real stories from satisfied clients who found their dream jobs abroad",
                testimonial1: "Working with Jemal Mohammed Agency transformed my career. Their professional guidance and support made my transition to Dubai seamless and successful.",
                testimonial2: "The agency's transparency and ethical approach gave me confidence throughout the process. They found me excellent opportunities in Qatar.",
                testimonial3: "As a single mother, I was worried about working abroad, but Jemal Mohammed Agency took care of everything from childcare to cultural training.",
                testimonial4: "The pre-departure training and cultural orientation were excellent. I felt fully prepared for my hospitality job in the UAE.",
                testimonial5: "After struggling locally, Jemal Mohammed Agency opened doors I never knew existed. They connected me with amazing opportunities in Oman.",
                testimonial6: "From taxi driver to professional chauffeur in Saudi Arabia - this agency made my career transformation possible with their comprehensive support system."
            },
            faq: {
                title: "Frequently Asked Questions",
                subtitle: "Find answers to common questions about our recruitment services",
                question1: "Which countries do you recruit for?",
                answer1: "We specialize in recruitment for the Middle East, including Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain. We also have connections in other countries and can assist with international placements based on your preferences.",
                question2: "Do you provide training and orientation?",
                answer2: "Yes, we provide comprehensive pre-departure training including cultural orientation, language basics, workplace etiquette, and job-specific skills training. We also offer ongoing support throughout your employment contract.",
                question3: "What if I'm not satisfied with the job?",
                answer3: "Your satisfaction is our priority. If you're not happy with your placement, we work with you to find a more suitable position. We also provide contract reviews and mediation services to ensure fair treatment from employers.",
                question4: "How do you ensure worker safety and rights?",
                answer4: "We partner only with verified, reputable employers who comply with labor laws. We conduct thorough background checks and provide 24/7 support. Our team monitors working conditions and helps resolve any issues that arise during employment."
            },
            benefits: {
                title: "Why Choose Us?",
                item1: "Over 15 years of experience",
                item2: "5000+ successful placements",
                item3: "Licensed & verified agency",
                item4: "24/7 support throughout your journey",
                item5: "Transparent pricing, no hidden fees",
                item6: "Partnerships with top Middle East employers"
            },
            contact: {
                title: "Get In Touch",
                subtitle: "We're here to answer your questions and help you start your journey",
                info: "Contact Information",
                infoDesc: "Reach out to us through any of these channels",
                address: "Office Address",
                phones: "Phone Numbers",
                whatsapp: "WhatsApp",
                email: "Email",
                hours: "Office Hours",
                connect: "Connect With Us",
                formTitle: "Send Us a Message",
                name: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                subject: "Subject",
                message: "Message",
                send: "Send Message",
                footer: "We'll respond to your inquiry within 24 hours",
                findUs: "Find Us"
            },
            footer: {
                agency: "Jemal Mohammed Ahmed Agency",
                description: "Connecting Ethiopian talent with global opportunities through ethical and transparent recruitment practices.",
                links: "Quick Links",
                services: "Services",
                contact: "Contact Us",
                copyright: "© 2024 Jemal Mohammed Ahmed Foreign Employment Agency. All rights reserved."
            },
            destinations: {
                title: "Current Destinations",
                subtitle: "We currently place workers in these countries, with more opportunities coming soon"
            },
            successGallery: {
                title: "Success Stories",
                subtitle: "Real client transformations and career achievements"
            },
            workflow: {
                title: "Our Recruitment Process",
                step1: {
                    title: "Application & Registration",
                    desc: "Submit your application online or visit our office. Provide required documents and complete registration forms."
                },
                step2: {
                    title: "Screening & Interview",
                    desc: "Initial assessment of qualifications, skills verification, and personal interview to understand your preferences."
                },
                step3: {
                    title: "Job Matching",
                    desc: "We connect you with verified employers that match your skills, experience, and career goals."
                },
                step4: {
                    title: "Document Legalization",
                    desc: "We handle all document authentication and legalization requirements."
                },
                step5: {
                    title: "Pre-Departure Training",
                    desc: "Comprehensive orientation covering cultural awareness, language basics, job expectations, and worker rights."
                },
                step6: {
                    title: "Travel Arrangements",
                    desc: "Flight booking and travel coordination to ensure safe arrival at your destination."
                }
            },
            documents: {
                title: "Prepare These Documents for Your Application"
            }
        },
        ar: {
            nav: {
                home: "الرئيسية",
                about: "من نحن",
                opportunities: "الفرص",
                gallery: "المعرض",
                services: "الخدمات",
                contact: "اتصل بنا"
            },
            hero: {
                headline: "جمل محمد أحمد <span class=\"gradient-text\">وكالة التوظيف والتوظيف الخارجي</span>",
                subheadline: "نحن متخصصون في إرسال عمال ماهرين ومخلصين إلى الشرق الأوسط - مع الثقة والشفافية والرعاية.",
                description: "وكالة جمل محمد أحمد للتوظيف الخارجي هي شريكك الموثوق به في بناء المهن الدولية. نحن نربط المهنيين الإثيوبيين الموهوبين بأصحاب العمل المرموقين في الكويت والسعودية، مما يضمن ممارسات التوظيف الأخلاقية والدعم الشامل طوال رحلتك.",
                applyNow: "قدم الآن",
                viewOpportunities: "عرض الفرص"
            },
            about: {
                title: "عن جمل محمد أحمد",
                subtitle: "الوكالة الرائدة للتوظيف الخارجي في إثيوبيا",
                description1: "مع أكثر من 15 عامًا من الخبرة في التوظيف الدولي، أصبحت وكالة جمل محمد أحمد للتوظيف الخارجي اسمًا موثوقًا به في ربط المواهب الإثيوبية بالفرص العالمية. التزامنا بالممارسات الأخلاقية والشفافية والدعم الشامل يميزني في الصناعة.",
                description2: "نحن متخصصون في التوظيف للشرق الأوسط، خاصة السعودية والكويت، مما يضمن أن يتلقى عمالنا معاملة عادلة ورواتب تنافسية وظروف عمل مناسبة. يقدم فريقنا دعمًا شاملاً من الاستشارة الأولية إلى التوظيف الناجح.",
                description3: "بصفتنا وكالة مرخصة بالكامل من قبل وزارة العمل والشؤون الاجتماعية الإثيوبية، نعمل في الامتثال الصارم لقوانين العمل الإثيوبية والدولية. نؤمن بالشفافية والمعاملة العادلة وخلق فرص تغير الحياة حقًا.",
                readMore: "اقرأ المزيد",
                workersPlaced: "العمال الموظفون",
                activeCountries: "الدول النشطة",
                successRate: "معدل النجاح",
                yearsExperience: "سنوات الخبرة",
                govApproved: "معتمد من الحكومة",
                govDesc: "مرخص ومنظم بالكامل من قبل السلطات الإثيوبية",
                ethical: "التوظيف الأخلاقي",
                ethicalDesc: "ملتزمون بالممارسات العادلة وحماية العمال",
                support: "الدعم المستمر",
                supportDesc: "مساعدة مستمرة وفحوصات الرعاية حتى بعد بدء وظيفتك الجديدة في الخارج."
            },
            services: {
                title: "خدماتنا",
                subtitle: "حلول توظيف احترافية للتوظيف الدولي",
                recruitment: {
                    title: "خدمات التوظيف",
                    description: "حلول توظيف شاملة مصممة حسب احتياجاتك"
                },
                visa: {
                    title: "معالجة التأشيرات",
                    description: "معالجة تأشيرات سريعة وموثوقة للتوظيف الدولي"
                },
                training: {
                    title: "التدريب والتوجيه",
                    description: "برامج التدريب قبل المغادرة والتوجيه الثقافي"
                },
                support: {
                    title: "الدعم المستمر",
                    description: "مساعدة مستمرة وفحوصات الرعاية حتى بعد بدء وظيفتك الجديدة في الخارج."
                },
                travel: {
                    title: "ترتيبات السفر",
                    description: "حجز الرحلات والتنسيق السفري لضمان الوصول الآمن إلى وجهتك."
                }
            },
            opportunities: {
                title: "فرص العمل",
                subtitle: "استكشف فرص عمل مثيرة في الشرق الأوسط"
            },
            testimonials: {
                title: "ما يقوله عمالنا",
                subtitle: "قصص حقيقية من عملاء راضين وجدوا وظائفهم المثالية في الخارج",
                testimonial1: "العمل مع وكالة جمل محمد غير مسيرتي المهنية. إرشادهم المهني ودعمهم جعل انتقالي إلى دبي سلسًا وناجحًا.",
                testimonial2: "شفافية الوكالة ونهجها الأخلاقي أعطاني الثقة طوال العملية. وجدوا لي فرصًا ممتازة في قطر.",
                testimonial3: "كأم عزباء، كنت قلقة بشأن العمل في الخارج، لكن وكالة جمل محمد اهتمت بكل شيء من رعاية الأطفال إلى التدريب الثقافي.",
                testimonial4: "كانت التدريبات قبل المغادرة والتوجيه الثقافي ممتازة. شعرت أنني مستعدة تمامًا لوظيفتي في مجال الضيافة في الإمارات.",
                testimonial5: "بعد الصعوبات المحلية، فتحت وكالة جمل محمد أبوابًا لم أكن أعرف وجودها. ربطوني بفرص رائعة في عمان.",
                testimonial6: "من سائق تاكسي إلى سائق محترف في السعودية - جعلت هذه الوكالة تحويل مهنتي ممكنًا مع نظام دعمها الشامل."
            },
            faq: {
                title: "الأسئلة المتداولة",
                subtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدمات التوظيف لدينا",
                question1: "ما هي الدول التي تتوظف لها؟",
                answer1: "نحن متخصصون في التوظيف للشرق الأوسط، بما في ذلك السعودية والإمارات وقطر والكويت وعمان والبحرين. لدينا أيضًا اتصالات في دول أخرى ويمكننا المساعدة في التوظيف الدولي بناءً على تفضيلاتك.",
                question2: "هل توفر التدريب والتوجيه؟",
                answer2: "نعم، نقدم تدريبًا شاملاً قبل المغادرة بما في ذلك التوجيه الثقافي وأساسيات اللغة وآداب العمل والمهارات الخاصة بالوظيفة. كما نقدم دعمًا مستمرًا طوال عقد التوظيف.",
                question3: "ماذا لو لم أكن راضيًا عن الوظيفة؟",
                answer3: "رضاك هو أولويتنا. إذا لم تكن سعيدًا بتوظيفك، نساعدك في العثور على منصب أكثر ملاءمة. كما نقدم مراجعات العقود وخدمات الوساطة لضمان المعاملة العادلة من أصحاب العمل.",
                question4: "كيف تضمن سلامة العمال وحقوقهم؟",
                answer4: "نتعاون فقط مع أصحاب العمل المعتمدين والمرموقين الذين يلتزمون بقوانين العمل. نحن نجري فحوصات خلفية شاملة ونقدم دعمًا على مدار 24/7. يراقب فريقنا ظروف العمل ويساعد في حل أي مشكلات تنشأ أثناء التوظيف."
            },
            benefits: {
                title: "لماذا تختارنا؟",
                item1: "أكثر من 15 عامًا من الخبرة",
                item2: "1000+ توظيف ناجح",
                item3: "وكالة مرخصة ومعتمدة",
                item4: "دعم على مدار 24/7 طوال رحلتك",
                item5: "أسعار شفافة، لا رسوم خفية",
                item6: "شراكات مع أفضل أصحاب العمل في الشرق الأوسط"
            },
            contact: {
                title: "تواصل معنا",
                subtitle: "نحن هنا للإجابة على أسئلتك ومساعدتك في بدء رحلتك",
                info: "معلومات الاتصال",
                infoDesc: "تواصل معنا من خلال أي من هذه القنوات",
                address: "عنوان المكتب",
                phones: "أرقام الهاتف",
                whatsapp: "واتساب",
                email: "البريد الإلكتروني",
                hours: "ساعات العمل",
                connect: "تواصل معنا",
                formTitle: "أرسل لنا رسالة",
                name: "الاسم الكامل",
                email: "عنوان البريد الإلكتروني",
                phone: "رقم الهاتف",
                subject: "الموضوع",
                message: "الرسالة",
                send: "إرسال الرسالة",
                footer: "سنرد على استفسارك خلال 24 ساعة",
                findUs: "اعثر علينا"
            },
            footer: {
                agency: "وكالة جمل محمد أحمد",
                description: "ربط المواهب الإثيوبية بالفرص العالمية من خلال ممارسات التوظيف الأخلاقية والشفافة.",
                links: "روابط سريعة",
                services: "الخدمات",
                contact: "اتصل بنا",
                copyright: "© 2024 وكالة جمل محمد أحمد للتوظيف الخارجي. جميع الحقوق محفوظة."
            },
            destinations: {
                title: "الوجهات الحالية",
                subtitle: "نضع حاليًا العمال في هذه الدول، مع المزيد من الفرص قريبًا"
            },
            successGallery: {
                title: "قصص النجاح",
                subtitle: "تحولات العملاء الحقيقيين وإنجازاتهم المهنية"
            },
            workflow: {
                title: "عملية التوظيف لدينا",
                step1: {
                    title: "التقديم والتسجيل",
                    desc: "قدم طلبك عبر الإنترنت أو قم بزيارة مكتبنا. قدم المستندات المطلوبة وأكمل نماذج التسجيل."
                },
                step2: {
                    title: "الفحص والمقابلة",
                    desc: "تقييم أولي للمؤهلات، التحقق من المهارات، والمقابلة الشخصية لفهم تفضيلاتك."
                },
                step3: {
                    title: "مطابقة الوظائف",
                    desc: "نربطك بأصحاب العمل المعتمدين الذين يتناسبون مع مهاراتك وخبرتك وأهدافك المهنية."
                },
                step4: {
                    title: "توثيق المستندات",
                    desc: "نتولى جميع متطلبات توثيق المستندات وتصديقها."
                },
                step5: {
                    title: "التدريب قبل المغادرة",
                    desc: "توجيه شامل يغطي الوعي الثقافي وأساسيات اللغة وتوقعات الوظيفة وحقوق العمال."
                },
                step6: {
                    title: "ترتيبات السفر",
                    desc: "حجز الرحلات والتنسيق السفري لضمان الوصول الآمن إلى وجهتك."
                }
            },
            documents: {
                title: "أعد هذه الوثائق لتطبيقك"
            }
        }
    };
    
    // ===================================
    // SEARCH FUNCTIONALITY
    // ===================================

    const searchButton = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Search data
    const searchData = [
        // Jobs
        { title: 'Hotel Receptionist', content: 'Kuwait hospitality customer service English', section: '#opportunities', category: 'Job' },
        { title: 'Professional Driver', content: 'Saudi Arabia driver license driving', section: '#opportunities', category: 'Job' },
        { title: 'Domestic Helper', content: 'Kuwait housekeeping cooking domestic work', section: '#opportunities', category: 'Job' },
        { title: 'Construction Worker', content: 'Saudi Arabia construction building labor', section: '#opportunities', category: 'Job' },
        { title: 'Healthcare Assistant', content: 'Kuwait healthcare medical nursing', section: '#opportunities', category: 'Job' },
        { title: 'Restaurant Server', content: 'Saudi Arabia hospitality food service', section: '#opportunities', category: 'Job' },
        { title: 'House Maid', content: 'Saudi Arabia domestic cleaning cooking', section: '#opportunities', category: 'Job' },
        { title: 'Delivery Driver', content: 'Saudi Arabia delivery transport logistics', section: '#opportunities', category: 'Job' },
        { title: 'Driver', content: 'Saudi Arabia driving personal commercial chauffeur', section: '#opportunities', category: 'Job' },
        { title: 'Babysitting', content: 'Saudi Arabia childcare nanny children', section: '#opportunities', category: 'Job' },
        { title: 'Cook', content: 'Saudi Arabia cooking chef kitchen food', section: '#opportunities', category: 'Job' },
        { title: 'Cleaner', content: 'Saudi Arabia cleaning housekeeping office', section: '#opportunities', category: 'Job' },
        
        // Countries/Destinations
        { title: 'Kuwait', content: 'Kuwait Middle East Gulf hospitality domestic healthcare', section: '#destinations', category: 'Country' },
        { title: 'Saudi Arabia', content: 'Saudi Arabia Middle East Gulf construction hospitality drivers', section: '#destinations', category: 'Country' },
        { title: 'Dubai (UAE)', content: 'Dubai UAE United Arab Emirates Middle East hospitality', section: '#destinations', category: 'Country' },
        { title: 'Qatar', content: 'Qatar Middle East Gulf hospitality construction', section: '#destinations', category: 'Country' },
        { title: 'Oman', content: 'Oman Middle East Gulf skilled workers industries', section: '#destinations', category: 'Country' },
        { title: 'Jordan', content: 'Jordan Middle East healthcare technical services', section: '#destinations', category: 'Country' },
        { title: 'Lebanon', content: 'Lebanon Middle East diverse employment opportunities', section: '#destinations', category: 'Country' },
        { title: 'Bahrain', content: 'Bahrain Middle East Gulf new destination', section: '#destinations', category: 'Country' },
        
        // Services
        { title: 'Recruitment Services', content: 'recruitment hiring staffing employment solutions', section: '#services', category: 'Service' },
        { title: 'Visa Processing', content: 'visa processing immigration work permits', section: '#services', category: 'Service' },
        { title: 'Pre-Departure Training', content: 'training orientation cultural awareness language', section: '#services', category: 'Service' },
        { title: 'Travel Arrangements', content: 'travel flight booking transportation', section: '#services', category: 'Service' },
        { title: 'Continuous Support', content: 'support welfare monitoring assistance', section: '#services', category: 'Service' },
        
        // About
        { title: 'About Jemal Mohammed', content: 'company history experience recruitment agency Ethiopia', section: '#about', category: 'About' },
        { title: 'Government Approved', content: 'licensed approved ministry labor social affairs', section: '#about', category: 'About' },
        { title: 'Ethical Recruitment', content: 'ethical fair practices worker protection', section: '#about', category: 'About' },
        
        // Contact
        { title: 'Contact Us', content: 'phone email address office hours', section: '#contact', category: 'Contact' }
    ];

    // Perform search
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = '<div class="no-results">Start typing to search...</div>';
            return;
        }

        const results = searchData.filter(item => {
            const searchTerm = query.toLowerCase();
            return item.title.toLowerCase().includes(searchTerm) || 
                   item.content.toLowerCase().includes(searchTerm) ||
                   item.category.toLowerCase().includes(searchTerm);
        });

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found for "' + query + '"</div>';
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result-item" data-section="${result.section}">
                <div class="result-category">${result.category}</div>
                <h4>${result.title}</h4>
                <p>${result.content.substring(0, 100)}${result.content.length > 100 ? '...' : ''}</p>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHTML;

        // Add click handlers for results
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                searchOverlay.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';

                // Scroll to section
                if (sectionId.startsWith('#')) {
                    const targetSection = document.querySelector(sectionId);
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Debounce search
    let searchTimeout;
    function debounceSearch() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(searchInput.value);
        }, 300);
    }

    console.log('Search button element:', searchButton);
    console.log('Search overlay element:', searchOverlay);

    if (searchButton && searchOverlay) {
        searchButton.addEventListener('click', () => {
            console.log('Search button clicked');
            if (searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
                console.log('Search bar closed');
                searchInput.value = '';
                searchResults.innerHTML = '';
            } else {
                searchOverlay.classList.add('active');
                console.log('Active class added to overlay');
                setTimeout(() => searchInput.focus(), 300);
                performSearch(''); // Show initial state
            }
        });

        closeSearch.addEventListener('click', () => {
            console.log('Close button clicked');
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        });

        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                console.log('Overlay clicked outside');
                searchOverlay.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });

        // Search input handler
        searchInput.addEventListener('input', debounceSearch);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                console.log('Escape key pressed');
                searchOverlay.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });
    } else {
        console.log('Search button or overlay not found');
    }

    // ===================================
    // GALLERY MODAL FUNCTIONALITY
    // ===================================

    // Get modal elements
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalImg = document.getElementById('galleryModalImg');
    const galleryModalTitle = document.getElementById('galleryModalTitle');
    const galleryModalText = document.getElementById('galleryModalText');
    const galleryModalClose = document.querySelector('.gallery-modal-close');

    // Add click event listeners to all gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            const name = overlay.querySelector('h4').textContent;
            const job = overlay.querySelector('p').textContent;
            const location = overlay.querySelector('.location-badge').textContent;

            // Longer, more detailed descriptions for each gallery item
            const descriptions = {
                'Ahmed - Riyadh': 'Ahmed transformed his construction expertise into a thriving career in Riyadh. Starting as a skilled laborer, he quickly advanced through dedication and hard work, now leading major construction projects that shape Saudi Arabia\'s growing skyline. His journey exemplifies how determination and opportunity create success stories in the Kingdom.',
                'Sarah - Dubai': 'Sarah\'s journey from hospitality training to hotel management in Dubai showcases her exceptional customer service skills and leadership abilities. She has mastered the art of creating memorable guest experiences, rising through the ranks to become a respected supervisor who inspires her team to deliver excellence every day.',
                'Youssef - Cairo': 'Youssef brought his technical expertise to Riyadh, where he develops innovative software solutions that drive digital transformation. His coding skills and problem-solving abilities have made him an invaluable asset to tech companies in Saudi Arabia, contributing to the Kingdom\'s vision for a digital future.',
                'Leila - Beirut': 'Leila\'s marketing brilliance shines brightly in Riyadh, where she crafts compelling campaigns that connect brands with Saudi audiences. Her creative vision and strategic thinking have helped businesses reach new heights, proving that innovative marketing knows no borders in the global marketplace.',
                'Michael - Dammam': 'Michael\'s engineering expertise found the perfect home in Dammam\'s dynamic industrial landscape. His project management skills and technical knowledge have been instrumental in developing infrastructure that supports Saudi Arabia\'s economic growth and industrial expansion.',
                'Fatima - Medina': 'Fatima brings compassion and dedication to healthcare in Medina, providing exceptional care to patients in one of Islam\'s most sacred cities. Her commitment to healing and patient-centered approach makes her a valued healthcare professional in Saudi Arabia\'s medical community.',
                'Omar - Riyadh': 'Omar leads complex projects in Riyadh with strategic vision and meticulous planning. His project management expertise ensures successful delivery of initiatives that contribute to Saudi Arabia\'s development goals, inspiring teams to achieve excellence through collaborative leadership.',
                'Nadia - Jeddah': 'Nadia\'s financial acumen drives success in Jeddah\'s growing business sector. Her analytical skills and strategic financial planning help businesses thrive in Saudi Arabia\'s dynamic economy, turning complex financial challenges into opportunities for growth and prosperity.'
            };

            // Get description based on name, default to a general longer description
            const description = descriptions[name] || 'This remarkable professional found success and fulfillment in Saudi Arabia through dedication, hard work, and the pursuit of excellence. Their journey represents the countless opportunities available in the Kingdom for skilled individuals committed to building a better future. From humble beginnings to professional achievement, their story inspires others to pursue their dreams in this land of opportunity.';

            // Populate modal with data
            galleryModalImg.src = img.src;
            galleryModalImg.alt = img.alt;
            galleryModalTitle.textContent = name;
            galleryModalText.textContent = description;

            // Show modal
            galleryModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking the close button
    galleryModalClose.addEventListener('click', () => {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the image
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && galleryModal.style.display === 'block') {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ===================================
    // MOUSE-FOLLOWING PARTICLE EFFECTS
    // ===================================
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Mouse-following particle animation
    function updateMouseParticles() {
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach((particle, index) => {
            const particleRect = particle.getBoundingClientRect();
            const particleCenterX = particleRect.left + particleRect.width / 2;
            const particleCenterY = particleRect.top + particleRect.height / 2;
            
            const deltaX = mouseX - particleCenterX;
            const deltaY = mouseY - particleCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            // Attractive force based on distance (closer = stronger attraction)
            const maxDistance = 200;
            const force = Math.max(0, 1 - distance / maxDistance);
            
            // Calculate movement with some randomness
            const moveX = deltaX * force * 0.02 + (Math.random() - 0.5) * 2;
            const moveY = deltaY * force * 0.02 + (Math.random() - 0.5) * 2;
            
            // Apply smooth movement
            const currentTransform = particle.style.transform || '';
            const translateMatch = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
            
            let currentX = 0;
            let currentY = 0;
            
            if (translateMatch) {
                currentX = parseFloat(translateMatch[1]);
                currentY = parseFloat(translateMatch[2]);
            }
            
            const newX = currentX + moveX;
            const newY = currentY + moveY;
            
            // Update particle position with mouse attraction
            particle.style.transform = `${currentTransform.replace(/translate\([^)]+\)/, '')} translate(${newX}px, ${newY}px)`;
        });
        
        requestAnimationFrame(updateMouseParticles);
    }
    
    // Start mouse particle effects after a delay
    setTimeout(() => {
        updateMouseParticles();
    }, 2000);
    
    // ===================================
    // SUCCESS STORIES GALLERY CAROUSEL
    // ===================================
    
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const galleryPrevBtn = document.getElementById('prevSlide');
    const galleryNextBtn = document.getElementById('nextSlide');
    const galleryDots = document.querySelectorAll('.gallery-dots .dot');
    
    let galleryCurrentSlide = 0;
    const galleryTotalSlides = gallerySlides.length;
    
    // Show specific gallery slide
    function showGallerySlide(slideIndex) {
        // Hide all slides
        gallerySlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        galleryDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and add active class
        gallerySlides[slideIndex].classList.add('active');
        galleryDots[slideIndex].classList.add('active');
        
        galleryCurrentSlide = slideIndex;
    }
    
    // Next gallery slide
    function nextGallerySlide() {
        galleryCurrentSlide = (galleryCurrentSlide + 1) % galleryTotalSlides;
        showGallerySlide(galleryCurrentSlide);
    }
    
    // Previous gallery slide
    function prevGallerySlide() {
        galleryCurrentSlide = (galleryCurrentSlide - 1 + galleryTotalSlides) % galleryTotalSlides;
        showGallerySlide(galleryCurrentSlide);
    }
    
    // Initialize gallery carousel
    if (gallerySlides.length > 0) {
        showGallerySlide(0); // Show first slide initially
        
        // Event listeners
        if (galleryNextBtn) {
            galleryNextBtn.addEventListener('click', nextGallerySlide);
        }
        if (galleryPrevBtn) {
            galleryPrevBtn.addEventListener('click', prevGallerySlide);
        }
        
        // Dot navigation
        galleryDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showGallerySlide(index);
            });
        });
        
        // Auto-play gallery (optional - comment out if not wanted)
        setInterval(nextGallerySlide, 5000); // Change slide every 5 seconds
    }
    
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
    // MULTI-LANGUAGE SUPPORT
    // ===================================
    
    let currentLang = localStorage.getItem('lang') || 'en';
    
    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];
            for (let k of keys) {
                if (value) value = value[k];
            }
            if (value) {
                if (value.includes('<')) {
                    el.innerHTML = value;
                } else {
                    el.textContent = value;
                }
            }
        });
        
        // Update button text
        const langText = document.querySelector('.lang-text');
        if (langText) langText.textContent = lang === 'en' ? 'EN' : 'AR';
    }
    
    // Initialize language
    updateLanguage(currentLang);
    
    // ===================================
    // LANGUAGE SWITCHER
    // ===================================
    
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            updateLanguage(newLang);
        });
    }
    
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
