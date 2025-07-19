import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite';
export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
          const userAccount =  await this.account.create(
                ID.unique(), // Generates a unique user ID
                email,
                password,
                name
            );    

                if(userAccount){
                    // call another method 
                    return this.login({ email, password });
                // This will log in the user immediately after account creation
                }else{
                    return userAccount;
                }

        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }


    async login({ email, password }) {
        try {
            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } 
        // out concern is that hamne vo case idhar check nahi kia ki jab hame account mila hee nahi toh ?   .. 'catch' jo kar raha hai vo toh uske liye hai ki agar hamne account banaya hi nahi toh us case me kya hoga  , so we may use if else loop or the more easier way is to return null if user is not logged in
        catch (error) {      // Handle errors, e.g., user not logged in , basically ham reach out hee nahi kar paaye service ko 
            console.error('Error fetching current user:', error);
            throw error;
        }

        return null; 
    }


    async logout() {
        try {
            await this.account.deleteSessions(); 
           
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
}


}

const authService = new AuthService();

export default AuthService
