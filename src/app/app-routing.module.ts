import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeviceComponent} from "./pages/device/device.component";
import {AuthGuard} from "./services/guard/auth.guard";

const routes: Routes = [

  {
    path: '',
    component: DeviceComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule {
}
