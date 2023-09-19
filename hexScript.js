function hexColor(){

    const hexText = ['0', '1', '2', '3', '4', '5','6', '7','8','9', 'A','B','C','D','E','F'];
    let hexcode = '';

for(let i=0; i < 6; i++)
{
    const random_index = Math.floor(Math.random() * hexText.length);
    hexcode += hexText[random_index]
}
console.log(Math.floor(Math.random() * hexText.length))

document.getElementById('hex-code').innerHTML = hexcode;

document.getElementsByTagName('body')[0].style.background = '#' + hexcode;

}