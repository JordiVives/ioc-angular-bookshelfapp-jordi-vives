import { Book } from "../models/book";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "El senyor dels anells: La comunitat de l'anell",
    description: "Frodo inicia un viatge per destruir l'Anell Únic.",
    author: "J. R. R. Tolkien",
    category: "Fantasia",
    publishedDate: new Date(1954, 6, 29),
    numberOfPages: 423,
    isRead: true
  },
  {
    id: 2,
    title: "El nom de la rosa",
    description: "Un monjo investiga unes morts misterioses en una abadia medieval.",
    author: "Umberto Eco",
    category: "Novel·la històrica",
    publishedDate: new Date(1980, 0, 1),
    numberOfPages: 512,
    isRead: false
  },
  {
    id: 3,
    title: "1984",
    description: "Una societat totalitària controla tots els aspectes de la vida.",
    author: "George Orwell",
    category: "Ciència-ficció",
    publishedDate: new Date(1949, 5, 8),
    numberOfPages: 328,
    isRead: true
  },
  {
    id: 4,
    title: "Dràcula",
    description: "Un comte transsilvà amenaça la societat victoriana.",
    author: "Bram Stoker",
    category: "Terror",
    publishedDate: new Date(1897, 4, 26),
    numberOfPages: 418,
    isRead: false
  },
  {
    id: 5,
    title: "Dune",
    description: "La lluita pel control d'Arrakis i la seva valuosa espècia.",
    author: "Frank Herbert",
    category: "Ciència-ficció",
    publishedDate: new Date(1965, 7, 1),
    numberOfPages: 688,
    isRead: false
  },
  {
    id: 6,
    title: "Els pilars de la Terra",
    description: "La construcció d'una catedral a l'Anglaterra medieval.",
    author: "Ken Follett",
    category: "Novel·la històrica",
    publishedDate: new Date(1989, 0, 1),
    numberOfPages: 976,
    isRead: true
  },
  {
    id: 7,
    title: "Frankenstein",
    description: "Un científic crea una criatura i afronta les conseqüències.",
    author: "Mary Shelley",
    category: "Terror",
    publishedDate: new Date(1818, 0, 1),
    numberOfPages: 280,
    isRead: false
  },
  {
    id: 8,
    title: "El hòbbit",
    description: "Bilbo Bolson emprèn una aventura amb un grup de nans.",
    author: "J. R. R. Tolkien",
    category: "Fantasia",
    publishedDate: new Date(1937, 8, 21),
    numberOfPages: 310,
    isRead: true
  },
  {
    id: 9,
    title: "Assassinat a l'Orient Express",
    description: "Hèrcules Poirot investiga un assassinat dins d'un tren.",
    author: "Agatha Christie",
    category: "Misteri",
    publishedDate: new Date(1934, 0, 1),
    numberOfPages: 256,
    isRead: true
  },
  {
    id: 10,
    title: "La carretera",
    description: "Un pare i un fill travessen un món devastat.",
    author: "Cormac McCarthy",
    category: "Distopia",
    publishedDate: new Date(2006, 8, 26),
    numberOfPages: 287,
    isRead: false
  }
];
