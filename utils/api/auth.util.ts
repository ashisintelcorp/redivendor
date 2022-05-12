import { AxiosRequestConfig } from "axios";
import { store } from "state/store";

export function CalculateTokenExpiryTime(expiresInSeconds: number): number {
    return GetSafeExpiryMillis(expiresInSeconds) + new Date().getTime();
}

function GetSafeExpiryMillis(expiresInSeconds: number): number {
    const TokenExpiryBufferMillis = 300000; // 5 minutes
    const defaultExpiryMillis = expiresInSeconds * 1000;

    // don't allow expiry to be less than 5 minutes
    if (defaultExpiryMillis < TokenExpiryBufferMillis) {
        return defaultExpiryMillis;
    }

    return defaultExpiryMillis - TokenExpiryBufferMillis;
}

export async function GetAuthorizationHeader(config: AxiosRequestConfig) {
    let accessToken = store.getState().user.accessToken;
    if (accessToken !== "") {
        config = {
            ...config,
            headers: { ...config.headers, Authorization: `${accessToken}` },
        };
    }

    return config;
}

export function IsExpired(expiresAt: number): boolean {
    return new Date().getTime() > expiresAt;
}