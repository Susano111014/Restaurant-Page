
export { CreateChildElements };
export { HomeModule };
import './style.css';
import './Video.mp4';
import imgMenu from './assets/menu.webp';
import imgReserve from './assets/reservation.webp';
import imgAbout from './assets/about.webp';

function CreateChildElements(parent, child) {

    class Content {
        savedId;
        constructor(parent, child) {
            this.parent = parent;
            this.child = child;
        }
        AddId(id) {
            const childId = document.createElement(this.child);
            childId.setAttribute('id', id);
            this.parent.appendChild(childId);
            this.savedId = {
                getId: id,
                get getElement() { return document.getElementById(this.getId) }
            };

        }

        AddAttribute(id, type, value) {
            const myChildElement = document.getElementById(id);
            if (value == undefined) {
                myChildElement.setAttribute(type, '');
            } else {
                myChildElement.setAttribute(type, value);
            }
        }

        AddTextContent(id, addContent) {
            const myChildElement = document.getElementById(id);
            myChildElement.textContent = addContent;
        }
    }
    const newChild = new Content(parent, child);
    return newChild;
}

function HomeModule() {
    //containers
    const divHeader = document.getElementById('content');
    const videoContainer = CreateChildElements(divHeader, 'div');
    videoContainer.AddId('video-container');

    const reserveContainer = CreateChildElements(divHeader, 'div');
    reserveContainer.AddId('container-reserve');

    const menuContainer = CreateChildElements(divHeader, 'div');
    menuContainer.AddId('container-menu');

    const aboutContainer = CreateChildElements(divHeader, 'div');
    aboutContainer.AddId('container-about');

    const headerText = CreateChildElements(menuContainer.savedId.getElement, 'p');
    headerText.AddId('menu-text');
    headerText.AddTextContent('menu-text', 'MENU');

    const reserveText = CreateChildElements(reserveContainer.savedId.getElement, 'p');
    reserveText.AddId('reserve-text');
    reserveText.AddTextContent('reserve-text', 'RESERVATION');

    const ourRestaurant = CreateChildElements(aboutContainer.savedId.getElement, 'p');
    ourRestaurant.AddId('our-restaurant');
    ourRestaurant.AddTextContent('our-restaurant', 'OUR RESTAURANT');

    const video = CreateChildElements(videoContainer.savedId.getElement, 'video');
    video.AddId('header-video');
    video.AddAttribute('header-video', 'autoplay');
    video.AddAttribute('header-video', 'loop')

    const videoSrc = CreateChildElements(video.savedId.getElement, 'source');
    videoSrc.AddId('show-video');
    videoSrc.AddAttribute('show-video', 'src', './Video.mp4');
    videoSrc.AddAttribute('show-video', 'type', 'video/mp4');

    const menu = CreateChildElements(menuContainer.savedId.getElement, 'img');
    menu.AddId('img-menu');
    menu.AddAttribute('img-menu', 'src', imgMenu);

    const reservation = CreateChildElements(reserveContainer.savedId.getElement, 'img');
    reservation.AddId('img-reserve');
    reservation.AddAttribute('img-reserve', 'src', imgReserve);

    const aboutUs = CreateChildElements(aboutContainer.savedId.getElement, 'img');
    aboutUs.AddId('img-about');
    aboutUs.AddAttribute('img-about', 'src', imgAbout);

    const homePageImg = Array.from([menu.savedId.getElement,
    reservation.savedId.getElement,
    aboutUs.savedId.getElement]);
    associateClass(homePageImg, 'HomePage-img');

    const navElement = document.querySelector('.Header-Nav');
    video.savedId.getElement.appendChild(navElement);
};

function associateClass(myArray, Class) {
    arguments[0].forEach(element => {
        element.classList.add(Class);
    });
}