import { Project, Experience, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'positions', label: 'Positions Of Responsibility', href: '#positions' },
  { id: 'skills', label: 'Skills And Expertise', href: '#skills' },
  { id: 'extracurricular', label: 'Extra Curricular Activities', href: '#extracurricular' },
  { id: 'contact', label: 'Contact Us', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'disease-diagnosis',
    title: 'Multi-Disease Diagnosis Assistant',
    description: [
      'Predicts 4 diseases using health-related features.',
      'Achieved 90% test accuracy using Logistic Regression.',
      'Improved UI/UX design, increasing engagement by 237 users.'
    ],
    liveDemo: 'https://multiple-disease-prediction-f3cvshkav5ugmoqlybm6qp.streamlit.app/',
    viewCode: 'https://github.com/utkarshshrivastawa/Multiple-Disease-Prediction',
    backgroundImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Based Recommendation System',
    description: [
      'Recommends movies based on cosine similarity of summaries.',
      'Processed 4803 summaries into 17,318-dim vectors.',
      'Displays top 10 ranked movies via intuitive interface.'
    ],
    liveDemo: 'https://github.com/utkarshshrivastawa/Movie-Recommendation-System/blob/main/README.md',
    viewCode: 'https://github.com/utkarshshrivastawa/Movie-Recommendation-System',
    backgroundImage: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker Analysis',
    description: [
      'Scraped data from Flipkart and Amazon using BeautifulSoup.',
      'Analyzed prices, specs, and user segments using Power BI.',
      'Identified 3 customer-targeted price ranges.'
    ],
    liveDemo: 'https://www.novypro.com/project/fitness-tracker-analysis',
    backgroundImage: 'https://images.pexels.com/photos/4164819/pexels-photo-4164819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ngo-website',
    title: 'End Poverty Now NGO Website',
    description: [
      'Built a 7-page website for an NGO.',
      'Created gallery with 8 impactful photos.',
      'Implemented test-mode donation system with 100% success.'
    ],
    liveDemo: 'https://utkarshshrivastawa.github.io/End-Poverty-Now-Donation-Page.github.io/',
    viewCode: 'https://github.com/utkarshshrivastawa/End-Poverty-Now-Donation-Page.github.io',
    backgroundImage: 'https://images.pexels.com/photos/6995245/pexels-photo-6995245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'letsgrowmore',
    company: 'LetsGrowMore',
    position: 'Data Science Intern',
    duration: 'July 2023 – August 2023',
    description: [
      '2 mini projects were made.',
      'Wrote clean, efficient code using Kaggle, Jupyter, and related tools.',
      'Strong communication and effective time management skills.'
    ]
  },
  {
    id: 'medtoureasy',
    company: 'MedTourEasy',
    position: 'Data Analytics Trainee',
    duration: 'July 2023 – September 2023',
    description: [
      'Gained basic knowledge of data analytics, including data types, visualization, and decision-making.',
      'Learned tools like Excel, SQL, and Power BI used in real-world business areas.',
      'Ability to work collaboratively in a team environment.'
    ]
  }
];