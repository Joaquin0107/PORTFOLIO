import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  link?: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css']
})
export class Certificates implements OnInit, OnDestroy {
  currentIndex = 0;
  autoPlayInterval: any;

  certificates: Certificate[] = [
    {
      title: 'Programa de Especialización Front End',
      issuer: 'Alura LATAM',
      date: 'Mayo 2023',
      description: 'Programa completo de 343 horas en desarrollo Front End, abarcando HTML5, CSS3, JavaScript, frameworks modernos y mejores prácticas de desarrollo web.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Front End'],
      image: '/src/assets/certificates/alura-frontend.png',
      link: 'https://cursos.aluralatam.com/user/Joaquin0107/fullCertificate/e2d24c94c3655e574eda9e806f20bcb0'
    },
    {
      title: 'IBM Cybersecurity Analyst',
      issuer: 'IBM - Coursera',
      date: 'Mayo 2023',
      description: 'Certificación profesional en ciberseguridad cubriendo herramientas de análisis, protección de datos, respuesta a incidentes, forense digital y cumplimiento normativo.',
      skills: ['Cybersecurity', 'SIEM', 'Incident Response', 'Network Security'],
      image: 'assets/certificates/ibm-cyber.jpg',
      link: 'https://coursera.org/verify/professional-cert/3DEUBVC7CD3E'
    },
    {
      title: 'Diseño y Gestión de Proyectos de Desarrollo',
      issuer: 'BID - AcademiaBID',
      date: 'Octubre 2023',
      description: 'Especialización en diseño y gestión de proyectos con enfoque en resultados, incluyendo herramientas de gestión, análisis de riesgos y metodologías de desarrollo.',
      skills: ['Gestión de Proyectos', 'Análisis de Riesgos', 'Planificación', 'Desarrollo'],
      image: 'assets/certificates/bid-proyectos.jpg',
      link: 'https://coursera.org/verify/specialization/KWNZJ4A886RQ'
    },
    {
      title: 'Scrum Master Certification',
      issuer: 'LearnQuest - Coursera',
      date: 'Octubre 2023',
      description: 'Certificación en metodologías ágiles Scrum, gestión de sprints, roles, eventos, scaling agile y combinación con otras metodologías ágiles.',
      skills: ['Scrum', 'Agile', 'Sprint Management', 'Team Leadership'],
      image: 'assets/certificates/scrum-master.jpg',
      link: 'https://coursera.org/verify/specialization/ZD6EBDQXF9PV'
    },
    {
      title: 'Google Analytics Certification',
      issuer: 'Google',
      date: 'Noviembre 2024',
      description: 'Certificación oficial de Google Analytics para análisis de datos web, seguimiento de métricas, interpretación de informes y optimización de estrategias digitales.',
      skills: ['Google Analytics', 'Web Analytics', 'Data Analysis', 'Digital Marketing'],
      image: 'assets/certificates/google-analytics.jpg'
    },
    {
      title: 'Fundamentals of Digital Marketing',
      issuer: 'Google Digital Garage',
      date: 'Septiembre 2024',
      description: 'Fundamentos de marketing digital incluyendo SEO, SEM, redes sociales, email marketing, analítica web y estrategias de contenido digital.',
      skills: ['Marketing Digital', 'SEO', 'SEM', 'Social Media'],
      image: 'assets/certificates/google-marketing.jpg'
    },
    {
      title: 'Creating Applications with SAP Build Code',
      issuer: 'SAP Learning',
      date: 'Agosto 2024',
      description: 'Desarrollo de aplicaciones y extensiones usando SAP Build Code con herramientas potenciadas por IA, incluyendo Joule para desarrollo empresarial.',
      skills: ['SAP Build', 'Low-Code', 'AI Tools', 'Enterprise Apps'],
      image: 'assets/certificates/sap-build-code.jpg',
      link: 'https://www.credly.com/badges/8dc10aec-7b74-40ec-be38-b0ac13336df5'
    },
    {
      title: 'Develop and Automate with SAP Build',
      issuer: 'SAP Learning',
      date: 'Agosto 2024',
      description: 'Automatización de procesos y desarrollo de aplicaciones con SAP Build en SAP BTP usando herramientas drag-and-drop para crear soluciones empresariales.',
      skills: ['SAP Build', 'Process Automation', 'SAP BTP', 'Business Apps'],
      image: 'assets/certificates/sap-automate.jpg',
      link: 'https://www.credly.com/badges/f5b5bd2a-10fc-4ff5-9137-0cc7591be4e3'
    },
    {
      title: 'Exploring SAP Analytics Cloud',
      issuer: 'SAP Learning',
      date: 'Agosto 2024',
      description: 'Navegación y uso de SAP Analytics Cloud para análisis de datos, creación de dashboards, storytelling con datos y planificación empresarial.',
      skills: ['SAP Analytics Cloud', 'Data Visualization', 'BI', 'Dashboards'],
      image: 'assets/certificates/sap-analytics.jpg',
      link: 'https://badger.learning.sap.com/verify/xihyf-tovuh-tilam-garyk-pyryl'
    },
    {
      title: 'Learn SQL Basics for Data Science',
      issuer: 'UC Davis - Coursera',
      date: 'Junio 2022',
      description: 'Especialización en SQL para ciencia de datos, incluyendo consultas complejas, análisis de datos, pruebas A/B y computación distribuida con Spark SQL.',
      skills: ['SQL', 'Data Science', 'Spark SQL', 'Data Analysis'],
      image: 'assets/certificates/sql-data-science.jpg',
      link: 'https://coursera.org/verify/specialization/TVAQ75VDZ8GD'
    },
    {
      title: 'Game Design: Art and Concepts',
      issuer: 'CalArts - Coursera',
      date: 'Junio 2023',
      description: 'Especialización en diseño de videojuegos cubriendo narrativa, desarrollo de personajes, diseño de mundos y conceptualización artística para juegos.',
      skills: ['Game Design', 'Storytelling', 'Character Design', 'World Building'],
      image: 'assets/certificates/game-design.jpg',
      link: 'https://coursera.org/verify/specialization/2EN9CDGWNCDH'
    },
    {
      title: 'Academic Process Mining Fundamentals',
      issuer: 'Celonis',
      date: 'Octubre 2023',
      description: 'Fundamentos de minería de procesos para análisis, optimización y mejora de procesos empresariales usando técnicas de process mining.',
      skills: ['Process Mining', 'Business Process', 'Data Analysis', 'Optimization'],
      image: 'assets/certificates/process-mining.jpg',
      link: 'https://www.credly.com/badges/1c624d4d-1861-4377-872d-c3c87734052e'
    },
    {
      title: 'SCRUM Fundamentals Certified',
      issuer: 'SCRUMstudy',
      date: 'Junio 2022',
      description: 'Certificación en fundamentos de Scrum, metodologías ágiles, roles del equipo Scrum y gestión de proyectos con framework Scrum.',
      skills: ['Scrum', 'Agile', 'Project Management', 'Framework'],
      image: 'assets/certificates/scrum-fundamentals.jpg'
    },
    {
      title: 'Excel Básico',
      issuer: 'Interbank - Aprendemás',
      date: '2024',
      description: 'Curso de Excel básico cubriendo fórmulas fundamentales, formato de datos, tablas, gráficos y herramientas esenciales de análisis.',
      skills: ['Excel', 'Spreadsheets', 'Data Management', 'Office'],
      image: 'assets/certificates/excel-basico.jpg'
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); 
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 
      ? this.certificates.length - 1 
      : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  onImageError(event: any) {
    event.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-family="Arial" font-size="20">Certificado</text></svg>';
  }
}