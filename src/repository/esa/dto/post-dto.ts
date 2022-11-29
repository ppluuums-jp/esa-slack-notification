class PostDto {
  readonly number: number;
  readonly name: string;
  readonly full_name: string;
  readonly wip: boolean;
  readonly body_md: string;
  readonly body_html: string;
  readonly created_at: string;
  readonly message: string;
  readonly url: string;
  readonly updated_at: string;
  readonly tags: Array<string> | null;
  readonly category: string;
  readonly revision_number: number;
  readonly created_by: CreatedBy;
  readonly updated_by: UpdatedBy;

  constructor(
    params: Readonly<{
      readonly number: number;
      readonly name: string;
      readonly full_name: string;
      readonly wip: boolean;
      readonly body_md: string;
      readonly body_html: string;
      readonly created_at: string;
      readonly message: string;
      readonly url: string;
      readonly updated_at: string;
      readonly tags: Array<string> | null;
      readonly category: string;
      readonly revision_number: number;
      readonly created_by: CreatedBy;
      readonly updated_by: UpdatedBy;
    }>
  ) {
    this.number = params.number;
    this.name = params.name;
    this.full_name = params.full_name;
    this.wip = params.wip;
    this.body_md = params.body_md;
    this.body_html = params.body_html;
    this.created_at = params.created_at;
    this.message = params.message;
    this.url = params.url;
    this.updated_at = params.updated_at;
    this.tags = params.tags;
    this.category = params.category;
    this.revision_number = params.revision_number;
    this.created_by = params.created_by;
    this.updated_by = params.updated_by;
  }
}
