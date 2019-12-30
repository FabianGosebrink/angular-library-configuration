import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  LibConfiguration,
  LibConfigurationProvider,
  DefaultLibConfiguration
} from './lib-configuration';
import { LibToConfigureComponent } from './lib-to-configure.component';

@NgModule({
  declarations: [LibToConfigureComponent],
  imports: [CommonModule],
  exports: [LibToConfigureComponent]
})
export class LibToConfigureModule {
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

  // static forRoot(
  //   libConfiguration: LibToConfigureConfiguration
  // ): ModuleWithProviders {
  //   return {
  //     ngModule: LibToConfigureModule,
  //     providers: [
  //       {
  //         provide: LibToConfigureConfiguration,
  //         useValue: libConfiguration
  //       }
  //     ]
  //   };
  // }
}
