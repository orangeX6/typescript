/*
>> just in case someone would like to use Deno instead of NodeJS for program execution, this is how the same code would look like:
const matches = Deno
.readTextFileSync("football.csv")
.split("\n")
.map((row: string): string[] => {
  return row.split(",");
});

console.log(matches);

Deno natively supports TypeScript, so we run the .ts file directly with:
deno run --no-check --allow-read src/index.ts
--no-check parameter makes the start a bit faster because it doesn't check type errors.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>

*/
