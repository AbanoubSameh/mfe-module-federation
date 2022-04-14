import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RemoteModule } from '../models/remote-spec';

@Injectable({
  providedIn: 'root'
})
export class RemoteModulesService {

  private importedRemoteModulesSubject = new BehaviorSubject<RemoteModule[]>(defaultImportedRemoteModules)

  get availableRemoteModules() {
    return allRemoteModules.filter(m => !this.importedModules.some(im => im.name === m.name))
  }
  get availableRemoteModules$() {
    return this.importedModules$.pipe(startWith(this.importedModules), map(importedModules => allRemoteModules.filter(m => !importedModules.some(im => im.name === m.name))))
  }
  get importedModules$() {
    return this.importedRemoteModulesSubject.asObservable();
  }
  get importedModules() {
    return this.importedRemoteModulesSubject.value;
  }
  constructor() { }

  importRemoteModule(remoteModule: RemoteModule) {
    if (remoteModule)
      this.importedRemoteModulesSubject.next([...this.importedModules, remoteModule])
  }

  removeRemoteModule(remoteModule: RemoteModule) {
    if (remoteModule)
      this.importedRemoteModulesSubject.next(this.importedModules.filter(im => im.name !== remoteModule.name))
  }
}


export const allRemoteModules = [
  {
    routePath: 'feature-a',
    displayName: 'MFE1 Feature A (remote)',
    remoteName: 'mfe1',
    remoteEntry: 'http://localhost:5000/remoteEntry.js',
    name: 'FeatureAModule',
  },
  {
    routePath: 'feature-b',
    displayName: 'MFE1 Feature B (remote)',
    remoteName: 'mfe1',
    remoteEntry: 'http://localhost:5000/remoteEntry.js',
    name: 'FeatureBModule',
  }
]


export const defaultImportedRemoteModules = [
  // {
  //   routePath: 'feature-a',
  //   displayName: 'Feature A (remote)',
  //   remoteName: 'mfe1',
  //   remoteEntry: 'http://localhost:5000/remoteEntry.js',
  //   name: 'FeatureAModule',
  // },
]