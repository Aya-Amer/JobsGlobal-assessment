export class Job {
  public title: string;
  public location: string;
  public date_published: string;
  public description: string;
  public cover: string;

  constructor(
    title: string,
    location: string,
    date_published: string,
    description: string,
    cover: string
  ) {
    this.title = title;
    this.location = location;
    this.date_published = date_published;
    this.description = description;
    this.cover = cover;
  }
}
