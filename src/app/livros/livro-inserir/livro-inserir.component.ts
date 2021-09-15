import { Component, EventEmitter, Output } from '@angular/core';
import { IBook } from '../interface/IBook';
import { v4 as uuid } from 'uuid';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent {
  @Output() bookAdded = new EventEmitter<IBook>();

  onAddBook(form: NgForm) {
    const { invalid, value } = form;

    if (invalid) return;

    const book = {
      id: uuid(),
      title: value.title,
      author: value.author,
      numberOfPages: value.numberOfPages,
    } as IBook;
    this.bookAdded.emit(book);
  }
}
