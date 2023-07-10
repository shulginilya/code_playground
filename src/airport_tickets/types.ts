export interface AirportTicketType {
    source: string;
    destination: string;
};

export interface GenericObjectType {
    [key: string]: string;
};

export type AirportTicketsArrayType = AirportTicketType[];