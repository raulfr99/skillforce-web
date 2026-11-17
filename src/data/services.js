// Logos de clientes. Vite resuelve cada URL en build time.
const clientLogoModules = import.meta.glob(
  '../assets/logosClientes/*.{png,jpg,jpeg,svg,webp}',
  { eager: true, import: 'default' },
)

const logoByFile = Object.fromEntries(
  Object.entries(clientLogoModules).map(([path, url]) => {
    const file = path.split('/').pop()
    return [file, url]
  }),
)

export const services = [
  {
    id: 'talento',
    name: 'Talento',
    short:
      'Plataforma inteligente e interactiva que identifica talento y lo ubica en el puesto adecuado.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    hero:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Es una plataforma inteligente e interactiva que identifica talento y lo ubica en el puesto adecuado. Está conformado por una bolsa de trabajo en la que el candidato integra su expediente digital (RIGA file), con el proceso de reclutamiento, programación de entrevistas, selección y evaluación de candidatos. Ofrece los siguientes servicios:',
    sections: [
      {
        title: 'Atracción e identificación de talento',
        items: ['Publicación de vacantes', 'Registro de candidatos'],
      },
      {
        title: 'Evaluaciones acorde a la necesidad de la vacante',
        items: [
          'Psicométricas',
          'Técnicas',
          'Gamificación',
          'De confianza',
          'Polígrafo',
        ],
      },
      {
        title: 'Servicios adicionales',
        items: [
          'Investigación en Buró Laboral',
          'Estudios socioeconómicos y sociolaborales',
          'Contratos laborales por tipo de puesto y/o actividad',
        ],
      },
    ],
  },
  {
    id: 'capital-humano',
    name: 'Administración de Capital Humano',
    short:
      'Procesamos más de 25,000 nóminas mensuales con precisión, rapidez y actualización legal permanente.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    hero:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Suite integral para la administración del capital humano: nómina, seguridad social y timbrado. Procesamos más de 25,000 nóminas mensualmente y calculamos nóminas de más de 3,000 empleados en 3 minutos.',
    sections: [
      {
        title: 'SkillForce Payroll',
        items: [
          'Optimización de tiempos en cálculo y procesamiento de nómina',
          'Actualización legal permanente',
          'Configuración flexible por período de pago',
          'Generación automática de percepciones y deducciones',
          'Emisión de CFDI de nómina y servicios profesionales',
          'Finiquitos, liquidaciones, PTU, aguinaldo, adelantos, préstamos y pensión alimenticia',
          'Generación automática de contratos, cartas finiquito, recibos y cartas de renuncia',
          'Altas y bajas individuales o masivas, simulación de finiquitos',
          'Control de modificación de cuentas bancarias y traspaso de empleados entre nóminas',
        ],
      },
      {
        title: 'SkillForce IMSS',
        items: [
          'Simplifica la gestión de movimientos ante el IMSS',
          'Descarga de archivos .txt para SUA e IDSE',
          'Control de acuses y seguimiento de rechazos',
          'Conciliación automática con registros SUA (EMA, EBA)',
        ],
      },
      {
        title: 'SkillForce TIMS',
        items: [
          'Genera, distribuye y almacena CFDI de nómina',
          'Emisión y envío de recibos electrónicos de nómina 4.0',
          'Timbrado ilimitado sin costo adicional',
          'App para colaboradores: descarga masiva de recibos y solicitud de vacaciones',
        ],
      },
    ],
  },
  {
    id: 'servicios-complementarios',
    name: 'Servicios Complementarios',
    short:
      'Plataforma flexible para administrar las relaciones laborales de tu empresa.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    hero:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Plataforma flexible para administrar las relaciones laborales, con módulos que cubren capacitación, cumplimiento normativo, gestión de vacaciones y control de viáticos.',
    sections: [
      {
        title: 'SkillForce Educación Corporativa',
        items: [
          'Administra el historial de capacitación',
          'Registro, control de asistencia y evaluación de cursos',
        ],
      },
      {
        title: 'SkillForce Regulaciones',
        items: [
          'Gestiona el cumplimiento de Normas Oficiales Mexicanas (STPS)',
          'Incluye NOM 035',
        ],
      },
      {
        title: 'SkillForce Vacaciones',
        items: [
          'Control de saldo de días disponibles por colaborador',
          'Solicitud y autorización de vacaciones desde la app',
          'Cálculo automático de prima vacacional conforme a la LFT',
          'Reportes de días gozados, pendientes y acumulados',
        ],
      },
      {
        title: 'SkillForce Viáticos',
        items: [
          'Gestión presupuestaria de viajes',
          'Comprobación de gastos conforme a normas fiscales',
          'Vinculación con perfiles de puesto y nómina',
        ],
      },
    ],
  },
  {
    id: 'tesoreria',
    name: 'Tesorería',
    short:
      'Facturación, notas de crédito, pagos y control de saldos con timbrados ilimitados.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    hero:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Módulo de tesorería que centraliza la facturación y el control de cobranza de tu empresa, con validación fiscal y almacenamiento seguro de comprobantes.',
    sections: [
      {
        title: 'Funcionalidades',
        items: [
          'Generación de facturas, notas de crédito y anticipos',
          'Registro de pagos con timbrados ilimitados',
          'Control de saldos a favor',
          'Registro y control de vencimientos de clientes',
          'Almacenamiento de facturas en PDF y XML',
          'Manejo de conceptos fiscales',
          'Validación de comprobantes de pago',
        ],
      },
    ],
  },
]

