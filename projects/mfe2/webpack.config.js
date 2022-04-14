const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "mfe2_shared_components",
        filename: "remoteEntry.js",
        exposes: {
          'HeaderComponent': __dirname + '/src/app/core/components/header/header.component.ts',
        },        
        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    new ModuleFederationPlugin({
      name: "mfe2_widgets",
      filename: "widgetsRemoteEntry.js",
      exposes: {
        'SalesWidgetComponent': __dirname + '/src/app/widgets/sales-widget/sales-widget.component.ts',
        'ProductionWidgetComponent': __dirname + '/src/app/widgets/production-widget/production-widget.component.ts',
        'CapacityWidgetComponent': __dirname + '/src/app/widgets/capacity-widget/capacity-widget.component.ts',
      },        
      shared: {
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true }, 
        "@angular/router": { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors()
      }
      
  }),
    sharedMappings.getPlugin(),
  ],
};
