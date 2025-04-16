
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Course Data
const courses = [
    {
        id: 'generative-ai',
        title: 'Comprehensive Generative AI',
        description: 'Master the latest in AI technology and its practical applications.',
        price: 29999,
        category: 'AI & ML',
        duration: '12 Weeks'
    },
    {
        id: 'python-automation',
        title: 'Python Automation',
        description: 'Learn to automate tasks and build efficient systems with Python.',
        price: 24999,
        category: 'Programming',
        duration: '10 Weeks'
    }
];

// Populate Courses
const courseGrid = document.querySelector('.course-grid');

function renderCourses() {
    courseGrid.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="category">${course.category}</span>
                    <span class="duration">${course.duration}</span>
                </div>
                <div class="course-price">
                    <span>₹${course.price.toLocaleString()}</span>
                </div>
                <button class="btn primary">Enroll Now</button>
            </div>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted successfully!');
    contactForm.reset();
});
