
export const appName: string = 'Redivendor'
export const baseURL = process.env.NODE_ENV == "production" ? "https://api.domain.com" : "http://localhost:3027";
export const apiURL: string = process.env.NODE_ENV == "production" ? "https://api.domain.com" : "https://redicabs.nextweblab.com";
export const openingHours = [
    { id: 1, name: '1 AM - 12 PM' },
    { id: 2, name: '1 AM - 12 PM' },
    { id: 3, name: '1 AM - 12 PM' },
    { id: 4, name: '1 AM - 12 PM' },
    { id: 5, name: '1 AM - 12 PM' },
    { id: 6, name: '1 AM - 12 PM' }
]
