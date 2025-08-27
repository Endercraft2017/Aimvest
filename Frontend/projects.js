// Project data structure - fallback data when fetch fails due to CORS
const fallbackProjects = [
    {
        name: "Koten Enterprises",
        scope: "Electrical Installation and Termination",
        images: [
            "../resources/projects/1Koten Enterprises/1.jpg",
            "../resources/projects/1Koten Enterprises/2.jpg",
            "../resources/projects/1Koten Enterprises/3.jpg",
            "../resources/projects/1Koten Enterprises/4.jpg",
            "../resources/projects/1Koten Enterprises/5.jpg",
            "../resources/projects/1Koten Enterprises/6.jpg"
        ]
    },
    {
        name: "Velocity Office Solutions (SERVICES)",
        scope: "CCTV (Analog and IP Based), Network Integration, Software Development, Voice and Data Structured Cabling, and Maintenance",
        images: [
            "../resources/projects/2Velocity Office Solutions (SERVICES)/1.jpg",
            "../resources/projects/2Velocity Office Solutions (SERVICES)/2.jpg",
            "../resources/projects/2Velocity Office Solutions (SERVICES)/3.jpg",
            "../resources/projects/2Velocity Office Solutions (SERVICES)/4.jpg",
            "../resources/projects/2Velocity Office Solutions (SERVICES)/5.jpg",
            "../resources/projects/2Velocity Office Solutions (SERVICES)/6.jpg"
        ]
    },
    {
        name: "Phoenix Enterprises (SERVICES)",
        scope: "Wiring Installation and Activation of Fire Alarm, WIFI, CCTV, Telephone, Door Access, Paging System",
        images: [
            "../resources/projects/3Phoenix Enterprises (SERVICES)/1.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/2.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/3.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/4.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/5.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/6.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/7.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/8.jpg",
            "../resources/projects/3Phoenix Enterprises (SERVICES)/9.jpg"
        ]
    },
    {
        name: "St. Lukes College of Medicine Building",
        scope: "Complete electrical and security system installation for medical facility",
        images: [
            "../resources/projects/4St. Lukes College of Medicine Building/1.jpg",
            "../resources/projects/4St. Lukes College of Medicine Building/2.jpg",
            "../resources/projects/4St. Lukes College of Medicine Building/3.jpg",
            "../resources/projects/4St. Lukes College of Medicine Building/4.jpg"
        ]
    },
    {
        name: "Technology Specialist Inc. (TSI)",
        scope: `Projects Handled:
        -Ten Knots Dev 
        -Petron
        -PSSLAI
        -TELSTRA
        -Sevina Una Apartment
        -Metrodrug
        -JTI Lima batangas
        -TEE / ATI Technologies
        -DDT Pasay
        -PAL Airport and CMD Office
        -FOFTA
        -Megaworld Office Eastwood Libis
        -NTT Building Makati
        -Pharma Nutria Bacolod
        -Alphaland Baguio
        -GBOS Libis
        -Emerson Megaworlod
        -Epson Batangas
        -Optum BGC/Quezon City/Cebu
        -On Semicon Cavite & Tarlac
        -Integreon Makati
        -ENT 2Iloilo,
        -Metrodrug
        -CIP Makati
        -Lunbeck Phil. Inc.
        -PLDT Makati
        -Unilever Cavite & Cabuyao
        -Suthernland tarlac & Makati
        -Welthmore Tondo
        -SMB Daraga
        -Department of Agriculture
        -Megaworld Ilo Ilo
        -DHL Batangas`,
        images: [
            "../resources/projects/5Technology Specialist Inc. (TSI)/1.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/2.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/3.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/4.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/5.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/6.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/7.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/8.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/9.jpg",
            "../resources/projects/5Technology Specialist Inc. (TSI)/10.jpg"
        ]
    },
    {
        name: "Intellismart Technology Inc. (SERVICES)",
        scope: "Projects Handled: Monolith GSC Tower, Red Residence Makati, Morning Star Pasig, Lf Logistic Warehouse, San Antonio (Megaworld Corp.), Phirst Park Baluag,Trece,Batulao,Bataan, Urban Recidences Building, Phirst Park Gapan,Tayabas, Phirst Park Magalang, Tim Hortons NLEX, Kingsford Hotel, Harvesta Tarlac, Mezza Residence Building, Steel Asia (Calaca Batangas)",
        images: [
            "../resources/projects/6Intellismart Technology Inc. (SERVICES)/1.jpg",
            "../resources/projects/6Intellismart Technology Inc. (SERVICES)/2.jpg",
            "../resources/projects/6Intellismart Technology Inc. (SERVICES)/3.jpg",
            "../resources/projects/6Intellismart Technology Inc. (SERVICES)/4.jpg",
            "../resources/projects/6Intellismart Technology Inc. (SERVICES)/5.jpg",
            "../resources/projects/6Intellismart Technology Inc. (SERVICES)/6.jpg"
        ]
    },
    {
        name: "Electrical and Solar Installation Works",
        scope: "Complete electrical and solar installation for commercial and residential properties",
        images: [
            "../resources/projects/7Electrical and Solar Installation Works/1.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/2.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/3.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/4.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/5.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/6.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/7.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/8.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/9.jpg",
            "../resources/projects/7Electrical and Solar Installation Works/10.jpg"
        ]
    }
];

