import { User } from "./user";

/**
 * @name Client
 * @author Nico
 * @package models
 * @version 1.0.0
 * @version 1.0.1 added Id to Cient
 */

 export class Client extends User {
     /**
      * @var numberId of a client unique
      */
     private id? : number;

     public setId(id : number) : Client {
         this.id = id;
         return this;
     }

     public getId() : number{
        return this.id;
    }
 }