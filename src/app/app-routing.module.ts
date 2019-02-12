import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BegivenhederComponent } from './begivenheder/begivenheder.component';
import { LoginComponent } from './login/login.component';
import { OpretProfilComponent } from './opret-profil/opret-profil.component';
import { BegivenhedComponent } from './begivenhed/begivenhed.component';
import { OpretBegivenhedComponent } from './opret-begivenhed/opret-begivenhed.component';
import { OmOsComponent } from './om-os/om-os.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'begivenheder', component: BegivenhederComponent},
  {path: 'opret-profil', component: OpretProfilComponent},
  {path: 'begivenhed', component: BegivenhedComponent},
  {path: 'opret-begivenhed', component: OpretBegivenhedComponent},
  {path: 'om-os', component: OmOsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
