import { Component, OnInit, Input } from '@angular/core';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
@Input('data') data
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(){
    const modelRef = this.modalService.open(MyModalComponent)
    modelRef.componentInstance.name = this.data.type;
  }

}
