export interface LoginResult {
    acessToken: string;
    expiresIn: number;
    userToken: {
        id: string;
        email: string;
        claims: Claims[];
    };
    refreshToken: string;
}

export interface Claims {
    value: string;
    type: string;
}
