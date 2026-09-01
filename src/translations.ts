import { Translations, Language } from './types';

export const translations: Record<Language, Translations> = {
  th: {
    title: 'แบบฟอร์มลงทะเบียนเข้าร่วมสำรวจดินแดน & หน่วยพิฆาตอสูร (Task Form)',
    subtitle: 'Expedition Registration Form • RealBugz Task Testing Simulator (QA Assessment Phase)',
    badgeRole: 'ผู้พัฒนา / นักศึกษาผู้ออกแบบระบบ',
    badgeStudentName: 'ชื่อ-สกุล: พีรพัฒน์ ธงศรี',
    badgeStudentId: 'รหัสนักศึกษา: 66040233120',
    badgeInstitution: 'Demon Slayer & RealBugz QA Technical Assessment',
    
    sectionGeneral: '1. ข้อมูลส่วนบุคคลของผู้สมัคร (Personal Information)',
    sectionExpedition: '2. ประสบการณ์และบทบาทในการสำรวจ (Expedition Experience & Role)',
    sectionPreferences: '3. ความต้องการและช่องทางการติดต่อ (Preferences & Compensation)',
    sectionVerification: '4. เอกสารยืนยันตัวตนและข้อตกลง (Verification & Terms)',
    
    fullNameLabel: 'ชื่อ - นามสกุล (Full Name)',
    fullNamePlaceholder: 'เช่น คามาโดะ ทันจิโร่ หรือ ดร. อเล็กซานเดอร์ แวนซ์',
    
    emailLabel: 'อีเมลสำหรับติดต่อ (Email Address)',
    emailPlaceholder: 'explorer@expedition-realbugz.org',
    
    contactNumberLabel: 'เบอร์โทรศัพท์ติดต่อ (Contact Number)',
    contactNumberPlaceholder: '0812345678',
    contactNumberHint: 'กรุณากรอกตัวเลข 10 หลัก (เช่น 0812345678)',
    
    dobLabel: 'วัน/เดือน/ปีเกิด (Date of Birth)',
    
    archaeologyExpLabel: 'ประสบการณ์ด้านโบราณคดี / ทักษะสำรวจ (Archaeology Experience)',
    archaeologyExpOptions: {
      none: { label: 'ไม่มีประสบการณ์ (No experience)', desc: 'ผู้เริ่มต้นและพร้อมเรียนรู้การสำรวจภาคสนาม' },
      amateur: { label: 'ระดับสมัครเล่น (Amateur)', desc: 'เคยเข้าร่วมการสำรวจระยะสั้นหรือมีความสนใจเบื้องต้น' },
      intermediate: { label: 'ระดับปานกลาง (Intermediate)', desc: 'มีประสบการณ์ภาคสนาม 1-3 ปี เชี่ยวชาญการใช้อุปกรณ์' },
      professional: { label: 'ระดับมืออาชีพ / เสาหลัก (Professional)', desc: 'ผู้เชี่ยวชาญระดับสูง มีประสบการณ์นำทีมและรับมือสถานการณ์ฉุกเฉิน' },
    },

    preferredRoleLabel: 'บทบาทที่ต้องการในทีมสำรวจ (Preferred Role in the Expedition)',
    preferredRolePlaceholder: '-- กรุณาเลือกบทบาทหน้าที่ --',
    preferredRoles: [
      { value: 'researcher', label: 'นักวิจัย / นักโบราณคดี (Researcher / Archaeologist)' },
      { value: 'photographer', label: 'ช่างภาพบันทึกข้อมูล (Field Photographer)' },
      { value: 'drone_operator', label: 'ผู้ควบคุมโดรนและทำแผนที่ (Drone Operator)' },
      { value: 'cartographer', label: 'นักเขียนแผนที่และภูมิศาสตร์ (Cartographer)' },
      { value: 'excavation_lead', label: 'หัวหน้าทีมขุดค้น (Excavation Specialist)' },
      { value: 'medic', label: 'แพทย์สนามและปฐมพยาบาล (Field Medic)' },
      { value: 'survival_expert', label: 'ผู้เชี่ยวชาญการเอาชีวิตรอด / ปราบอสูร (Survival & Combat Expert)' },
    ],
    
    expeditionRegionLabel: 'ภูมิภาคที่ต้องการไปสำรวจ (Preferred Expedition Region)',
    expeditionRegionPlaceholder: '-- กรุณาเลือกภูมิภาคเป้าหมาย --',
    expeditionRegions: [
      { value: 'south_america', label: 'อเมริกาใต้ (South America - Amazon & Andes)', desc: 'ป่าดิบชื้น แหล่งอารยธรรมโบราณอินคา' },
      { value: 'africa', label: 'แอฟริกา (Africa - Sahara & Great Rift)', desc: 'หุบผา ทะเลทราย และแหล่งขุดค้นฟอสซิล' },
      { value: 'asia', label: 'เอเชีย (Asia - Mount Fujikasane & Silk Road)', desc: 'เทือกเขาสูง แหล่งโบราณสถานลึกลับและป่าวิสทีเรีย' },
      { value: 'europe', label: 'ยุโรป (Europe - Mediterranean & Alps)', desc: 'ซากปรักหักพังกรีก-โรมัน และถ้ำยุคก่อนประวัติศาสตร์' },
      { value: 'antarctica', label: 'แอนตาร์กติกา (Antarctica - Glacial Depths)', desc: 'ธารน้ำแข็งโบราณและสภาพแวดล้อมสุดขั้ว' },
      { value: 'eldoria_realm', label: 'ดินแดนเอลโดเรีย & ปราสาทไร้ขอบเขต (Eldoria / Infinity Castle)', desc: 'มิติลึกลับโบราณในตำนาน' },
    ],

    desiredSalaryLabel: 'เงินเดือนที่ต้องการต่อสัปดาห์ (Desired Salary per Week - USD)',
    desiredSalaryPlaceholder: 'เช่น 1500',
    desiredSalaryHint: 'ระบุตัวเลขค่าตอบแทนที่คาดหวังเป็นสกุล USD (เช่น 500 - 10,000)',

    contactMethodLabel: 'ช่องทางติดต่อที่สะดวก (Preferred Contact Method)',
    contactMethods: {
      email: 'อีเมล (Email)',
      phone: 'โทรศัพท์ (Phone Call)',
      whatsapp: 'WhatsApp / Messaging App',
    },
    
    passportLabel: 'อัปโหลดสำเนาหนังสือเดินทาง / บัตรประชาชน / ใบรับรอง (Upload Passport / National ID)',
    passportDropText: 'ลากไฟล์มาวางที่นี่ หรือ',
    passportBrowseText: 'เลือกไฟล์จากเครื่อง',
    passportSupportedText: 'รองรับไฟล์ JPG, PNG, PDF ขนาดไม่เกิน 10MB',
    passportSelectedText: 'ไฟล์ที่เลือกแล้ว:',
    removeFileText: 'ลบไฟล์',

    commentsLabel: 'ความคิดเห็นเพิ่มเติม / ทักษะพิเศษ (Additional Comments & Special Skills)',
    commentsPlaceholder: 'ระบุข้อมูลเพิ่มเติม เช่น ทักษะภาษา การขับขี่ อุปกรณ์พิเศษ หรือประสบการณ์ที่ผ่านมา...',
    
    agreeTermsLabel: 'ข้าพเจ้ายอมรับข้อกำหนดและเงื่อนไขการสำรวจ (Agreement to Terms and Conditions)',
    termsLinkText: 'อ่านข้อกำหนดและเงื่อนไข (Terms & Guidelines)',
    
    submitButton: 'ส่งใบสมัครการสำรวจ (Submit Application)',
    clearButton: 'ล้างข้อมูลฟอร์ม (Clear Form)',
    submittingText: 'กำลังตรวจสอบข้อมูลและส่งแบบฟอร์ม...',
    viewSpecsButton: 'ดูข้อกำหนดระบบ (QA Test Specifications)',
    
    // Error messages
    errorRequired: 'กรุณากรอกข้อมูลในช่องนี้',
    errorEmailInvalid: 'รูปแบบอีเมลไม่ถูกต้อง (ตัวอย่าง: explorer@expedition-realbugz.org)',
    errorPhoneInvalid: 'เบอร์โทรศัพท์ต้องประกอบด้วยตัวเลข 10 หลักเท่านั้น',
    errorDobRequired: 'กรุณาเลือกวันเกิดของคุณ',
    errorDobFuture: 'วันเกิดต้องไม่อยู่ในอนาคต',
    errorExpRequired: 'กรุณาเลือกระดับประสบการณ์',
    errorRoleRequired: 'กรุณาเลือกบทบาทที่ต้องการในทีมสำรวจ',
    errorRegionRequired: 'กรุณาเลือกภูมิภาคเป้าหมายการสำรวจ',
    errorSalaryInvalid: 'กรุณาระบุจำนวนเงินเดือนที่ถูกต้อง (ตัวเลขมากกว่า 0)',
    errorPassportRequired: 'กรุณาอัปโหลดเอกสารยืนยันตัวตน (Passport/National ID)',
    errorPassportInvalidType: 'ชนิดไฟล์ไม่ถูกต้อง กรุณาอัปโหลดเฉพาะไฟล์ JPG, PNG หรือ PDF',
    errorTermsRequired: 'คุณต้องยอมรับข้อกำหนดและเงื่อนไขก่อนส่งใบสมัคร',
    
    // Success Modal
    successTitle: 'ส่งใบสมัครการสำรวจสำเร็จ! (Application Approved)',
    successSubtitle: 'RealBugz Expedition Dossier Generated (滅)',
    successMessage: 'ยินดีด้วย! ข้อมูลการลงทะเบียนสำรวจของคุณผ่านการตรวจสอบเรียบร้อยแล้ว รหัสเอกสารของคุณถูกสร้างและบันทึกในระบบ',
    successDossierId: 'รหัสเอกสารการสำรวจ (Dossier Code ID):',
    successClose: 'ปิดหน้าต่าง',
    successPrint: 'พิมพ์ใบสมัครการสำรวจ',
    
    termsModalTitle: 'ข้อกำหนดและเงื่อนไขการเข้าร่วมสำรวจ (Expedition Terms & Code of Conduct)',
    termsModalContent: [
      '1. สมาชิกทีมสำรวจต้องปฏิบัติตามระเบียบความปลอดภัยและคำสั่งของหัวหน้าทีมสำรวจอย่างเคร่งครัด',
      '2. วัตถุโบราณ เอกสาร และตัวอย่างทางธรณีวิทยาที่ค้นพบ ถือเป็นสมบัติทางวิชาการ ห้ามนำไปแสวงหาผลประโยชน์ส่วนตัว',
      '3. ข้อมูลพิกัดและบันทึกการสำรวจถือเป็นความลับสูงสุดของคณะสำรวจ จนกว่าจะมีการเผยแพร่อย่างเป็นทางการ',
      '4. สมาชิกต้องผ่านการประเมินความพร้อมทางร่างกายและได้รับการตรวจรับรองสุขภาพก่อนออกเดินทางจริง',
    ],
    termsModalClose: 'ข้าพเจ้าเข้าใจและยอมรับ',

    specsTitle: 'ข้อกำหนดสำหรับทดสอบระบบ (QA Test Specifications)',
    specsSubtitle: 'เอกสารอ้างอิงเกณฑ์การตรวจสอบ (Acceptance Criteria) ตาม RealBugz Task Form',
    specsClose: 'ปิดหน้าต่างข้อกำหนด',
    specsItems: [
      { title: 'Full Name', desc: 'ต้องไม่เป็นค่าว่าง รองรับชื่อ-นามสกุล' },
      { title: 'Email Address', desc: 'ต้องเป็นรูปแบบอีเมลที่ถูกต้อง (RFC 5322 Standard)' },
      { title: 'Contact Number', desc: 'เกณฑ์ที่ถูกต้อง: ต้องเป็นตัวเลข 10 หลัก (สังเกต: มี Intentional Bug ให้ตรวจสอบ!)' },
      { title: 'Date of Birth', desc: 'ต้องไม่เป็นค่าว่าง และต้องเป็นวันที่ในอดีต (ไม่ใช่วันที่ในอนาคต)' },
      { title: 'Archaeology Experience', desc: 'ต้องเลือก 1 ตัวเลือก (None, Amateur, Intermediate, Professional)' },
      { title: 'Preferred Role', desc: 'ต้องเลือก 1 บทบาทจาก Dropdown' },
      { title: 'Preferred Region', desc: 'ต้องเลือก 1 ภูมิภาคเป้าหมายจาก Dropdown' },
      { title: 'Desired Salary', desc: 'ต้องเป็นตัวเลขที่มากกว่า 0 USD/week' },
      { title: 'Preferred Contact Method', desc: 'ต้องเลือก 1 ช่องทาง (Email, Phone, WhatsApp)' },
      { title: 'Passport/ID Upload', desc: 'ต้องแนบไฟล์ รองรับเฉพาะ .jpg, .png, .pdf ขนาดไม่เกิน 10MB' },
      { title: 'Agreement to Terms', desc: 'เกณฑ์ที่ถูกต้อง: ต้องติ๊กถูกยอมรับเงื่อนไข (สังเกต: มี Intentional Bug ให้ตรวจสอบ!)' },
    ]
  },
  
  en: {
    title: 'Expedition in Search of Eldoria & Corps Task Form',
    subtitle: 'Expedition Registration Form • RealBugz Task Testing Simulator (QA Assessment Phase)',
    badgeRole: 'Lead Developer / Student System Designer',
    badgeStudentName: 'ชื่อ-สกุล: พีรพัฒน์ ธงศรี',
    badgeStudentId: 'รหัสนักศึกษา: 66040233120',
    badgeInstitution: 'Demon Slayer & RealBugz QA Technical Assessment',
    
    sectionGeneral: '1. Personal Information',
    sectionExpedition: '2. Experience & Preferred Role',
    sectionPreferences: '3. Compensation & Contact Preferences',
    sectionVerification: '4. Verification & Terms Agreement',
    
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g., Dr. Alexander Vance or Tanjiro Kamado',
    
    emailLabel: 'Email Address',
    emailPlaceholder: 'explorer@expedition-realbugz.org',
    
    contactNumberLabel: 'Contact Number',
    contactNumberPlaceholder: '0812345678',
    contactNumberHint: 'Please enter a 10-digit phone number (e.g., 0812345678)',
    
    dobLabel: 'Date of Birth',
    
    archaeologyExpLabel: 'Archaeology Experience',
    archaeologyExpOptions: {
      none: { label: 'No experience', desc: 'Ready for entry-level tasks and field training' },
      amateur: { label: 'Amateur', desc: 'Completed basic coursework or hobbyist archaeology' },
      intermediate: { label: 'Intermediate', desc: '1-3 years of active field survey and artifact recording' },
      professional: { label: 'Professional / Pillar', desc: '5+ years leading excavation expeditions and survival protocols' },
    },

    preferredRoleLabel: 'Preferred Role in the Expedition',
    preferredRolePlaceholder: '-- Select your preferred role --',
    preferredRoles: [
      { value: 'researcher', label: 'Researcher / Archaeologist' },
      { value: 'photographer', label: 'Field Photographer' },
      { value: 'drone_operator', label: 'Drone Operator & Aerial Mapper' },
      { value: 'cartographer', label: 'Cartographer & GIS Specialist' },
      { value: 'excavation_lead', label: 'Excavation Specialist' },
      { value: 'medic', label: 'Field Medic & First Responder' },
      { value: 'survival_expert', label: 'Survival & Combat Specialist' },
    ],
    
    expeditionRegionLabel: 'Preferred Expedition Region',
    expeditionRegionPlaceholder: '-- Select an expedition destination --',
    expeditionRegions: [
      { value: 'south_america', label: 'South America (Amazon & Andes)', desc: 'Dense rainforests and ancient Incan ruins' },
      { value: 'africa', label: 'Africa (Sahara & Great Rift)', desc: 'Desert archaeology and fossil excavation' },
      { value: 'asia', label: 'Asia (Mount Fujikasane & Silk Road)', desc: 'Alpine peaks, mysterious wisteria sanctuaries, and ancient temples' },
      { value: 'europe', label: 'Europe (Mediterranean & Alps)', desc: 'Graeco-Roman ruins and prehistoric subterranean caves' },
      { value: 'antarctica', label: 'Antarctica (Glacial Depths)', desc: 'Subglacial exploratory drilling in extreme cold' },
      { value: 'eldoria_realm', label: 'Realm of Eldoria & Infinity Castle', desc: 'Legendary shifting dimensional sanctuary' },
    ],

    desiredSalaryLabel: 'Desired Salary per Week (USD)',
    desiredSalaryPlaceholder: 'e.g. 1500',
    desiredSalaryHint: 'Enter your expected weekly compensation in USD (e.g. 500 - 10,000)',

    contactMethodLabel: 'Preferred Contact Method',
    contactMethods: {
      email: 'Email',
      phone: 'Phone Call',
      whatsapp: 'WhatsApp / Messaging',
    },
    
    passportLabel: 'Upload Passport / National ID / Certificate',
    passportDropText: 'Drag and drop your document here, or',
    passportBrowseText: 'Browse files',
    passportSupportedText: 'Supports JPG, PNG, PDF up to 10MB',
    passportSelectedText: 'Selected document:',
    removeFileText: 'Remove',

    commentsLabel: 'Additional Comments & Special Skills',
    commentsPlaceholder: 'Mention any previous expedition records, languages, survival skills, or equipment...',
    
    agreeTermsLabel: 'I agree to the Expedition Terms and Conditions',
    termsLinkText: 'Read Terms & Code of Conduct',
    
    submitButton: 'Submit Expedition Application',
    clearButton: 'Clear Form',
    submittingText: 'Validating dossier and processing application...',
    viewSpecsButton: 'View QA Test Specifications',
    
    // Error messages
    errorRequired: 'This field is required',
    errorEmailInvalid: 'Please enter a valid email address (e.g. explorer@expedition-realbugz.org)',
    errorPhoneInvalid: 'Contact number must be exactly 10 numeric digits',
    errorDobRequired: 'Please select your date of birth',
    errorDobFuture: 'Date of birth cannot be in the future',
    errorExpRequired: 'Please select your archaeology experience level',
    errorRoleRequired: 'Please select your preferred role in the expedition',
    errorRegionRequired: 'Please select a preferred expedition region',
    errorSalaryInvalid: 'Please enter a valid desired weekly salary (greater than 0)',
    errorPassportRequired: 'Please upload your Passport or National ID document',
    errorPassportInvalidType: 'Invalid file format. Please upload JPG, PNG, or PDF',
    errorTermsRequired: 'You must agree to the Terms and Conditions to proceed',
    
    // Success Modal
    successTitle: 'Application Successfully Submitted! (滅)',
    successSubtitle: 'RealBugz Expedition Dossier Inscribed',
    successMessage: 'Congratulations! Your expedition registration has passed validation. Your official expedition dossier ID has been generated.',
    successDossierId: 'Expedition Dossier ID:',
    successClose: 'Close Window',
    successPrint: 'Print Application Dossier',
    
    termsModalTitle: 'Expedition Terms & Code of Conduct',
    termsModalContent: [
      '1. Expedition members must strictly adhere to field safety protocols and directives of the expedition lead.',
      '2. All historical artifacts, samples, and biological data recovered remain scientific property.',
      '3. Coordinates and expedition records are confidential until certified public release.',
      '4. Candidates must pass mandatory physical readiness examinations prior to departure.',
    ],
    termsModalClose: 'Understood & Agree',

    specsTitle: 'QA Test Specifications (Acceptance Criteria)',
    specsSubtitle: 'Reference guide matching RealBugz Task Form validation rules',
    specsClose: 'Close Specs',
    specsItems: [
      { title: 'Full Name', desc: 'Must not be empty. Supports alphabetic and Unicode characters.' },
      { title: 'Email Address', desc: 'Must follow standard RFC 5322 email syntax.' },
      { title: 'Contact Number', desc: 'Specification requires exactly 10 digits. (Note: Intentional bug planted!)' },
      { title: 'Date of Birth', desc: 'Must not be empty and must be a date in the past.' },
      { title: 'Archaeology Experience', desc: 'Must select one radio option (None, Amateur, Intermediate, Professional).' },
      { title: 'Preferred Role', desc: 'Must select one role from the dropdown menu.' },
      { title: 'Preferred Region', desc: 'Must select one expedition region from the dropdown menu.' },
      { title: 'Desired Salary', desc: 'Must be a positive numeric value in USD/week.' },
      { title: 'Preferred Contact Method', desc: 'Must select one contact method (Email, Phone, WhatsApp).' },
      { title: 'Passport/ID Upload', desc: 'Must attach a file. Accepts .jpg, .png, .pdf under 10MB.' },
      { title: 'Agreement to Terms', desc: 'Specification requires checking the agreement checkbox. (Note: Intentional bug planted!)' },
    ]
  }
};


