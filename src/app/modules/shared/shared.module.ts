import { NgModule } from '@angular/core';
// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Librerie Terze Parti
import { NgxPageScrollModule } from 'ngx-page-scroll';

// Miei Componenti, Direttive, Pipe
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { IsLoggedDirective } from './directives/is-logged.directive';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    IsLoggedDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxPageScrollModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
