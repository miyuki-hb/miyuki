import { customAlphabet } from 'nanoid';

export const createNanoId = (length: number) => 
    customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length);

const SIZE = 21 // Default size for nanoid

export const nanoid = createNanoId(SIZE);

export { v4 as uuid } from 'uuid';