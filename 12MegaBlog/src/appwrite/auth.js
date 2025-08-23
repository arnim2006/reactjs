import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite';
// import { Client, Account, ID } from 'appwrite';: This line imports specific classes and objects from the appwrite SDK (Software Development Kit).
// Client: This class is used to initialize the Appwrite SDK and set up the connection to your Appwrite server.
// Account: This class provides methods for interacting with Appwrite's user authentication and account management features (e.g., creating accounts, logging in, getting user details).
// ID: This object contains static methods for generating unique IDs, which are often used when creating new resources in Appwrite (like user accounts or documents).


// export class AuthService : This declares a new JavaScript class named AuthService. The export keyword makes this class available for other files to import and use. This class is designed to be a single, cohesive unit for handling all authentication-related operations in your application. Using a class helps organize code, promotes reusability, and makes it easier to manage state and methods related to a specific domain (authentication in this case).
export class AuthService{         
    client = new Client();        // client = new Client();: This line declares a private instance variable named client within the AuthService class and immediately initializes it with a new instance of the Client class from the Appwrite SDK. This client instance will be used to configure the connection to your Appwrite backend.
    account;                      // account;: This line declares another private instance variable named account. It's not initialized immediately because it depends on the client being configured first, which happens in the constructor. This account instance will be used to perform all the user account-related operations.

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)            // This method on the client instance sets the API endpoint for your Appwrite server. It gets the URL from conf.appwriteUrl, which ultimately comes from your .env file
            .setProject(conf.appwriteProjectId);      // This method sets the Appwrite Project ID for the client. It gets the Project ID from conf.appwriteProjectId, also from your .env file. These two lines are crucial for telling your Appwrite SDK instance which Appwrite server and which specific project on that server to connect to.
        this.account = new Account(this.client);      // This line initializes the account instance variable. It creates a new instance of the Account class and passes the configured 'this.client' instance to it. This links your Account operations to your specific Appwrite project.
    }


    async createAccount({ email, password, name }) {
        try {
          const userAccount =  await this.account.create(         //this.account.create(...): This is an Appwrite SDK method to create a new user account.
                ID.unique(), // This generates a unique ID for the new user. Appwrite requires a unique ID for each user.
                email,       
                password,
                name
            );    

                if(userAccount){ // if useraccount was created successfully
                    // call another method 
                    return this.login({ email, password });
                // This will log in the user immediately after account creation
                }else{
                    return userAccount;   // If userAccount is somehow falsy (e.g., an error occurred but didn't throw, or Appwrite returned a specific falsy value on failure), it returns userAccount. This else block is a bit redundant if create always throws on error, but it acts as a safeguard.
                }

        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }



    async login({ email, password }) {
        try {
            const session = await this.account.createEmailSession(email, password);   //This is the core login operation. It uses the Appwrite SDK's 'createEmailSession' method to authenticate the user with their email and password. If successful, Appwrite creates a session (which essentially represents the logged-in state of the user).
            return session;    // if the login is successful, it returns the session object.
        } catch (error) {
            console.error('Error logging in:', error);   // ry-catch block: Similar to createAccount, this handles potential errors during the login process (e.g., incorrect credentials, network issues).
            throw error;
        }
    }


//This asynchronous method fetches details about the currently logged-in user.
    async getCurrentUser() {
        try {
            const user = await this.account.get();  // This calls Appwrite's account.get() method. If a user is currently logged in, this will return their user object. If no user is logged in, this method typically throws an error (e.g., "User not found" or "Unauthorized").
            return user; // If a user is found, their details are returned.
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
            await this.account.deleteSessions();  // : This is the core logout operation. It calls Appwrite's deleteSessions() method, which invalidates all active sessions for the current user. This effectively logs the user out from all devices.
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
}


}

const authService = new AuthService();

export default AuthService



// EXPLAINATION OF THE CREATE ACCOUNT METHOD :
// async createAccount({ email, password, name }) { ... }: This is an asynchronous method for creating a new user account. It takes an object as an argument, destructuring it to get email, password, and name.

// try { ... } catch (error) { ... }: This is a try-catch block, used for error handling. The code inside the try block is executed, and if any error occurs, the code inside the catch block is executed, preventing the application from crashing.

// const userAccount = await this.account.create(...): This is the core of account creation.

// await: Because this.account.create returns a Promise (it's an asynchronous operation communicating with the Appwrite server), await pauses the execution of this function until the Promise resolves or rejects.

// this.account.create(...): This is an Appwrite SDK method to create a new user account.

// ID.unique(): This generates a unique ID for the new user. Appwrite requires a unique ID for each user.

// email, password, name: These are the credentials and user details provided by the user.

// if(userAccount){ ... } else { ... }: This conditional checks if the userAccount was successfully created (meaning userAccount is not null or undefined).

// return this.login({ email, password });: If the account creation is successful, it immediately calls the login method (defined later) with the provided email and password. This is a common pattern: after a user signs up, you usually want to log them in automatically.

// return userAccount;: If userAccount is somehow falsy (e.g., an error occurred but didn't throw, or Appwrite returned a specific falsy value on failure), it returns userAccount. This else block is a bit redundant if create always throws on error, but it acts as a safeguard.

// console.error('Error creating account:', error);: If an error occurs during account creation, it logs the error to the console.

// throw error;: It re-throws the error. This is important because it allows the code calling createAccount to also catch and handle the error.