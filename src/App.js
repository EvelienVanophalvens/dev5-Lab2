//import Mountain from './mountain.js';

import Mountain from './Mountain.js';

export default class App{
    constructor(){
       this.hookEvents();
    }

    hookEvents(){
        // click event for the #add btn
        document.querySelector('#add').addEventListener('click', this.addMountain);
    }

    addMountain(){
        // array of mountain names
        let names = ['Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu', 'Cho Oyu', 'Dhaulagiri', 'Manaslu', 'Nanga Parbat', 'Annapurna'];

        // get a random name from the array
        let name = names[Math.floor(Math.random() * names.length)];

        let mountain = new Mountain(name);


        mountain.render();
    }
   
}
