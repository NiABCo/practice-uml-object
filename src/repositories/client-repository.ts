import { Client } from "../models/client";
import M from "minimatch";

/**
 * @name clientRepository
 * @author Nico
 * @version 1.0.0
 * @package repositories
 * @abstract Collection of Client
 */

 export class ClientRepository {
    private repository: Map<number, Client>; //map constituée d'une clé et d'une valeur, tjs ds cet ordre

    public constructor() {
        this.repository = new Map<number, Client>(); //Instancie un objet de la classe Map<number, Client>
    }
    
    /**
     * Returns the Client Map structure
     * @returns Map<number, Client>
     */
    public getRepository(): Map<number, Client> {
        return this.repository;
    }

    /**
     * Addna Client to the collection
     * @param client Instance of a Client
     */

    public add(client : Client) : ClientRepository {
        this.repository.set(client.getId(), client)
        return this;
    }

    /**
     * returns the client with this Id
     * @param id Id of a client
     */

    public get(id: number): Client{
        return this.get(id);
    }

    /**
     * Removes a Client from the Collection
     * @param id Id of a Client
     */

    public delete(id : number): ClientRepository {
        this.repository.delete(id);
        return this;
    }

    /**
     * Replace aclient in the collection
     * @param client Client to update
     */

    public update(client : Client) : ClientRepository {
        return this.add(client);
    }

     }