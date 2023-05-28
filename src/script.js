window.onload = () => {

    /**
     * For HOME, ABOUT, SERVICES & CONTACT buttons
     */
    const homeButton = document.getElementById('home');
    const aboutButton = document.getElementById('about');
    const servicesButton = document.getElementById('services');

    homeButton.addEventListener('click', () => {
        document.documentElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });

    aboutButton.addEventListener('click', () => {
        document.getElementById('topnav-main').scrollIntoView(false);
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
