import { customAlphabet } from 'nanoid';

export const createNanoId = (length: number) => 
    customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length);

const SIZE = 24 // Default size for nanoId

export const nanoId = createNanoId(SIZE);

export { v4 as uuid } from 'uuid';