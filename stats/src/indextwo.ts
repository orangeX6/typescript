import fs from 'fs';

console.log('Hello There');
const matches = fs
  .readFileSync('../football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','));

interface Data {
  date?: string;
  homeTeam?: string;
  awayTeam?: string;
  homeTeamGoals?: string;
  awayTeamGoals?: string;
  winner?: string;
  referee?: string;
}

// const matchData: Data[] = matches.map((el:string[]):Data => console.log(el))

// matches.map((el: string[]): void => console.log(el));
const mappy = matches[1];
console.log(mappy);
const fields = [
  'date',
  'homeTeam',
  'awayTeam',
  'homeTeamGoals',
  'awayTeamGoals',
  'winner',
  'referee',
];

const y: Data = {};

const matchData: Data[] = matches.map(
  (el: string[]): Data =>
    el.reduce((acc: Data, cur, idx): Data => {
      const key = fields[idx];
      const value = cur;
      console.log(key, value);
      y[key as keyof Data] = value;
      return { ...acc, [key]: value };
    }, <Data>{})
);

// console.log(matchData);
// matchData[5]['winner'] = 'A';
// console.log(matchData[5]['winner']);
