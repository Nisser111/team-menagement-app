import { Component, Inject, Input } from "@angular/core";
import { MatHint, MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogConfig,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";

@Component({
  selector: "app-add-edit-teams-modal",
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatHint,
    MatDialogTitle,
  ],
  templateUrl: "./add-edit-teams-modal.template.html",
  styleUrls: ["./add-edit-teams-modal.scss"],
})
export class AddEditTeamsModalComponent {
  errorMessage: string | null = null;
  constructor(
    public dialogRef: MatDialogRef<AddEditTeamsModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { dialogTitle: string; oldName: string }
  ) {
    // Set the minimum width of the dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = "330px"; // Set minimum width here
    this.dialogRef.updateSize(dialogConfig.minWidth);
  }

  // Close the dialog and return true
  onConfirm(e: Event): void {
    e.preventDefault();
    const newName = (document.getElementById("newName") as HTMLInputElement)
      .value;

    // Validate the length of newName
    if (newName.length < 2 || newName.length > 50) {
      // Show error message
      this.errorMessage = "Nazwa musi mieć od 2 do 50 znaków.";
      return;
    }

    this.dialogRef.close({
      confirmed: true,
      newName: newName,
    });
  }

  // Close the dialog and return false
  onCancel(): void {
    this.dialogRef.close({
      confirmed: false,
      newName: "null",
    });
  }
}
