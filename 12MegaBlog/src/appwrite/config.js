import conf from '../conf/conf.js'
import { Client, ID ,Databases,Storage,Query} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;
    // This is the constructor function that runs when you create a new instance of Service.
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , slug , content , featuredImage, status, userId}){
 
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }


     async updatePost(slug , {title  , content , featuredImage, status}){

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.error("Appwrite service :: updatePost :: error", error);
        }

     }

     async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true; 
        } catch (error) {
            console.error("Appwrite service :: deletePost :: error", error);
            return false;
        }
     }

    // to get a single post by slug
     async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.error("Appwrite service :: getPost :: error", error);
            return null;
        }
     }



        // to get all posts with optional search and status filters
        // aur saari post vahi honi chaiye jinka status active hai 
        async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
    
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }



    // file upload service

    async uploadFile(file){  // () iske andar file ka name nahi ayega balki uska blob ayega 
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){ // fileId is the unique ID of the file to be deleted
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
     
}



const service = new Service();
export default service;