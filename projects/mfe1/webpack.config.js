const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfe1"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        'FeatureAModule': __dirname + '/src/app/ui-modules/feature-a/feature-a.module.ts',
        'FeatureBModule': __dirname + '/src/app/ui-modules/feature-b/feature-b.module.ts'
        // exposed components and modules
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
