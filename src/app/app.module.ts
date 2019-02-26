import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { BegivenhederComponent } from './begivenheder/begivenheder.component';
import { OpretProfilComponent } from './opret-profil/opret-profil.component';
import { BegivenhedComponent } from './begivenhed/begivenhed.component';
import { OpretBegivenhedComponent } from './opret-begivenhed/opret-begivenhed.component';
import { OmOsComponent } from './om-os/om-os.component';
import { MineBegivenhederComponent } from './mine-begivenheder/mine-begivenheder.component';
import { TilmeldteBegivenhederComponent } from './tilmeldte-begivenheder/tilmeldte-begivenheder.component';
import { UsersService } from './users.service';
import { AuthGuard } from './auth.guard';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
<<<<<<< HEAD
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { OpretRuteComponent } from './opret-rute/opret-rute.component';
import { BegivenhedService } from './begivenhed.service';
=======
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
<<<<<<< HEAD
import { OpretRuteComponent } from './opret-rute/opret-rute.component';
=======
import { BegivenhedService } from './begivenhed.service';
>>>>>>> origin/DelevopmentBranch
>>>>>>> c3618ee3351855291db6dff37391d589496e0350

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    BegivenhederComponent,
    OpretProfilComponent,
    BegivenhedComponent,
    OpretBegivenhedComponent,
    OmOsComponent,
    MineBegivenhederComponent,
    TilmeldteBegivenhederComponent,
    OpretRuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBM4dBYGewehvlFZyudquC5fQnPmxoblhc',
      libraries: ['places', 'geometry']
    }),
    AgmDirectionModule,
    GooglePlaceModule
  ],
  providers: [BegivenhedService, UsersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
