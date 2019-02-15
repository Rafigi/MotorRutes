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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'begivenheder', component: BegivenhederComponent, canActivate: [AuthGuard]},
  {path: 'opret-profil', component: OpretProfilComponent},
  {path: 'begivenhed', component: BegivenhedComponent, canActivate: [AuthGuard]},
  {path: 'opret-begivenhed', component: OpretBegivenhedComponent, canActivate: [AuthGuard]},
  {path: 'om-os', component: OmOsComponent},
  {path: 'mine-begivenheder', component: MineBegivenhederComponent, canActivate: [AuthGuard]},
  {path: 'tilmeldte-begivenheder', component: TilmeldteBegivenhederComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
