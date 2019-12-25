import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  DefaultLibConfiguration,
  LibConfiguration,
  LibConfigurationProvider
} from './lib-configuration';
import { LibToConfigureComponent } from './lib-to-configure.component';

@NgModule({
  declarations: [LibToConfigureComponent],
  imports: [CommonModule],
  exports: [LibToConfigureComponent]
})
export class LibToConfigureModule {
  // static configuration
  // static forRoot(configuration: LibConfiguration): ModuleWithProviders {
  //   return {
  //     ngModule: LibToConfigureModule,
  //     providers: [
  //       {
  //         provide: LibConfiguration,
  //         useValue: configuration
  //       }
  //     ]
  //   };
  // }

  static forRoot(libConfiguration: LibConfiguration = {}): ModuleWithProviders {
    return {
      ngModule: LibToConfigureModule,
      providers: [
        libConfiguration.config || {
          provide: LibConfigurationProvider,
          useClass: DefaultLibConfiguration
        }
      ]
    };
  }
}
