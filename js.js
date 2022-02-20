// // // // 	<h3> hello ${card.t}</h3>
// // // // 	<p> ${card.dis}</p>
// // // // 	<span>${card.d}</span>
// // // // 	color:#1ee99a; 
// // // // 	font-family: Arial; 
// // // // 	font-Size:100px;'   > fuck off </h2>`);
// // // // 	height :100%; 
// // // // 	text-align:center;
// // // //    'width :100%;
// // // // // console.error() 
// // // // </div>
// // // // <div style = '${c}'>
// // // // `
// // // // c = 'color :#3f8ff1'
// // // // console.log(w)
// // // // document.getElementById('l').style.color = 'red';
// // // // document.write(`<h2 id='f' style = 
// // // // document.write(w)
// // // // let card = {dis:'fuck offhrjytnttehtehhhhhhhyjtyjmy',t:'world',d:'25\\10'};
// // // // let w = `
// // // // w = w.repeat(4)
// // // // window.alert("hell yeah");
// // // // a = "-100";
// // // // b = "20";
// // // // c = 30;
// // // // d = true;
// // // // console.log(-a *b)
// // // // console.log()

// // // // k = 1
// // // // k = 1 ? console.log('k'):true

// // // // i = 1
// // // // l=20
// // // // for(;l-2 >= 0;i+=2){
// // // // 	console.log(' '.repeat(l),'#'.repeat(i),' '.repeat(l))
// // // // 	l-=1
// // // // }6
// // // //g = l.split('').sort().reduce((a,b,z) => k.startsWith(a+b) ? a+b : a)
// // // // r = c => c.reduce((a,s) => `${a+s}`)

s = (...a) => console.log(a.join('\n'))




// // // // function g (a) {
// // // // 	let c = a
// // // // 	return {
// // // // 		j(){
// // // // 			return c
// // // // 		}}
// // // // }
// // // // l = g('g')
// // // // l.z = ';'
// // // // s(l.z)
// // // // s(l.j())





// // // document.getElementById('l').remove()
// // // d1 = document.createElement('div');
// // // h1 = document.createElement('h1')
// // // h3 = document.createElement('h3')
// // // p  = document.createElement('p')
// // // h1.textContent = 'h1'
// // // h3.textContent = 'h3'
// // // p.textContent  = `hi , fuck yeah`
// // // d1.append(h1,h3,p)
// // // Array.from(d1.children,e => e.style.cssText = 'padding : 20px; font-size:40px;color:#11dedc;font-family:Arial;')
// // // for(i=0;i<100;i++) {
// // // 	document.body.append(d1.cloneNode(true))
// // // }
// // // function ch (a) {
// // // 	a.style.background = 'black'
// // // 	s(a)
// // // }
// // // document.querySelectorAll('body div').forEach(e => e.setAttribute('onclick','ch(this)'))

// // p   = document.createElement('p')
// // inp = document.querySelector('input')
// // b   = document.createElement('button')
// // b.textContent = 'sum'
// // document.body.append(b)
// // b.onclick = function f () {
// // 	e=''
// // 	for(i=0;i<inp.value.length;i++) {
// // 		if (isNaN(inp.value[i]) == true && ['+','-'].indexOf(inp.value[i]) == -1) {
// // 			e = 'fuck u'
// // 			p.textContent = e
// // 			document.body.append(p)
// // 			return
// // 		} else {
// // 			e += inp.value[i]
// // 		}
// // 	}
// // 	p.textContent = eval(e)
// // 	document.body.append(p)
// // }




// var gameWidth = 400;
// var counter = 2;
// if (window.localStorage.sc == undefined) {
// 	window.localStorage.sc = '0' }
// pp  = document.getElementById('a2')
// pp.style.cssText = 'margin : 20px; font-size:40px;color:#11dedc;font-family:Arial;'
// pp.textContent = `the highest score : ${localStorage.sc}`
// function stopSliding(slider1, slider2, sliderB4){
//     var btn = document.getElementById("btn");
//     var slider1 = document.getElementById(slider1);
//     var slider2 = document.getElementById(slider2);
//     var sliderB4 = document.getElementById(sliderB4);
//     var left = window.getComputedStyle(slider1).getPropertyValue("left");
//     slider1.classList.remove("animate");
//     slider1.style.left = left;
    
//     var width = parseFloat(window.getComputedStyle(slider1).getPropertyValue("width"));
//     var left1 = parseFloat(window.getComputedStyle(slider1).getPropertyValue("left"));
//     var left2 = parseFloat(window.getComputedStyle(sliderB4).getPropertyValue("left"));
 	
//     if ( counter-2 > parseInt(window.localStorage.sc) ){
//         	localStorage.sc = counter-2
//         }
//     var difference = left1 - left2;
    
//     var absDifference = Math.abs(left1 - left2);
//     if(difference>width||difference<-width){
//         document.getElementById("restart").style.display = "block";
//         var scoreStr = "Score:";   
//         var scoreMinusOne = counter-2;
//         var score = scoreStr.concat(scoreMinusOne);
//         btn.setAttribute("onclick", "");
// 		alert(score);
//         Location.reload();

       
//     }
//     var offset = width - absDifference;
//     var px = "px";
//     var offstring = offset.toString();
//     var theWidth = offstring.concat(px);
    
//     var str1 = "stopSliding('slider";
//     var str2 = counter;
//     var str3 = "','slider";
//     var str4 = counter+1;
//     var str5 = "','slider";
//     var str6 = counter-1;
//     var str7 = "')";
//     var str8 = str1.concat(str2, str3, str4, str5, str6, str7);
//     btn.setAttribute("onclick",str8);
//     if(difference>0){
//         var newleft = left1 + absDifference;
//     }else{
//         var newleft = left1 - difference;
//     }
//     var theleft = newleft.toString();
//     var newnewleft = theleft.concat(px);
//     slider1.style.width = theWidth; 
//     if(difference<0){
//         slider1.style.left = newnewleft;
//     }
//     slider2.style.width = theWidth;
//     slider2.style.visibility = "visible";
//     gameWidth = gameWidth + absDifference;
//     document.documentElement.style.setProperty('--width', gameWidth + "px");
//     counter++;
// }
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
	if (la < -3) {
		u+=1
		sco.textContent =`score : ${u}`
		if ( u > parseInt(window.localStorage.scor) ) {
			localStorage.scor = `${u}` }
	}
}
ee = setInterval(dd,200)
// function f(i,w) {
//  	setTimeout(function (){} , 8000)
//  	return
// }
//  for(let i = 0,w = 4;w > 1; i+= 1 , w-=0.2){
//  	f(i,w)
//  }
// let i = 4
// r =	setInterval(
// 	function (){
// 		setTimeout(() => a.style.animation = `e ${i}s infinite linear` , 4000)
// 		i -= 0.2
// 		if (i<1) {clearInterval(r)}}
// 	,40)











