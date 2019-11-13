/**
 * @name IdFactory
 * @author Nico
 * @version 1.0.0
 * @package helpers
 * @abstract generate Auto increment Id
 */

 export class IdFactory{
     private static id : number = 0;

     public static getId() : number {
         IdFactory.id = IdFactory.id + 1;
         return IdFactory.id;
     }
 }