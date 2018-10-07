import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredien.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editeItemIndex: number;
  editMode = false;
  editedItem: Ingredient;

  //  @ViewChild('nameInput') nameInputRef : ElementRef<HTMLInputElement>;
  //  @ViewChild('amountInput') amountInputRef : ElementRef<HTMLInputElement>;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor(private slService: ShoppingListService) { }

  // ngAfterViewInit() {
  //   // nativeElement is now an `HTMLInputElement`
  //   this.nameInputRef.nativeElement.focus();
  //   this.amountInputRef.nativeElement.focus();

  // }

  ngOnInit() {

    this.subscription = this.slService.itemEdited.subscribe(

      (index: number) => {

        this.editeItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({

          name: this.editedItem.name,
          amount: this.editedItem.amount


        })
      }

    );

  }

  onSubmit(form: NgForm) {

    // const ingName = this.nameInputRef.nativeElement.value ;
    // const ingAmount = this.amountInputRef.nativeElement.valueAsNumber ;

    const value = form.value;

    const ingItem = new Ingredient(value.name, value.amount);
    if (this.editMode) {

      this.slService.UpdateIngredient(this.editeItemIndex, ingItem)

    }
    else {
      this.slService.AddIngredient(ingItem);
    }

    this.editMode = false;
    form.reset();

    // this.ingredientAdded.emit(ingItem);

  }

  onReset() {

    this.slForm.reset();
    this.editMode = false;

  }

  onDelete() {

    this.slService.DeleteIngredient(this.editeItemIndex);
    this.onReset();

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
