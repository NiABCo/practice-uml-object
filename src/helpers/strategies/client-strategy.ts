import { UserStrategyInterface } from "../interfaces/user-strategy-interface";
import { User } from "./../../models/user"
import { Client } from "./../../models/client";

/**
 * @name ClientStrategy
 * @author Nico
 * @version 1.0.0
 * @package helpers.strategies
 */

 export class ClientStrategy implements UserStrategyInterface{
    create(name : string, email :string, phone:string, address : string) : User{
        return (new Client()
        .setMail(email)
        .setName(name)
        .setPhone(phone));
    }
 }