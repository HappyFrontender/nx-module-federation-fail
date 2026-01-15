import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

export default async function (wco) {
  const wmf = await withModuleFederation(config, { dts: false });
  const options = wmf(wco);

  if (options.optimization) {
    options.optimization = {
      ...options.optimization,
      concatenateModules: false,
    };
  }

  return options;
}
