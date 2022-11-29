class EsaController {
  private readonly esaRepository: EsaRepository;
  private readonly propertyRepository: PropertyRepository;

  constructor(params: Readonly<{ esaRepository: EsaRepository; propertyRepository: PropertyRepository }>) {
    this.esaRepository = params.esaRepository;
    this.propertyRepository = params.propertyRepository;
  }

  getPostByUserWithin24h(): Post[] {
    const userName = this.propertyRepository.userName;
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    const data = userName.map((v) => this.esaRepository.getAllPosts({ userName: v, date: yesterday }));
    const post = newPostFromGetAllPosts(data);
    return post;
  }
}
