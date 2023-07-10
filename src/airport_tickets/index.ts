import { testCase1 } from './testInputs';
import {
    AirportTicketsArrayType,
    AirportTicketType,
    GenericObjectType,
} from './types';

const sampleInput = testCase1.input;

export const airportTickets = (sampleInput: AirportTicketsArrayType): string => {
    const tickets = [...sampleInput];
    let originallyPlannedDests = '';    
    /*
        Prepare our dictionary
    */
    const ticketsDictionary: GenericObjectType = {};
    tickets.forEach((t: AirportTicketType) => ticketsDictionary[t.source] = t.destination);
    console.log('ticketsDictionary: ', ticketsDictionary);
    return originallyPlannedDests;
};

airportTickets(sampleInput);
