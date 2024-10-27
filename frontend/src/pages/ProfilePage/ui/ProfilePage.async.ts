import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // for test
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));