interface AirportTicketType {
    source: string;
    destination: string;
};
type AirportTicketsArrayType = AirportTicketType[];

const sampleInput = [
    {
        source: 'Amsterdam',
        destination: 'Berlin'
    },
    {
        source: 'Paris',
        destination: 'London'
    },
    {
        source: 'London',
        destination: 'Amsterdam'
    }
];

const airport_tickets = (sampleInput: AirportTicketsArrayType): string => {
    let res = '';
    return res;
};
