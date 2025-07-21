document.addEventListener('DOMContentLoaded', () => {
    const showPasswordsCheckbox = document.getElementById('show-passwords');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const registrationForm = document.querySelector('.registration-form form');

    // Toggle password visibility
    if (showPasswordsCheckbox) {
        showPasswordsCheckbox.addEventListener('change', () => {
            const type = showPasswordsCheckbox.checked ? 'text' : 'password';
            if (passwordField) passwordField.type = type;
            if (confirmPasswordField) confirmPasswordField.type = type;
        });
    }

    // Form validation
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Validate Username
            const username = document.getElementById('username');
            if (username && username.value.trim() === '') {
                alert('Username cannot be empty.');
                isValid = false;
            }

            // Validate Email
            const email = document.getElementById('email');
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (email && (!email.value.trim() || !emailRegex.test(email.value))) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            // Validate Phone Number (basic check)
            const phone = document.getElementById('phone');
            const phoneRegex = /^\d{10}$/; // Assumes 10-digit phone number
            if (phone && (!phone.value.trim() || !phoneRegex.test(phone.value))) {
                alert('Please enter a valid 10-digit phone number.');
                isValid = false;
            }

            // Validate Password
            if (passwordField) {
                const password = passwordField.value;
                const passwordRequirements = [];

                if (password.length < 8) {
                    passwordRequirements.push('At least 8 characters');
                }
                if (!/[A-Z]/.test(password)) {
                    passwordRequirements.push('One uppercase letter');
                }
                if (!/[a-z]/.test(password)) {
                    passwordRequirements.push('One lowercase letter');
                }
                if (!/\d/.test(password)) {
                    passwordRequirements.push('One number');
                }
                if (!/[!@#$%^&*]/.test(password)) {
                    passwordRequirements.push('One special character (!@#$%^&*)');
                }

                if (passwordRequirements.length > 0) {
                    alert('Password does not meet requirements:\n- ' + passwordRequirements.join('\n- '));
                    isValid = false;
                }
            }

            // Validate Confirm Password
            if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
                alert('Passwords do not match.');
                isValid = false;
            }

            if (isValid) {
                alert('Registration successful!');
                // In a real application, you would send the form data to a server here.
                registrationForm.reset(); // Clear the form after successful submission
            }
        });
    }
});