# BookShelfApp

## Autor
Jordi Vives

## Descripció
Aplicació feta amb Angular destinada a gestionar una biblioteca virtual. Actualment permet consultar una llista de llibres, filtrar-los per categoria i títol i visualitzar la informació detallada del llibre seleccionat.

L'aplicació també incorpora validacions als formularis, millores d'accessibilitat i un disseny adaptable a diferents mides de pantalla.

## Versions utilitzades

- Node.js: v24.21.0
- npm: 11.19.0
- Angular CLI: 22.1.8
- Angular: 22.1.8
- Git: 2.47.0.windows.2

## Com crear i executar el projecte

Per crear el projecte s'ha utilitzat:
ng new ioc-angular-bookshelfapp-jordi-vives --routing --style=scss --ssr=false --standalone=true --file-name-style-guide=2016 --skip-git=true --package-manager=npm


Per instal·lar les dependències:
npm install

Per executar l'aplicació:
ng serve

## Components creats

- App: Component principal de l'aplicació. Conté les dades dels llibres i mostra el component de la biblioteca.
- BookList: Mostra la llista de llibres, aplica els filtres i gestiona la selecció i visualització dels detalls.
- BookCard: Mostra la informació resumida de cada llibre i permet seleccionar-lo.
- BookBadge: Mostra la categoria del llibre mitjançant una etiqueta.
- BookFilterBar: Conté el formulari per filtrar els llibres per categoria i títol, amb les validacions corresponents.

Els components es comuniquen mitjançant @Input, @Output i EventEmitter.

## Funcionalitats implementades

- Visualització d'una llista de llibres de prova.
- Filtratge per categoria i títol.
- Validació dels camps del formulari.
- Possibilitat de netejar els filtres.
- Comptador de llibres trobats.
- Missatge quan no hi ha resultats.
- Visualització dels detalls del llibre seleccionat.
- Format de la data de publicació mitjançant DatePipe.
- Navegació amb teclat i millores d'accessibilitat.
- Disseny responsive per a ordinadors i dispositius mòbils.

## Estat de l'EAC1

Projecte base configurat i personalitzat tal com indica l'enunciat. S'ha creat el model de dades dels llibres i s'han preparat les dades de prova.

## Estat de l'EAC2

S'han creat els components necessaris per mostrar i filtrar els llibres, utilitzant la comunicació entre components d'Angular.

També s'han incorporat els formularis amb validacions, les estructures @for, @if i @else, el panell de detall i les millores d'accessibilitat i disseny responsive.

## Branca de treball

ra2-components

## Enllaç del repositori

https://github.com/JordiVives/ioc-angular-bookshelfapp-jordi-vives
