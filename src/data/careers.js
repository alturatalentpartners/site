// Listings shown on the Careers page. `kind: 'internal'` = an actual open
// role AT Altura itself. `kind: 'client'` = a role Altura is filling on
// behalf of a client — the client's name is never used, consistent with how
// we run confidential searches. `campaign: true` marks a broad, multi-role/
// multi-location listing (no single fixed comp or client) rather than a
// specific job order — it gets different section labels on its detail page
// (see careers/[slug].astro) and a generic "interest" preselect instead of
// its own dropdown option. `country` feeds the JobPosting schema's
// applicantLocationRequirements — defaults to 'Americas' when omitted.
export const OPEN_POSITIONS = [
  {
    slug: 'executive-assistant',
    kind: 'internal',
    title: 'Executive Assistant',
    titleEs: 'Asistente Ejecutivo/a',
    location: 'Remote (Americas time zones)',
    locationEs: 'Remoto (husos horarios de América)',
    type: 'Full-time',
    typeEs: 'Tiempo completo',
    description:
      'You’ll work directly with our Managing Partner to keep searches moving — coordinating candidate and client schedules, managing confidential search materials, and handling the operational details that let us focus on the work that matters. We’re looking for someone sharp, discreet and comfortable with ambiguity — the same qualities we look for when we recruit EAs for our clients.',
    descriptionEs:
      'Vas a trabajar directamente con nuestro Managing Partner para que las búsquedas avancen — coordinando agendas de candidatos y clientes, gestionando material confidencial de cada búsqueda, y encargándote de los detalles operativos que nos permiten enfocarnos en lo que importa. Buscamos a alguien perspicaz, discreto/a y cómodo/a con la ambigüedad — las mismas cualidades que buscamos cuando reclutamos EAs para nuestros clientes.',

    aboutRole:
      'Altura is a boutique executive search firm — small by design, not by accident. As our first Executive Assistant hire, you won’t be managing someone else’s inbox in isolation; you’ll be close to how a search firm actually runs, from candidate outreach to client delivery. This role reports directly to the Managing Partner and has real room to grow as the firm does.',
    aboutRoleEs:
      'Altura es una firma boutique de búsqueda ejecutiva — pequeña por diseño, no por accidente. Como nuestra primera contratación de Executive Assistant, no vas a estar gestionando la bandeja de entrada de alguien más de forma aislada; vas a estar cerca de cómo funciona realmente una firma de búsqueda, desde el contacto con candidatos hasta la entrega al cliente. Este rol reporta directamente al Managing Partner y tiene margen real de crecimiento a medida que la firma crece.',

    responsibilities: [
      'Manage and coordinate the Managing Partner’s calendar, including candidate and client calls across multiple time zones',
      'Prepare and organize confidential search materials — candidate profiles, interview notes, client briefs',
      'Serve as a first point of contact for candidates and clients, with the discretion the role demands',
      'Track progress and deadlines across multiple active searches',
      'Draft and proofread client-facing communications and candidate correspondence',
      'Support light research — market mapping, company background, LinkedIn sourcing assistance',
      'Handle day-to-day operational and administrative tasks that keep the firm running smoothly',
    ],
    responsibilitiesEs: [
      'Gestionar y coordinar la agenda del Managing Partner, incluyendo llamadas con candidatos y clientes en distintos husos horarios',
      'Preparar y organizar material confidencial de cada búsqueda — perfiles de candidatos, notas de entrevista, briefs de cliente',
      'Ser el primer punto de contacto para candidatos y clientes, con la discreción que el rol exige',
      'Hacer seguimiento del avance y los plazos de varias búsquedas activas en simultáneo',
      'Redactar y revisar comunicaciones con clientes y candidatos',
      'Apoyar en investigación liviana — mapeo de mercado, research de empresas, asistencia en sourcing en LinkedIn',
      'Encargarte de tareas operativas y administrativas del día a día que mantienen la firma funcionando',
    ],

    requirements: [
      '2+ years of experience as an Executive Assistant, coordinator, or similar support role',
      'Excellent written and verbal communication in English (Spanish is a plus, given our LATAM footprint)',
      'Rock-solid organizational skills and comfort managing multiple priorities at once',
      'Discretion — you’ll regularly handle confidential candidate and client information',
      'Comfortable working independently in a remote, small-team environment',
      'Proficiency with common productivity tools (Google Workspace, calendar and scheduling tools)',
    ],
    requirementsEs: [
      '2+ años de experiencia como Executive Assistant, coordinador/a, o rol de soporte similar',
      'Excelente comunicación escrita y verbal en inglés (el español suma, dado nuestro alcance en LATAM)',
      'Habilidades organizativas sólidas y comodidad manejando varias prioridades a la vez',
      'Discreción — vas a manejar regularmente información confidencial de candidatos y clientes',
      'Comodidad trabajando de forma independiente en un equipo remoto y pequeño',
      'Manejo de herramientas de productividad habituales (Google Workspace, herramientas de agenda y scheduling)',
    ],

    niceToHave: [
      'Prior experience in recruiting, staffing, or a professional services firm',
      'Experience supporting a founder or senior executive directly',
    ],
    niceToHaveEs: [
      'Experiencia previa en reclutamiento, staffing, o una firma de servicios profesionales',
      'Experiencia dando soporte directo a un fundador o ejecutivo senior',
    ],

    benefits: [
      'Competitive compensation, based on experience',
      'Fully remote',
      'Direct mentorship from Altura’s Managing Partner, with real exposure to how a boutique search firm operates',
    ],
    benefitsEs: [
      'Compensación competitiva, según experiencia',
      'Totalmente remoto',
      'Mentoría directa del Managing Partner de Altura, con exposición real a cómo funciona una firma boutique de búsqueda',
    ],
  },
  {
    slug: 'tech-talent-us',
    kind: 'client',
    campaign: true,
    country: 'United States',
    title: 'Tech Talent — Multiple US Opportunities',
    titleEs: 'Talento Tech — Múltiples Oportunidades en EE. UU.',
    location: 'San Francisco · New York · Texas',
    locationEs: 'San Francisco · Nueva York · Texas',
    type: 'Onsite',
    typeEs: 'Presencial',
    description:
      'We’re actively recruiting tech talent on behalf of several client companies, with onsite roles open in San Francisco, New York and Texas.',
    descriptionEs:
      'Estamos reclutando activamente talento tech en nombre de varias empresas clientes, con roles presenciales abiertos en San Francisco, Nueva York y Texas.',

    aboutRole:
      'We’re supporting several companies hiring across engineering, product and data roles in the US right now. Most positions are onsite in San Francisco, New York or Texas, and we’re looking to build relationships with strong technical profiles — whether or not there’s an exact match today.',
    aboutRoleEs:
      'Estamos apoyando a varias empresas que están contratando en áreas de ingeniería, producto y datos en Estados Unidos. La mayoría de las posiciones son presenciales en San Francisco, Nueva York o Texas, y buscamos construir relaciones con buenos perfiles técnicos, haya o no un match exacto hoy.',

    responsibilities: [
      'Software engineers, product managers, data scientists and other technical profiles, across seniority levels',
      'Based in — or open to relocating to — San Francisco, New York or Texas',
      'Comfortable with onsite, in-person collaboration; most of these roles are not remote',
      'Genuinely interested in a well-matched opportunity, not just a mass application',
    ],
    responsibilitiesEs: [
      'Ingenieros/as de software, product managers, data scientists y otros perfiles técnicos, en distintos niveles de seniority',
      'Que vivan en — o estén dispuestos/as a mudarse a — San Francisco, Nueva York o Texas',
      'Cómodos/as con trabajo presencial y colaboración en persona; la mayoría de estos roles no son remotos',
      'Con interés genuino en una oportunidad bien matcheada, no solo en postularse en masa',
    ],

    requirements: [
      'Authorized to work in the United States for most roles',
      'Based in, or willing to relocate to, San Francisco, New York or Texas',
      'Open to onsite work',
      'Sponsorship may be available for a limited number of roles — let us know if you’d need it',
    ],
    requirementsEs: [
      'Autorización para trabajar en Estados Unidos para la mayoría de los roles',
      'Vivir en, o estar dispuesto/a a mudarte a, San Francisco, Nueva York o Texas',
      'Disponibilidad para trabajo presencial',
      'Sponsorship puede estar disponible para un número limitado de roles — avísanos si lo necesitas',
    ],

    niceToHave: [
      'We’re working on behalf of several companies at once, so we’ll match your profile to the right opportunity rather than a single fixed role',
      'Referrals are welcome — if you know someone great, send them our way',
      'We respond personally to every submission',
    ],
    niceToHaveEs: [
      'Trabajamos en nombre de varias empresas a la vez, así que vamos a matchear tu perfil con la oportunidad correcta en lugar de un solo rol fijo',
      'Las referencias son bienvenidas — si conoces a alguien bueno/a, mándanoslo/a',
      'Respondemos personalmente cada postulación',
    ],

    benefits: [
      'Share your profile once — we’ll reach out if there’s a genuine match with one of our active client searches',
      'Confidential by default — your information isn’t shared until you say go',
      'No mass outreach — we only contact you about roles that actually fit',
    ],
    benefitsEs: [
      'Comparte tu perfil una sola vez — te contactamos si hay un match genuino con alguna de nuestras búsquedas activas para clientes',
      'Confidencial por defecto — tu información no se comparte hasta que tú lo autorices',
      'Sin contacto masivo — te contactamos solo cuando un rol realmente coincide contigo',
    ],
  },
  {
    slug: 'forward-deployed-engineer',
    kind: 'client',
    country: 'United States',
    title: 'Forward Deployed Engineer',
    titleEs: 'Forward Deployed Engineer',
    location: 'San Francisco, CA or New York, NY',
    locationEs: 'San Francisco, CA o Nueva York, NY',
    type: 'Full-time · Onsite',
    typeEs: 'Tiempo completo · Presencial',
    description:
      'A confidential search for an early-stage AI company — we’re looking for a Forward Deployed Engineer who’s equally comfortable building production software and working directly with customers in real-world environments.',
    descriptionEs:
      'Una búsqueda confidencial para una empresa de IA en etapa temprana — buscamos un/a Forward Deployed Engineer que se sienta igual de cómodo/a construyendo software de producción y trabajando directamente con clientes en entornos reales.',

    aboutRole:
      'This is a confidential search managed by Altura Talent Partners for an early-stage AI company. We’re looking for a Forward Deployed Engineer who is equally comfortable building production software and working directly with customers in real-world environments. You’ll sit at the intersection of engineering, product and customer deployment — understanding complex workflows, building technical solutions, implementing them alongside users, and turning what you learn in the field into improvements to the core product. This is not a traditional customer success role — we’re looking for a strong software engineer who can communicate just as effectively with non-technical users as with engineers.',
    aboutRoleEs:
      'Esta es una búsqueda confidencial gestionada por Altura Talent Partners para una empresa de IA en etapa temprana. Buscamos un/a Forward Deployed Engineer que se sienta igual de cómodo/a construyendo software de producción y trabajando directamente con clientes en entornos reales. Vas a estar en la intersección entre ingeniería, producto e implementación con clientes — entendiendo flujos de trabajo complejos, construyendo soluciones técnicas, implementándolas junto a los usuarios, y convirtiendo lo que aprendas en el campo en mejoras al producto principal. Este no es un rol tradicional de customer success — buscamos un/a ingeniero/a de software sólido/a que pueda comunicarse igual de bien con usuarios no técnicos que con otros ingenieros.',

    responsibilities: [
      'Build production software using Python and TypeScript',
      'Deploy technical solutions directly with customers',
      'Work alongside users during onboarding and implementation',
      'Build customer-specific integrations and configurations',
      'Diagnose and resolve technical issues during live deployments',
      'Translate customer workflows into product and engineering requirements',
      'Own ambiguous problems from discovery through production',
      'Work closely with the core engineering team',
      'Travel to customer locations when required',
    ],
    responsibilitiesEs: [
      'Construir software de producción usando Python y TypeScript',
      'Implementar soluciones técnicas directamente con clientes',
      'Trabajar junto a los usuarios durante el onboarding e implementación',
      'Construir integraciones y configuraciones específicas para cada cliente',
      'Diagnosticar y resolver problemas técnicos durante implementaciones en vivo',
      'Traducir flujos de trabajo de clientes en requerimientos de producto e ingeniería',
      'Hacerte cargo de problemas ambiguos desde el descubrimiento hasta producción',
      'Trabajar de cerca con el equipo de ingeniería principal',
      'Viajar a las instalaciones de clientes cuando sea necesario',
    ],

    requirements: [
      'Strong software engineering fundamentals',
      'Production experience with Python',
      'Production experience with TypeScript',
      'Ability to independently own problems end-to-end',
      'Comfortable operating in ambiguous environments',
      'Excellent communication skills',
      'Comfortable working directly with non-technical users',
      'Willingness to travel',
      'Comfortable working onsite in San Francisco or New York',
    ],
    requirementsEs: [
      'Fundamentos sólidos de ingeniería de software',
      'Experiencia en producción con Python',
      'Experiencia en producción con TypeScript',
      'Capacidad de hacerte cargo de problemas de punta a punta de forma independiente',
      'Comodidad operando en entornos ambiguos',
      'Excelentes habilidades de comunicación',
      'Comodidad trabajando directamente con usuarios no técnicos',
      'Disposición para viajar',
      'Comodidad trabajando de forma presencial en San Francisco o Nueva York',
    ],

    niceToHave: [
      'Forward Deployed Engineering or Solutions Engineering experience',
      'Customer-facing technical experience',
      'Early-stage startup experience',
      'AWS',
      'Industrial or field-heavy industry experience',
      'AI-enabled product experience',
      'Exceptional new graduates with unusually strong technical ability and ownership may also be considered',
    ],
    niceToHaveEs: [
      'Experiencia en Forward Deployed Engineering o Solutions Engineering',
      'Experiencia técnica de cara al cliente',
      'Experiencia en startups en etapa temprana',
      'AWS',
      'Experiencia en industrias operativas o de campo',
      'Experiencia en productos con IA',
      'Recién graduados/as excepcionales con capacidad técnica y ownership fuera de lo común también pueden ser considerados/as',
    ],

    benefits: [
      'Base salary: $140,000–$160,000 USD',
      'Equity: 0.30%–1.00%',
      'Visa sponsorship available',
      'Relocation available',
      'Onsite in San Francisco or New York',
    ],
    benefitsEs: [
      'Salario base: USD $140,000–$160,000',
      'Equity: 0.30%–1.00%',
      'Sponsorship de visa disponible',
      'Reubicación disponible',
      'Presencial en San Francisco o Nueva York',
    ],
  },
  {
    slug: 'founding-engineer',
    kind: 'client',
    country: 'United States',
    title: 'Founding Engineer',
    titleEs: 'Founding Engineer',
    location: 'San Francisco, CA or New York, NY',
    locationEs: 'San Francisco, CA o Nueva York, NY',
    type: 'Full-time · Onsite',
    typeEs: 'Tiempo completo · Presencial',
    description:
      'A confidential search for an early-stage AI company — we’re looking for a highly autonomous Founding Engineer to become one of the earliest members of the product and engineering team, in a true 0→1 role.',
    descriptionEs:
      'Una búsqueda confidencial para una empresa de IA en etapa temprana — buscamos un/a Founding Engineer muy autónomo/a para ser uno de los primeros miembros del equipo de producto e ingeniería, en un rol 0→1 real.',

    aboutRole:
      'This is a confidential search managed by Altura Talent Partners for an early-stage AI company. We’re looking for a highly autonomous Founding Engineer to become one of the earliest members of the product and engineering team. This is a true 0→1 opportunity with significant ownership. You’ll work across the stack, take ambiguous problems from idea to production, collaborate directly with users, and help shape both the product and the technical foundation of the company.',
    aboutRoleEs:
      'Esta es una búsqueda confidencial gestionada por Altura Talent Partners para una empresa de IA en etapa temprana. Buscamos un/a Founding Engineer muy autónomo/a para convertirse en uno de los primeros miembros del equipo de producto e ingeniería. Esta es una oportunidad 0→1 real, con ownership significativo. Vas a trabajar a lo largo de todo el stack, llevar problemas ambiguos desde la idea hasta producción, colaborar directamente con usuarios, y ayudar a moldear tanto el producto como la base técnica de la empresa.',

    responsibilities: [
      'Own major product features from concept through production',
      'Build across frontend, backend and AI-enabled functionality',
      'Develop primarily with Python and TypeScript',
      'Work on complex interactive and data-heavy product experiences',
      'Build AI-assisted workflows',
      'Solve technically ambiguous problems with limited structure',
      'Work directly with users and iterate based on real feedback',
      'Influence architecture and technical decisions',
      'Help establish engineering processes and culture',
      'Contribute to future engineering hiring',
      'Ship quickly and continuously improve the product',
    ],
    responsibilitiesEs: [
      'Hacerte cargo de features de producto importantes, desde el concepto hasta producción',
      'Construir en frontend, backend y funcionalidad habilitada por IA',
      'Desarrollar principalmente con Python y TypeScript',
      'Trabajar en experiencias de producto complejas, interactivas y con mucho manejo de datos',
      'Construir flujos de trabajo asistidos por IA',
      'Resolver problemas técnicamente ambiguos con poca estructura',
      'Trabajar directamente con usuarios e iterar en base a feedback real',
      'Influir en decisiones de arquitectura y técnicas',
      'Ayudar a establecer procesos y cultura de ingeniería',
      'Contribuir a futuras contrataciones de ingeniería',
      'Lanzar rápido y mejorar el producto de forma continua',
    ],

    requirements: [
      'Strong engineering generalist',
      'Production experience with Python',
      'Production experience with TypeScript',
      'Ability to work across different parts of the stack',
      'Strong product intuition',
      'High autonomy and ownership',
      'Comfortable solving poorly defined problems',
      'Strong bias toward shipping',
      'Ability to take projects from ambiguity to production',
      'Comfortable in an early-stage startup environment',
      'Willing to work onsite in San Francisco or New York',
    ],
    requirementsEs: [
      'Ingeniero/a generalista sólido/a',
      'Experiencia en producción con Python',
      'Experiencia en producción con TypeScript',
      'Capacidad de trabajar en distintas partes del stack',
      'Buena intuición de producto',
      'Alta autonomía y ownership',
      'Comodidad resolviendo problemas mal definidos',
      'Fuerte sesgo hacia lanzar (shippear)',
      'Capacidad de llevar proyectos desde la ambigüedad hasta producción',
      'Comodidad en un entorno de startup en etapa temprana',
      'Disposición a trabajar de forma presencial en San Francisco o Nueva York',
    ],

    niceToHave: [
      'LLM-powered applications',
      'Computer vision',
      'Geometry, rendering or canvas-based applications',
      'Real-time or collaborative software',
      'Industrial or operational technology',
      'Zero-to-one product development',
      'Early-stage startup experience',
      'Exceptional new graduates with unusually strong technical ability, product thinking and independence may also be considered',
    ],
    niceToHaveEs: [
      'Aplicaciones potenciadas por LLMs',
      'Visión por computadora',
      'Aplicaciones de geometría, rendering o basadas en canvas',
      'Software en tiempo real o colaborativo',
      'Tecnología industrial u operativa',
      'Desarrollo de producto de cero a uno',
      'Experiencia en startups en etapa temprana',
      'Recién graduados/as excepcionales con capacidad técnica, pensamiento de producto e independencia fuera de lo común también pueden ser considerados/as',
    ],

    benefits: [
      'Base salary: $140,000–$160,000 USD',
      'Equity: 0.30%–1.00%',
      'Visa sponsorship available',
      'Relocation available',
      'Onsite in San Francisco or New York',
    ],
    benefitsEs: [
      'Salario base: USD $140,000–$160,000',
      'Equity: 0.30%–1.00%',
      'Sponsorship de visa disponible',
      'Reubicación disponible',
      'Presencial en San Francisco o Nueva York',
    ],
  },
  {
    slug: 'hotel-operations-manager',
    kind: 'client',
    country: 'Dominican Republic',
    title: 'Hotel Operations Manager',
    titleEs: 'Gerente/a de Operaciones Hoteleras',
    location: 'Gascue, Santo Domingo, Dominican Republic',
    locationEs: 'Gascue, Santo Domingo, República Dominicana',
    type: 'Indefinite-term · Onsite',
    typeEs: 'Tiempo Indefinido · Presencial',
    description:
      'Altura Talent Partners is managing this search for an independent 27-room hotel in Gascue, Santo Domingo — currently going through renovation and reorganization, and looking for a hands-on Operations Manager to lead daily operations.',
    descriptionEs:
      'Altura Talent Partners está gestionando esta búsqueda para un hotel independiente de 27 habitaciones en Gascue, Santo Domingo — en proceso de renovación y reorganización, busca un/a Gerente/a de Operaciones práctico/a para liderar la operación diaria.',

    aboutRole:
      'This is a confidential search managed by Altura Talent Partners for an independent 27-room hotel in Gascue, Santo Domingo. The hotel is going through a renovation and reorganization process. The person selected will be responsible for leading day-to-day operations, improving existing processes, and ensuring a consistent guest experience. Given the hotel’s size, we’re looking for a well-rounded, hands-on profile — someone able to supervise, execute, resolve issues, and directly support different areas of the operation when needed.',
    aboutRoleEs:
      'Altura Talent Partners está gestionando la búsqueda de un/a Gerente/a de Operaciones Hoteleras para un hotel independiente de 27 habitaciones ubicado en Gascue, Santo Domingo. El hotel se encuentra en un proceso de renovación y reorganización. La persona seleccionada será responsable de liderar su operación diaria, mejorar los procesos existentes y garantizar una experiencia consistente para los huéspedes. Por el tamaño del hotel, buscamos un perfil integral y práctico — con capacidad para supervisar, ejecutar, resolver incidencias y apoyar directamente las diferentes áreas de la operación cuando sea necesario.',

    responsibilities: [
      'Coordinate daily hotel operations and ensure smooth communication across departments',
      'Oversee front desk, accommodations, reservations and guest service',
      'Manage direct bookings and reservations coming from OTA platforms',
      'Monitor availability, rates, occupancy, billing and key operating metrics',
      'Coordinate, supervise and train the front desk team',
      'Develop procedures and standards that maintain operational continuity',
      'Organize schedules, assign responsibilities and follow up on staff performance',
      'Manage purchasing, inventory, vendors and cost control',
      'Oversee preventive and corrective maintenance of the property',
      'Handle and resolve operational issues and guest-related situations',
      'Implement actions to increase occupancy, direct sales and hotel revenue',
      'Prepare periodic operations and results reports for management',
      'Ensure compliance with internal policies and applicable regulations',
    ],
    responsibilitiesEs: [
      'Coordinar la operación diaria del hotel y asegurar la correcta comunicación entre sus diferentes áreas',
      'Supervisar la recepción, el alojamiento, las reservas y la atención al huésped',
      'Gestionar las reservas directas y las provenientes de plataformas OTA',
      'Monitorear disponibilidad, tarifas, ocupación, facturación y principales indicadores operativos',
      'Coordinar, supervisar y formar al equipo de recepción',
      'Desarrollar procedimientos y estándares que permitan mantener la continuidad de la operación',
      'Organizar horarios, asignar responsabilidades y dar seguimiento al desempeño del personal',
      'Gestionar compras, inventarios, proveedores y control de costes',
      'Supervisar el mantenimiento preventivo y correctivo de las instalaciones',
      'Atender y resolver incidencias operativas y situaciones relacionadas con huéspedes',
      'Implementar acciones para aumentar la ocupación, las ventas directas y los ingresos del hotel',
      'Preparar reportes periódicos de operación y resultados para la dirección',
      'Asegurar el cumplimiento de las políticas internas y de la normativa aplicable',
    ],

    requirements: [
      'Bachelor’s degree in Hospitality, Tourism, Hotel Administration or a related field',
      '5 to 15 years of professional experience in hospitality',
      'Direct experience in front desk, accommodations and hotel operations',
      'Familiarity with PMS systems, booking engines and OTA platforms such as Booking.com and Expedia',
      'Experience managing purchasing, vendors, inventory and operating costs',
      'Experience supervising and training staff',
      'Commercial mindset and results orientation',
      'Functional to advanced English for communicating with international guests',
      'Solid digital-tools proficiency and reporting skills',
      'Availability to work onsite in Santo Domingo',
    ],
    requirementsEs: [
      'Licenciatura en Hotelería, Turismo, Administración Hotelera o carrera relacionada',
      'Entre 5 y 15 años de experiencia profesional en hotelería',
      'Experiencia directa en recepción, alojamiento y operación hotelera',
      'Conocimiento de sistemas PMS, motores de reservas y plataformas OTA como Booking.com y Expedia',
      'Experiencia gestionando compras, proveedores, inventarios y costes operativos',
      'Experiencia supervisando y formando personal',
      'Capacidad comercial y orientación a resultados',
      'Inglés funcional o avanzado para comunicarse con huéspedes internacionales',
      'Buen manejo de herramientas digitales y elaboración de reportes',
      'Disponibilidad para trabajar presencialmente en Santo Domingo',
    ],

    niceToHave: [
      'Organized, resourceful and proactive person',
      'Hands-on leadership style, with a focus on developing the team',
      'Strong service orientation and focus on the guest experience',
      'Ability to make decisions and resolve situations independently',
      'Commercial mindset and discipline around cost control',
      'Flexibility to get directly involved in operations',
      'Genuine interest in running an independent hotel, where everyone takes on broad responsibilities',
    ],
    niceToHaveEs: [
      'Persona organizada, resolutiva y con iniciativa',
      'Liderazgo cercano y capacidad para desarrollar al equipo',
      'Orientación al servicio y a la experiencia del huésped',
      'Capacidad para tomar decisiones y resolver situaciones con autonomía',
      'Mentalidad comercial y disciplina en el control de costes',
      'Flexibilidad para involucrarse directamente en la operación',
      'Interés en gestionar un hotel independiente, donde cada persona asume responsabilidades amplias',
    ],

    benefits: [
      'Monthly salary of RD$65,000–RD$70,000, gross, based on experience',
      'Legally applicable tip/service charge',
      'Variable bonus tied to occupancy or revenue targets',
      'Indefinite-term (permanent) contract',
      'Initial three-month evaluation period, per applicable labor regulations',
      'Onsite work in Gascue, Santo Domingo',
    ],
    benefitsEs: [
      'Salario mensual de RD$65,000 a RD$70,000, brutos, según experiencia',
      'Propina legal aplicable',
      'Comisión variable vinculada al cumplimiento de objetivos de ocupación o facturación',
      'Contrato por tiempo indefinido',
      'Etapa inicial de evaluación de tres meses, conforme a la normativa laboral aplicable',
      'Trabajo presencial en Gascue, Santo Domingo',
    ],
  },
];
