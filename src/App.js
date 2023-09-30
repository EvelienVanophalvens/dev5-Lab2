//import Mountain from './mountain.js';

import Mountain from './Mountain.js';

export default class App{
    constructor(){
       this.hookEvents();
    }

    hookEvents(){
        // click event for the #add btn
        document.querySelector('#add').addEventListener('click', this.addMountain);
        //click event for the #save btn
        document.querySelector('#save').addEventListener('click', this.saveMountains);
        //click event for the #load btn
        document.querySelector('#load').addEventListener('click', this.loadMountains);
    }

    addMountain(){
        // array of mountain names
        let names = ['Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu', 'Cho Oyu', 'Dhaulagiri', 'Manaslu', 'Nanga Parbat', 'Annapurna'];

        // get a random name from the array
        let name = names[Math.floor(Math.random() * names.length)];

        let mountain = new Mountain(name);


        mountain.render();
    }


    //save the mountains to local storage
    saveMountains(){
        let mountains = document.querySelectorAll('.mountain');
        let mountainArray = [];
        mountains.forEach(mountain => {
            let mountainObj = {
                name: mountain.textContent,
                color: mountain.style.backgroundColor,
            }
            mountainArray.push(mountainObj);
        });
        localStorage.setItem('mountains', JSON.stringify(mountainArray));

        //clear the mountains from the screen
        document.querySelectorAll('.mountain').forEach(mountain => mountain.remove());
    }

    //load the mountains from local storage
    loadMountains(){
        //clear the mountains from the screen
        document.querySelectorAll('.mountain').forEach(mountain => mountain.remove());
        
        let mountains = JSON.parse(localStorage.getItem('mountains'));
        mountains.forEach(mountain => {
            let newMountain = new Mountain(mountain.name);
            newMountain.render();
            let div = document.querySelector('.mountain:last-child');
            div.style.backgroundColor = mountain.color;
        });
    }
   
}
