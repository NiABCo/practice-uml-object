import { User } from "./models/user";
import { Client } from "./models/client";
import { Administrateur } from "./models/administrateur";

import { UserFactory } from "./helpers/user-factory";
import { AdminStrategy } from "./helpers/strategies/admin-strategy";
import { ClientStrategy } from "./helpers/strategies/client-strategy";
import { ClientRepository } from "./repositories/client-repository";

/**
 * @name App
 * @author Aélion
 * @version 1.0.0
 */
export class App {
    public constructor(){
      const factory : UserFactory = new UserFactory();

      //Instancie un repository pour les clients
      const repository : ClientRepository = new ClientRepository();

      
      //Add a client to the repository
      repository.add(<Client> factory.create(
        'Bond',
        '007,5',
        'James.bond@co.ok'
    ));

      //Loop over repository
      repository.getRepository().forEach((client :  Client, id : number) => {
        console.log(
          `Nom :  + ${client.getName() } [${client.getId()}]\n`
        );
      })



     //To create an admin
      factory.setStrategy(new AdminStrategy());
      repository.add(<Client>factory.create(
          'Super Admin',
          '13511',
          'admin@moi.fr',
          '10, Baker street'
      ));

       //Yet another user, don't forget to switch strategy back
       factory.setStrategy(new ClientStrategy());
      const bonClient : Client = factory.create(
          'Picsou',
          '11541',
         'dollar@donaldville.com'
        );
       
    }
}
// Load the app...
const app : App = new App();
