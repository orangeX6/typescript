import { MatchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  report: string = '';

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisWithHTMLReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    this.report = this.analyzer.run(matches);

    this.outputTarget.print(this.report);
  }
}
