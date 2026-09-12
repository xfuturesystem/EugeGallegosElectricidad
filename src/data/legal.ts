export interface LegalSection {
  title: string;
  content: string[];
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  lastUpdated: string;
  lawReference: string;
  sections: LegalSection[];
}

export const AVISO_LEGAL: LegalDocument = {
  title: 'Aviso Legal y Condiciones de Uso',
  subtitle: 'Información general en cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).',
  lastUpdated: 'Marzo 2025',
  lawReference: 'Ley 34/2002 (LSSI-CE) • Real Decreto 842/2002 (REBT) • Ley 21/1992 de Industria',
  sections: [
    {
      title: '1. Datos Identificativos del Titular',
      content: [
        'En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002 (LSSI-CE), se facilitan a continuación los datos del titular de este sitio web:',
        '• Titular profesional: Eugenio Gallegos (Eugenio Gallegos Electricidad)',
        '• Actividad: Instalaciones eléctricas, mantenimiento en baja tensión, legalizaciones de boletines CIE, cuadros eléctricos y recarga de vehículos eléctricos.',
        '• Domicilio profesional: Munoa Kalea, 22, 48903 San Vicente de Barakaldo, Bizkaia, España.',
        '• Registro oficial de Instalador Autorizado en Baja Tensión: 48/CCBT/-6418 (Categoría Especialista, Delegación Territorial de Industria de Bizkaia - Gobierno Vasco).',
        '• Correo electrónico de contacto: eugenioelectricistaautorizado@gmail.com',
        '• Teléfono de atención: +34 604 13 17 68',
        '• Seguro de Responsabilidad Civil: Póliza profesional en vigor para cobertura integral de trabajos e instalaciones eléctricas según exigencias del Reglamento Electrotécnico para Baja Tensión (REBT).',
      ],
    },
    {
      title: '2. Objeto y Ámbito de Aplicación',
      content: [
        'El presente Aviso Legal regula el acceso, navegación y uso del sitio web oficial de Eugenio Gallegos Electricidad.',
        'El acceso a este sitio web otorga la condición de Usuario e implica la aceptación expresa, plena y sin reservas de todas y cada una de las cláusulas y condiciones generales contenidas en este aviso.',
        'El Usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la ley vigente, la moral, las buenas costumbres y el orden público.',
      ],
    },
    {
      title: '3. Condiciones de Uso y Exención de Responsabilidad',
      content: [
        'La información técnica y los textos contenidos en este sitio web tienen una finalidad exclusivamente informativa y divulgativa acerca de los servicios de electricidad prestados por el instalador.',
        'Dicha información no constituye una oferta contractual vinculante hasta que no sea ratificada mediante un presupuesto formal, detallado y aceptado por escrito por ambas partes.',
        'El titular no se responsabiliza del mal uso que los usuarios puedan realizar de los contenidos de la web, ni de los daños o perjuicios provocados por caídas de red, virus informáticos o accesos no autorizados ajenos a su control razonable.',
        'Este sitio web puede contener enlaces a herramientas y servicios de terceros (como Google Maps para geolocalización o WhatsApp para mensajería instantánea). El titular no ejerce control sobre dichos sitios ajenos ni asume responsabilidad alguna por sus políticas o contenidos.',
      ],
    },
    {
      title: '4. Propiedad Intelectual e Industrial',
      content: [
        'Todos los contenidos de este sitio web, incluyendo sin limitación textos, fotografías de cuadros eléctricos e instalaciones reales, logotipos, marcas, iconos, diseño visual, código fuente y estructura de navegación, son propiedad de Eugenio Gallegos Electricidad o de terceros que han autorizado su uso.',
        'Quedan expresamente protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.',
        'Queda terminantemente prohibida la reproducción total o parcial, explotación, distribución, modificación o comunicación pública de cualquier contenido sin la autorización previa y por escrito del titular.',
      ],
    },
    {
      title: '5. Legislación Aplicable y Fuero Jurisdiccional',
      content: [
        'El presente Aviso Legal se rige en todos y cada uno de sus extremos por la legislación española aplicable.',
        'Para la resolución de cualquier controversia, litigio o discrepancia que pudiera suscitarse en relación con este sitio web o la actividad desarrollada en él, las partes acuerdan someterse a los Juzgados y Tribunales de Barakaldo / Bilbao (Bizkaia), con renuncia expresa a cualquier otro fuero que pudiera corresponderles, salvo disposición legal imperativa en materia de protección de consumidores y usuarios.',
      ],
    },
  ],
};

