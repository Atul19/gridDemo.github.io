export interface GridUser {
    username?: string,
    password?: string
}

export interface GridTable {
    company?: string,
    address?: string,
    foundation?: number,
    shareprice?: number,
    marketcap?: string
}


export class GridTableData {
    constructor(
        company?: string,
        address?: string,
        foundation?: number,
        shareprice?: number,
        marketcap?: string
    ) {}
  }
  
