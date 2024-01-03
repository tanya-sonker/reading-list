# reading-list
a simple, responsive angular application to manage my reading list by adding or deleting books 

## demo
test it out [here](https://tanyasonker.com/reading-list)

<img width="1509" alt="reading-list" src="https://github.com/tanya-sonker/reading-list/assets/39142854/cc36084f-e98e-4539-89a2-b9fceef95a08">

## features
- add books to a list and local storage
- remove books from list and local storage
- display books from local storage
- uuid assigned for ids; other fields are inputted by user

## angular techniques
- lifecycle hook OnInit to load books from local storage as soon as app starts
- one-way data binding to display details of book
- two-way data binding to add/remove books from list and local storage
- books created via an interface with an id, title, author and date

## deployment
- in angular.json, update options `"outputPath": "docs"`
- build project in prod using `ng build --output-path docs --base-href reading-list`
- update github pages settings to pull code from main branch and docs
