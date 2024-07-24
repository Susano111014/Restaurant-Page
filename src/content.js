/* <h1>Great Restaurant!</h1>
<img src="" alt="An image">
<p>An awesome description of the Restaurant</p> */
// export { CreateChildElements};
export {divHeader, headerTitle, headerText, headerImg};
export default CreateChildElements;
import './style.css';
function CreateChildElements(parent, child) {
    class Content {
        constructor(parent, child) {
            this.parent = parent;
            this.child = child;
        }
        AddId(id) {
            const childId = document.createElement(child);
            childId.setAttribute('id', id);
            this.parent.appendChild(childId);
            return {childId : id};

        }

        AddAttribute(id, type, value) {
            const myChildElement = document.getElementById(id);
            myChildElement.setAttribute(type, value);
        }

        AddTextContent(id, addContent) {
            const myChildElement = document.getElementById(id);
            myChildElement.textContent = addContent;
        }
    }
    const newChild = new Content(parent, child);
    return newChild;
}

const divHeader = document.getElementById('content');

const headerTitle = CreateChildElements(divHeader, 'h1');
headerTitle.AddId('Title');
headerTitle.AddTextContent('Title', 'Restaurant');

const headerText = CreateChildElements(divHeader, 'p');
headerText.AddId('description');
headerText.AddTextContent('description', 'this is an awesome and very testy restaurant');

const headerImg = CreateChildElements(divHeader, 'img');
headerImg.AddId('header-image');
headerImg.AddAttribute('header-image', 'src', 'no se');
headerImg.AddAttribute('header-image', 'alt', 'This is an image');