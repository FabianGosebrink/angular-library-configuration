import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  DefaultLibConfiguration,
  LibConfiguration,
  LibConfigurationProvider,
} from './config';
import { LibToConfigureComponent } from './lib-to-configure.component';

@NgModule({
  declarations: [LibToConfigureComponent],
  imports: [CommonModule],
  exports: [LibToConfigureComponent],
})
export class LibToConfigureModule {
  static forRoot(
    libModuleConfiguration: LibConfiguration = {}
  ): ModuleWithProviders<LibToConfigureModule> {
    return {
      ngModule: LibToConfigureModule,
      providers: [
        libModuleConfiguration.config || {
          provide: LibConfigurationProvider,
          useClass: DefaultLibConfiguration,
        },
      ],
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
