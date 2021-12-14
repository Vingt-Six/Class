//exo1

class Objet{
    constructor(nom,prix){
        this.nom = nom
        this.prix = prix
    }
}

//instance objet
let iphone = new Objet("Iphone", 1000)
let nokia = new Objet('3310', 10)

let boite = [iphone, nokia]

class Personnage{
    constructor(nom, sac, argent){
        this.nom = nom
        this.sac = sac
        this.argent = argent
        this.prendre = (x) => {
            this.sac.push(x)
            boite.splice(boite.indexOf(x), 1)
        }
        this.acheter = (vendeur, article) => { 
            this.argent -= article.prix
            this.sac.push(article)
            vendeur.sac.splice(vendeur.sac.indexOf(article), 1)
            vendeur.argent += article.prix
        }
    }
}

//instance perso
let jonathan = new Personnage("Jonathan", [], 2000)
let cactus = new Personnage('Cactus', [], 202020202002)

console.log(jonathan, cactus, boite);
cactus.prendre(iphone)
console.log(boite);
jonathan.prendre(nokia)
console.log(boite);
jonathan.acheter(cactus, iphone)
cactus.acheter(jonathan, nokia)
console.log(jonathan);
console.log(cactus);