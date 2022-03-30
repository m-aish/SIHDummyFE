import { Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { ApplyComponent } from './apply/apply.component';
import { DisplaynotverifiedComponent } from './displaynotverified/displaynotverified.component';
export const routes: Routes = [
    {path:'home', component: DisplayComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'add', component : FormComponent},
    {path: 'apply', component: ApplyComponent},
    {path: 'verify', component: DisplaynotverifiedComponent}
]