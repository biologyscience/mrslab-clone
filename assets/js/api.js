const footer = 'https://raw.githubusercontent.com/biologyscience/mrslab-clone/main/template/footer.html';
const navbar = 'https://raw.githubusercontent.com/biologyscience/mrslab-clone/main/template/navbar.html';

fetch(footer).then(x => x.text()).then(data => document.querySelector('footer').innerHTML = data);
fetch(navbar).then(x => x.text()).then(data => document.querySelector('nav').innerHTML = data);