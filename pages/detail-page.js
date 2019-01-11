const submitComment = () => {
    const inputField = document.getElementById('name');
    const inputName = inputField.value;
    const name = inputName.charAt(0).toUpperCase() + inputName.slice(1)
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    if (doesNotPassAllValidations(name,msg) === true) {
        return null;
    }
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
    inputField.value = null;
    textArea.value = null;    
}

const doesNotPassAllValidations = (name, msg) => {
    if (!name && !msg) {
        alert('You forgot to fill both the name and message!');
        return true;
    }
    if (!name) {
        alert('You forgot to fill in your name!');
        return true;
    }
    if (!msg) {
        alert('You forgot to fill in your message!');
        return true;
    }
    if (msg.length > 280) {
        alert('Your message is too long!')
        return true;
    }
    if (hasFoulLanguage(msg) === true) {
        alert('Wash out your mouth!')
        return true;
    }
    return false;
}
 
const hasFoulLanguage = (msg) => {
    const foulLanguage = ['fuck', 'shit'];
    const lowerCaseMsg = msg.toLowerCase();
    let badWords = false;
    console.log(foulLanguage.length);
    for (let i = 0; i < foulLanguage.length; i++) {
        if (lowerCaseMsg.indexOf(foulLanguage[i]) > -1) {
            badWords = true;
        }
    }
    return badWords;
}









