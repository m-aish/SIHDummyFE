import { Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { ApplyComponent } from './apply/apply.component';

export const routes: Routes = [
    {path:'home', component: DisplayComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'add', component: FormComponent},
    {path: 'apply', component: ApplyComponent}
]