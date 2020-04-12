import { Photo } from './photo';

export class Report {
    latitude: string;
    longitude: string;
    status: string;
    current_date: string;
    details: string;
    photo: Photo; 
    user_id: string;
}