// EXO 1 et EXO2
class Personnage {
    constructor(age,nom,ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = () => {
            console.log(`Bonjour je m'appelle ${this.nom} !`);
        }
    }
}

let perso1 = new Personnage(22,"Marouane","Bruxelles");
let perso2 = new Personnage(48,"Maman","Bruxelles");

console.log(perso1);
console.log(perso2);
perso1.sePresenter();
perso2.sePresenter();