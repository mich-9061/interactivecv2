import { configureAuth } from '@hilla/react-auth';
import { SecurityService } from 'Frontend/generated/endpoints';

// Configure auth to use `SecurityService.getAuthenticatedUser`
const auth = configureAuth(SecurityService.getAuthenticatedUser);

// Export auth provider and useAuth hook, which are automatically
// typed to the result of `SecurityService.getAuthenticatedUser`
export const useAuth = auth.useAuth;
export const AuthProvider = auth.AuthProvider;