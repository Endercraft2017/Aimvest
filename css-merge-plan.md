# CSS Merge Plan

## Objective

Merge `projects.css` into `style.css`, keeping `style.css` rules where conflicts exist, and update HTML files to reference only `style.css`.

## Conflicting Selectors (Will Keep style.css Versions)

- .header-bar
- .logo
- .nav
- .hero
- .button
- a:hover

## Non-Conflicting Selectors to Add from projects.css

- .projects-grid
- .project-card-full
- .project-images
- .project-details
- .project-description
- .loading, .error
- .container
- section
- .contact-card
- .services-section
- .service-category
- .about-section
- footer
- .footer-content
- .contact-map

## New Keyframes to Add from projects.css

- @keyframes fadeInUp
- @keyframes fadeIn

## Implementation Plan

1. Keep all existing content in style.css unchanged
2. Add the non-conflicting selectors from projects.css to the end of style.css
3. Add the new keyframes from projects.css to the end of style.css
4. Update HTML files to reference only style.css

## Merged CSS Content to Add

```css
/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

/* Project Card Full */
.project-card-full {
  border-radius: var(--radius);
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.project-card-full:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.project-card-full img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 3px solid #5dc0f9;
  transition: transform 0.3s ease;
}

.project-card-full:hover img {
  transform: scale(1.05);
}

.project-images {
  position: relative;
  overflow: hidden;
}

.project-images img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.project-images img.active {
  opacity: 1;
  position: relative;
}

.project-details {
  padding: 1.5rem;
}

.project-details h3 {
  margin: 0 0 1rem;
  color: var(--font-color);
  font-size: 1.4rem;
  transition: color 0.3s ease;
}

.project-card-full:hover h3 {
  color: #5dc0f9;
}

.project-description {
  color: var(--sub-color);
  line-height: 1.6;
}

.project-description p {
  margin: 0 0 1rem;
  transition: color 0.3s ease;
}

.project-card-full:hover .project-description p {
  color: var(--font-color);
}

/* Loading and error states */
.loading,
.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: var(--sub-color);
}

/* Staggered animation delays */
.project-card-full:nth-child(1) {
  animation-delay: 0.1s;
}
.project-card-full:nth-child(2) {
  animation-delay: 0.2s;
}
.project-card-full:nth-child(3) {
  animation-delay: 0.3s;
}
.project-card-full:nth-child(4) {
  animation-delay: 0.4s;
}
.project-card-full:nth-child(5) {
  animation-delay: 0.5s;
}
.project-card-full:nth-child(6) {
  animation-delay: 0.6s;
}
.project-card-full:nth-child(7) {
  animation-delay: 0.7s;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section styles */
section {
  margin: 3rem 0;
  animation: fadeIn 0.8s ease;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--font-color);
  position: relative;
  display: inline-block;
}

section h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background: #5dc0f9;
}

/* Contact info cards */
.contact-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: var(--radius);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-card h3 {
  margin-top: 0;
  color: var(--font-color);
}

/* Services section */
.services-section {
  margin-bottom: 3rem;
}

.service-category {
  margin-bottom: 2rem;
}

.service-category h3 {
  color: var(--font-color);
  margin-bottom: 0.5rem;
}

.service-category ul {
  list-style-type: none;
  padding: 0;
}

.service-category li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: var(--sub-color);
}

.service-category li:last-child {
  border-bottom: none;
}

.service-category p {
  color: var(--sub-color);
  line-height: 1.6;
}

/* About section */
.about-section {
  margin-bottom: 2rem;
}

.about-section h2,
.about-section h3 {
  color: var(--font-color);
}

.about-section p {
  color: var(--sub-color);
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Footer */
footer {
  background: #f8f9fa;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
  border-top: 1px solid #eee;
}

.footer-content p {
  margin: 0;
  color: var(--sub-color);
}

/* Contact map styling */
.contact-map iframe {
  border-radius: var(--radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  width: 100%;
  border: none;
}

.contact-map h2 {
  margin-bottom: 1rem;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .project-card-full img {
    height: 200px;
  }

  .container {
    padding: 0 1rem;
  }

  section h2 {
    font-size: 1.5rem;
  }
}
```

## HTML Files to Update

- about.html
- services.html
- projects.html
- contact.html

These files currently reference both style.css and projects.css, and should be updated to reference only style.css.
