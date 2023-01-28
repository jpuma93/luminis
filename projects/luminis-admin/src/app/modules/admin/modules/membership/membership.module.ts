import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { ListMembershipPage } from './pages/list-membership/list-membership.page';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [ListMembershipPage],
    imports: [CommonModule, MembershipRoutingModule, SharedModule]
})
export class MembershipModule {}
