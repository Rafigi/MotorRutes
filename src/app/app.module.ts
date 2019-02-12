import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    TilmeldteBegivenhederComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
