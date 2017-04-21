/**
 * Created by matsu on 4/21/2017.
 */

var html = '';
var rgbColor;

function getRandomRGB(){
   return Math.floor(Math.random() * 256);
}

function randomColor() {
    var color = 'rgb(';
    color += getRandomRGB() + ',';
    color += getRandomRGB() + ',';
    color += getRandomRGB() + ')';
    return color;
}

function print(message){
    document.write(html);
}

for ( i=1; i<=10; i++) {
    red = getRandomRGB();
    green = getRandomRGB();
    blue = getRandomRGB();
    rgbColor = randomColor();
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);