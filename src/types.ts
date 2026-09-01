export type Language = 'th' | 'en';

export type ArchaeologyExp = 'none' | 'amateur' | 'intermediate' | 'professional';
export type ContactMethod = 'email' | 'phone' | 'whatsapp';

export interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  dob: string;
  archaeologyExp: ArchaeologyExp | '';
  preferredRole: string;
  expeditionRegion: string;
  desiredSalary: string;
  contactMethod: ContactMethod;
  passportFile: File | null;
  comments: string;
  agreeTerms: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  contactNumber?: string;
  dob?: string;
  archaeologyExp?: string;
  preferredRole?: string;
  expeditionRegion?: string;
  desiredSalary?: string;
  contactMethod?: string;
  passportFile?: string;
  comments?: string;
  agreeTerms?: string;
}

export interface Translations {
  title: string;
  subtitle: string;
  badgeRole: string;
  badgeStudentId: string;
  badgeStudentName: string;
  badgeInstitution: string;
  sectionGeneral: string;
  sectionExpedition: string;
  sectionPreferences: string;
  sectionVerification: string;
  
  // Fields
  fullNameLabel: string;
  fullNamePlaceholder: string;
  
  emailLabel: string;
  emailPlaceholder: string;
  
  contactNumberLabel: string;
  contactNumberPlaceholder: string;
  contactNumberHint: string;
  
  dobLabel: string;
  
  archaeologyExpLabel: string;
  archaeologyExpOptions: {
    none: { label: string; desc: string };
    amateur: { label: string; desc: string };
    intermediate: { label: string; desc: string };
    professional: { label: string; desc: string };
  };

  preferredRoleLabel: string;
  preferredRolePlaceholder: string;
  preferredRoles: { value: string; label: string }[];
  
  expeditionRegionLabel: string;
  expeditionRegionPlaceholder: string;
  expeditionRegions: { value: string; label: string; desc: string }[];

  desiredSalaryLabel: string;
  desiredSalaryPlaceholder: string;
  desiredSalaryHint: string;

  contactMethodLabel: string;
  contactMethods: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  
  passportLabel: string;
  passportDropText: string;
  passportBrowseText: string;
  passportSupportedText: string;
  passportSelectedText: string;
  removeFileText: string;

  commentsLabel: string;
  commentsPlaceholder: string;
  
  agreeTermsLabel: string;
  termsLinkText: string;
  
  // Actions
  submitButton: string;
  clearButton: string;
  submittingText: string;
  viewSpecsButton: string;
  
  // Errors
  errorRequired: string;
  errorEmailInvalid: string;
  errorPhoneInvalid: string;
  errorDobRequired: string;
  errorDobFuture: string;
  errorExpRequired: string;
  errorRoleRequired: string;
  errorRegionRequired: string;
  errorSalaryInvalid: string;
  errorPassportRequired: string;
  errorPassportInvalidType: string;
  errorTermsRequired: string;
  
  // Success Modal
  successTitle: string;
  successSubtitle: string;
  successMessage: string;
  successDossierId: string;
  successClose: string;
  successPrint: string;
  
  // Terms modal
  termsModalTitle: string;
  termsModalContent: string[];
  termsModalClose: string;

  // QA Specs
  specsTitle: string;
  specsSubtitle: string;
  specsClose: string;
  specsItems: { title: string; desc: string }[];
}

