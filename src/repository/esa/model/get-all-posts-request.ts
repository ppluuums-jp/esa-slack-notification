class GetAllPostsRequest {
  readonly userName: string;
  readonly date: Date;

  constructor(params: Readonly<{ userName: string; date: Date }>) {
    this.userName = params.userName;
    this.date = params.date;
  }
}
