/**
 * @name i-repository
 * @author Nico
 * @version 1.0.0
 * @abstract Interface specifiant les repositories
 */

export interface Repository<T> {
    add(t: T): Repository<T>
    get(): T;
    delete(id: number): Repository<T>
    update(t: T):Repository<T>
    getRepository(): Map<Number, T>
 }