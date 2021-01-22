import { KleurenResponse } from "./kleuren-response";

export class UserKleuren {
    access_token: string; 
    updated_at: Date;
    created_at: Date; 
    id: number;
    kleuren : KleurenResponse [] ;
    visible : boolean = false;
}