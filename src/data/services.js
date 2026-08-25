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
      'Plataforma flexible para administrar las relaciones laborales, con módulos que cubren capacitación, cumplimiento normativo, autoservicio del empleado y gestión de viáticos.',
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
        title: 'SkillForce Comedor / Kiosco',
        items: [
          'Consulta y edición de datos del empleado',
          'Descarga de recibos de nómina',
          'Gestión de saldo de vacaciones',
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

export const suite = [
  {
    name: 'Talento',
    to: '/servicios/talento',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Administración de Capital Humano',
    to: '/servicios/capital-humano',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tesorería',
    to: '/servicios/tesoreria',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bolsa de trabajo',
    to: '/servicios/talento',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Procesos Operativos',
    to: '/servicios/servicios-complementarios',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Servicios complementarios',
    to: '/servicios/servicios-complementarios',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Facturación',
    to: '/servicios/tesoreria',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  },
]

export const riga = {
  name: 'RIGA',
  fullName: 'Resguardo Integrado de Gestión Administrativa',
  description:
    'Plataforma segura para la creación y resguardo de expedientes digitales de personas y empresas, con un algoritmo de Inteligencia Artificial para el reconocimiento y autenticación de documentos.',
  features: [
    'APIs para conectarse con cualquier plataforma o ERP',
    'Tablero que indica el nivel de cumplimiento por área',
    'Semáforo de obligaciones próximas a vencer',
    'Alertas por correo electrónico y SMS',
    'Acceso 24/7 desde cualquier dispositivo',
    'Robot RIGA: recopila, identifica, analiza y clasifica archivos y datos automáticamente',
  ],
  modules: [
    {
      name: 'LEGAL',
      description:
        'Información jurídica del expediente: acta constitutiva, poderes e identificaciones.',
    },
    {
      name: 'FILE',
      description:
        'Expedientes digitales con reconocimiento y autenticación de documentos mediante IA.',
    },
    {
      name: 'CONTROL',
      description:
        'Flujo y seguimiento de procesos críticos con semáforos de cumplimiento y alertas.',
    },
    {
      name: 'NEWS',
      description:
        'Información periódica: pagos de seguridad social, declaraciones e informes IMSS, Infonavit y UIF.',
    },
  ],
}

export const clients = [
  'Carl’s Jr',
  'CG Consultores',
  'Be People',
  'EXUS',
  'Magnitalent',
  'Maycky BTL',
  'Sanatorio Toluca',
  'Sports Clinic',
  'Sportway',
  'Zquadra',
  'Biatatus',
]

export const company = {
  name: 'SkillForce',
  tagline:
    'Somos la empresa líder, que a través de varias plataformas integramos tecnología, procesos y talento humano para ofrecer al cliente un servicio en experiencia significativa de manera transparente, colaborativa y vanguardista.',
  address:
    'Av. Lomas Verdes 67 B, Col. Santiago Occipaco, Naucalpan, Estado de México, C.P. 53250',
}
