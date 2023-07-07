
const getcolor = () => {
    const rendamNumber = Math.floor(Math.random() * 16777715);
    const rendamcolor = "#" + rendamNumber.toString(16);
    document.body.style.backgroundColor = rendamcolor;
    document.getElementById("color1").innerHTML = rendamcolor;
}
document.getElementById("btn").addEventListener(
    "click", getcolor
)
getcolor();