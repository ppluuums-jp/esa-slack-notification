function main() {
  const provider = new Provider();
  const esaController = provider.esaController;
  const slackController = provider.slackController;

  const posts = esaController.getPostByUserWithin24h();
  slackController.sendMessage(posts);
}
