import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {MainComponent} from './main/main.component';
import {CreateComponent} from './create/create.component';
import {LoginComponent} from './login/login.component';
import {ExampleComponent} from './example/example.component';

const routes: Routes = [
  {path : '', component : MainComponent},
  {path : 'about', component : AboutComponent},
  {path : 'create', component : CreateComponent},
  {path : 'login', component : LoginComponent},
  {path : 'examples', component : ExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
