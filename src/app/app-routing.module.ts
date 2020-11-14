import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table-palyer/table.component';


const routes: Routes = [
  //** means whatever you enter/
  // 'anything' you have to put here must type at the end of url.
  {path:'**', component: TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
