// Project data loader and UI generator
document.addEventListener('DOMContentLoaded', async () => {
    const projectContainer = document.getElementById('projectContainer');
    const viewAllBtn = document.getElementById('viewAllBtn');
    
    // Get list of project folders and their first image
    async function getProjectData() {
        try {
            const projects = [];
            // Get project folders from resources/projects
            const projectFolders = [
                '1Koten Enterprises',
                '2Velocity Office Solutions (SERVICES)',
                '3Phoenix Enterprises (SERVICES)',
                '4St. Lukes College of Medicine Building',
                '5Technology Specialist Inc. (TSI)',
                '6Intellismart Technology Inc. (SERVICES)',
                '7Electrical and Solar Installation Works'
            ];

            for (const folder of projectFolders) {
                const project = {
                    name: folder.replace(/^\d+/g, '').trim(),
                    path: folder,
                    image: `../resources/projects/${folder}/1.jpg`,
                    description: await fetchDescription(folder)
                };
                projects.push(project);
            }
            return projects;
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }

    async function fetchDescription(folder) {
        try {
            const response = await fetch(`../resources/projects/${folder}/Scope.txt`);
            return await response.text();
        } catch {
            return 'Project description not available';
        }
    }

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
        `;
        return card;
    }

    function populateHomepageProjects(projects) {
        projectContainer.innerHTML = '';
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectContainer.appendChild(card);
        });
    }

    // Event listeners
    viewAllBtn.addEventListener('click', () => {
        window.location.href = 'projects.html';
    });

    // Initialize
    const projects = await getProjectData();
    populateHomepageProjects(projects);
    
    // Initialize auto-scroll after projects are loaded
    initAutoScroll();
    
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

// Auto-scroll functionality
function initAutoScroll() {
  const projectContainer = document.getElementById('projectContainer');
  if (!projectContainer) return;
  
  // Check if there are any projects to scroll
  if (projectContainer.children.length === 0) return;
  
  let scrollPos = 0;
  let isScrolling = true;
  let animationId = null;
  const scrollSpeed = 1; // Pixels per frame
  
  function autoScroll() {
    if (!isScrolling) return;
    
    if (projectContainer.scrollWidth > projectContainer.clientWidth) {
      scrollPos += scrollSpeed;
      
      // Implement seamless looping without jumps
      if (scrollPos > projectContainer.scrollWidth) {
        scrollPos = 0;
      }
      
      projectContainer.scrollLeft = scrollPos;
    }
    
    animationId = requestAnimationFrame(autoScroll);
  }
  
  // Mouse hover handling
  projectContainer.addEventListener('mouseenter', () => {
    isScrolling = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  });
  
  projectContainer.addEventListener('mouseleave', () => {
    isScrolling = true;
    if (!animationId) {
      animationId = requestAnimationFrame(autoScroll);
    }
  });
  
  // Start the scrolling
  animationId = requestAnimationFrame(autoScroll);
}