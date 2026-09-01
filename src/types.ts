export type Language = 'th' | 'en';

export type ArchaeologyExp = 'none' | 'intermediate' | 'veteran' | 'master';

export interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  dob: string;
  archaeologyExp: ArchaeologyExp;
  expeditionRegion: string;
  passportFile: File | null;
  agreeTerms: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  contactNumber?: string;
  dob?: string;
  archaeologyExp?: string;
  expeditionRegion?: string;
  passportFile?: string;
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
    intermediate: { label: string; desc: string };
    veteran: { label: string; desc: string };
    master: { label: string; desc: string };
  };
  
  expeditionRegionLabel: string;
  expeditionRegionPlaceholder: string;
  expeditionRegions: { value: string; label: string; desc: string }[];
  
  passportLabel: string;
  passportDropText: string;
  passportBrowseText: string;
  passportSupportedText: string;
  passportSelectedText: string;
  removeFileText: string;
  
  agreeTermsLabel: string;
  termsLinkText: string;
  
  // Actions
  submitButton: string;
  clearButton: string;
  submittingText: string;
  
  // Errors
  errorRequired: string;
  errorEmailInvalid: string;
  errorPhoneInvalid: string; // The UI error text that asks for 10 digits
  errorDobRequired: string;
  errorDobFuture: string;
  errorExpRequired: string;
  errorRegionRequired: string;
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
}

