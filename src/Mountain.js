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

    //create random coordinates within the window from the center
    randomCoordinates(){
        let randomSign = Math.random() < 0.5 ? -1 : 1;
        let x = Math.floor(Math.random() * window.innerWidth/2 ) * randomSign;
        let y = Math.floor(Math.random() * window.innerHeight/2) * randomSign;
        let coords = {x: x, y: y};
        return coords;
    }
 
    render(){
        //create a div with the name of the mountain in the body
        let div = document.createElement('div');
        div.textContent = this.name;
        div.classList.add('mountain');
        document.body.appendChild(div);

        //change the color of the mountain
        div.style.backgroundColor = this.randomColor();

        //change the position of the mountain with web animation api
        let coords = this.randomCoordinates();
        div.animate([
            {transform: `translate(0px, 0px)`},
            {transform: `translate(${coords.x}px, ${coords.y}px)`},
        ], {
            duration: 2000,
            iterations: 1,
            fill: 'forwards',
        });
    
    }


   
}
