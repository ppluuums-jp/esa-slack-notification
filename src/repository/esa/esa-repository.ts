class EsaRepository {
  constructor() {}

  getAllPosts(request: GetAllPostsRequest): GetAllPostsResponse {
    const baseUrl = 'https://api.esa.io/v1/teams';
    const property = new PropertyRepository();
    const teamName = property.teamName;
    const accessToken = property.accessToken;
    const yesterday = this.formatDate(request.date);
    const requestUrl = `${baseUrl}/${teamName}/posts?q=user%3A${request.userName} created%3A%3E${yesterday}&sort=created&order=asc&access_token=${accessToken}`;

    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'get',
      contentType: 'application/json',
      followRedirects: true,
      muteHttpExceptions: true,
    };

    const data = JSON.parse(UrlFetchApp.fetch(requestUrl, options).getContentText('UTF-8'));
    const response = newPostFromResponse(data);
    return response;
  }

  private padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  private formatDate(date: Date) {
    return [date.getFullYear(), this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate())].join('-');
  }
}
