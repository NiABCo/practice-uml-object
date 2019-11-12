import { User } from "./models/user";
import { Client } from "./models/client";
import { Administrateur } from "./models/administrateur";
import { ClientFactory } from "./helpers/client-factory";

/**
 * @name App
 * @author Aélion
 * @version 1.0.0
 */
export class App {
    public constructor(){
        const moi : User = new Client();
        moi.setName('Nicolas')
        .setMail('nico@voila.fr')
        .setPhone('0605040302');

        const toi : User = new Client();
        toi.setName('Mathilde')
        .setMail('mathilde@yahoooo.com')  //Le saut de ligne n'interrompt pas le chaînage de méthode
        .setPhone('0102030105');

        const factory : ClientFactory = new ClientFactory(); //Instance de ClientFactory
        const lui : Client = factory.full('Superman','0102030405', 'krypton42@lexcorp.com');//Données de l'instance de ClientFactory
        const machin : Client = factory.createNameClient('Spiderman');

        console.log(lui)

        //Outupt names of the users

        console.log('Moi : ' + moi.getName() + ' Toi : '  + toi.getName());

        const admin : Administrateur = Administrateur.getInstanceOf()

        admin.setName('Batman')
             .setPhone('0102030405')
             .setMail('admin@truc.fr');
        admin.setAddress('Gotham City');

        console.log(admin.getName() + ' vit à : ' + admin.getAddress());

        const autreAdmin : Administrateur = Administrateur.getInstanceOf();
        console.log('Autre admin vit aussi à : ' + autreAdmin.getAddress())

       }

    }

// Load the app...
const app : App = new App();