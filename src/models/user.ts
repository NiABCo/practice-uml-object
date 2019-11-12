/**
 * @name User
 * @author Nico
 * @version 1.0.0
 * @package models
 */

 export abstract class User {

    /**
     * @var string
     * name of a user
     */

     protected name: string; //private = attribut privé visible uniquement de l'interieur de la classe

     /**
      * @var string
      * email of a user
      * 
      */
     protected email : string;

     /**
      * @var string
      * phone of a user
      */
     protected phone : string;

     /**
      * sets the name of the user
      * @param name string name of the current user
      * @returns User
      */

     public setName(name : string) : User {
        this.name = name;//this.thing = attribut
        return this;
     } 

     /**
      * Sets the email of the user
      * @param mail 
      * @returns User
      */

     public setMail(mail : string) : User {
         this.email = mail;
         return this;
     }

     /**
      * SETS the phone of the user
      * @param phone 
      * @returns user
      */

     public setPhone( phone : string) : User {
         this.phone = phone;
         return this;
     }

     public getName() : string {
         return this.name;
     }

     public getPhone() : string {
         return this.phone;
     }

     public getMail() : string {
         return this.email;
     }    
    }