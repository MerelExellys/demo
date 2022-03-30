function changeColor(e) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.style.backgroundColor = `#${randomColor}`;
    console.log(e, randomColor);
}