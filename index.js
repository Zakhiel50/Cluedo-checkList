// Most of the javascript could very well have been coded in HTML to increase performance, 
// only to practice javascript as much as possible, i choose to generate as much javascript as possible.
// Have fun :)
data = {
    suspects : [
        {
            name: "colonelMoutarde",
            label: "Colonel Moutarde",
            checked: false
        },

        {
            name:"madamePervenche",
            label:"Madame Pervenche",
            checked: false
        },

        {
            name:"mademoselleRose",
            label: "Mademoiselle Rose",
            checked: false
        },

        {
            name:"professeurVioler",
            label:"Professeur Violet",
            checked: false
        },

        {
            name:"reverandOlive",
            label:"Réverand Olive",
            checked: false
        },

        {
            name: "madameLeBlanc",
            label: "Madame Le Blanc",
            checked: false
        }
    ],

    weapons: [
        {
            name:"dague",
            label:"Dague",
            checked: false
        },

        {
            name:"revolver",
            label:"Revolver",
            checked: false
        },

        {
            name:"corde",
            label:"Corde",
            checked: false
        },

        {
            name:"matraque",
            label:"Matraque",
            checked:false
        },

        {
            name:"chandelier",
            label:"Chandelier",
            checked: false
        },

        {
            name:"cleAnglaise",
            label:"Clé anglaise",
            checked: false
        }
    ],

    rooms: [
        {
            name: "cuisine",
            label:"Cuisine",
            checked: false
        },

        {
            name: "salleDeBal",
            label: "Salle de bal",
            checked: false
        },

        {
            name: "veranda",
            label: "Véranda",
            checked: false
        },

        {
            name: "salleDeBillard",
            label: "Salle de billard",
            checked: false
        },

        {
            name: "bibliotheque",
            label: "Bibiliothèque",
            checked: false
        },

        {
            name: "bureau",
            label: "Bureau",
            checked: false
        },

        {
            name: "hall",
            label:"Hall",
            checked: false
        },

        {
            name:"salon",
            label: "Salon",
            checked: false,
            this: "salon"
        },

        {
            name: "salleAManger",
            label: "Salle à manger",
            checked: false
        }
    ]
}

function createElements(label, checkBox) {
    // variables declarations
    let suspects = document.querySelector(".suspects");
    let weapons = document.querySelector(".weapons");
    let rooms = document.querySelector(".rooms");

    // create suspects elements
    if (data.suspects) {
        for (let i = 0; i < data.suspects.length; i++) {

            // Create container Suspects
            elementsContainer = document.createElement("div");
            elementsContainer.classList.add("container");

            // create checkbox
            checkBox = document.createElement("input")
            checkBox.type = "checkbox";
            checkBox.name = data.suspects[i].name;
            checkBox.value = data.suspects[i].label;

            // create text on label
            label = document.createElement("p");
            label.textContent = data.suspects[i].label ;
            
            // add checkbox in tag <p> to end of tag
            label.prepend(checkBox)

            //console.log(data.suspects[i].label);

            // push tag <p>(label) in tag <div class="suspects"> 
            suspects.appendChild(label)

            // push tag <div>(elementsContainer) in tag <div class="suspects"> 
            suspects.appendChild(elementsContainer)
            console.log(suspects);

            // retrieve the names and insert them into the checked variable
            let checked = label;
                checkBox.addEventListener("click", function() {
                
                    if(checked.classList == "checked") { // onclick if class checked is true remove it
                        checked.classList.remove("checked")
                        
                    } else { // onclick if class checked is false add it
                        checked.classList = "checked"
                    }
                
            })
        }

        // create weapons elements
    } if (data.weapons) {
        for (let i = 0; i < data.weapons.length; i++) {
            console.log(data.weapons[i]);

            // Create container weapons
            elementsContainer = document.createElement("div");
            elementsContainer.classList.add("container");

            // create checkbox
            checkBox = document.createElement("input")
            checkBox.type = "checkbox";
            checkBox.name = data.weapons[i].name;
            checkBox.value = data.weapons[i].label;
             // create text on label
            label = document.createElement("p");
            label.textContent = data.weapons[i].label ;
             // add checkbox in tag <p> to end of tag
            label.prepend(checkBox)
            //console.log(data.weapons[i].label);

           // push tag <p>(label) in tag <div class="weapons">
            weapons.appendChild(label)

            // push tag <div>(elementsContainer) in tag <div class="weapons">
            weapons.appendChild(elementsContainer)
            
            // retrieve the names and insert them into the checked variable
            let checked = label;
                checkBox.addEventListener("click", function() {
                
                    
                    if(checked.classList == "checked") {// onclick if class checked is true remove it
                        checked.classList.remove("checked")

                    } else {// onclick if class checked is false add it
                        checked.classList = "checked"
                    }
                
            })
        }

         // create rooms elements
    } if (data.rooms) {
        for (let i = 0; i < data.rooms. length; i++) {
            console.log(data.rooms[i]);
            
            // Create container rooms
            elementsContainer = document.createElement("div");
            elementsContainer.classList.add("container");

            // create checkbox
            checkBox = document.createElement("input")
            checkBox.type = "checkbox";
            checkBox.name = data.rooms[i].name;
            checkBox.value = data.rooms[i].label;
            // create text on label
            label = document.createElement("p");
            label.textContent = data.rooms[i].label ;
            // add checkbox in tag <p> to end of tag
            label.prepend(checkBox)
            console.log(data.rooms[i].label);

            // push tag <p>(label) in tag <div class="weapons">
            rooms.appendChild(label)

            // push tag <div>(elementsContainer) in tag <div class="weapons">
            rooms.appendChild(elementsContainer)
            
                // retrieve the names and insert them into the checked variable
                let checked = label;
                checkBox.addEventListener("click", function() {
                
                    if(checked.classList == "checked") {// onclick if class checked is true remove it
                        checked.classList.remove("checked")

                    } else {// onclick if class checked is false add it
                        checked.classList = "checked"
                    }
                
            })
        }
    }

}

// onclick cacher l'écran
let btnHide = document.querySelector(".hide");
let hidden = document.querySelector(".removeScreenHidden")
// onclick afficher l'écran
let btnView = document.querySelector(".viewRemoved");
let textHide = document.querySelector(".removeTextHide")

// onclick ouvrir notepad
let btnNote = document.querySelector(".note");

let notepad = document.querySelector(".hideNotepad")
// onclick fermer notepad
console.log(btnHide);

btnHide.addEventListener("click", hideScreen)
btnView.addEventListener("click", viewScreen)
hidden.addEventListener("click", viewScreen)
btnNote.addEventListener("click", viewHideNotepad)



function  hideScreen() {
    console.log(btnHide);
hidden.classList.replace("removeScreenHidden", "screenHidden")
// btnView.classList = "btn view viewRemoved"
btnView.classList.replace("viewRemoved", "view")

btnHide.classList.replace("hide", "hideRemoved")
textHide.classList.replace("removeTextHide", "textHide")
}

function viewScreen() {
    hidden.classList.replace("screenHidden", "removeScreenHidden")
    // btnView.classList = "btn view viewRemoved"
    btnView.classList.replace("view", "viewRemoved")
    
    btnHide.classList.replace("hideRemoved", "hide")
    textHide.classList.replace("textHide","removeTextHide")
}

function viewHideNotepad() {
    
    if (notepad.classList == "hideNotepad") {
        console.log(notepad);
        notepad.classList.replace("hideNotepad", "notepad")
    } else{
        notepad.classList.replace("notepad", "hideNotepad")
    }
}

createElements()