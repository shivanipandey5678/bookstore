function Author( name, birthYear, nationality ){
    this.name=name,
    this.birthYear= birthYear,
    this.nationality=nationality

    
};
function  Book ( title, name, genre, price ){
    this.title=title,
    this.name=name,
    this.genre= genre,
    this.price=price

};
Book.prototype.getBookInfo=function(){
    console.log(this.title);
    console.log(this.name);
    console.log(this.genre);
    console.log(this. price);

};
let author=new Author( "J.K. Rowling",1965," British");
let  book=new Book( "Harry Potter and the Sorcerer's Stone", "J.K. Rowling","Fantasy", "$19" );
let  book2=new Book( "The Enigmatic Puzzle", " Agatha Mystique","Mystery", "$14" );
let  book3=new Book( "Quest for the Crystal Realm", "Samuel Adventureton","Adventure", "$21." );

console.log( book)

console.log( book2)

console.log( book3)
book.getBookInfo()
// book2.getBookInfo()
// book3.getBookInfo()



