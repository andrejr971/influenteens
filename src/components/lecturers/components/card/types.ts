type Data = {
  id: number
  office: string
  name: string
  social: {
    instagram: string | null
    facebook: string | null
    twitter: string | null
  }
  tag: Array<string>
  profile: string
  church: string
}

export interface CardProps {
  data: Data
}
