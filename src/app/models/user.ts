import { Photo } from './photo';

export interface User {
    id: number;
    userName: string;
    age: number;
    gender: string;
    knownAs: string;
    created: string;
    lastActive: string;
    introduction?: string;
    lookingFor?: string;
    interests?: string;
    city: string;
    country: string;
    photoUrl: string;
    photos?: Photo[];
}