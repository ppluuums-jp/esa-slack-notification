class PropertyRepository {
  private readonly props: GoogleAppsScript.Properties.Properties;

  constructor() {
    this.props = PropertiesService.getScriptProperties();
  }

  get teamName(): string {
    return this.props.getProperty('team_name') || '';
  }

  get userName(): string[] {
    const users = this.props.getProperty('user_name') || '[]';
    return JSON.parse(users);
  }

  get accessToken(): string {
    return this.props.getProperty('access_token') || '';
  }

  get webhookUrl(): string {
    return this.props.getProperty('webhook_url') || '';
  }
}
