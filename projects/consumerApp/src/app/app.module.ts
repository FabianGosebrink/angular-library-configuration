import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  LibConfigurationProvider,
  LibToConfigureConfiguration,
  LibToConfigureModule
} from 'lib-to-configure';
import { AppComponent } from './app.component';

@Injectable({ providedIn: 'root' })
export class ConfigurationStore {
  private internalConfig: LibToConfigureConfiguration;

  setConfig(config: LibToConfigureConfiguration) {
    this.internalConfig = config;
  }

  getConfig() {
    return this.internalConfig;
  }
}

@Injectable({ providedIn: 'root' })
export class ConfigFromApp implements LibConfigurationProvider {
  constructor(private configStore: ConfigurationStore) {}

  get config(): LibToConfigureConfiguration {
    return this.configStore.getConfig();
  }
}

export function initApp(configurationStore: ConfigurationStore) {
  return () => {
    return new Promise(resolve => {
      setTimeout(() => {
        configurationStore.setConfig({ name: 'Fabian' });
        resolve();
      }, 2000);
    });
  };
}

export function initAppWithHttp(
  configurationStore: ConfigurationStore,
  httpClient: HttpClient
) {
  return () => {
    return httpClient
      .get('https://my-super-url-to-get-the-config-from')
      .toPromise()
      .then(config => {
        configurationStore.setConfig(config);
      });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LibToConfigureModule.forRoot({
      config: {
        provide: LibConfigurationProvider,
        useClass: ConfigFromApp
      }
    })
    // LibToConfigureModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [ConfigurationStore, HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
