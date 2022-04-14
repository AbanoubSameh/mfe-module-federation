import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RemoteComponent } from '../../../core/models/remote-spec';
import { RemoteComponentsService } from '../../../core/services/remote-components.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private importedWidgetsSubject = new BehaviorSubject<RemoteComponent[]>([])
  get importedWidgets(){
    return this.importedWidgetsSubject.value;
  }
  get importedWidgets$(){
    return this.importedWidgetsSubject.asObservable();
  }
  constructor(public remoteComponentsService: RemoteComponentsService) { }

  ngOnInit(): void {
  }

  addWidget(widgetName: string) {
    this.remoteComponentsService.remoteHeaderComponentSpec
    let widget = this.remoteComponentsService.availableWidgets.find(x => x.name === widgetName)
    this.importedWidgetsSubject.next([...this.importedWidgets,widget])
  }

}
