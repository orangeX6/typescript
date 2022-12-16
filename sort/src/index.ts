import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 24, -69, 3, -5, 0, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);

const myFavGame = new CharactersCollection('League of Legends');
myFavGame.sort();
console.log(myFavGame.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(69);
linkedList.add(100);
linkedList.add(200);
linkedList.add(50);
linkedList.add(50);

linkedList.sort();
linkedList.print();
