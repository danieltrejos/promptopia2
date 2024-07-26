import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

/* console.log({
            clientId: process.env.GOOGLE_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }) */

const handler = NextAuth( { 
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // ...add more providers here
    ],
    
    // FUNCIONES PARA MENJERA SESIONES
    async session ( { session }) {},
    
    // FUNCIONES PARA MANEJAR signIn
    async signIn ( { profile }) {},

})

export {handler as GET, handler as POST};