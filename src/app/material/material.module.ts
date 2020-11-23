import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';

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
