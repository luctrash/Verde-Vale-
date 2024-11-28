$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

document.getElementById('testimonial-form').addEventListener('submit', function (e) {
    e.preventDefault(); 


    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;


    const feedbackContainer = document.createElement('div');
    feedbackContainer.classList.add('feedback');

    feedbackContainer.innerHTML = `
        <img src="src/images/avatar.png" class="feedback-avatar" alt="Avatar">
        <div class="feedback-content">
            <p>
                ${name}
                <span>
                    ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
                </span>
            </p>
            <p>${feedback}</p>
        </div>
    `;

    const feedbacksSection = document.getElementById('feedbacks');
    feedbacksSection.appendChild(feedbackContainer);

    document.getElementById('testimonial-form').reset();
});

function saveToLocalStorage() {
    const feedbacks = document.getElementById('feedbacks').innerHTML;
    localStorage.setItem('testimonials', feedbacks);
}


function loadFromLocalStorage() {
    const savedFeedbacks = localStorage.getItem('testimonials');
    if (savedFeedbacks) {
        document.getElementById('feedbacks').innerHTML = savedFeedbacks;
    }
}


document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
document.getElementById('testimonial-form').addEventListener('submit', saveToLocalStorage);

