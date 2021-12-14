//exo2

class Lieu{
    constructor(nom, personnes){
        this.nom = nom
        this.personnes = personnes
    }
}

class Personne{
    constructor(nom, prenom, argent){
        this.nom = nom
        this.prenom = prenom
        this.argent = argent
        this.seDeplacer= (lieu, ptDepart) => {
            ptDepart.personnes.splice(ptDepart.personnes.indexOf(this.nom), 1)
            lieu.personnes.push(this.nom)
            console.log(this.nom + " se rend à pied vers " + lieu.nom);
        }
    }
}

class Bus {
    constructor(personnes, caisse){
        this.personnes = personnes
        this.caisse = caisse
        this.embarquer = (passager, lieu, ptDepart) => { // x = argent y = personne
            let ticket = 2.80
            if (ticket <= passager.argent) {
                this.personnes.push(passager.nom)
                passager.argent -= ticket
                this.caisse += ticket
                console.log(passager.nom + " embarque dans le bus et paye " + ticket + " euros pour son ticket");
                console.log("il reste " + passager.argent.toFixed(2) + " d'euros dans le portefeuille de " + passager.nom);
                lieu.personnes.push(passager.nom)
                this.personnes.splice(this.personnes.indexOf(passager.nom), 1)
                console.log(passager.nom + " est arrivé à " + lieu.nom);
                ptDepart.personnes.splice(ptDepart.personnes.indexOf(passager.nom), 1)
            } else {
                console.log("t'as pas assez d'argent rentre chez toi");
            }
            
        }
    }
}

//instance
    //lieu
let maison = new Lieu("maison", ["Simpson"])
let molengeek = new Lieu("Molengeek", [])
let snack = new Lieu("Snack", [])
    //personne
let personnage = new Personne("Simpson", "Dexter", 10)
    //bus
let voyage = new Bus([], 50)

//deroulement
voyage.embarquer(personnage, molengeek, maison)
voyage.embarquer(personnage, snack, molengeek)
personnage.seDeplacer(molengeek, snack)
voyage.embarquer(personnage, maison, molengeek)