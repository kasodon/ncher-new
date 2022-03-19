import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
      onSameUrlNavigation: 'reload'
    }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
