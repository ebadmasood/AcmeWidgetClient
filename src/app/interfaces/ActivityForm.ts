export interface ActivityForm {
    FirstName : string;
    LastName: string;
    EmailAddress: string;
    Activity: Activity;
    Comments: string;

}

export enum Activity {
    Singing = 1,
    Dancing = 2,
    Painting =3
}