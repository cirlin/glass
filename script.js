function activate(o)
{
o.src='img/a'+o.id+'.png';
}
function disactivate(o,spec)
{
o.src='img/'+o.id+'.png';
}
var p=0;
var c;
var lim;

function change(name,pos,cont)
{
if(name=='vk')window.location.href='http://vk.com/mirsz';  
if((name=='right')||(name=='left'))
    {
var o=document.images['light'];
var nam=o.src.split('/');
var nm=(nam[nam.length-1]).split('.')
nm[0]=parseInt(nm[0]);
if(name=='right')nm[0]=(nm[0]<lim-1)?nm[0]+1:nm[0];
if(name=='left')nm[0]=(nm[0]>0)?nm[0]-1:nm[0];
nam[nam.length-1]=nm.join('.');
o.src=nam.join('/')
var w=document.documentElement.clientWidth;
o.style.left=(w-o.width)*0.5+'px';
return;
    }
document.getElementById('f').src=name+'.html';
p=pos;
c=cont;
}
function wrimg(cl,nm)
{
document.write("<img class='"+cl+"' id='"+nm+"' src='img/"+nm+".png'",
"onmouseover='activate(this)' onmouseout='disactivate(this)'",
"onclick='change(this.id)'>")
}
var cor;
function seth()
{
var o=document.getElementById('f');
var ob=o.contentWindow.document.body
o.height=ob.clientHeight-1+'px';
var w=document.documentElement.clientWidth;
var cor=251-((w-800)*0.5)%250;
ob.style.backgroundPosition=cor+'px 1px';

o=document.getElementById('main');
h=o.clientHeight;
o=document.images['mr'];
o.style.width='10px';
o.style.height=h-20+'px';
o=document.images['lb'];
o.style.top=h+'px';
o=document.images['mb'];
o.style.top=h+'px';
o=document.images['br'];
o.style.top=h+'px';
window.scrollTo(0,p);
}
var path;
function vision(img,q)
{
path=q;
var o=document.images['light'];
o.src=img.src;
o.style.display='block';
var t=(document.body.scrollTop)?document.body.scrollTop:document.documentElement.scrollTop;
o.style.top=t+'px';
var h=document.body.offsetHeight+20;
var w=document.documentElement.clientWidth;
o.style.left=(w-o.width)*0.5+'px';
o.style.zIndex=3;
var H=o.height;
if(!isNaN(parseInt(img.id)))
{
o=document.images['left'];
o.title="предыдущее изображение";
o.style.top=t+'px';
o.style.display='block';
o.style.zIndex=4;
o=document.images['right'];
o.title="следующее изображение";
o.style.left=w-30+'px';
o.style.top=t+'px';
o.style.display='block';
o.style.zIndex=4;
}
o=document.images['filtr'].style;
o.display='block';
o.zIndex=2;
o.width=w;
o.height=Math.max((t+H),h)+'px';
p=t;
}
function unvision()
{
var o=document.images['filtr'];
o.style.display='none';
o=document.images['light'];
o.style.display='none';
o=document.images['left'];
o.style.display='none';
o=document.images['right'];
o.style.display='none'
}

