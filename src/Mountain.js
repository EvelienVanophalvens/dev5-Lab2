export default class Mountain{
    constructor(name){
        this.name = name;
    }

    render(){
        //create a div with the name of the mountain in the body
        let div = document.createElement('div');
        div.textContent = this.name;
        div.classList.add('mountain');
        document.body.appendChild(div);


    }

   
}
