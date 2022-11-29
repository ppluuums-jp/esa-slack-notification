class Pagination {
  readonly prev_page: number | null;
  readonly next_page: number | null;
  readonly total_count: number;
  readonly page: number;
  readonly per_page: number;
  readonly max_per_page: number;

  constructor(
    params: Readonly<{
      prev_page: number | null;
      next_page: number | null;
      total_count: number;
      page: number;
      per_page: number;
      max_per_page: number;
    }>
  ) {
    this.prev_page = params.prev_page;
    this.next_page = params.next_page;
    this.total_count = params.total_count;
    this.page = params.page;
    this.per_page = params.per_page;
    this.max_per_page = params.max_per_page;
  }
}
