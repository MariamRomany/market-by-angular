import { Component } from '@angular/core';
//import { trigger, transition, group, style , query, animate  } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //animations:[
    //trigger('router' ,[
      //transition(' 0 => 1 ' ,[
      // group([
        // query(':enter' ,[
          // style({
            // transform: 'translateX(100%)'
           // }),
          //  animate(500,style({
            //  transform: 'translateX(0)'
          //  }))
        // ]),
         //query(':leave' ,[
          //style({
            //transform: 'translateX(0)'
         //  }),
           //animate(500,style({
             //transform: 'translateX(-100%)'
          // }))
        //])
     //  ])
      //])
    //])
  //]
})
export class AppComponent {
  title = 'market';
  
}
