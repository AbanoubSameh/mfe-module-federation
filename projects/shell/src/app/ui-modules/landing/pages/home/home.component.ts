import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteModule } from '../../../core/models/remote-spec';
import { RemoteModulesService } from '../../../core/services/remote-modules.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  availableRemoteModules$:Observable<RemoteModule[]>
  importedModules$:Observable<RemoteModule[]>
  constructor(public remoteModulesService:RemoteModulesService) { }

  ngOnInit(): void {
    this.importedModules$ = this.remoteModulesService.importedModules$;
    this.availableRemoteModules$ = this.remoteModulesService.availableRemoteModules$;
  }

}
