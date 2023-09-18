let index = 0;

function changeColors(){
    const colors = ['red', 'blue', 'orange', 'purple', 'green']

    document.getElementsByTagName('body')[0].style.background = colors[index++]

    if(index > colors.length - 1){
        index = 0
    }
}