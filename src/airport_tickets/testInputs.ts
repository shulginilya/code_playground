export const testCase1 = {
    input: [
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
    ],
    output: 'Paris, London, Amsterdam, Berlin'
};

export const testCase2 = {
    input: [
        {
            source: 'Berlin',
            destination: 'Amsterdam'
        },
        {
            source: 'Amsterdam',
            destination: 'Paris'
        },
        {
            source: 'London',
            destination: 'Berlin'
        }
    ],
    output: 'Berlin, Amsterdam, Paris, London'
};