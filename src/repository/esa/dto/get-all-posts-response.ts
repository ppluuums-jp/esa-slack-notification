class GetAllPostsResponse {
  readonly posts: PostDto[];
  readonly pagination: Pagination;

  constructor(params: Readonly<{ posts: PostDto[]; pagination: Pagination }>) {
    this.posts = params.posts;
    this.pagination = params.pagination;
  }
}

function newPostFromResponse(data: any): GetAllPostsResponse {
  const createdBy: CreatedBy[] = data.posts.map(
    (v: { created_by: { myself: boolean; name: string; screen_name: string; icon: string } }) =>
      new CreatedBy({
        myself: v.created_by.myself,
        name: v.created_by.name,
        screen_name: v.created_by.screen_name,
        icon: v.created_by.icon,
      })
  );
  const updatedBy: UpdatedBy[] = data.posts.map(
    (v: { updated_by: { myself: boolean; name: string; screen_name: string; icon: string } }) =>
      new UpdatedBy({
        myself: v.updated_by.myself,
        name: v.updated_by.name,
        screen_name: v.updated_by.screen_name,
        icon: v.updated_by.icon,
      })
  );
  const posts: PostDto[] = data.posts.map(
    (
      v: {
        number: number;
        name: string;
        full_name: string;
        wip: boolean;
        body_md: string;
        body_html: string;
        created_at: string;
        message: string;
        url: string;
        updated_at: string;
        tags: Array<string> | null;
        category: string;
        revision_number: number;
      },
      i: number
    ) =>
      new PostDto({
        number: v.number,
        name: v.name,
        full_name: v.full_name,
        wip: v.wip,
        body_md: v.body_md,
        body_html: v.body_html,
        created_at: v.created_at,
        message: v.message,
        url: v.url,
        updated_at: v.updated_at,
        tags: v.tags,
        category: v.category,
        revision_number: v.revision_number,
        created_by: createdBy[i],
        updated_by: updatedBy[i],
      })
  );
  const pagination: Pagination = new Pagination({
    prev_page: data.prev_page,
    next_page: data.next_page,
    total_count: data.total_count,
    page: data.page,
    per_page: data.per_page,
    max_per_page: data.max_per_page,
  });
  const response = new GetAllPostsResponse({ posts: posts, pagination: pagination });
  return response;
}
