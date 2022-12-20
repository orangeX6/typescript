"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
        this.report = '';
    }
    static winsAnalysisWithHTMLReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HTMLReport());
    }
    buildAndPrintReport(matches) {
        this.report = this.analyzer.run(matches);
        this.outputTarget.print(this.report);
    }
}
exports.Summary = Summary;
