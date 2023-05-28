window.onload = () => {

    //For the links-container (home, about, services, contact)
    const homeButton = document.getElementById('home');
    const servicesButton = document.getElementById('services');

    homeButton.addEventListener('click', () => {
    document.getElementById('header-main').scrollIntoView(
        { behavior: 'smooth'});
    });

    servicesButton.addEventListener('click', () => {
        document.getElementById('tiles-container-main').scrollIntoView(true);
    });

    //For the login and register buttons under "login-container"
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');

    loginButton.addEventListener('click', () => {
        window.open('');
    }); 
    registerButton.addEventListener('click', () => {
        window.open('');
    }); 


};
