class Provider {
  // Repository
  incomingWebhookRepository: IncomingWebhookRepository;
  esaRepository: EsaRepository;
  propertyRepository: PropertyRepository;

  // Controller
  esaController: EsaController;
  slackController: SlackController;

  constructor() {
    this.incomingWebhookRepository = new IncomingWebhookRepository();
    this.esaRepository = new EsaRepository();
    this.propertyRepository = new PropertyRepository();
    this.esaController = new EsaController({
      esaRepository: this.esaRepository,
      propertyRepository: this.propertyRepository,
    });
    this.slackController = new SlackController({
      incomingWebhookRepository: this.incomingWebhookRepository,
      propertyRepository: this.propertyRepository,
    });
  }
}
