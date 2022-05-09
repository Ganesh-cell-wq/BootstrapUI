import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Shared/login/login.component';
import { SampleComponent } from './Shared/sample/sample.component';
import { VerticalSidebarComponent } from './Shared/vertical-sidebar/vertical-sidebar.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Sample',component:SampleComponent},
  {path:'side',component:VerticalSidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
