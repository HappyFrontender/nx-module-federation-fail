import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
  { 
    path: '', 
    component: RemoteEntry,
    children: [
      {
        path: 'feature-a',
        loadComponent: () => import('@nx-temp/feature-a').then(m => m.FeatureA)
      },
      {
        path: 'feature-b',
        loadComponent: () => import('@nx-temp/feature-b').then(m => m.FeatureB)
      }
    ]
  }
];
