import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataPosts:any;

  constructor(private swUpdate: SwUpdate, private data:DataService) {
  }

  ngOnInit() {
      // Jika Ada Update akan men trigger ini
      if (this.swUpdate.isEnabled) {

          this.swUpdate.available.subscribe(() => {

              if(confirm("New version available. Load New Version?")) {

                  window.location.reload();
              }
          });
      }        
      
      // ngambil data api
      this.data.posts().subscribe(res => {
        this.dataPosts = res;
      })
  }
}
