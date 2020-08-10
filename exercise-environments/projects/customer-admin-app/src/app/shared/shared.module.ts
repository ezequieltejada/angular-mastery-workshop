import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CoinFormatPipe } from './coin/coin-format.pipe';
import { CoinDirective } from './coin/coin.directive';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [CoinFormatPipe, CoinDirective, ConfirmDialogComponent, TagListComponent],
  imports: [
    // angular
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    // material
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    // angular
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    // material
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,

    // local
    CoinFormatPipe,
    CoinDirective,
    TagListComponent,
  ],
  entryComponents: [ConfirmDialogComponent],
})
export class SharedModule {}
