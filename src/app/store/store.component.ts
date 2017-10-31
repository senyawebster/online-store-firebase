import { Component, OnInit } from '@angular/core';
import { Store} from '../store.model';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [StoreService]
})
export class StoreComponent implements OnInit {
  stores: Store[];

  constructor(private router: Router, private storeService: StoreService) { }


  ngOnInit() {
    this.stores = this.storeService.getStores();
  }

  goToDetailPage(clickedStore: Store) {
    this.router.navigate(['stores', clickedStore.id])
  }
}
