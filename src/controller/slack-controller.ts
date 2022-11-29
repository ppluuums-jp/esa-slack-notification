class SlackController {
  private readonly incomingWebhookRepository: IncomingWebhookRepository;
  private readonly propertyRepository: PropertyRepository;

  constructor(
    params: Readonly<{
      incomingWebhookRepository: IncomingWebhookRepository;
      propertyRepository: PropertyRepository;
    }>
  ) {
    this.incomingWebhookRepository = params.incomingWebhookRepository;
    this.propertyRepository = params.propertyRepository;
  }

  sendMessage(post: Post[]) {
    let blocks: any[] = [
      new ICHeaderBlock({
        text: new ICTextObject({
          type: ICTextType.Plain,
          text: '【esa】Notification System',
        }),
      }),
      new ICSectionBlock({
        text: new ICTextObject({
          type: ICTextType.Plain,
          text: 'New articles were found.',
        }),
      }),
    ];
    post.forEach(function (v) {
      blocks.push(new ICDividerBlock({}));
      blocks.push(
        new ICSectionBlock({
          text: new ICTextObject({
            type: ICTextType.Markdown,
            text: '*' + v.title + '*',
          }),
        })
      );
      blocks.push(
        new ICSectionBlock({
          text: new ICTextObject({
            type: ICTextType.Markdown,
            text: v.bodyMd.slice(0, 140),
          }),
        })
      );
      blocks.push(
        new ICImageElement({
          imageUrl: v.image,
          altText: v.user + "'s icon",
        })
      );
      blocks.push(
        new ICActionBlock({
          elements: [
            new ICButtonElement({
              text: new ICTextObject({
                type: ICTextType.Plain,
                text: 'View article',
              }),
              url: v.url,
            }),
          ],
        })
      );
    });
    if (post.length > 0) {
      this.incomingWebhookRepository.postMessage(blocks);
    }
  }
}
