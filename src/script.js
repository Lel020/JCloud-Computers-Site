window.onload = () => {

    /**
     * For HOME, ABOUT, SERVICES & CONTACT buttons
     */
    const homeButton = document.getElementById('home');
    const servicesButton = document.getElementById('services');

    homeButton.addEventListener('click', () => {
        document.documentElement.scrollIntoView({
            behavior: 'instant',
            block: 'start',
            inline: 'nearest'
        });
    });

    servicesButton.addEventListener('click', () => {
        document.getElementById('tiles-container-main').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });


    /**
     * For Login & Register buttons
     */
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');

    loginButton.addEventListener('click', () => {
        window.open('');
    }); 
    registerButton.addEventListener('click', () => {
        window.open('');
    }); 


};
