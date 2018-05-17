import { Component, OnInit } from '@angular/core';
import { Batch } from '../model/batch';
import { BatchService } from '../services/batch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  batches:Batch[];
  constructor(private batchService:BatchService) { }

  ngOnInit() {
    this.getUpcomingBatches();
  }

  getUpcomingBatches(){
    
    this.batchService.getUpcomingBatches()
            .subscribe((data)=>{
              console.log(data)
              this.batches=data
              console.log(this.batches)
            })
  }

}
