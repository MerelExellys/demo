function changeColor(e) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.style.color = `#${randomColor}`;
    console.log(e, randomColor);
}