// Bento 4×3 — se mantiene el layout pero refinamos tags y contenido.
export const suite = [
  {
    name: 'Talento',
    to: '/servicios/talento',
    variant: 'image',
    span: 'md:col-span-2 md:row-span-1',
    tagline: 'Identificación y evaluación de candidatos',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Administración de Capital Humano',
    to: '/servicios/capital-humano',
    variant: 'solid',
    span: 'md:col-span-2 md:row-span-1',
    tagline: '25,000 nóminas al mes · 3,000 empleados en 3 min',
  },
  {
    name: 'Tesorería',
    to: '/servicios/tesoreria',
    variant: 'solid',
    span: 'md:col-span-1 md:row-span-1',
    tagline: 'Timbrado ilimitado',
  },
  {
    name: 'SkillForce Bio',
    to: '/servicios/talento',
    variant: 'image',
    span: 'md:col-span-2 md:row-span-1',
    tagline: 'Expediente digital RIGA del candidato',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Procesos Operativos',
    to: '/servicios/servicios-complementarios',
    variant: 'image',
    span: 'md:col-span-1 md:row-span-1',
    tagline: 'Flujos y cumplimiento',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Servicios complementarios',
    to: '/servicios/servicios-complementarios',
    variant: 'solid',
    span: 'md:col-span-2 md:row-span-1',
    tagline: 'Capacitación · NOM 035 · Vacaciones · Viáticos',
  },
  {
    name: 'Facturación',
    to: '/servicios/tesoreria',
    variant: 'image',
    span: 'md:col-span-2 md:row-span-1',
    tagline: 'CFDI, pagos y control de cobranza',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  },
]

