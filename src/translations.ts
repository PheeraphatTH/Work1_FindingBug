import { Translations, Language } from './types';

export const translations: Record<Language, Translations> = {
  th: {
    title: 'แบบฟอร์มลงทะเบียนเข้าร่วมหน่วยพิฆาตอสูร (Demon Slayer Corps)',
    subtitle: 'ระบบรับสมัครและลงทะเบียนนักดาบปราบอสูร • 鬼殺隊 隊士登録 (QA Assessment Phase)',
    badgeRole: 'ผู้พัฒนา / นักศึกษาผู้ออกแบบระบบ',
    badgeStudentName: 'ชื่อ-สกุล: พีรพัฒน์ ธงศรี',
    badgeStudentId: 'รหัสนักศึกษา: 66040233120',
    badgeInstitution: 'Demon Slayer Corps Technical Assessment',
    
    sectionGeneral: '1. ข้อมูลส่วนบุคคลของนักดาบ (Slayer Information)',
    sectionExpedition: '2. ระดับปราณและภารกิจปราบอสูรที่ต้องการไป (Breathing & Mission Region)',
    sectionVerification: '3. เอกสารยืนยันตัวตนและคำสาบานพิฆาตอสูร (Identity & Slayer Oath)',
    
    fullNameLabel: 'ชื่อ - นามสกุล (Full Name)',
    fullNamePlaceholder: 'เช่น คามาโดะ ทันจิโร่ หรือ เร็นโกคุ เคียวจูโร่',
    
    emailLabel: 'อีกาคาซูไก / อีเมลติดต่อ (Email Address)',
    emailPlaceholder: 'slayer@demonslayer-corps.org',
    
    contactNumberLabel: 'เบอร์โทรศัพท์ติดต่อ (Contact Number)',
    contactNumberPlaceholder: '0812345678',
    contactNumberHint: 'กรุณากรอกตัวเลข 10 หลัก (เช่น 0812345678)',
    
    dobLabel: 'วัน/เดือน/ปีเกิด (Date of Birth)',
    
    archaeologyExpLabel: 'ระดับขั้นและทักษะปราณ (Breathing Rank & Mastery)',
    archaeologyExpOptions: {
      none: { label: 'มิซุโนโตะ / ผู้เริ่มต้น (Mizunoto Rank)', desc: 'เพิ่งผ่านการฝึกวิชาและกำลังเตรียมสอบคัดเลือกรอบสุดท้าย' },
      intermediate: { label: 'คาโนเอะ / ระดับกลาง (Kanoe Rank)', desc: 'ผู้ใช้ปราณสายหลัก เชี่ยวชาญการใช้ดาบนิจิรินสังหารอสูรทั่วไป' },
      veteran: { label: 'คิโนะเอะ / นักดาบระดับสูง (Kinoe Rank)', desc: 'ผ่านสมรภูมิหนัก ปราบอสูรข้างแรมและพร้อมก้าวสู่ระดับเสาหลัก' },
      master: { label: 'เสาหลัก / ผู้เชี่ยวชาญสูงสุด (Hashira Pillar)', desc: 'เสาหลักผู้ครอบครองพลังปราณขั้นสูงสุดและรอยปานพิฆาตอสูร' },
    },
    
    expeditionRegionLabel: 'ภารกิจและพื้นที่ปราบอสูรที่ต้องการไป (Preferred Mission Region)',
    expeditionRegionPlaceholder: '-- กรุณาเลือกพื้นที่ปฏิบัติการ --',
    expeditionRegions: [
      { value: 'fujikasane', label: 'ภูเขาฟูจิคาซาเนะ (Mount Fujikasane)', desc: 'ล้อมรอบด้วยดอกฟูจิ (วิสทีเรีย) สถานที่สอบคัดเลือกรอบสุดท้าย' },
      { value: 'natagumo', label: 'ภูเขานาตากุโมะ (Mount Natagumo)', desc: 'ป่าหมอกลึกลับ รังอสูรแมงมุมและเส้นใยพิษอันตราย' },
      { value: 'mugen_train', label: 'รถไฟสู่นิรันดร์และย่านเริงรมย์ (Mugen Train & Yoshiwara)', desc: 'ภารกิจสืบสวนคดีอสูรหลับใหลและเขตนครราตรี' },
      { value: 'swordsmith_village', label: 'หมู่บ้านช่างตีดาบ (Swordsmith Village)', desc: 'ฐานลับช่างตีดาบนิจิริน แหล่งแร่เหล็กสุริยันศักดิ์สิทธิ์' },
      { value: 'infinity_castle', label: 'ปราสาทไร้ขอบเขต (Infinity Castle)', desc: 'มิติซับซ้อนไร้ที่สิ้นสุด ฐานบัญชาการใหญ่ของราชาอสูร คิบุตสึจิ มุซัน' },
    ],
    
    passportLabel: 'อัปโหลดบัตรประจำตัว / ใบรับรองผ่านการฝึกดาบ (Slayer ID / Certificate)',
    passportDropText: 'ลากไฟล์มาวางที่นี่ หรือ',
    passportBrowseText: 'เลือกไฟล์จากเครื่อง',
    passportSupportedText: 'รองรับไฟล์ JPG, PNG, PDF ขนาดไม่เกิน 10MB',
    passportSelectedText: 'ไฟล์ที่เลือกแล้ว:',
    removeFileText: 'ลบไฟล์',
    
    agreeTermsLabel: 'ข้าพเจ้ายอมรับกฎเหล็กและคำสาบานแห่งหน่วยพิฆาตอสูร',
    termsLinkText: 'อ่านกฎระเบียบและคำสาบาน (Corps Oath & Rules)',
    
    submitButton: 'ลงทะเบียนเข้าสู่หน่วยพิฆาตอสูร',
    clearButton: 'ล้างข้อมูลฟอร์ม',
    submittingText: 'กำลังรวบรวมปราณและตรวจสอบข้อมูล...',
    
    // Error messages
    errorRequired: 'กรุณากรอกข้อมูลในช่องนี้',
    errorEmailInvalid: 'รูปแบบอีเมลไม่ถูกต้อง (ตัวอย่าง: slayer@demonslayer-corps.org)',
    errorPhoneInvalid: 'เบอร์โทรศัพท์ต้องประกอบด้วยตัวเลข 10 หลักเท่านั้น',
    errorDobRequired: 'กรุณาเลือกวันเกิดของคุณ',
    errorDobFuture: 'วันเกิดต้องไม่อยู่ในอนาคต',
    errorExpRequired: 'กรุณาเลือกระดับขั้นและทักษะปราณ',
    errorRegionRequired: 'กรุณาเลือกพื้นที่ปฏิบัติการปราบอสูร',
    errorPassportRequired: 'กรุณาอัปโหลดเอกสารยืนยันตัวตน (Slayer ID/Document)',
    errorPassportInvalidType: 'ชนิดไฟล์ไม่ถูกต้อง กรุณาอัปโหลดเฉพาะไฟล์ JPG, PNG หรือ PDF',
    errorTermsRequired: 'คุณต้องยอมรับคำสาบานแห่งหน่วยพิฆาตอสูร',
    
    // Success Modal
    successTitle: 'ลงทะเบียนเข้าสู่หน่วยพิฆาตอสูรสำเร็จ!',
    successSubtitle: 'Demon Slayer Corps Inscription Approved (滅)',
    successMessage: 'ยินดีต้อนรับสู่หน่วยพิฆาตอสูร! ข้อมูลของท่านได้รับการบันทึก ดาบนิจิรินและอีกาคาซูไกของท่านพร้อมสำหรับการออกปฏิบัติภารกิจแล้ว',
    successDossierId: 'รหัสนักดาบปราบอสูร (Slayer Code ID):',
    successClose: 'ปิดหน้าต่าง',
    successPrint: 'พิมพ์ใบประจำตัวนักดาบ',
    
    termsModalTitle: 'กฎระเบียบและคำสาบานแห่งหน่วยพิฆาตอสูร (Demon Slayer Oath)',
    termsModalContent: [
      '1. นักดาบแห่งหน่วยพิฆาตอสูรต้องอุทิศตนเพื่อปกป้องผู้บริสุทธิ์จากภัยคุกคามของอสูรราตรี',
      '2. ห้ามใช้ดาบนิจิรินหรือวิชาปราณทำร้ายมนุษย์ด้วยกันเองเป็นอันขาด หากฝ่าฝืนมีโทษสูงสุด',
      '3. ดาบนิจิรินที่หลอมจากทรายเหล็กสุริยันและหินแร่สุริยะถือเป็นอาวุธศักดิ์สิทธิ์ประจำกาย ต้องดูแลรักษาอย่างสมเกียรติ',
      '4. หน่วยพิฆาตอสูรขอสงวนสิทธิ์ในการมอบหมายภารกิจและจัดกลุ่มเสาหลักตามความเหมาะสมของสถานการณ์การศึก',
    ],
    termsModalClose: 'ข้าพเจ้าเข้าใจและปิดหน้าต่าง',
  },
  
  en: {
    title: 'Demon Slayer Corps Registration Form',
    subtitle: 'Demon Slayer Corps Recruitment & Expedition Dossier • 鬼殺隊 (QA Assessment Phase)',
    badgeRole: 'Lead Developer / Student System Designer',
    badgeStudentName: 'ชื่อ-สกุล: พีรพัฒน์ ธงศรี',
    badgeStudentId: 'รหัสนักศึกษา: 66040233120',
    badgeInstitution: 'Demon Slayer Corps Technical Assessment',
    
    sectionGeneral: '1. Demon Slayer Personal Information',
    sectionExpedition: '2. Breathing Style Rank & Target Mission Region',
    sectionVerification: '3. Identity Verification & Slayer Oath',
    
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g., Tanjiro Kamado or Kyojuro Rengoku',
    
    emailLabel: 'Kasugai Crow / Email Address',
    emailPlaceholder: 'slayer@demonslayer-corps.org',
    
    contactNumberLabel: 'Contact Number',
    contactNumberPlaceholder: '0812345678',
    contactNumberHint: 'Please enter a 10-digit phone number (e.g., 0812345678)',
    
    dobLabel: 'Date of Birth',
    
    archaeologyExpLabel: 'Breathing Style Mastery & Rank',
    archaeologyExpOptions: {
      none: { label: 'Mizunoto Rank (Novice / Trainee)', desc: 'Trained under a cultivator and preparing for the Final Selection' },
      intermediate: { label: 'Kanoe Rank (Intermediate Slayer)', desc: 'Mastered primary breathing forms and actively wielding a Nichirin Sword' },
      veteran: { label: 'Kinoe Rank (Senior Demon Slayer)', desc: 'Battle-tested warrior capable of confronting Lower Moon demons' },
      master: { label: 'Hashira (Pillar Grandmaster)', desc: 'Elite combatant wielding supreme breathing mastery and Demon Slayer Mark' },
    },
    
    expeditionRegionLabel: 'Preferred Mission Region',
    expeditionRegionPlaceholder: '-- Select a demon hunting region --',
    expeditionRegions: [
      { value: 'fujikasane', label: 'Mount Fujikasane', desc: 'Surrounded by blooming wisteria; grounds of the perilous Final Selection' },
      { value: 'natagumo', label: 'Mount Natagumo', desc: 'Fog-shrouded mountain home to the lethal Spider Demon family' },
      { value: 'mugen_train', label: 'Mugen Train & Entertainment District', desc: 'Investigate the locomotive dream spell and Yoshiwara nightlife demons' },
      { value: 'swordsmith_village', label: 'Swordsmith Village', desc: 'Secret sanctuary where master smiths forge sacred Scarlet Crimson Nichirin Blades' },
      { value: 'infinity_castle', label: 'Infinity Castle', desc: 'Infinite shifting dimensional fortress and headquarters of Muzan Kibutsuji' },
    ],
    
    passportLabel: 'Upload Slayer Certificate / National ID',
    passportDropText: 'Drag and drop your document here, or',
    passportBrowseText: 'Browse files',
    passportSupportedText: 'Supports JPG, PNG, PDF up to 10MB',
    passportSelectedText: 'Selected document:',
    removeFileText: 'Remove',
    
    agreeTermsLabel: 'I pledge allegiance to the sacred Demon Slayer Corps Oath',
    termsLinkText: 'Read Corps Rules & Oath',
    
    submitButton: 'Enlist in the Demon Slayer Corps',
    clearButton: 'Clear Form',
    submittingText: 'Focusing Total Concentration Breathing...',
    
    // Error messages
    errorRequired: 'This field is required',
    errorEmailInvalid: 'Please enter a valid email address (e.g. slayer@demonslayer-corps.org)',
    errorPhoneInvalid: 'Contact number must be exactly 10 numeric digits',
    errorDobRequired: 'Please select your date of birth',
    errorDobFuture: 'Date of birth cannot be in the future',
    errorExpRequired: 'Please select your breathing mastery level',
    errorRegionRequired: 'Please select a demon hunting region',
    errorPassportRequired: 'Please upload your Slayer ID or identification document',
    errorPassportInvalidType: 'Invalid file format. Please upload JPG, PNG, or PDF',
    errorTermsRequired: 'You must pledge to the Demon Slayer Corps Oath to proceed',
    
    // Success Modal
    successTitle: 'Demon Slayer Inscription Approved! (滅)',
    successSubtitle: 'Application Successfully Passed System Validation',
    successMessage: 'Welcome to the Demon Slayer Corps! Your Nichirin Blade and Kasugai Crow are dispatched.',
    successDossierId: 'Demon Slayer Code ID:',
    successClose: 'Close Window',
    successPrint: 'Print Slayer Certificate',
    
    termsModalTitle: 'Demon Slayer Corps Sacred Oath & Guidelines',
    termsModalContent: [
      '1. Every Demon Slayer dedicates their blade and life to shielding humanity from night demons.',
      '2. Drawing a Nichirin Sword or employing breathing techniques against fellow humans is strictly forbidden.',
      '3. Nichirin Blades forged with Scarlet Crimson Iron Sand are sacred relics that must be respected.',
      '4. The Corps leadership reserves the right to deploy slayers according to combat balance and threat tiers.',
    ],
    termsModalClose: 'Understood & Close',
  }
};

