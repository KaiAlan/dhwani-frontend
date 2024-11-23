'use server'

import { AuthRegisterApiResponseType, SignupSchemaType } from "@/schema/auth-schema";

const baseUrl = process.env.BACKEND_URL ?? 'http://localhost:5842'

export async function register(values: SignupSchemaType) {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values)
    };
    try {
        const response = await fetch(`${baseUrl}/users/register`, options)
        const data: AuthRegisterApiResponseType = await response.json()
        if (response.status === 200 && data.success && data.data) {
            
            return {
                success: true,
                message: data.message,
                user: data.data.user,
            }
        } else {
            return { success: false, message: data.message || 'Login failed' }
        }


    } catch (error) {
        console.error('Login Error:', error)
        // Use a type guard to check if error is an instance of Error
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
        return { success: false, message: errorMessage }
    }
}