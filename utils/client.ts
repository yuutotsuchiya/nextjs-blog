import { createClient } from 'microcms-js-sdk';
export const client = createClient({
serviceDomain: 'tsuchiyaportfolio',
apiKey: process.env.API_KEY || 'b6a279b3-69db-45fc-8ac4-9fc647e3c73b',
})