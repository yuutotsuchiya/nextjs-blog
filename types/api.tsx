import { Entry } from "~/component/entry/EntryItem";

export interface ApiData {
    limit: number
    offset:number
    totalCount:number
}
export interface EntryData extends ApiData {
    contents:Entry[]
}