
export { CreateChildElements };
export { HomeModule };
import './Video.mp4';
import imgMenuG from './assets/menuG.jpg';
import imgReserveG from './assets/reservationG.webp';
import imgAboutG from './assets/aboutG.jpg';

import imgMenuS from './assets/menuS.jpg';
import imgReserveS from './assets/reservationS.jpg';
import imgAboutS from './assets/aboutS.jpg';

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
                get getId() { return id },
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
    const video = CreateChildElements(videoContainer.savedId.getElement, 'video');
    video.AddId('header-video');
    video.AddAttribute('header-video', 'autoplay');
    video.AddAttribute('header-video', 'loop')
    const videoSrc = CreateChildElements(video.savedId.getElement, 'source');
    videoSrc.AddId('show-video');
    videoSrc.AddAttribute('show-video', 'src', './Video.mp4');
    videoSrc.AddAttribute('show-video', 'type', 'video/mp4');

    const navElement = document.querySelector('.Header-Nav');
    videoContainer.savedId.getElement.appendChild(navElement);

    const imgSection = CreateChildElements(divHeader, 'section');
    imgSection.AddId('img-section');

    const menuContainer = CreateChildElements(imgSection.savedId.getElement, 'div');
    menuContainer.AddId('container-menu');

    const reserveContainer = CreateChildElements(imgSection.savedId.getElement, 'div');
    reserveContainer.AddId('container-reserve');

    const aboutContainer = CreateChildElements(imgSection.savedId.getElement, 'div');
    aboutContainer.AddId('container-about');

    const imgContainer = [menuContainer.savedId.getElement,
    reserveContainer.savedId.getElement,
    aboutContainer.savedId.getElement];

    const imgContentContainer = imgContainer.map(container =>
    CreateChildElements(container, 'div'));
    imgContentContainer.map((div, index) =>
    div.AddId(`btnContainer-${index}`));

    const btnElements = imgContentContainer.map(father => (
        CreateChildElements(father.savedId.getElement, 'button'))
    );
    btnElements.map((btn, index) => btn.AddId(`btnImg-${index}`));

    const svgNS = "http://www.w3.org/2000/svg";
    const origenSvgElmt = document.createElementNS(svgNS, "svg");
    const pathElmt = document.createElementNS(svgNS, "path");
    const svgArrayElements = CreateElementNs(origenSvgElmt, 2);
    svgArrayElements.push(origenSvgElmt);
    btnElements.map((btn, i) => btn.savedId.getElement.appendChild(svgArrayElements[i]))
    const pathArrayElements = CreateElementNs(pathElmt, 2);
    pathArrayElements.push(pathElmt);
    svgArrayElements.map((svg, i) => svg.appendChild(pathArrayElements[i]));
    svgArrayElements.map(svg => svg.setAttribute('viewBox', '0 0 256 256'));
    pathArrayElements.map(path => path.setAttribute('d', 'M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z'));


    const reserveText = CreateChildElements(imgContentContainer[1].savedId.getElement, 'p');
    reserveText.AddId('text');
    reserveText.AddTextContent('text', 'RESERVATION');

    const ourTextRestaurant = CreateChildElements(imgContentContainer[2].savedId.getElement, 'p');
    ourTextRestaurant.AddId('our-restaurant');
    ourTextRestaurant.AddTextContent('our-restaurant', 'OUR RESTAURANT');

    const headerText = CreateChildElements(imgContentContainer[0].savedId.getElement, 'p');
    headerText.AddId('menu-text');
    headerText.AddTextContent('menu-text', 'MENU');
    headerText.AddAttribute('menu-text', 'class', 'Menu-1');

    const menu = CreateChildElements(menuContainer.savedId.getElement, 'img');
    menu.AddId('img-menu');
    menu.AddAttribute('img-menu', 'src', imgMenuG);
    menu.AddAttribute('img-menu', 'srcset', `${imgMenuS} 400w, ${imgMenuG} 800w`);
    menu.AddAttribute('img-menu', 'sizes', '(max-width: 850px) 800px, 400px');

    const reservation = CreateChildElements(reserveContainer.savedId.getElement, 'img');
    reservation.AddId('img-reserve');
    reservation.AddAttribute('img-reserve', 'src', imgReserveG);
    reservation.AddAttribute('img-reserve', 'srcset', `${imgReserveS} 400w, ${imgReserveG} 800w`);
    reservation.AddAttribute('img-reserve', 'sizes', '(max-width: 850px) 800px, 400px');

    const aboutUs = CreateChildElements(aboutContainer.savedId.getElement, 'img');
    aboutUs.AddId('img-about');
    aboutUs.AddAttribute('img-about', 'src', imgAboutG);
    aboutUs.AddAttribute('img-about', 'srcset', `${imgAboutS} 400w, ${imgAboutG} 800w`);
    aboutUs.AddAttribute('img-about', 'sizes', '(max-width: 850px) 800px, 400px');

    const bottomCorner = imgContainer.map(father => (
        CreateChildElements(father, 'div')
    ));
    bottomCorner.map((div, index) => div.AddId(`corner-${index}`));

    const topCorners = imgContainer.map(father =>
        (CreateChildElements(father, 'div'))
    );
    topCorners.map((div, index) => (
        div.AddId(`top-corner${index}`)
    ));

    const cornerClass = bottomCorner.map(div => div.savedId.getElement);
    associateClass(cornerClass, 'Corner');

    const homePageImg = [menu.savedId.getElement,
    reservation.savedId.getElement,
    aboutUs.savedId.getElement];
    associateClass(homePageImg, 'HomePage-img');

    const btnPContainerClass = imgContentContainer.map(div => div.savedId.getElement);
    associateClass(btnPContainerClass, 'btn-p-Container');

};
function associateClass(myArray, Class) {
    arguments[0].forEach(element => {
        element.classList.add(Class);
    });
}

function CreateElementNs(originalElmt, number) {
    const cloneElmtArray = [];
    if (number > 1) {
        for (let index = 0; index < number; index++) {
            cloneElmtArray.push(originalElmt.cloneNode(false))
        }
        return cloneElmtArray
    } else {
        const cloneElmt = originalElmt.cloneNode(false)
        return cloneElmt
    }
}