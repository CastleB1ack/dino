
d = document.querySelector('.d')
a = document.querySelector('.a')
document.onclick= function () {
	d.setAttribute('id', 'j')
	setTimeout(function ()  {d.setAttribute('id','n')} , 400)
}
i = 0
ld = parseFloat(window.getComputedStyle(d).getPropertyValue("left"))
rd = parseFloat(window.getComputedStyle(d).getPropertyValue("right"))
wd = parseFloat(window.getComputedStyle(d).getPropertyValue("width"))
d1 = ld + wd - 1
d2 = rd + wd - 1
ba = parseFloat(window.getComputedStyle(a).getPropertyValue("top"))
w = 2
u = 0
if (window.localStorage.scor == undefined) {
	window.localStorage.scor = '0' }
sco = document.querySelector('.sco')
hsco= document.querySelector(".hsco")
hsco.textContent = `the highest score : ${localStorage.scor}`
ga =document.querySelector('.ga')
o = function(){
	location.reload()
}
function dd () {
	la = parseFloat(window.getComputedStyle(a).getPropertyValue("left"))
	laa = window.getComputedStyle(a).getPropertyValue("left")
	ra = parseFloat(window.getComputedStyle(a).getPropertyValue("right"))
	td = parseFloat(window.getComputedStyle(d).getPropertyValue("top"))	
	bh = parseFloat(window.getComputedStyle(d).getPropertyValue("height"))
	d3 = bh + td - 3
	if (la <= d1 && ra < d2 ) {
		if (d3 > ba) {
			ga.style.display = 'flex'
			a.style.animation = 'none'
			d.style.animation = 'none'
			a.style.left = laa
			d.style.top = `${td}px`
			ga.addEventListener('click',o)
			clearInterval(ee)
		}
	}
	if (la <= -2) {
		u+=1
		sco.textContent =`score : ${u}`
		if ( u > parseInt(window.localStorage.scor) ) {
			localStorage.scor = `${u}` }
	}
}
ee = setInterval(dd,150)
