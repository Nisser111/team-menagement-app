import { Component, Output, EventEmitter } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-team-menu-button",
  imports: [MatIcon, MatIconButton, MatMenu, MatMenuItem, MatMenuTrigger],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Menu">
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="onRename()">Zmień nazwę</button>
      <button mat-menu-item (click)="onDelete()" class="delete-menu-item">
        Usuń
      </button>
    </mat-menu>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: inline-block;
      }

      button {
        mat-icon {
          color: rgba(0, 0, 0, 0.4);
        }
      }

      .delete-menu-item {
        color: #c51e3a;
      }
    `,
  ],
})
export class TeamMenuButtonComponent {
  @Output() rename = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onRename() {
    this.rename.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}