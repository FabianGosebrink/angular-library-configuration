import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  LibConfigurationProvider,
  LibToConfigureConfiguration,
  LibToConfigureModule
} from 'lib-to-configure';
import { AppComponent } from './app.component';

export class ConfigFromApp implements LibConfigurationProvider {
  get config(): LibToConfigureConfiguration {
    return { name: 'Fabian' };
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LibToConfigureModule.forRoot({
      config: {
        provide: LibConfigurationProvider,
        useClass: ConfigFromApp
      }
    })
    // LibToConfigureModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
