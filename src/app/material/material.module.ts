import { NgModule } from '@angular/core';
import {
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
} from '@angular/material';

const MATERIAL_COMPONENTS = [
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
];

@NgModule({
    imports: [MATERIAL_COMPONENTS],
    exports: [MATERIAL_COMPONENTS]
})
export class MaterialModule {}
