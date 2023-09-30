export default class Mountain{
    constructor(name){
        this.name = name;
    }

    //create random colors for the mountains
    randomColor(){
        let colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'black', 'brown'];
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    }

    render(){
        //create a div with the name of the mountain in the body
        let div = document.createElement('div');
        div.textContent = this.name;
        div.classList.add('mountain');
        document.body.appendChild(div);

        //change the color of the mountain
        div.style.backgroundColor = this.randomColor();


    }

   
}
