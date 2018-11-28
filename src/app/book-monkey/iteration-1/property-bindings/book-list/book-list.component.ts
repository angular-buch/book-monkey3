import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  ngOnInit() {
    this.books = [
      {
        isbn: '9783864903571',
        title: 'Angular',
        authors: ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
        published: new Date(2017, 3, 1),
        subtitle: `Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab Angular 4,
          inklusive NativeScript und Redux`,
        rating: 5,
        thumbnails: [{
          url: 'https://ng-buch.de/cover2.jpg',
          title: 'Buchcover'
        }],
        description: 'Mit Angular setzen Sie auf ein modernes und modulares...'
      },
      {
        isbn: '9783864901546',
        title: 'AngularJS',
        authors: ['Philipp Tarasiewicz', 'Robin Böhm'],
        published: new Date(2014, 5, 29),
        subtitle: 'Eine praktische Einführung',
        rating: 5,
        thumbnails: [{
          url: 'https://ng-buch.de/cover1.jpg',
          title: 'Buchcover'
        }],
        description: 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...'
      }
    ];
  }
}