// Helper function to convert text formatting to HTML
function convertTextToHtml(text) {
    // First, escape HTML special characters to prevent XSS
    let escapedText = text
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/'/g, '&#039;');
    
    // Then convert newlines to <br> tags and tabs to &nbsp;
    return escapedText
        .replace(/\n/g, '<br>')
        .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Convert tabs to 4 non-breaking spaces
}

// Function to dynamically load projects
async function loadProjects() {
    try {
        // Try to load project data dynamically
        const projectFolders = [
            '1Koten Enterprises',
            '2Velocity Office Solutions (SERVICES)',
            '3Phoenix Enterprises (SERVICES)',
            '4St. Lukes College of Medicine Building',
            '5Technology Specialist Inc. (TSI)',
            '6Intellismart Technology Inc. (SERVICES)',
            '7Electrical and Solar Installation Works'
        ];

        const projects = [];
        
        // Load data for each project
        for (const folder of projectFolders) {
            try {
                // Extract project name from folder name (remove leading number)
                const name = folder.replace(/^\d+/, '').trim();
                
                // Try to load scope/description from Scope.txt
                let scope = "Project details not available";
                try {
                    const scopeResponse = await fetch(`../resources/projects/${folder}/Scope.txt`);
                    if (scopeResponse.ok) {
                        scope = await scopeResponse.text();
                    }
                } catch (e) {
                    // Use fallback scope if fetch fails
                    console.warn(`Could not load scope for ${folder}, using fallback`);
                }
                
                // Get list of images in the folder
                const images = [];
                for (let i = 1; i <= 10; i++) {
                    const imageUrl = `../resources/projects/${folder}/${i}.jpg`;
                    // Check if image exists by attempting to load it
                    try {
                        const imageResponse = await fetch(imageUrl);
                        if (imageResponse.ok) {
                            images.push(imageUrl);
                        }
                    } catch (e) {
                        // If we've already found some images, stop checking
                        if (images.length > 0) break;
                    }
                }
                
                // Only add project if we have at least one image
                if (images.length > 0) {
                    projects.push({
                        name: name,
                        scope: scope,
                        images: images
                    });
                }
            } catch (error) {
                console.error(`Error loading project ${folder}:`, error);
            }
        }
        
        // If we couldn't load any projects dynamically, use fallback data
        if (projects.length === 0) {
            console.warn('Could not load projects dynamically, using fallback data');
            return fallbackProjects;
        }
        
        return projects;
    } catch (error) {
        console.error('Error loading projects, using fallback data:', error);
        return fallbackProjects;
    }
}

// Function to generate project cards
async function generateProjectCards() {
    const projectsGrid = document.getElementById('allProjectsContainer');
    
    // Show loading state
    projectsGrid.innerHTML = '<div class="loading">Loading projects...</div>';
    
    try {
        const projects = await loadProjects();
        
        // Clear loading state
        projectsGrid.innerHTML = '';
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card-full';
            
            // Create image carousel
            let imagesHTML = '';
            project.images.forEach((image, index) => {
                imagesHTML += `<img src="${image}" alt="${project.name} Image ${index + 1}" class="${index === 0 ? 'active' : ''}">`;
            });
            
            projectCard.innerHTML = `
                <div class="project-images">
                    ${imagesHTML}
                </div>
                <div class="project-details">
                    <h3>${project.name}</h3>
                    <div class="project-description">
                        <p>${convertTextToHtml(project.scope)}</p>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Initialize carousels
        initCarousels();
    } catch (error) {
        console.error('Error generating project cards:', error);
        projectsGrid.innerHTML = '<div class="error">Failed to load projects. Please try again later.</div>';
    }
}

// Function to initialize image carousels
function initCarousels() {
    const carousels = document.querySelectorAll('.project-images');
    
    carousels.forEach(carousel => {
        let currentIndex = 0;
        const images = carousel.querySelectorAll('img');
        const totalImages = images.length;
        let intervalId; // Store interval reference
        
        if (totalImages > 1) {
            // Set up interval for automatic sliding
            function startCarousel() {
                intervalId = setInterval(() => {
                    // Remove active class from current image
                    images[currentIndex].classList.remove('active');
                    
                    // Move to next image
                    currentIndex = (currentIndex + 1) % totalImages;
                    
                    // Add active class to next image
                    images[currentIndex].classList.add('active');
                }, 3000); // Change image every 3 seconds
            }
            
            // Start the carousel
            startCarousel();
            
            // Pause carousel on hover
            carousel.addEventListener('mouseenter', () => {
                clearInterval(intervalId);
            });
            
            carousel.addEventListener('mouseleave', () => {
                // Restart interval
                clearInterval(intervalId); // Clear any existing interval
                startCarousel(); // Start a new interval
            });
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize project cards
    generateProjectCards();
    
    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    
    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function() {
            nav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }
});
