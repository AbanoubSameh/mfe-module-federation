import { loadRemoteEntry } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RemoteComponent } from '../../../core/models/remote-spec';

@Component({
  selector: 'app-remote-component-wrapper',
  templateUrl: './remote-component-wrapper.component.html',
  styleUrls: ['./remote-component-wrapper.component.scss']
})
export class RemoteComponentWrapperComponent implements OnInit {
  @ViewChild("RemoteComponent") remoteComponent: ViewContainerRef;
  private remoteComponentSpec: RemoteComponent;
  @Input('remoteComponentSpec') set setRemoteComponentSpec(remoteComponentSpec: RemoteComponent) {
    this.remoteComponentSpec = remoteComponentSpec;
    if (remoteComponentSpec) {
      this.loadRemoteComponent(remoteComponentSpec)
    }
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {

  }

  private async loadRemoteComponent(remoteComponentSpec: RemoteComponent) {
    await loadRemoteEntry(remoteComponentSpec.remoteEntry, remoteComponentSpec.remoteName)
    const moduleFactory = await window[remoteComponentSpec.remoteName].get(remoteComponentSpec.name);
    const Module = moduleFactory();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Module[remoteComponentSpec.name]);
    this.viewContainerRef.clear()
    let componentRef = this.viewContainerRef.createComponent(componentFactory)
    if (remoteComponentSpec.inputs) {
      Object.keys(remoteComponentSpec.inputs).forEach(k => componentRef.instance[k] = remoteComponentSpec.inputs[k])
    }
  }

}
