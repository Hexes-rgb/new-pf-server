import { DecodedToken } from "./decodedToken";


declare global {
    namespace Express {
        interface Request {
            user?: DecodedToken['user'];
        }
    }
}
