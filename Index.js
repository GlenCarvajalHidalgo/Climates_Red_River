
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'rose-gold': '#b76e79',
                'rose-gold-light': '#d4a5ab',
                'mountain-green': '#2d4a3e',
                'forest': '#1a2e26',
                'cream': '#faf9f7',
                'warm-white': '#fefefe'
            },
            fontFamily: {
                'serif': ['Cormorant Garamond', 'serif'],
                'sans': ['Montserrat', 'sans-serif'],
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide icons
    lucide.createIcons();

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // Close modal on backdrop click
    document.getElementById('success-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    });

    // Load form data from localStorage
    const formName = localStorage.getItem("formName");
    const formEmail = localStorage.getItem("formEmail");
    document.getElementById('formName').value = formName ?? '';
    document.getElementById('formEmail').value = formEmail ?? '';

    // Load form data from sessionStorage
    const formItem = localStorage.getItem("formItem");
    const formMessage = localStorage.getItem("formMessage");
    document.getElementById('formItem').value = formItem ?? '';
    document.getElementById('formMessage').value = formMessage ?? '';
});


// Open inquiry with pre-filled item
function openInquiry(itemName) {
    const input = document.getElementById('formItem');
    if (input) {
        input.value = itemName;
    }
    document.getElementById('visit').scrollIntoView({ behavior: 'smooth' });
    // Highlight the input
    setTimeout(() => {
        input.focus();
        input.parentElement.classList.add('animate-pulse');
        setTimeout(() => input.parentElement.classList.remove('animate-pulse'), 1000);
    }, 800);
}

// Handle form submission
function handleFormSubmit(e) {
    //try {
        e.preventDefault();

        // Save form data to localStorage
        const formName = document.getElementById('formName').value
        const formEmail = document.getElementById('formEmail').value
        localStorage.setItem('formName', formName ? formName : '');
        localStorage.setItem('formEmail', formEmail ? formEmail : '');

        // Save form data to sessionStorage
        const formItem = document.getElementById('formItem').value ?? '';
        const formMessage = document.getElementById('formMessage').value ?? '';
        sessionStorage.setItem('formItem', formItem);
        sessionStorage.setItem('formMessage', formMessage);

        // Show success modal
        document.getElementById('success-modal').classList.remove('hidden');
        document.getElementById('success-modal').classList.add('flex');

        // Reset form
        //e.target.reset();
    //} catch (error) {
    //    alert('An error occurred while submitting the form. Please try again.');
    //}
}

// Close modal
function closeModal() {
    document.getElementById('success-modal').classList.add('hidden');
    document.getElementById('success-modal').classList.remove('flex');
}