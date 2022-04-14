import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnDestroy } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from './app-routing.module';
import { RemoteModule } from './ui-modules/core/models/remote-spec';
import { RemoteModulesService } from './ui-modules/core/services/remote-modules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'shell';
  subscriptions: Subscription[] = []
  constructor(private router: Router, private remoteModulesService: RemoteModulesService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.remoteModulesService.importedModules$.subscribe(x => {
        this.buildRoutes(x)
      }));
  }


  private buildRoutes(microFrontEnds: RemoteModule[]) {
    const externalRoutes: Routes = microFrontEnds.map(o => {
      let remoteModule = Object.assign({}, o, { exposedModule: o.name })
      return ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(remoteModule).then(m => m[o.name])
      })
    });

    // Add external Modules as children to the main route
    //TODO: enhance the way of loading children under the main application layout
    APP_ROUTES[0].children = [...APP_ROUTES[0].children, ...externalRoutes]
    this.router.resetConfig([...APP_ROUTES]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
