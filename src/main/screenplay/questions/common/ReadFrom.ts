// import { readFileSync } from "fs";
// import { safeLoad } from "js-yaml";

import { Question, QuestionAdapter } from "@serenity-js/core";

// declare var require: any;
const yaml = require("js-yaml");
const fs = require('fs');


export class ReadFrom implements Question<Promise<string>> {
    ymlFileLoaded: any;

    answeredBy(): Promise<string> {
        this.ymlFileLoaded = "yaml.load(fs.readFileSync(`src/test/resources/data/properties/${this.fileName}.yml`, 'utf8'))";
        return eval(`${this.ymlFileLoaded}.${this.data}`);
    }

    constructor(private fileName: string, private data: any) { }

    describedAs(subject: string): this {
        throw new Error("Method not implemented.");
    }
    as<O>(mapping: (answer: string) => O | Promise<O>): QuestionAdapter<O> {
        throw new Error("Method not implemented.");
    }

    static yamlFile(fileName: string): ReadFromBuilder {
        return new ReadFromBuilder(fileName);
    }

    toString = () => `the yml file data from file ${this.fileName}`;
}

export class ReadFromBuilder {
    public andData(data: any) {
        return new ReadFrom(this.fileName, data);
    }
    constructor(private fileName: string) { }
}