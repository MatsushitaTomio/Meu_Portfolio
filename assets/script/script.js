let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const list = document.querySelectorAll('[name="nav-a"]')

function activeLink(){
	list.forEach((item) =>
	item.classList.remove('active'))
	this.classList.add('active')
};

list.forEach((item) =>
item.addEventListener('click', activeLink))

function toggleMode(){
  const html = document.documentElement

  html.classList.toggle('light')
};

function typeWriter() {
  if (i < txt.length) {
    var c = txt[i];
    // se for \n, troca por br, senão coloca o próprio caractere
    p.innerHTML += c == '\n' ? '<br>' : c;
    i++;
    setTimeout(typeWriter, speed);
  }
}

const p = document.querySelector('#text');
// salva o texto original, sem as tags ("<br>" vira o caractere de quebra de linha - "\n")
const txt = p.innerText;

p.innerHTML = '';
var i = 0, speed = 70;
typeWriter();