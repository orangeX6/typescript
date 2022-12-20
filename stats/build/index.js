"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
// // Create an object the satisfies the 'DataReader' interface
// const csvReader = new CSVFileReader('./football.csv');
// // Create an instance of MatchReader and pass in something that satisfies the 'DataReader' interface
// const matchReader = new MatchReader(csvReader);
// matchReader.load();
//-> Doing the above using static method
console.log(MatchReader_1.MatchReader.fromCSV('football.csv'));
const matchReader = MatchReader_1.MatchReader.fromCSV('football.csv');
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Liverpool'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
// const htmlSummary = new Summary(new WinsAnalysis('Arsenal'), new HTMLReport());
// htmlSummary.buildAndPrintReport(matchReader.matches);
//->  Doing the same as above using static method
Summary_1.Summary.winsAnalysisWithHTMLReport('Arsenal').buildAndPrintReport(matchReader.matches);
