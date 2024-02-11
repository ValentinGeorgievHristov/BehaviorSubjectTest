import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { SwapiDataService } from './swapi-data.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  swapiHero: any;

  constructor(
    private swapiDataService: SwapiDataService,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.swapiDataService.getSwapiData().subscribe(response => {
      this.swapiHero = response.name;
    })

  }

  fetchData() {
   this.dataService.getHero().subscribe(response => {
    if(response){
      this.swapiHero
      console.log(response);
    }else{
      console.log(this.swapiHero);
      this.dataService.setHero(this.swapiHero);
    }


   })



  }

}





// test = new Subject<string>()
//   behaviorTest = new BehaviorSubject<number>(1);
//   swapiHero = new BehaviorSubject<string>('')

//   constructor(private orderDataService: OrdersDataService) {
//     this.behaviorTest.next(111);
//     this.behaviorTest.next(222);
//     this.behaviorTest.next(333);
//     this.behaviorTest.subscribe(x => {
//       console.log(x);
//     })

//     this.behaviorTest.next(444);
//     this.behaviorTest.next(555);
//   }

//   ngOnInit(): void {
//     if (!this.swapiHero) {
//       console.log('bro =>' + this.swapiHero);

//     }else{
//       this.orderDataService.getSwapiData().subscribe(x => {
//         console.log(x.name);
//         this.swapiHero.next(x.name);
//       })
//     }
// // ------------------------------------

//     this.test.next('Malka zelka')
//     this.test.subscribe(x => {
//       console.log(x);
//     })
//     this.test.next('Zele')
//   }