export const POLITICA_PRIVACIDAD: LegalDocument = {
  title: 'Política de Privacidad y Protección de Datos',
  subtitle: 'Tratamiento riguroso y transparente de datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).',
  lastUpdated: 'Marzo 2025',
  lawReference: 'Reglamento General de Protección de Datos (RGPD UE 2016/679) • Ley Orgánica 3/2018 (LOPDGDD)',
  sections: [
    {
      title: '1. Responsable del Tratamiento de sus Datos',
      content: [
        '• Responsable: Eugenio Gallegos (Eugenio Gallegos Electricidad)',
        '• N° de Instalador Eléctrico Autorizado: 48/CCBT/-6418',
        '• Domicilio: Munoa Kalea, 22, 48903 San Vicente de Barakaldo, Bizkaia, España',
        '• Correo electrónico para ejercicio de derechos: eugenioelectricistaautorizado@gmail.com',
        '• Teléfono: +34 604 13 17 68',
      ],
    },
    {
      title: '2. Finalidad del Tratamiento',
      content: [
        'Los datos personales facilitados por el usuario a través del formulario de contacto web, llamadas telefónicas, correo electrónico o WhatsApp se recaban con las siguientes finalidades exclusivas:',
        '1. Gestionar, responder y dar curso a sus solicitudes de información, dudas y peticiones de presupuesto.',
        '2. Coordinar citas técnicas, visitas de diagnóstico e intervenciones de urgencia diurna en su domicilio, empresa o comunidad.',
        '3. Prestación del servicio de instalación eléctrica, tramitación administrativa de boletines oficiales (CIE) ante los organismos de Industria y facturación contable de los trabajos ejecutados.',
        'En ningún caso utilizaremos sus datos personales para remitir publicidad masiva no solicitada (spam), ni elaboraremos perfiles comerciales automatizados.',
      ],
    },
    {
      title: '3. Legitimación para el Tratamiento',
      content: [
        'La base legal para el tratamiento de sus datos personales se fundamenta en:',
        '• Consentimiento del Usuario (Art. 6.1.a del RGPD): Al enviar voluntariamente el formulario de contacto o escribirnos solicitando presupuesto.',
        '• Aplicación de medidas precontractuales y ejecución de contrato (Art. 6.1.b del RGPD): Necesario para la elaboración formal de presupuestos técnicos, realización de reparaciones y legalización de instalaciones.',
        '• Cumplimiento de obligaciones legales (Art. 6.1.c del RGPD): Obligaciones tributarias, mercantiles y de seguridad industrial relativas al Reglamento Electrotécnico de Baja Tensión.',
      ],
    },
    {
      title: '4. Conservación de los Datos',
      content: [
        '• Datos de consultas y presupuestos no aceptados: Se conservarán durante el tiempo estrictamente necesario para resolver la consulta y realizar el seguimiento comercial razonable, procediéndose a su supresión posterior.',
        '• Datos de clientes y servicios contratados: Se conservarán durante la vigencia de la relación contractual y, tras su finalización, durante los plazos legalmente obligatorios para atender posibles responsabilidades civiles, tributarias y de seguridad técnica (un mínimo de 5 a 10 años conforme a la legislación aplicable).',
      ],
    },
    {
      title: '5. Destinatarios y Transferencias de Datos',
      content: [
        'Eugenio Gallegos Electricidad no vende, alquila ni cede datos personales a terceros con fines comerciales.',
        'Únicamente se comunicarán datos a terceros cuando exista una obligación legal o sea estrictamente indispensable para el servicio:',
        '• Delegación Territorial de Industria / Departamento de Desarrollo Económico del Gobierno Vasco, únicamente para el registro oficial de Certificados de Instalación Eléctrica (CIE).',
        '• Administración Tributaria y asesoría fiscal para el cumplimiento de obligaciones legales de facturación.',
        '• Proveedores tecnológicos necesarios para el funcionamiento del sitio web (como el servicio de entrega de formularios técnicos vía FormSubmit y protocolo seguro HTTPS).',
      ],
    },
    {
      title: '6. Derechos del Usuario (Derechos ARCO-POL)',
      content: [
        'La normativa de protección de datos le reconoce los siguientes derechos que puede ejercer en cualquier momento de forma gratuita:',
        '• Derecho de Acceso: Conocer qué datos personales suyos estamos tratando.',
        '• Derecho de Rectificación: Solicitar la corrección de datos inexactos o incompletos.',
        '• Derecho de Supresión ("Derecho al olvido"): Solicitar la eliminación de sus datos cuando ya no sean necesarios para los fines recabados.',
        '• Derecho de Oposición: Oponerse al tratamiento de sus datos por motivos fundamentados.',
        '• Derecho a la Limitación del Tratamiento: Solicitar que se limite el tratamiento de sus datos en los supuestos previstos legalmente.',
        '• Derecho a la Portabilidad: Recibir sus datos en un formato estructurado y de lectura mecánica.',
        'Para ejercer cualquiera de estos derechos, basta con enviar un correo electrónico a eugenioelectricistaautorizado@gmail.com adjuntando copia de su DNI/NIE o documento acreditativo con el asunto "Protección de Datos / Ejercicio de Derechos".',
        'Si considera que sus derechos no han sido satisfechos debidamente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica en www.aepd.es.',
      ],
    },
    {
      title: '7. Seguridad de la Información',
      content: [
        'Se adoptan las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología y la naturaleza de los datos almacenados.',
      ],
    },
  ],
};
