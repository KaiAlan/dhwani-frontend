
/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/auth/new-verification",
    '/auth/register',
]

/**
 * An array of routes that are use for Authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */

export const authRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/error',
    '/auth/reset',
    '/auth/new-password',
]

/**
 * The prefix for API authentication routes
 * Routes that start with this predix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth';

/**
 * The prefix for API Stripe Webhook routes
 * Routes that start with this predix are used for Stripe Webhook purposes
 * @type {string}
 */

export const apiStripeWebhook = '/api/webhook';

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_ROUTE = '/profile';