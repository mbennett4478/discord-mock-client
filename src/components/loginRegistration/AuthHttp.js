import BaseHttp from '../common/BaseHttp';

export default class AuthHttp {
    static async login(email, password) {
        try {
            const user = await BaseHttp.post('/sign-in', { email, password });
            return user;
        } catch(error) {
            console.error(error);
        }
    }
}