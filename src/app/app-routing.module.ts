import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BegivenhederComponent } from './begivenheder/begivenheder.component';
import { LoginComponent } from './login/login.component';
import { OpretProfilComponent } from './opret-profil/opret-profil.component';
import { BegivenhedComponent } from './begivenhed/begivenhed.component';
import { OpretBegivenhedComponent } from './opret-begivenhed/opret-begivenhed.component';
import { OmOsComponent } from './om-os/om-os.component';
import { MineBegivenhederComponent } from './mine-begivenheder/mine-begivenheder.component';
import { TilmeldteBegivenhederComponent } from './tilmeldte-begivenheder/tilmeldte-begivenheder.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'begivenheder', component: BegivenhederComponent},
  {path: 'opret-profil', component: OpretProfilComponent},
  {path: 'begivenhed', component: BegivenhedComponent},
  {path: 'opret-begivenhed', component: OpretBegivenhedComponent},
  {path: 'om-os', component: OmOsComponent},
  {path: 'mine-begivenheder', component: MineBegivenhederComponent},
  {path: 'tilmeldte-begivenheder', component: TilmeldteBegivenhederComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
