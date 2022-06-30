export const appName: string = 'Redivendor'
export const baseURL = process.env.NODE_ENV == "production" ? "https://api.domain.com" : "http://localhost:3027";
export const apiURL: string = process.env.NODE_ENV == "production" ? "https://api.domain.com" : "https://redicabs.nextweblab.com";
export const carPackages = [
    { id: 1, name: '3 Hour - 40 KM' },
    { id: 2, name: '5 Hour - 100 KM' },
    { id: 3, name: '6 Hour - 60 KM' },
    { id: 4, name: '7 Hour - 150 KM' },
    { id: 5, name: '8 Hour - 80 KM' },
    { id: 6, name: '12 Hour - 180 KM' }
]