// Bloque "Quiénes somos" — contenido corporativo SkillForce.
export const about = {
  name: 'SkillForce',
  badge: '15 años de experiencia',
  intro:
    'Colaboramos con empresas de diferentes tamaños y sectores, generando cambios que optimizan su operación con beneficios tangibles y cuantificables.',
  description:
    'Evitamos errores que puedan llevarte a multas y recargos en materia fiscal y laboral, asegurando que tu empresa cumpla con todas las regulaciones y mantenga una gestión eficiente y sin contratiempos.',
  benefits: [
    'Soluciones a la medida de tu empresa en materia laboral',
    'Planes de bienestar en el entorno laboral y personal',
    'Descenso en carga administrativa',
    'Ahorro en software de nómina',
    'Reportes personalizados',
  ],
  services: [
    {
      name: 'Maquila de Nómina',
      description:
        'Procesamos la nómina de tu empresa con exactitud y rapidez a través de herramientas digitales de última generación.',
    },
    {
      name: 'Servicios Especializados (REPSE)',
      description:
        'Brindamos servicios especializados de acuerdo a las reformas en materia laboral vigentes.',
    },
    {
      name: 'Reclutamiento y selección',
      description:
        'Desarrollamos estrategias innovadoras y personalizadas en materia de atracción y selección de talento.',
    },
    {
      name: 'Servicios Profesionales',
      description:
        'Contamos con expertos en diversas áreas de negocios con el fin de desarrollar las mejores alternativas que se apeguen a tus necesidades.',
    },
    {
      name: 'Soluciones de pago',
      description:
        'Herramienta versátil y fácil de utilizar para el pago de bonos, viáticos, incentivos y premios.',
    },
    {
      name: 'Otros servicios',
      description:
        'Asesoría laboral, fiscal y contable, además de salud y seguros.',
    },
  ],
}

// Clientes — lista real de 19 logos en src/assets/logosClientes.
// theme: 'dark' = el logo es blanco/muy claro, necesita fondo oscuro para verse.
// theme: 'light' = logo oscuro o a color, va sobre fondo claro.
export const clients = [
  { name: 'AFOSO',         sector: 'Restaurantes',       theme: 'dark',  file: 'LOGO-AFOSO-SOMBRA-1024x625.png' },
  { name: 'Batiatus',      sector: 'Seguridad privada',  theme: 'light', file: 'Batiatus-removebg-preview.png' },
  { name: 'BTech',         sector: 'Tecnología',         theme: 'dark',  file: 'btech 2.png' },
  { name: "Carl's Jr",     sector: 'Restaurantes',       theme: 'light', file: 'Carls.png' },
  { name: 'Evolve RH',     sector: 'Recursos humanos',   theme: 'dark',  file: 'Evolve RH.png' },
  { name: 'EXUS',          sector: 'Limpieza industrial',theme: 'light', file: 'EXUS.png' },
  { name: 'GGC Consultores', sector: 'Consultoría',      theme: 'light', file: 'GGC-removebg-preview.png' },
  { name: 'Grupo Medios',  sector: 'Medios',             theme: 'light', file: 'GPO MEDIOS.png' },
  { name: 'Habitat',       sector: 'Inmobiliaria',       theme: 'dark',  file: 'Habitat-removebg-preview.png' },
  { name: 'Humanly',       sector: 'Recursos humanos',   theme: 'light', file: 'Logo Humanly.png' },
  { name: 'IDC',           sector: 'Editorial fiscal',   theme: 'light', file: 'IDC.png' },
  { name: 'JobFit',        sector: 'Talento',            theme: 'light', file: 'Jobfit.png' },
  { name: 'La Mansión',    sector: 'Restaurantes',       theme: 'light', file: 'La Mansion.png' },
  { name: 'Magnitalent',   sector: 'Talento',            theme: 'light', file: 'Logo MT tag negro.png' },
  { name: 'Maycky BTL',    sector: 'Marketing',          theme: 'light', file: 'Maycky Btl.png' },
  { name: 'México (MTCH)', sector: 'Medios',             theme: 'dark',  file: 'MTCH.jpg' },
  { name: 'Club Sportway', sector: 'Deporte',            theme: 'light', file: 'Sportway.png' },
  { name: 'Tredy',         sector: 'Recursos humanos',   theme: 'light', file: 'Tredy.png' },
  { name: 'Zquadra',       sector: 'Seguridad privada',  theme: 'light', file: 'Zquadra.png' },
].map((c) => ({ ...c, logo: logoByFile[c.file] }))

export const company = {
  name: 'SkillForce',
  tagline:
    'Somos la empresa líder, que a través de varias plataformas integramos tecnología, procesos y talento humano para ofrecer al cliente un servicio en experiencia significativa de manera transparente, colaborativa y vanguardista.',
  address:
    'Av. Lomas Verdes 67 B, Col. Santiago Occipaco, Naucalpan, Estado de México, C.P. 53250',
}
