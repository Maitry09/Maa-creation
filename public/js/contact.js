document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if('/contact'){
         try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            showFormFeedback(result.message, 'success');
            e.target.reset();
        } else {
            showFormFeedback(result.message || 'Something went wrong.', 'error');
        }
    } catch (error) {
        showFormFeedback('Network error. Please try again.', 'error');
    }
    }
   if('/session'){
         try {
        const response = await fetch('/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            showFormFeedback(result.message, 'success');
            e.target.reset();
        } else {
            showFormFeedback(result.message || 'Something went wrong.', 'error');
        }
    } catch (error) {
        showFormFeedback('Network error. Please try again.', 'error');
    }
    }
});

function showFormFeedback(message, type) {
    const feedback = document.getElementById('formFeedback');
    feedback.textContent = message;
    feedback.className = `formFeedback ${type} show`;

    setTimeout(() => {
        feedback.className = `formFeedback ${type} hide`;
    }, 4000);
}