export interface ProjectFormat {
  id: number;
  title: string;
  image: string;
  technology: string;
  summary: string;
  gitHubLink: string;
  gitHubTitle: string;
  webPageLink: string;
  webPageTitle: string;
}

export interface CertificateFormat {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
}