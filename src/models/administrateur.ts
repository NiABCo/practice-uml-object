import { User } from "./user";

/**
 * @name administrateur
 * @author Nico
 * @version 1.0.0
 * @package models
 */

 /**
  * Sets the adress f the administrator
  * @returns string
  */

export class Administrateur extends User{
    private address : string;

    private static instanceOf : Administrateur = null;

    private constructor(){
        super();
    }
    

    public static getInstanceOf() : Administrateur{
        if (Administrateur.instanceOf === null){
            Administrateur.instanceOf = new Administrateur();
        }
        return Administrateur.instanceOf;
    }
    
    public setAddress(address : string) : Administrateur{
        this.address = address;
        return this;
    }

    /**
     * Returns the address of the administrator
     * @returns string
     */

    public getAddress() : string {
        return this.address;
    }
}