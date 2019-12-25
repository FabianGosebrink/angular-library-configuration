// import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class LibConfiguration {
//   name: string;
// }

import { Injectable, Provider } from '@angular/core';

export interface LibToConfigureConfiguration {
  name: string;
}

@Injectable({ providedIn: 'root' })
export abstract class LibConfigurationProvider {
  abstract get config(): LibToConfigureConfiguration;
}

@Injectable({ providedIn: 'root' })
export class DefaultLibConfiguration extends LibConfigurationProvider {
  get config(): LibToConfigureConfiguration {
    // return default config
    return { name: `Fallback` };
  }
}

export class LibConfiguration {
  config?: Provider;
}
