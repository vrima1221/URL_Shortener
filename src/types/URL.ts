export interface URL {
  id: number,
  fullUrl: string,
  shortUrl: string,
}

export type dataFromServer = {
  value: URL[]
  contentTypes: []
  declaredType: any
  formatters: []
  statusCode: number
};
