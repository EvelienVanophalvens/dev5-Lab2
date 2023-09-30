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

        //consolelog the saved mountains
        console.log(mountainArray);
    }

   
}
