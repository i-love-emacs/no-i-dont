var each = (selector, func) => Array.from(document.querySelectorAll(selector)).forEach(func)
var display = (selector, disp) => each(selector, e => { e.style.display = disp })
var hide = selector => display(selector, 'none')
var show = selector => display(selector, 'block')

i_do.onclick = () => {
	location.href = 'https://www.gnu.org/software/emacs/'
}

i_dont.onclick = () => {
	hide('#buttons')
	show('#msg')
	setTimeout(() => { location.href = 'https://www.vim.org/' }, 5000);
}
