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
  TagModule
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
