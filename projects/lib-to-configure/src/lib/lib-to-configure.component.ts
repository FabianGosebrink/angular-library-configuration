import { Component, OnInit } from '@angular/core';
import { LibConfigurationProvider } from './config';

@Component({
  selector: 'lib-lib-to-configure',
  template: ` <p>{{ configurationProvider.config | json }}</p> `,
  styles: [],
})
export class LibToConfigureComponent implements OnInit {
  constructor(public configurationProvider: LibConfigurationProvider) {}

  ngOnInit() {
    console.log(this.configurationProvider.config);
  }
}
