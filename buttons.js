const addAndRemoveClass = (id,addedClass, removedClass) => {
    return (e) => {
        console.log(document.getElementById(id).classList.contains(addedClass))
        if (document.getElementById(id).classList.contains(addedClass)) {
            document.getElementById(id).classList.add(removedClass);
            document.getElementById(id).classList.remove(addedClass);
        }    
        else {
            document.getElementById(id).classList.add(addedClass);
            document.getElementById(id).classList.remove(removedClass);

        }
    }   
}
const displayNone = (id) => {
    return (e) => {
        document.getElementById(id).style.display =  'none'
    }
}

document.getElementById("bamboo__stand__reward").addEventListener(
    "click", 
    addAndRemoveClass('donation__modal','modal__completed','modal__not__completed')
    );
document.getElementById("got__it").addEventListener(
    "click", 
    addAndRemoveClass('donation__modal','modal__completed','modal__not__completed')

    );
