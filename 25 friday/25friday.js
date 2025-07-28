document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formResult = document.getElementById('formResult');

    // Custom exception for form validation
    class ValidationException extends Error {
        constructor(message, field) {
            super(message);
            this.name = 'ValidationException';
            this.field = field;
        }
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate form with exception handling
    function validateForm(email, password) {
        // Clear previous errors
        emailError.textContent = '';
        emailError.style.display = 'none';
        passwordError.textContent = '';
        passwordError.style.display = 'none';
        formResult.textContent = '';

        try {
            if (!email) {
                throw new ValidationException('Email is required', 'email');
            }
            if (!validateEmail(email)) {
                throw new ValidationException('Please enter a valid email address', 'email');
            }
            if (!password) {
                throw new ValidationException('Password is required', 'password');
            }
            if (password.length < 6) {
                throw new ValidationException('Password must be at least 6 characters long', 'password');
            }
            return true;
        } catch (error) {
            if (error instanceof ValidationException) {
                if (error.field === 'email') {
                    emailError.textContent = error.message;
                    emailError.style.display = 'block';
                    emailInput.focus();
                } else if (error.field === 'password') {
                    passwordError.textContent = error.message;
                    passwordError.style.display = 'block';
                    passwordInput.focus();
                }
            } else {
                console.error('Unexpected error:', error);
                formResult.textContent = 'An unexpected error occurred. Please try again.';
                formResult.style.color = 'red';
            }
            return false;
        }
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateForm(email, password)) {
            formResult.textContent = 'Form submitted successfully!';
            formResult.style.color = 'green';
        }
    });
k});