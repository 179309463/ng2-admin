import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme/configProvider';
import {colorHelper} from '../../../theme/constants';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'New Visits',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Purchases',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Returned',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
