import { Routes } from '@angular/router';
import { DigimonsComponent } from './pages/digimons/digimons.component';

export const routes: Routes = [
    // { path: '/', component: DigimonsComponent },
    { 
        path: 'digimons', 
        // component: DigimonsComponent 
        loadComponent: () => import('./pages/digimons/digimons.component').then(c => c.DigimonsComponent)
    },
    { path: '',   redirectTo: '/digimons', pathMatch: 'full' }, // redirect to `first-component`
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
