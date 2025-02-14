function login() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const pincode = document.getElementById('pincode').value;

    if (name === 'Priyal' && age === '18' && gender === 'Female' && contact === '9868496019' && pincode === '91') {
        document.getElementById('login-register').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
    } else {
        alert('Incorrect login credentials');
    }
}

function navigate(page) {
    const pages = [
        'login-register', 'home-page', 'donate-page', 'thankyou-page', 'barter-page', 'tools-page', 
        'machine-page', 'confirmation-page', 'confirmation-machine-page', 'insecticide-page', 
        'confirmation-insecticide-page', 'seed-page', 'confirmation-seed-page', 'fertilizer-page', 
        'confirmation-fertilizer-page', 'sprayer-page', 'confirmation-sprayer-page', 'others-page', 
        'confirmation-others-page', 'cattle-food-page', 'confirmation-cattle-food-page', 'scholarship-page', 
        'scholarship-thankyou-page', 'sell-page', 'sell-confirmation-page', 'customer-care-page', 'loan-thankyou-page',
        'feedback-thankyou-page'
    ];
    pages.forEach(p => document.getElementById(p).classList.add('hidden'));
    document.getElementById(${page}-page).classList.remove('hidden');
}

function submitScholarship() {
    document.getElementById('scholarship-page').classList.add('hidden');
    document.getElementById('scholarship-thankyou-page').classList.remove('hidden');
}

function submitDonation() {
    document.getElementById('donate-page').classList.add('hidden');
    document.getElementById('thankyou-page').classList.remove('hidden');
}

function backToMain() {
    document.getElementById('thankyou-page').classList.add('hidden');
    document.getElementById('login-register').classList.remove('hidden');
}

function confirmTools() {
    document.getElementById('tools-page').classList.add('hidden');
    document.getElementById('confirmation-page').classList.remove('hidden');
}

function confirmMachine() {
    document.getElementById('machine-page').classList.add('hidden');
    document.getElementById('confirmation-machine-page').classList.remove('hidden');
}

function confirmInsecticide() {
    document.getElementById('insecticide-page').classList.add('hidden');
    document.getElementById('confirmation-insecticide-page').classList.remove('hidden');
}

function confirmSeed() {
    document.getElementById('seed-page').classList.add('hidden');
    document.getElementById('confirmation-seed-page').classList.remove('hidden');
}

function confirmFertilizer() {
    document.getElementById('fertilizer-page').classList.add('hidden');
    document.getElementById('confirmation-fertilizer-page').classList.remove('hidden');
}

function confirmSprayer() {
    document.getElementById('sprayer-page').classList.add('hidden');
    document.getElementById('confirmation-sprayer-page').classList.remove('hidden');
}

function confirmOthers() {
    document.getElementById('others-page').classList.add('hidden');
    document.getElementById('confirmation-others-page').classList.remove('hidden');
}

function confirmCattleFood() {
    document.getElementById('cattle-food-page').classList.add('hidden');
    document.getElementById('confirmation-cattle-food-page').classList.remove('hidden');
}

function submitFeedback() {
    document.getElementById('customer-care-page').classList.add('hidden');
    document.getElementById('feedback-thankyou-page').classList.remove('hidden');
}

function submitSell() {
    document.getElementById('sell-page').classList.add('hidden');
    document.getElementById('sell-confirmation-page').classList.remove('hidden');
}
function submitLoan() {
    document.getElementById('loan-page').classList.add('hidden');
    document.getElementById('loan-thankyou-page').classList.remove('hidden');
}

document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('click', () => {
        // Remove the effect from all elements
        document.querySelectorAll('.icon').forEach(i => i.classList.remove('clicked')); 
        // Add the effect to the clicked element
        item.classList.add('clicked'); 
    });
});


function backToHome() {
    const confirmationPages = [
        'confirmation-page', 'confirmation-machine-page', 'confirmation-insecticide-page',
        'confirmation-seed-page', 'confirmation-fertilizer-page', 'confirmation-sprayer-page', 
        'confirmation-others-page', 'confirmation-cattle-food-page', 'sell-confirmation-page', 
        'feedback-thankyou-page', 'scholarship-thankyou-page','loan-thankyou-page',
    ];
    confirmationPages.forEach(p => document.getElementById(p).classList.add('hidden'));
    document.getElementById('home-page').classList.remove('hidden');
}