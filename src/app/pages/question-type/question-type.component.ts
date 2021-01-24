import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categories, Levels } from './formValues';

@Component({
  selector: 'app-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.scss'],
})
export class QuestionTypeComponent implements OnInit {
  numOfQuesForm: FormGroup;
  categoryForm: FormGroup;
  difficultyForm: FormGroup;
  selectedItem = 'Any Category';

  categories = Categories;
  levels = Levels;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.numOfQuesForm = this.formBuilder.group({
      numOfQuestions: [null, Validators.required],
    });

    this.categoryForm = this.formBuilder.group({
      category: [null],
    });

    this.difficultyForm = this.formBuilder.group({
      difficulty: [null],
    });
  }

  submit() {
    console.log(
      ' form values ->',
      this.numOfQuesForm.value,
      this.categoryForm.value,
      this.difficultyForm.value
    );

    const obj: object = {
      numOfQues: this.numOfQuesForm.value.numOfQuestions,
      category: this.categoryForm.value.category,
      difficulty: this.difficultyForm.value.difficulty,
    };
    localStorage.setItem('preferences', JSON.stringify(obj));
  }
}
