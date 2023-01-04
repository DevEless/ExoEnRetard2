const personnage1 = {
    nom: 'ELBG',
    prenom: 'Quentin',
    sePresenter: function () {
        console.log(`Bonjour, je m'appelle ${this.nom} ${this.prenom}`);
    }
};

personnage1.sePresenter();

const personnage2 = {
    nom: 'Biture',
    age: 25,
    changerAge: function () {
        this.age = prompt('Quel âge avez-vous maintenant?');
        alert(`${this.nom} a ${this.age} ans`);
    }
};

personnage2.changerAge();