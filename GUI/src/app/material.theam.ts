import {NgModule} from '@angular/core';

//Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    //import Components for GUI
    imports:[

        MatToolbarModule,
        MatIconModule

    ],


    exports:[

        MatToolbarModule,
        MatIconModule

    ]


})
export class MatModule{}
        