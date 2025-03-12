import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  uid: number = 0;
  ulist: any = {};
  res: string = "";

  constructor(public cs: CrudService, public act: ActivatedRoute) {
    this.act.params.subscribe(params => {
      this.uid = params['id']; 
      this.fetchSingleUser(this.uid);
    });
  }

  fetchSingleUser(did: number) {
    this.cs.getSingleUser(did).subscribe(res => {
      this.ulist = res;
    });
  }

  updateInfo(i: number, d: any) {
    this.cs.updateUser(i, d).subscribe(() => {
      this.res = "Updated Successfully";
    });
  }
}
