// Lewis Family History Website JavaScript

// Family data
const familyData = {
  "familyMembers": [
    {
      "id": 1,
      "name": "Benjamin Cheever Lewis",
      "dates": "1804-1894",
      "generation": 1,
      "spouse": "Mary McConnell Lewis (1810-1890)",
      "children": ["Edward Lewis", "Mary 'Polly' Lewis"],
      "achievements": ["Founded Lewis State Bank in 1856", "Established druggist shop on Park Avenue", "Built B.C. Lewis House (c.1850)"],
      "biography": "Born in Virginia, relocated to Tallahassee by 1836. Founded Florida's oldest continuously operating bank and established the family's prominence in local business and civic affairs.",
      "categories": ["founders", "business"]
    },
    {
      "id": 2,
      "name": "Edward Lewis",
      "dates": "1835-1901",
      "generation": 2,
      "spouse": "Frances Etheridge Lewis (1837-1912)",
      "children": ["George Edward Lewis Sr.", "Benjamin Cheever Lewis", "Jefferson Davis Lewis", "Frank Davis Lewis"],
      "achievements": ["Managed family druggist business", "Bank director"],
      "biography": "Son of Benjamin C. Lewis, managed the family's growing business interests and served as a bridge between the founding generation and modern civic leadership.",
      "categories": ["business"]
    },
    {
      "id": 3,
      "name": "George Edward Lewis Sr.",
      "dates": "1880-1972",
      "generation": 3,
      "spouse": "Clara Turner Lewis",
      "children": ["George Edward Lewis II"],
      "achievements": ["VMI Class of 1900", "Bank president 1933", "Leon County Commissioner 1942"],
      "biography": "Virginia Military Institute graduate who modernized Lewis State Bank and served briefly in county government during World War II.",
      "categories": ["business", "civic"]
    },
    {
      "id": 4,
      "name": "George Edward Lewis II",
      "dates": "1941-2025",
      "generation": 4,
      "spouse": "Clifton Van Brunt Lewis (1919-2014)",
      "children": ["George Edward Lewis III", "Clifton Byrd Lewis Mashburn", "Benjamin Bridges Lewis", "Mary Byrd Lewis Sims", "Anne Cameron Lewis Barton", "William Van Brunt Lewis (1943-2011)"],
      "achievements": ["UVA Law graduate", "Environmental advocate", "Watershed Champion 2007", "Commissioned Frank Lloyd Wright house"],
      "biography": "Attorney specializing in wills and estates, environmental advocate for Lake Jackson, and patron of the arts. Married to civil rights activist Clifton Van Brunt Lewis.",
      "categories": ["business", "advocates"]
    },
    {
      "id": 5,
      "name": "Clifton Van Brunt Lewis",
      "dates": "1919-2014",
      "generation": 4,
      "spouse": "George Edward Lewis II",
      "achievements": ["Co-founder of LeMoyne Center for Visual Arts", "Co-founder of Tallahassee Museum", "Civil rights activist", "Historic preservation advocate"],
      "biography": "Dynamic civic leader who co-founded major cultural institutions and was active in the Civil Rights Movement. Instrumental in commissioning the family's Frank Lloyd Wright house.",
      "categories": ["civic", "advocates"]
    }
  ],
  "timeline": [
    {"year": 1804, "event": "Benjamin Cheever Lewis born in Virginia"},
    {"year": 1836, "event": "Benjamin C. Lewis establishes druggist shop in Tallahassee"},
    {"year": 1850, "event": "B.C. Lewis House built on Park Avenue"},
    {"year": 1856, "event": "Lewis State Bank founded - becomes Florida's oldest bank"},
    {"year": 1880, "event": "George Edward Lewis Sr. born"},
    {"year": 1900, "event": "George Lewis Sr. graduates from Virginia Military Institute"},
    {"year": 1933, "event": "George Lewis Sr. becomes bank president"},
    {"year": 1941, "event": "George Edward Lewis II born"},
    {"year": 1942, "event": "George Lewis Sr. serves on Leon County Commission"},
    {"year": 1954, "event": "Frank Lloyd Wright's Lewis Spring House completed"},
    {"year": 1985, "event": "Lewis State Bank merges after 129 years of family operation"},
    {"year": 2007, "event": "George Lewis II receives Watershed Champion award"},
    {"year": 2014, "event": "Clifton Van Brunt Lewis passes away"},
    {"year": 2025, "event": "George Edward Lewis II passes away"}
  ],
  "properties": [
    {
      "name": "Lewis State Bank",
      "established": 1856,
      "significance": "Florida's oldest continuously operating bank until 1985 merger",
      "description": "Founded by Benjamin Cheever Lewis, operated by family for 129 years"
    },
    {
      "name": "Lewis Spring House",
      "established": 1954,
      "significance": "Only private Frank Lloyd Wright residence in Florida",
      "description": "One of only two 'pod-shaped' houses in Wright's career, commissioned by George II and Clifton Lewis"
    },
    {
      "name": "B.C. Lewis House",
      "established": 1850,
      "significance": "Listed on National Register of Historic Places",
      "description": "Original family residence on Park Avenue, now historic landmark"
    },
    {
      "name": "LeMoyne Center for Visual Arts",
      "established": "1960s",
      "significance": "Major cultural institution co-founded by Clifton Lewis",
      "description": "Premier visual arts center serving Tallahassee community"
    }
  ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing application...');
    initializeNavigation();
    renderFamilyTree();
    renderTimeline();
    renderMembers();
    renderProperties();
    initializeSearch();
    initializeModal();
    initializeCategoryFilters();
    animateOnScroll();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            console.log('Navigation clicked:', targetId);
            
            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Scroll to section with offset for fixed navbar
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Family tree rendering
function renderFamilyTree() {
    const familyTree = document.getElementById('family-tree');
    if (!familyTree) return;

    const generations = {};
    
    familyData.familyMembers.forEach(member => {
        if (!generations[member.generation]) {
            generations[member.generation] = [];
        }
        generations[member.generation].push(member);
    });

    let treeHTML = '';
    Object.keys(generations).sort((a, b) => a - b).forEach(gen => {
        treeHTML += `<div class="tree-level">`;
        generations[gen].forEach(member => {
            treeHTML += `
                <div class="tree-node tree-connection" data-member-id="${member.id}" onclick="showMemberModal(${member.id})">
                    <h4>${member.name}</h4>
                    <div class="dates">${member.dates}</div>
                </div>
            `;
        });
        treeHTML += `</div>`;
    });

    familyTree.innerHTML = treeHTML;
    console.log('Family tree rendered');
}

// Timeline rendering
function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;

    let timelineHTML = '';
    
    familyData.timeline.forEach((item, index) => {
        timelineHTML += `
            <div class="timeline-item" style="animation-delay: ${index * 0.1}s">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-content">
                    <p>${item.event}</p>
                </div>
            </div>
        `;
    });

    timelineContainer.innerHTML = timelineHTML;
    console.log('Timeline rendered');
}

// Members rendering
function renderMembers(filter = 'all') {
    const membersGrid = document.getElementById('members-grid');
    if (!membersGrid) return;

    let filteredMembers = familyData.familyMembers;
    
    if (filter !== 'all') {
        filteredMembers = familyData.familyMembers.filter(member => 
            member.categories && member.categories.includes(filter)
        );
    }

    let membersHTML = '';
    filteredMembers.forEach((member, index) => {
        membersHTML += `
            <div class="member-card" data-member-id="${member.id}" style="animation-delay: ${index * 0.1}s" onclick="showMemberModal(${member.id})">
                <h3>${member.name}</h3>
                <div class="dates">${member.dates}</div>
                <ul class="achievements">
                    ${member.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    membersGrid.innerHTML = membersHTML;
    
    // Animate cards
    setTimeout(() => {
        document.querySelectorAll('.member-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
    
    console.log('Members rendered with filter:', filter);
}

// Properties rendering
function renderProperties() {
    const propertiesGrid = document.getElementById('properties-grid');
    if (!propertiesGrid) return;

    let propertiesHTML = '';
    
    familyData.properties.forEach((property, index) => {
        propertiesHTML += `
            <div class="property-card" style="animation-delay: ${index * 0.15}s">
                <h3>${property.name}</h3>
                <div class="established">Established: ${property.established}</div>
                <div class="significance">${property.significance}</div>
                <p>${property.description}</p>
            </div>
        `;
    });

    propertiesGrid.innerHTML = propertiesHTML;

    // Animate property cards
    setTimeout(() => {
        document.querySelectorAll('.property-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
    
    console.log('Properties rendered');
}

// Category filtering
function initializeCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter members
            renderMembers(category);
            
            console.log('Category filter applied:', category);
        });
    });
}

// Search functionality
function initializeSearch() {
    const familySearch = document.getElementById('family-search');
    if (!familySearch) return;

    familySearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const treeNodes = document.querySelectorAll('.tree-node');
        
        if (searchTerm === '') {
            // Show all nodes
            treeNodes.forEach(node => {
                node.style.display = 'block';
                node.style.opacity = '1';
                node.style.background = '';
                node.style.color = '';
            });
        } else {
            // Filter and highlight
            treeNodes.forEach(node => {
                const memberName = node.querySelector('h4').textContent.toLowerCase();
                if (memberName.includes(searchTerm)) {
                    node.style.display = 'block';
                    node.style.opacity = '1';
                    node.style.background = 'var(--color-heritage-gold)';
                    node.style.color = 'var(--color-heritage-navy)';
                } else {
                    node.style.display = 'none';
                }
            });
        }
        
        console.log('Search performed:', searchTerm);
    });
}

// Modal functionality
function initializeModal() {
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Global function for showing member modal
function showMemberModal(memberId) {
    const member = familyData.familyMembers.find(m => m.id === memberId);
    const memberModal = document.getElementById('member-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!member || !memberModal || !modalBody) {
        console.error('Modal elements not found or member not found:', memberId);
        return;
    }

    modalBody.innerHTML = `
        <h2>${member.name}</h2>
        <div class="dates" style="color: var(--color-heritage-gold); font-size: var(--font-size-lg); margin-bottom: var(--space-16);">${member.dates}</div>
        <div style="margin-bottom: var(--space-16);">
            <strong>Spouse:</strong> ${member.spouse}
        </div>
        ${member.children ? `
            <div style="margin-bottom: var(--space-16);">
                <strong>Children:</strong> ${member.children.join(', ')}
            </div>
        ` : ''}
        <div style="margin-bottom: var(--space-16);">
            <strong>Biography:</strong>
            <p style="margin-top: var(--space-8);">${member.biography}</p>
        </div>
        <div>
            <strong>Major Achievements:</strong>
            <ul style="margin-top: var(--space-8);">
                ${member.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `;

    memberModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('Modal opened for:', member.name);
}

// Global function for closing modal
function closeModal() {
    const memberModal = document.getElementById('member-modal');
    if (memberModal) {
        memberModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        console.log('Modal closed');
    }
}

// Animation on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items
    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    }, 500);

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}

// Make functions globally available
window.showMemberModal = showMemberModal;
window.closeModal = closeModal;

console.log('JavaScript loaded successfully');