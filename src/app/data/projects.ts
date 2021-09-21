interface Project {
  avatar: string,
  codeUrl: string,
  description: string,
  disabled: boolean,
  hasProofOfConcept: boolean,
  tags: string,
  title: string,
}

export const getProjects = (): Array<Project> => {
  return [
    {
      title: 'This Website',
      avatar: '../../../assets/icons/angular_solidBlack.png',
      codeUrl: 'https://github.com/JacobBN/website',
      description: '<p>' + 
                   'I chose to write this website in Angular to gain more familiarity with it. Professionally, ' +
                   'I\'ve mostly used Vue.js so it was a good opportunity to expand my skillset.' + 
                   '</p>' +
                   '<p>' + 
                   'The website is deployed on Azure with a CDN and a storage account.' + 
                   '</p>', // TODO: There's CI/CD included in the GitHub repository.
      disabled: false,
      hasProofOfConcept: false,
      tags: 'Angular, Azure, CI/CD',
    },
    {
      title: 'Capstone Project',
      avatar: '../../../assets/icons/reshot-icon-class-XYP65A4FM3.svg',
      codeUrl: 'https://github.com/HGTP/hgtp-capstone',
      description: '<p>' + 
                   'This project was done in a capstone team consisting of 4 Computer Science students, including me.' + 
                   '</p>' +
                   '<p>' +
                   'The project was a companion mobile application and website for an embedded device. The device ' +
                   '(an Arduino in our case) registered four different hand movements (up, down, left, right). The ' +
                   'application received this  information over a secure bluetooth connection, which then took it from there.' +
                   '</p>' +
                   '<p>' +
                   'Some things you could do were sending emergency calls or texts, controlling your music on Spotify, and ' +
                   'getting GPS directions' + 
                   '</p>',
      disabled: false,
      hasProofOfConcept: false,
      tags: 'C#, Xamarin, Node.js, Vue.js',
    },
    {
      title: 'Auth - Okta',
      avatar: '../../../assets/icons/reshot-icon-authentication-9BAULQ4SZH.svg',
      codeUrl: '',
      description: '<p>' + 
                   'Coming soon...' + 
                   '</p>',
      disabled: true,
      hasProofOfConcept: true,
      tags: 'Angular, Okta',
    },
    {
      title: 'Elastic/Kibana/Kubernetes<br/>Local Development Setup',
      avatar: '../../../assets/icons/reshot-icon-programming-KLA56NUXFZ.svg',
      codeUrl: '',
      description: '<p>' + 
                   'Coming soon...' + 
                   '</p>',
      disabled: true,
      hasProofOfConcept: false,
      tags: 'Elastic, Kibana, Kubernetes, Docker, Kubernetes',
    },
    {
      title: 'Kubernetes Exploration',
      avatar: '../../../assets/icons/reshot-icon-programming-KLA56NUXFZ.svg',
      codeUrl: '',
      description: '<p>' + 
                   'Coming soon...' + 
                   '</p>',
      disabled: true,
      hasProofOfConcept: false,
      tags: 'Docker, Kubernetes',
    },
    {
      title: 'API - Node.js',
      avatar: '../../../assets/icons/reshot-icon-api-PFKQBLJ8WR.svg',
      codeUrl: '',
      description: '<p>' + 
                   'Coming soon...' + 
                   '</p>',
      disabled: true,
      hasProofOfConcept: true,
      tags: 'Node.js, Swagger',
    },
    {
      title: 'API - C#',
      avatar: '../../../assets/icons/reshot-icon-custom-coding-SLQZHKDFNP.svg',
      codeUrl: '',
      description: '<p>' + 
                   'Coming soon...' + 
                   '</p>',
      disabled: true,
      hasProofOfConcept: true,
      tags: 'C#, .NET Core, Swagger',
    }
  ];
};
