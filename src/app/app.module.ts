import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
