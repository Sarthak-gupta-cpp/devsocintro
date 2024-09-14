const DATA = ["SARTHAK\u00A0GUPTA","CS\u00A0DEPARTMENT","FROM\u00A0NEWDELHI","INTERESTED\u00A0IN","WEB/GAME\u00A0DEV!"]

con1 = document.getElementById("one")
con2 = document.getElementById("two")
con3 = document.getElementById("three")
con4 = document.getElementById("four")
con5 = document.getElementById("five")

con_list = [con1,con2,con3,con4,con5]

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%"

var iter = 0
var level = 0
var started = false

function make_random() {
    for (let index = 0; index < con_list.length; index++) {
        const element = con_list[index];
        if (index < level) {element.innerHTML = `<p class="done"> ${DATA[index]} </p>`}
        else {element.innerHTML = ranword(iter, index)}
    }
    if (iter > 48 && started) {
        level += 1
        iter = 0
    }
    iter += 0.9
}

function ranword(iter,dataindex) {
    data = ""
    for (let index = 0; index < 13; index++) {
        if(index < iter/4 && (dataindex == level) && started) {
            data +=  `<p class="done">${DATA[dataindex][index]}</p>`
        } else {
            data += `<p>${LETTERS[Math.floor(Math.random()*LETTERS.length)]}</p>`
        }
    }
    return data
}


setInterval(make_random,50)

document.body.onmousedown = (e) => {
    if (!started) iter = 0
    started = true
}
