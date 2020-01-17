var corFundo = document.querySelector(".cor");
var corLegenda = document.querySelector(".rgb");
function mudarCor(){
    let r,g,b;
    r = parseInt(Math.random() * (255 - 0) + 0);
    g = parseInt(Math.random() * (255 - 0) + 0);
    b = parseInt(Math.random() * (255 - 0) + 0);
    corFundo.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    corLegenda.innerHTML = "RGB("+r+","+g+","+b+")"
}