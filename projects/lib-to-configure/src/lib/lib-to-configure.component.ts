import { Component, OnInit } from '@angular/core';
import { LibConfigurationProvider } from './lib-configuration';

@Component({
  selector: 'lib-libToConfigure',
  template: `
    <p>
      lib-to-configure works! Hello Furiend
    </p>
  `,
  styles: []
})
export class LibToConfigureComponent implements OnInit {
  constructor(public configuration: LibConfigurationProvider) {}

  ngOnInit() {
    console.log(this.configuration.config);
  }
}
