import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnChanges {

  profileForm: FormGroup;

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      title: [''],
      description: [''],
      ingredients: [''],
      cookingTime: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "changes in dialog")
    console.log(this.visible, "visible prop in dialog")
  }

  @Input() recipe: any;
  @Input() CreateNew: any; // Data passed from the parent component
  @Input() visible: boolean = false; // Dialog visibility control
  @Output() visibleChange = new EventEmitter<boolean>(); // Event to notify parent about visibility changes

  save() {
    // Handle save logic
    if (this.CreateNew) {
      this.recipeService.CrearteRecipes(this.profileForm.value).subscribe(res => {
      })
    } else {
      console.log('Form Data:', this.profileForm.value);
      this.recipeService.UpdateRecipesById(this.recipe.id, this.profileForm.value).subscribe(res => {
      })
    }

    this.closeDialog();
  }

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(false); // Notify parent to hide the dialog

  }


  cancel() {
    this.visibleChange.emit(false);
    this.visible = false;
  }


}
