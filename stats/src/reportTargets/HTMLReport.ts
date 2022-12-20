import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Analysis</title>
    </head>
    <body>
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    </body>
    </html>
    `;

    fs.writeFile(`${__dirname}/files/report.html`, html, 'utf-8', (err) => {
      if (err) throw err;
      console.log('done');
    });
  }
}
