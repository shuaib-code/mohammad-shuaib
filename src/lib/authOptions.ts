import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials): Promise<{ id: string; name: string; email: string } | null> {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Missing credentials');
                }

                const validEmail = process.env.AUTH_EMAIL;
                const validPassword = process.env.AUTH_PASSWORD;

                if (!validEmail || !validPassword) {
                    throw new Error('Server misconfiguration');
                }

                if (credentials.email !== validEmail || credentials.password !== validPassword) {
                    throw new Error('Invalid credentials');
                }

                return { id: '1', name: 'Admin', email: validEmail };
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/login',
        error: '/error'
    }
};
