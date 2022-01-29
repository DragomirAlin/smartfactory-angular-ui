import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeviceComponent} from "./pages/device/device.component";
import {AuthGuard} from "./services/guard/auth.guard";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [

  {
    path: 'device',
    component: DeviceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
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
