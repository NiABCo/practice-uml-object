import { UserStrategyInterface } from "./interfaces/user-strategy-interface";
import { ClientStrategy } from "./../helpers/strategies/client-strategy";
import { User } from "./..//models/user";

/**
 * @name UserFactory
 * @author nico
 * @version 1.0.0
 * @package helpers
 */

 export class UserFactory{
     private strategy : UserStrategyInterface = new ClientStrategy();

     public setStrategy(strategy :  UserStrategyInterface) : void {
         this.strategy = strategy;
     }

     public create(name : string, phone : string, email: string, address? : string) : User{
         return this.strategy.create(name,email, phone, address);

     }
 }