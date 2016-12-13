import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BaThemeConfig } from './config';

import { BaThemeConfigProvider } from './configProvider';

import { BaAmChart }         from './components/baAmChart/component';
import { BaBackTop }         from './components/baBackTop/component';
import { BaCard }            from './components/baCard/component';
import { BaChartistChart }   from './components/baChartistChart/component';
import { BaCheckbox }        from './components/baCheckbox/component';
import { BaContentTop }      from './components/baContentTop/component';
import { BaFullCalendar }    from './components/baFullCalendar/component';
import { BaMenuItem }        from './components/baMenuItem/component';
import { BaMenu }            from './components/BaMenu/component';
import { BaMsgCenter }       from './components/BaMsgCenter/component';
import { BaMultiCheckbox }   from './components/baMultiCheckbox/component';
import { BaPageTop }         from './components/baPageTop/component';
import { BaPictureUploader } from './components/baPictureUploader/component';
import { BaSidebar }         from './components/baSidebar/component';

import { BaCardBlur }        from './components/baCard/directive';

import { BaScrollPosition }  from './directives/baScrollPosition';
import { BaSlimScroll }      from './directives/baSlimScroll';
import { BaThemeRun }        from './directives/baThemeRun';

import { BaAppPicturePipe }      from './pipes/baAppPicture';
import { BaKameleonPicturePipe } from './pipes/baKameleonPicture';
import { BaProfilePicturePipe }  from './pipes/baProfilePicture';

import { BaImageLoaderService } from './services/baImageLoader';
import { BaThemePreloader }     from './services/baThemePreloader';
import { BaThemeSpinner }       from './services/baThemeSpinner';
 
import { EmailValidator }           from './validators/email.validator';
import { EqualPasswordsValidator }  from './validators/equalPasswords.validator';
  


const NGA_COMPONENTS = [
  BaAmChart,
  BaBackTop,
  BaCard,
  BaChartistChart,
  BaCheckbox,
  BaContentTop,
  BaFullCalendar,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaPictureUploader,
  BaSidebar
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BaCardBlur
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
