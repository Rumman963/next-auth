import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
    providers:[
        CredentialsProvider ({
            name:"login with email",
            credentials:{
                username:{label:"Username" , type:"text" , placeholder:"rumman@gmail.com" },
                password:{label:"Password" , type:"password"}
            },

            async authorize(credentials , req){
                const username = credentials?.username;
                const password = credentials?.password;



                const user = {
                    name:"Rumman",
                    id:"1",
                    username:"rumman1@gmail.com"
                }

                if(user){
                    return user;
                } else{
                    return null
                }



            }
        }),

        GoogleProvider({
            clientId:"asd",
            clientSecret:"Asd"

        }),

        GithubProvider({
            clientId:"asd",
            clientSecret:"ads"
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export {handler as GET , handler as POST}