let nav=document.createElement("div")
    nav.setAttribute("id", "navbar")

let ham=document.createElement("div")
    ham.setAttribute("id", "hamburger")

let input1=document.createElement("input")
    input1.setAttribute("type", "checkbox")

let line1=document.createElement("div")
    line1.setAttribute("id", "lines")

let span1=document.createElement("span")
    span1.setAttribute("class", "line1")
let span2=document.createElement("span")
    span2.setAttribute("class", "line2")
let span3=document.createElement("span")
    span3.setAttribute("class", "line3")

line1.append(span1, span2, span3)

let container=document.createElement("div")
    container.setAttribute("id", "menu")







let box1=document.createElement("div")

let a1=document.createElement("a")
    a1.setAttribute("href", "#")
    a1.innerText="Home"
box1.append(a1)
let box2=document.createElement("div")

let a2=document.createElement("a")
    a2.setAttribute("href", "#showcase")
    a2.innerText="About"
box2.append(a2)

let box3=document.createElement("div")

let a3=document.createElement("a")
    a3.setAttribute("href", "#food-section")
    a3.innerText="Category"
box3.append(a3)

let box4=document.createElement("div")

let a4=document.createElement("a")
    a4.setAttribute("href", "#food-menu")
    a4.innerText="Menu"
box4.append(a4)

let box5=document.createElement("div")

let a5=document.createElement("a")
    a5.setAttribute("href", "#testimony")
    a5.innerText="Testimonial"
box5.append(a5)

let box6=document.createElement("div")
let a6=document.createElement("a")
    a6.setAttribute("href", "#contact")
    a6.innerText="Contact"
box6.append(a6)   

let container2=document.createElement("div")
    container2.setAttribute("id", "logo")
    container2.innerText="fw"

container.append(box1, box2, box3, box4, box5, box6)

ham.append(input1, line1, container, container2)

nav.append(ham)

document.querySelector("#header").append(nav)





let container3=document.createElement("div")
    container3.setAttribute("id", "container2")

let heading=document.createElement("h1")
    heading.setAttribute("class", "head")
    heading.innerText="eat right food"

let para=document.createElement("P")
    para.setAttribute("class", "para")
    para.innerText="Eat Healthy Food, It is Good For Our Health"
let box7=document.createElement("div")

let a7=document.createElement("a")
    a7.setAttribute("href", "#food-menu")
    a7.innerText="menu"
box7.append(a7)

container3.append(heading, para, box7)

document.querySelector("#header").append(container3)

