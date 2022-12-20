import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';

// // Create an object the satisfies the 'DataReader' interface
// const csvReader = new CSVFileReader('./football.csv');

// // Create an instance of MatchReader and pass in something that satisfies the 'DataReader' interface
// const matchReader = new MatchReader(csvReader);
// matchReader.load();
//-> Doing the above using static method
console.log(MatchReader.fromCSV('football.csv'));
const matchReader = MatchReader.fromCSV('football.csv');
matchReader.load();

const summary = new Summary(new WinsAnalysis('Liverpool'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

// const htmlSummary = new Summary(new WinsAnalysis('Arsenal'), new HTMLReport());
// htmlSummary.buildAndPrintReport(matchReader.matches);
//->  Doing the same as above using static method
Summary.winsAnalysisWithHTMLReport('Arsenal').buildAndPrintReport(
  matchReader.matches
);
