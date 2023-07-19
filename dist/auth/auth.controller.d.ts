import { Request } from 'express';
export declare class AuthController {
    handleLogin(): {
        msg: string;
    };
    handleRedirect(): {
        msg: string;
    };
    user(request: Request): {
        msg: string;
    };
}
