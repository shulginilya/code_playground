import { testCase1 } from './testInputs';
import { AirportTicketsArrayType, } from './types';

const sampleInput = testCase1.input;

export const airportTickets = (tickets: AirportTicketsArrayType): string | null => {
    if (tickets) {
        const travelPlan: string[] = [];
        /*
            Algo
        */
        for (let i = 0; i < tickets.length; i++) {
            const currentTicket = tickets[i];
            for (let j = 0; j < tickets.length; j++) {
                const nextTicket = tickets[j];
                if (currentTicket.destination === nextTicket.source) {
                    travelPlan.push(currentTicket.source, currentTicket.destination, nextTicket.destination);
                }
            }
        }
        const travelPlanStr = [...new Set(travelPlan)].join(', ');
        return travelPlanStr;
    }
    return null;
};

airportTickets(sampleInput);
