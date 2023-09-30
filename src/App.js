export default class App{
    constructor(){
       this.hookEvents();
    }

    hookEvents(){
        // click event for the #add btn
        document.querySelector('#add').addEventListener('click', this.addMountain);
    }

    addMountain(){
        console.log("hello");
    }
   
}
