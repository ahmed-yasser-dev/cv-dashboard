// ======================
// Soft Skills Chart
// ======================
const softSkillsCanvas = document.getElementById('softSkillsChart');

if (softSkillsCanvas) {
    new Chart(softSkillsCanvas, {
        type: 'radar',
        data: {
            labels: [
                'problem Solving',
                'Communication',
                'Teamwork',
                'Time Management',
                'Creativity',
                'Attention to Detail'
            ],
            datasets: [{
                label: 'Soft Skills',
                data: [85, 75, 80, 90, 70, 95],
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#2563EB',
                pointBackgroundColor: '#10B981',
                pointBorderColor: '#fff',
                pointRadius: 5,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#94A3B8',
                        font: {
                            size: 12,
                            family: 'Poppins'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}


// ======================
// EmailJS Contact Form
// ======================
const btnSubmit = document.getElementById('btn-submit');

if (btnSubmit) {
    btnSubmit.addEventListener('click', function () {
        const from_name = document.getElementById('from_name').value.trim();
        const from_email = document.getElementById('from_email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!from_name || !from_email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        emailjs.send('service_k5vbzfq', 'template_a1qte19', {
            from_name, from_email, subject, message
        }).then(() => {
            alert('Message sent successfully!');
            document.getElementById('from_name').value = '';
            document.getElementById('from_email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        }).catch(() => {
            alert('Something went wrong. Please try again.');
        }).finally(() => {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        });
    });
}


// ======================
// Sidebar Toggle
// ======================
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

if (hamburger) {
    hamburger.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
}