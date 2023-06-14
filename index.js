
const image = document.createElement('img')
image.setAttribute(
    "src",
     "img/profile.png"
)

const profimg = document.querySelector('.profile-img')
profimg.append(image)



const h1 = document.createElement('h1');
h1.innerText = 'UNKNOWN NAME'

const show = document.querySelector('header .name')
show.append(h1)


const h3 = document.createElement('h3');
h3.innerText = 'N.Damen Avenue Chicago 99999 | 999-999-9999| hello@kickresume.com | www.kickresume.com'

const show1 = document.querySelector('header .details')
show1.append(h3)


const image1 = document.createElement('img')
image1.setAttribute(
    "src",
    "img/account.png"
)

const profimg1 = document.querySelector('main .profile')
profimg1.append(image1)


const profh1 = document.createElement('h1');
profh1.innerHTML =  '&nbsp;&nbsp;Profile'
const show3 = document.querySelector('main .profile')
show3.append(profh1)



const profp = document.createElement('p')
profp.innerHTML = "Innovative optimized solution seeker. Excited to be at the <br> deployment phase of my new career as a  web developer. <br> I am ambitious, adventurous,  assiduous, animated, and an <br> a iliteration"

 const show4 = document.querySelector('main ')
show4.append(profp)



const image2 = document.createElement('img')
image2.setAttribute(
    "src",
    "img/bookmark.png"
)
const skilimg1 = document.querySelector('main .skills')
skilimg1.append(image2)

const skilh1 = document.createElement('h1');

skilh1.innerHTML =  '&nbsp;&nbsp;Skills'
const show5 = document.querySelector('main .skills')
show5.append(skilh1)

const result = document.createElement("body")
result.innerHTML=` <h3>Technical Skills</h3>
<ul>
   <li>Javascript</li>
   <li>CSS</li>
   <li>HTML</li>
   <li>React</li>
   <li>Redux</li>
   <li>Mongo</li>
   <li>Deployment</li>
</ul>

<h4>Additional Skills</h4>
<ol>
   <li>Project Management</li>
   <li>Recruitment</li>
   <li>Business Development</li>
   <li>Editing</li>
   <li>Fundraising</li>
</ol>`
const view6 = document.querySelector('main')
view6.append(result)


            const work = document.createElement('body')
            work.innerHTML =`<img src="img/work.png" alt="">`

            const view5 = document.querySelector('.work');
            view5.append(work)

const event = document.createElement('body')
event.innerHTML = `<h2>Event Manger </h2> <p>03/2014 - 02/2017</p>
<br>
<h3>C3 Presents, Wasington DC</h3>`

const view4 = document.querySelector('.event');
view4.append(event)



const exp = document.createElement('body')
exp.innerHTML = `<ul>
<li>Lead and execute all phases of event planning <br> and production spanning committee <br>
   Recruitment, training, Vendor relationships and <br>
   on-site facilitation.
</li>
<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br> Nemo mollitia dolorum sapiente voluptas saepe sequi <br> fugit accusantium culpa, esse asperiores voluptatibus <br> rerum impedit, voluptatum officiis quasi officia dolores <br> tenetur quod!</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Magni autem in sit quia quidem obcaecati ad odio a, <br> maxime doloremque accusantium esse similique <br> nesciunt eaque ipsum nobis reprehenderit doloribus <br> tempore.</li>
</ul>`

const view3 = document.querySelector('.exp');
view3.append(exp)


 const imge = document.createElement('body');
 imge.innerHTML =`<img src="img/work.png" alt=""> &nbsp; &nbsp;
         <span> <strong>Work Experience<strong></span>`
         const view2 = document.querySelector('.imge');
         view2.append(imge)

       const title = document.createElement("body");
       title.innerHTML=`<h3>Community Relations Manager</h3>
       <span>06//2011 - 01/2014</span>
       <p>Gay & lesbian Elder Housing, Los Angeles</p>`

       const view1 = document.querySelector('.title')
      view1.append(title)


const list = document.createElement('body')
list.innerHTML=`<ul>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Lorem ipsum dolor</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
 <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
</ul>`

const view = document.querySelector('.list')
view.append(list)






const imgetext = document.createElement("body")
imgetext.innerHTML=`<img src="img/education.png" alt=""> &nbsp; &nbsp;
<span>Education</span>`

const imge1 = document.querySelector('.imge1')
imge1.append(imgetext)

const titl = document.createElement('body');
titl.innerHTML=`<h3>Engineering immersion program</h3>
<span>11//2018 - 06/2018</span>
<p>Thinkful,Chicago, IL</p>`

const title1 = document.querySelector('.title1')
title1.append(titl)


const list1 = document.createElement("body")
list1.innerHTML=`   <ul>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Lorem ipsum dolor Lorem ipsum dolor sit <br>  
   amet consectetur adipisicing elit. Nobis vitae voluptatibus
   <br> odit praesentium, voluptas nostrum ratione rerum exp</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Lorem ipsum dolor</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
 <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Lorem ipsum dolor Lorem ipsum dolor sit <br>  
   amet consectetur adipisicing elit. Nobis vitae voluptatibus
   <br> odit praesentium, voluptas nostrum ratione rerum exp</li>
</ul>`

const lst = document.querySelector('.list1')
lst.append(list1)




const text = document.createElement("body")

text.innerHTML=`<strong>BA, English </strong> 
            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span>09/2001-09/2000</span>
<p>University of California, Los Angles</p>`

const end = document.querySelector(".alignright .end")
end.append(text)









