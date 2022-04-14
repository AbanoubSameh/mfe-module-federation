import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { RemoteComponent, RemoteModule } from '../../models/remote-spec';
import { RemoteComponentsService } from '../../services/remote-components.service';
import { RemoteModulesService } from '../../services/remote-modules.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  importedModules$: Observable<RemoteModule[]>
  headerComponentSpec$: Observable<RemoteComponent>;
  constructor(public remoteComponentsService: RemoteComponentsService,
    public remoteModulesService: RemoteModulesService) { }

  ngOnInit(): void {
    this.importedModules$ = this.remoteModulesService.importedModules$;
    this.headerComponentSpec$ = this.importedModules$.pipe(map(imported => {
      let headerInitialSpec = this.remoteComponentsService.remoteHeaderComponentSpec
      return Object.assign({}, headerInitialSpec, {
        inputs: {
          ...headerInitialSpec.inputs, menuItems: [
            {
              title: 'Dashboard',
              routerLink: 'dashboard'
            },
            {
              title: 'Home',
              routerLink: 'home'
            },
            ...imported.map(im => ({ title: im.displayName, routerLink: im.routePath }))]
        }
      })
    }))
  }

}