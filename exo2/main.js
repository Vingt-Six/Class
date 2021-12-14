//Exo2

class Lieux{
    constructor(nom, contenu, ingredient){
        this.nom = nom
        this.contenu = contenu
        this.ingredient = ingredient
    }
}


class Ingredient{
    constructor(nom,etat,prix){
        this.nom = nom
        this.etat = etat
        this.prix = prix
    }
}


class Personne{
    constructor(nom,lieu,argent,panier){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.panier = panier
        this.seDeplacer = (x) => {
            // maxime --> lieu  epicerie --> contenu
            // maxime.lieu == epicerie.nom
            //epicerie.contenu == maxime.nom
            this.lieu = x.nom
            x.contenu.push(this.nom)
            console.log(`${this.nom }se dirige vers la ${x.nom}`);
        }
        this.payer = (x) => {
            this.argent -= x.prix
            this.panier.push(x)
            console.log(`${this.nom} à acheté ${x.nom}`, `Il lui reste un total de ${this.argent}`);
        }
        this.couper = (x,y) => {
            x.etat = y
            console.log(`${this.nom} à coupé les ${x.nom} ,  ils sont mtn ${y}`);
        }
    }
}
//ingrédient
let poivron = new Ingredient("poivron", "entier", 1)
let oignon = new Ingredient("oignon", "entier", 2)
//lieu
let maison = new Lieux("maison", [])
let epicerie = new Lieux("epicerie", [], [poivron, oignon])
let cuisine = new Lieux("cuisine", [], ["poivre"])
//personne
let maxime = new Personne("Maxime", "", 100, [])

maxime.seDeplacer(epicerie)

maxime.payer(poivron)

maxime.seDeplacer(maison)

maxime.couper(maxime.panier[0], "coupé")