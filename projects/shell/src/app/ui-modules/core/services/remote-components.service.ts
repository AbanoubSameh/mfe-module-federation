import { Injectable } from '@angular/core';
import { RemoteComponent } from '../models/remote-spec';

@Injectable({
    providedIn: 'root'
})
export class RemoteComponentsService {

    get remoteHeaderComponentSpec(): RemoteComponent {
        return allRemoteComponents[0];
    }
    get availableWidgets(): RemoteComponent[] {
        return allRemoteComponents.filter(x => x.remoteName === 'mfe2_widgets')
    }
    constructor() { }
}


export const allRemoteComponents: RemoteComponent[] = [
    {
        name: 'HeaderComponent',
        remoteName: 'mfe2_shared_components',
        remoteEntry: 'http://localhost:5200/remoteEntry.js',
        displayName: 'Header Component',
        inputs: {
            title: 'Shell',
        },
    },
    {
        name: 'SalesWidgetComponent',
        remoteName: 'mfe2_widgets',
        remoteEntry: 'http://localhost:5200/widgetsRemoteEntry.js',
        displayName: 'Sales Widget',
    },
    {
        name: 'ProductionWidgetComponent',
        remoteName: 'mfe2_widgets',
        remoteEntry: 'http://localhost:5200/widgetsRemoteEntry.js',
        displayName: 'Production Widget',
    },
    {
        name: 'CapacityWidgetComponent',
        remoteName: 'mfe2_widgets',
        remoteEntry: 'http://localhost:5200/widgetsRemoteEntry.js',
        displayName: 'Capacity Widget',
    }
]