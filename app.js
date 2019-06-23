var skills = [[{ 'skill': 'JavaScript', 'level': 75 },
{ 'skill': 'HTML5', 'level': 90 },
{ 'skill': 'Angular 6', 'level': 75 },
{ 'skill': 'CSS', 'level': 80 }],
[{ 'skill': 'C', 'level': 70 },
{ 'skill': 'GIT', 'level': 80 },
{ 'skill': 'SNV', 'level': 75 },
{ 'skill': 'SCSS', 'level': 50 }],
[{ 'skill': 'MongoDb', 'level': 40 },
{ 'skill': 'GIT', 'level': 80 },
{ 'skill': 'SNV', 'level': 75 },
{ 'skill': 'SCSS', 'level': 50 }]];
var count = 0;
var currentCount = 0;

/**
 * @summary get a basic Html Element 
 * @param {String} elem Element Type (div, p, span etc)
 * @param {String} classes string of classes
 * @param {String} id unique id to add to element
 * @param {String} width 
 * @returns DOM Element
 */
let getHTMLElement = (elem = 'div', classes = '', id = '', width = null) => {

    let toRender = document.createElement(elem);
    toRender.id = id;
    toRender.classList = classes;
    toRender.style.width = width;

    return toRender
}

function drawBar() {

    let graph = document.getElementsByClassName('graph')[0];
    skills[currentCount].forEach(element => {
        let barDiv = getHTMLElement('div', 'barDiv')
        let label = getHTMLElement('div', 'label', 'label' + count );
        label.innerHTML = element.skill;
        let bar1 = getHTMLElement('div', 'bar bar1', 'bar1' + count, '0');
        let bar2 = getHTMLElement('div', 'bar bar2', 'bar2' + count, '100%')

        barDiv.appendChild(label);
        barDiv.appendChild(bar1);
        barDiv.appendChild(bar2);
        graph.appendChild(barDiv);
        count++;
        setTimeout(() => {
            bar1.style.width = element.level + '%';
            bar2.style.width = (100 - element.level) + '%';
        }, 0)
    });
}

function clickMe() {
    currentCount = (currentCount < skills.length - 1) ? currentCount + 1 : 0;
    for (let i = 0; i < count; i++) {
        let label = document.getElementById('label' + i);
        let bar1 = document.getElementById('bar1' + i);
        let bar2 = document.getElementById('bar2' + i);
        label.innerHTML = skills[currentCount][i].skill;
        bar1.style.width = skills[currentCount][i].level + '%';
        bar2.style.width = (100 - skills[currentCount][i].level) + '%';

    }
}

drawBar();