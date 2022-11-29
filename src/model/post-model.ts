class Post {
  readonly user: string;
  readonly title: string;
  readonly bodyMd: string;
  readonly url: string;
  readonly image: string;

  constructor(params: Readonly<{ user: string; title: string; bodyMd: string; url: string; image: string }>) {
    this.user = params.user;
    this.title = params.title;
    this.bodyMd = params.bodyMd;
    this.url = params.url;
    this.image = params.image;
  }
}

function newPostFromGetAllPosts(response: GetAllPostsResponse[]): Post[] {
  const post = response
    .filter((v) => v.pagination.total_count > 0)
    .map((v) =>
      v.posts.map(
        (w) =>
          new Post({
            user: w.created_by.screen_name,
            title: w.name,
            bodyMd: w.body_md,
            url: w.url,
            image: w.created_by.icon,
          })
      )
    )
    .flat();
  return post;
}
