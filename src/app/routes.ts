import { Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { ApplyComponent } from './apply/apply.component';
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import { DisplaynotverifiedComponent } from './displaynotverified/displaynotverified.component';
import { FormgenerateComponent } from './formgenerate/formgenerate.component';
export const routes: Routes = [
    {path:'home', component: DisplayComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'add', component: FormComponent},
    {path: 'verifyuser',component: VerifyuserComponent},
    {path: 'apply', component: ApplyComponent},
    {path: 'generate', component: FormgenerateComponent},
    {path: 'verify', component: DisplaynotverifiedComponent}
]