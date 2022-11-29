class CreatedBy {
  readonly myself: boolean;
  readonly name: string;
  readonly screen_name: string;
  readonly icon: string;

  constructor(params: Readonly<{ myself: boolean; name: string; screen_name: string; icon: string }>) {
    this.myself = params.myself;
    this.name = params.name;
    this.screen_name = params.screen_name;
    this.icon = params.icon;
  }
}
