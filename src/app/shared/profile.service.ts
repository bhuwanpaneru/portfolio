import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/MyShop/#/',
      githurl: 'https://github.com/bhuwanpaneru/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/bhuwanpaneru/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/bhuwanpaneru/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/bhuwanpaneru/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/bhuwanpaneru/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/NewsApp-using-React',
      githurl: 'https://github.com/bhuwanpaneru/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/Blog-Book/',
      githurl: 'https://github.com/bhuwanpaneru/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/COVOID-19/',
      githurl: 'https://github.com/bhuwanpaneru/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://bhuwanpaneru.github.io/React-Weather/',
      githurl: 'https://github.com/bhuwanpaneru/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/bhuwanpaneru/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/bhuwanpaneru/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/bhuwanpaneru/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/bhuwanpaneru/My-Personal-Portfolio',
      mediumlink: 'https://bhuwanpaneru.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://bhuwanpaneru.medium.com/',
      githurl: 'https://github.com/bhuwanpaneru',
      mediumlink: 'https://bhuwanpaneru.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://bhuwanpaneru.medium.com/',
      githurl: 'https://github.com/bhuwanpaneru/Matrimonial-Website.git',
      mediumlink: 'https://bhuwanpaneru.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://bhuwanpaneru.github.io"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    // {
    //   'id': '2',
    //   'skill': 'NODE JS',
    //   'progress': '80%'
    // },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': '.NET',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'info': `Dev Bhoomi Institute of Technology is UTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'DEV BHOOMI INSTITUTE OF TECHNOLOGY, DEHRADUN'
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2016',
      'education': 'Diploma\'s',
      'stream': 'Diploma in Engineering',
      'info': `Govt. Polytechnic Kashipur is UBTER Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'GOVT. POLYTECHNIC, KASHIPUR'
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2014',
      'education': 'Intermediate',
      'stream': 'Science and Mathematics',
      'institution': 'S. V. I. C. HALDWANI',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '4',
      'from_to_year': '2010 - 2011',
      'education': 'High School',
      'stream': 'Science and Mathematics',
      'institution': 'Govt. High Secondary School Dalkanya',
      'info': `The Secondary aims at Maths , English , Science, Social Science, and Hindi.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Crest Data System',
      location: 'Ahmedabad',
      timeline: 'Aug 2021 to Present',
      role: 'Software Developer',
      work: 'Working as a full stack developer .Responsible for handling the UI in React and Managing the api calls in python Flask.'

    },
    {
      id: 3,
      company: 'Indianic Info Tech',
      location: 'Ahmedabad',
      timeline: 'Feb 2021 to June 2021',
      role: 'Software Developer',
      work: `Technologies : Angular , Node JS , MongoDB . 
      Worked on the web application built in Angular for different business and Campaigns . 
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },

    {
      id: 2,
      company: 'Growth99',
      location: 'Remote',
      timeline: '',
      role: 'Frontend  Developer',
      work: `Technologies : Angular , Node JS , MongoDB . 
  Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website . 
  Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application . 
  Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation. 
  `
    },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Gandhinagar and Pune',
      timeline: 'June 2019 - Jan 2021',
      role: 'Assistant System Engineer Trainee',
      work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr . 
  
  Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business . 
  
  Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts . 
  
  Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  `
    },


  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
