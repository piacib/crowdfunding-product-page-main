const showElement = (id,addedClass, removedClass) => {
    return (e) => {
        
            document.getElementById(id).classList.add(addedClass);
            document.getElementById(id).classList.remove(removedClass);
    }   
}
const hideElement = (id,addedClass, removedClass) => {
    return (e) => {
    document.getElementById(id).classList.add(removedClass);
    document.getElementById(id).classList.remove(addedClass);
}}


document.getElementById("black__edition__stand__button").addEventListener(
    "click", 
    showElement('donation__modal__container','modal__completed','modal__not__completed')
);
document.getElementById("bamboo__stand__reward__button").addEventListener(
    "click", 
    showElement('donation__modal__container','modal__completed','modal__not__completed')
);
document.getElementById("got__it").addEventListener(
    "click", 
    hideElement('donation__modal__container','modal__completed','modal__not__completed')
    );
document.getElementById("donation__modal__container").addEventListener(
    "click", 
    hideElement('donation__modal__container','modal__completed','modal__not__completed')
    );
            