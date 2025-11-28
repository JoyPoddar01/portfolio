import { EducationItem, SkillCategory, ContactInfo, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO = {
  name: 'Joy Poddar',
  title: 'Engineer',
  subtitle: 'Computer Science and Engineering Graduate',
  tagline: 'Passionate and detail-oriented graduate ready to solve real-world problems.'
};

export const CONTACT_INFO: ContactInfo = {
  email: 'email.joypoddar@gmail.com',
  phone: '+880 1753 828 417',
  address: 'Mohammadi Housing Society, Road-11, House-14, Dhaka, Bangladesh'
};

export const ABOUT_TEXT = `As a passionate and detail-oriented Computer Engineering graduate, I am seeking an entry-level position where I can apply my technical knowledge and problem-solving abilities to real-world projects. I am eager to contribute to a dynamic organization while continuously learning and developing my expertise in cutting-edge technologies.`;

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Science',
    major: 'Computer Science and Engineering',
    institute: 'United International University',
    result: 'CGPA: 3.75',
    year: '2025'
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (HSC)',
    major: 'Science',
    institute: 'Shariatpur Govt. College',
    board: 'Dhaka',
    result: 'GPA: 5.00',
    year: '2017'
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    major: 'Science',
    institute: 'Palong Tulasar Gurudash Govt. High School',
    board: 'Dhaka',
    result: 'GPA: 5.00',
    year: '2015'
  }
];

export const TECHNICAL_SKILLS: SkillCategory = {
  title: 'Technical Skills',
  skills: [
    'C',
    'Python',
    'HTML',
    'Cisco Packet Tracer (CCNA)',
    'MS Word',
    'MS PowerPoint',
    'Canva',
    'ChatGPT & Prompt Engineering',
    'Google Bard',
    'Web Browsing & Email Technologies'
  ]
};

export const PERSONAL_SKILLS: SkillCategory = {
  title: 'Personal Skills',
  skills: [
    'Problem Solving and Debugging',
    'Excellent Communication (Bangla & English)',
    'Strategic Planning',
    'Initiative Taking',
    'Effective under pressure'
  ]
};