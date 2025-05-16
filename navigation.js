// Function to handle navigation between pages
function navigateToPage(page) {
    const baseUrl = '../../pages/';
    
    switch(page) {
        case 'companies':
            window.location.href = baseUrl + 'scad-dashboard.html';
            break;
        case 'students':
            window.location.href = baseUrl + 'scad/student-management.html';
            break;
        case 'reports':
            window.location.href = baseUrl + 'scad/reports.html';
            break;
        case 'cycles':
            window.location.href = baseUrl + 'scad/internship-cycles.html';
            break;
        case 'internships':
            window.location.href = baseUrl + 'scad/internships.html';
            break;
        case 'appointments':
            window.location.href = baseUrl + 'scad/appointments.html';
            break;
    }
}

// Function to set active tab based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    let activeTab = 'companies'; // default

    if (currentPath.includes('student-management.html')) {
        activeTab = 'students';
    } else if (currentPath.includes('reports.html')) {
        activeTab = 'reports';
    }

    // Set active tab
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === activeTab) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}); 
