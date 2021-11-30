export type Job = {
  uuid: string
  name: string
  thumbnailImageURL: string
  tags: { id: number; name: string; color: string }[]
}
