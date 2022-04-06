import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  closeResultat = '';


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any){
    this.modalService.open(content, {
      ariaDescribedBy: 'modal-basic-title'
    }).result.then((result) => {
      console.log(result);
      this.closeResultat = `Closed with: ${result}`;
    }, (reason) => {
      console.log(reason);
      this.closeResultat = `Dismiss ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
