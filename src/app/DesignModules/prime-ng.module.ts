import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {TooltipModule} from 'primeng/tooltip';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TagModule} from 'primeng/tag';
import {SpeedDialModule} from 'primeng/speeddial';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from "primeng/card";
const primeNgModule = [
  ButtonModule,
  ToastModule,
  TableModule,
  InputTextModule,
  ScrollTopModule,
  SelectButtonModule,
  PanelModule,
  MenuModule,
  TooltipModule,
  OverlayPanelModule,
  TagModule,
  SpeedDialModule,
  TimelineModule,
  CardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primeNgModule
  ],
  exports: [
    primeNgModule
  ]
})
export class PrimeNgModule {
}
