// Cookie Consent Funktionalität
const initCookieConsent = () => {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    
    // Prüfen ob Cookies bereits akzeptiert wurden
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }
    
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });
};

// Zu den bestehenden DOMContentLoaded Event Listenern hinzufügen
document.addEventListener('DOMContentLoaded', () => {
    mobileNav();
    heroSlider();
    initContactForm();
    initCookieConsent(); // Neue Zeile
}); 