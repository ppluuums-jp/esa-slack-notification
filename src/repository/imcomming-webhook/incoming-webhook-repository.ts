class IncomingWebhookRepository {
  constructor() {}

  postMessage(
    blocks: (ICSectionBlock | ICContextBlock | ICActionBlock | ICHeaderBlock | ICDividerBlock | ICImageElement)[]
  ): void {
    const property = new PropertyRepository();
    const webhookUrl = property.webhookUrl;
    const data = { blocks: blocks.map((v) => v.toMap()) };
    const payload = JSON.stringify(data);
    const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      contentType: 'application/json',
      payload: payload,
    };
    UrlFetchApp.fetch(webhookUrl, params);
  }
}
