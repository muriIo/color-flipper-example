const button = document.getElementById('button--changer');
button.addEventListener('click', function () {
    colorChanger();
});

const mainContent = document.getElementById('main--content');

const spanColor = document.getElementById('color--changer');

const url = window.location.href;

function colorChanger() {
    const color = '#' + getRandomNumber().toString(16);
    mainContent.style.backgroundColor = color;

    if (url.search('index') === -1) {
        spanColor.textContent = ': ' + color;
    } else {
        spanColor.textContent = ': ' + mainContent.style.backgroundColor;
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 16777215);
}

function createBubble() {
    const main =
        document.querySelector("Main");
    const createElement =
        document.createElement("span");
    var size = Math.random() * 60;

    createElement.style.animation =
        "animation 6s linear infinite";
    createElement.style.width = 180 + size + "px";
    createElement.style.height = 180 + size + "px";
    createElement.style.left =
        Math.random() * innerWidth + "px";
    const color = '#' + getRandomNumber().toString(16);
    createElement.style.backgroundColor = color;
    createElement.addEventListener('click', function (e) {
        clickBubble(e.target)
    });
    main.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 4000);
}
setInterval(createBubble, 100);

function clickBubble(element) {
    const colorPicked = element.style.backgroundColor;
    spanColor.textContent = ': ' + colorPicked;
    mainContent.style.backgroundColor = colorPicked;
    element.remove();
}