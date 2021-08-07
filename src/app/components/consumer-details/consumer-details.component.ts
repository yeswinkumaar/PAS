import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent implements OnInit {
  public consumerId = '';
  constructor() { }

  ngOnInit(): void {
  }
  getDetails(id: string){

  }
  updateDetails(id: string){
    
  }
}
