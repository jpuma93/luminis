import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMembershipPage } from './pages/list-membership/list-membership.page';

const routes: Routes = [{ path: '', component: ListMembershipPage }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembershipRoutingModule {}
