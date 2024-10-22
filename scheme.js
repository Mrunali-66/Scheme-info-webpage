const schemes = [
    {
        id: 1,
        title: "Rural Housing Scheme",
        category: "housing",
        description: "Financial assistance for construction of houses in rural areas",
        eligibility: [
            "Rural residents",
            "Below Poverty Line (BPL)",
            "No previous housing assistance"
        ],
        benefits: "Up to ₹1,20,000 for house construction"
    },
    {
        id: 2,
        title: "Merit Scholarship",
        category: "education",
        description: "Financial support for higher education of meritorious students",
        eligibility: [
            "12th grade pass with minimum 80%",
            "Family income below ₹8 lakhs per annum",
            "Indian citizen"
        ],
        benefits: "Up to ₹50,000 per academic year"
    },
    {
        id: 3,
        title: "PM Kisan Samman Nidhi",
        category: "agriculture",
        description: "Direct income support to farmers",
        eligibility: [
            "Small and marginal farmers",
            "Land ownership documents",
            "Valid bank account"
        ],
        benefits: "₹6,000 per year in three installments"
    },
    {
        id: 4,
        title: "Ayushman Bharat",
        category: "health",
        description: "Comprehensive healthcare insurance scheme",
        eligibility: [
            "Low-income families",
            "Not covered under other insurance",
            "Valid identity proof"
        ],
        benefits: "Health coverage up to ₹5 lakhs per family per year"
    },
    {
        id: 5,
        title: "Startup India Seed Fund",
        category: "business",
        description: "Financial assistance for early-stage startups",
        eligibility: [
            "DPIIT recognized startup",
            "Less than 2 years old",
            "Innovative business model"
        ],
        benefits: "Up to ₹20 lakhs as seed funding"
    },
    {
        id: 6,
        title: "Girl Child Education Scheme",
        category: "education",
        description: "Support for girl child education",
        eligibility: [
            "Girl students",
            "Class 1-12",
            "Family income below threshold"
        ],
        benefits: "Annual scholarship and free books"
    }
];

let currentCategory = 'all';
let searchTerm = '';

// Function to display schemes
function displaySchemes(schemesToShow = schemes) {
    const schemesList = document.getElementById('schemes-list');
    schemesList.innerHTML = '';

    schemesToShow.forEach(scheme => {
        const schemeCard = document.createElement('div');
        schemeCard.className = `scheme-card ${scheme.category}`;
        schemeCard.innerHTML = `
            <span class="category-label">${scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}</span>
            <h3>${scheme.title}</h3>
            <p>${scheme.description}</p>
            <h4>Eligibility:</h4>
            <ul class="eligibility-list">
                ${scheme.eligibility.map(e => `<li>${e}</li>`).join('')}
            </ul>
            <p><strong>Benefits:</strong> ${scheme.benefits}</p>
            <button class="apply-btn" onclick="applyForScheme(${scheme.id})">Apply Now</button>
        `;
        schemesList.appendChild(schemeCard);
    });
}

// Search functionality
function searchSchemes() {
    searchTerm = document.getElementById('scheme-search').value.toLowerCase();
    filterSchemes();
}

// Filter schemes by category and search term
function filterSchemes() {
    let filteredSchemes = schemes;
    
    if (currentCategory !== 'all') {
        filteredSchemes = filteredSchemes.filter(scheme => 
            scheme.category === currentCategory
        );
    }

    if (searchTerm) {
        filteredSchemes = filteredSchemes.filter(scheme => 
            scheme.title.toLowerCase().includes(searchTerm) ||
            scheme.description.toLowerCase().includes(searchTerm)
        );
    }

    displaySchemes(filteredSchemes);
}

// Category filter functionality
document.getElementById('category-filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => 
            btn.classList.remove('active')
        );
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        currentCategory = e.target.dataset.category;
        filterSchemes();
    }
});

// Apply for scheme function
function applyForScheme(schemeId) {
    const scheme = schemes.find(s => s.id === schemeId);
    alert(`Application process started for: ${scheme.title}\nPlease check your eligibility before proceeding.`);
}

// Initial display
displaySchemes();