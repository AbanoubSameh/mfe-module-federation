export interface RemotesBaseCofig {
    name: string;
    displayName: string;
    remoteName: string;
    remoteEntry: string;
}
export interface RemoteComponent extends RemotesBaseCofig{
    inputs?:RemoteComponentInput
}
export interface RemoteModule extends RemotesBaseCofig {
    routePath: string
}

export interface RemoteComponentInput {
  [key:string]:any;
}