import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ModeEnum } from '../../models/mode.enum';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,CardModule,ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  private userService = inject(UserService);
  private fb = inject(FormBuilder);
  form = this.fb.group({
    id: [0],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });
  ModeEnum = ModeEnum;
  users!: User[];
  mode = ModeEnum.NON;

  ngOnInit(): void {
    this.setUsers();
  }

  private setUsers() {
    this.users = this.userService.getAllUsers();
  }

  addNewUser() {
    this.mode = ModeEnum.ADD;
  }

  editUser(user: User) {
    this.mode = ModeEnum.EDIT;
    this.form.setValue(user);
  }

  saveUser() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const user = this.form.value as User;

    if (this.mode === ModeEnum.ADD) {
      this.userService.addUser(user);
    } else {
      this.userService.updateUser(user);
    }
    this.setUsers();
    this.cancel();

  }


  removeUser(user: User) {
    this.userService.deleteUser(user);
    this.setUsers();
  }

  cancel() {
    this.form.reset();
    this.mode = ModeEnum.NON;
  }
}
