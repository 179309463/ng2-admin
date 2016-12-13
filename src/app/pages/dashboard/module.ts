import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './component';
import { routing }       from './routing';

import { PopularApp } from './popularApp/component';
import { PieChart } from './pieChart/component';
import { TrafficChart } from './trafficChart/component';
import { UsersMap } from './usersMap/component';
import { LineChart } from './lineChart/component';
import { Feed } from './feed/component';
import { Todo } from './todo/component';
import { Calendar } from './calendar/component';

import { CalendarService } from './calendar/service';
import { FeedService } from './feed/service';
import { LineChartService } from './lineChart/service';
import { PieChartService } from './pieChart/service';
import { TodoService } from './todo/service';
import { TrafficChartService } from './trafficChart/service';
import { UsersMapService } from './usersMap/service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService
  ]
})
export default class DashboardModule {}
