"use strict";

interface IFact {
  fact: {
    fragment: string,
    statement: string,
    type: "date" | "math" | "trivia" | "year",
    day?: number,
    month?: number,
    year?: number,
    number?: string | number,
  };
}

interface IFactError {
  error: {
    message: string,
    status: number;
  };
}

export type { IFact, IFactError };
