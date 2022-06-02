export const appName: string = 'RediCabs'
export const baseURL = process.env.NODE_ENV == "production" ? "https://api.domain.com" : "http://localhost:3027";
export const apiURL: string = process.env.NODE_ENV == "production" ? "https://api.domain.com" : "https://redicabs.nextweblab.com";