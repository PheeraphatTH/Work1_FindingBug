import React, { useState, useRef } from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Flame,
  UploadCloud,
  FileText,
  Trash2,
  AlertCircle,
  Sword,
  Scroll,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { FormData, FormErrors, Translations, ArchaeologyExp } from '../types';

interface ExpeditionFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSuccess: (data: FormData) => void;
  onOpenTerms: () => void;
  t: Translations;
}

export const ExpeditionForm: React.FC<ExpeditionFormProps> = ({
  formData,
  setFormData,
  onSuccess,
  onOpenTerms,
  t,
}) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Field change handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear specific error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleExpRadioChange = (exp: ArchaeologyExp) => {
    setFormData((prev) => ({ ...prev, archaeologyExp: exp }));
    if (errors.archaeologyExp) {
      setErrors((prev) => ({ ...prev, archaeologyExp: undefined }));
    }
  };

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setFormData((prev) => ({ ...prev, passportFile: null }));
      return;
    }

    const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, passportFile: t.errorPassportInvalidType }));
      return;
    }

    setFormData((prev) => ({ ...prev, passportFile: file }));
    setErrors((prev) => ({ ...prev, passportFile: undefined }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleClear = () => {
    setFormData({
      fullName: '',
      email: '',
      contactNumber: '',
      dob: '',
      archaeologyExp: 'none',
      expeditionRegion: '',
      passportFile: null,
      agreeTerms: false,
    });
    setErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Form Validation with INTENTIONAL BUGS FOR QA TESTING
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Full Name (Standard required)
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errorRequired;
    }

    // 2. Email (Standard email regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t.errorRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t.errorEmailInvalid;
    }

    // ==========================================
    // 3. INTENTIONAL BUG 1: Contact Number
    // The UI states that 10 digits are required.
    // However, the JS logic intentionally requires exactly 9 digits to pass!
    // ==========================================
    const rawPhone = formData.contactNumber.replace(/\D/g, '');
    if (!rawPhone) {
      newErrors.contactNumber = t.errorRequired;
    } else if (rawPhone.length !== 9) { // <-- BUG 1: Must be exactly 9 digits instead of 10!
      newErrors.contactNumber = t.errorPhoneInvalid;
    }

    // 4. Date of Birth (Required and cannot be in future)
    if (!formData.dob) {
      newErrors.dob = t.errorDobRequired;
    } else {
      const selectedDate = new Date(formData.dob);
      const today = new Date();
      if (selectedDate > today) {
        newErrors.dob = t.errorDobFuture;
      }
    }

    // 5. Breathing Style Experience / Rank (Required)
    if (!formData.archaeologyExp) {
      newErrors.archaeologyExp = t.errorExpRequired;
    }

    // 6. Preferred Mission Region (Required)
    if (!formData.expeditionRegion) {
      newErrors.expeditionRegion = t.errorRegionRequired;
    }

    // 7. Slayer Certificate / ID Document (Required)
    if (!formData.passportFile) {
      newErrors.passportFile = t.errorPassportRequired;
    }

    // ==========================================
    // 8. INTENTIONAL BUG 2: Terms & Conditions Checkbox
    // Inverted logic: throws error if CHECKED, passes if UNCHECKED!
    // ==========================================
    if (formData.agreeTerms) { // <-- BUG 2: Throws error when user checks the box!
      newErrors.agreeTerms = t.errorTermsRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const isValid = validateForm();
      setIsSubmitting(false);

      if (isValid) {
        onSuccess(formData);
      } else {
        const firstErrorKey = Object.keys(errors)[0];
        if (firstErrorKey) {
          const el = document.getElementById(`field-${firstErrorKey}`);
          el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 450);
  };

  return (
    <form
      id="demon-slayer-corps-form"
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-8 rounded-3xl border border-emerald-500/30 bg-[#0c121e]/90 p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 ring-1 ring-emerald-500/20"
    >
      {/* Decorative top border bar with Tanjiro pattern */}
      <div className="absolute -top-[1px] left-6 right-6 h-1.5 rounded-t-full bg-ichimatsu" />

      {/* SECTION 1: Slayer Personal Information */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/40">
              <User className="h-4 w-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {t.sectionGeneral}
            </h3>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 font-kanji text-xs font-bold text-emerald-400/80 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            鬼殺隊士
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div id="field-fullName" className="space-y-1.5 sm:col-span-2">
            <label
              htmlFor="fullName"
              className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200"
            >
              <span className="flex items-center gap-1.5">
                {t.fullNameLabel} <span className="text-emerald-400">*</span>
              </span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-500/70">
                <User className="h-4 w-4" />
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={t.fullNamePlaceholder}
                className={`w-full rounded-xl border bg-[#080d17]/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-950/15'
                    : 'border-slate-700/80 focus:border-emerald-400 focus:ring-emerald-400/20 hover:border-emerald-500/50'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Email Address / Kasugai Crow */}
          <div id="field-email" className="space-y-1.5">
            <label
              htmlFor="email"
              className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200"
            >
              <span className="flex items-center gap-1.5">
                {t.emailLabel} <span className="text-emerald-400">*</span>
              </span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-500/70">
                <Mail className="h-4 w-4" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.emailPlaceholder}
                className={`w-full rounded-xl border bg-[#080d17]/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-950/15'
                    : 'border-slate-700/80 focus:border-emerald-400 focus:ring-emerald-400/20 hover:border-emerald-500/50'
                }`}
              />
            </div>
            {errors.email && (
              <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Contact Number (Subject to BUG 1) */}
          <div id="field-contactNumber" className="space-y-1.5">
            <label
              htmlFor="contactNumber"
              className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200"
            >
              <span className="flex items-center gap-1.5">
                {t.contactNumberLabel} <span className="text-emerald-400">*</span>
              </span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-500/70">
                <Phone className="h-4 w-4" />
              </div>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder={t.contactNumberPlaceholder}
                maxLength={12}
                className={`w-full rounded-xl border bg-[#080d17]/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 font-mono transition-all duration-200 focus:outline-none focus:ring-2 ${
                  errors.contactNumber
                    ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-950/15'
                    : 'border-slate-700/80 focus:border-emerald-400 focus:ring-emerald-400/20 hover:border-emerald-500/50'
                }`}
              />
            </div>
            <p className="text-[11px] text-slate-400">
              {t.contactNumberHint}
            </p>
            {errors.contactNumber && (
              <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.contactNumber}</span>
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div id="field-dob" className="space-y-1.5 sm:col-span-2">
            <label
              htmlFor="dob"
              className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200"
            >
              <span className="flex items-center gap-1.5">
                {t.dobLabel} <span className="text-emerald-400">*</span>
              </span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-500/70">
                <Calendar className="h-4 w-4" />
              </div>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                max={new Date().toISOString().split('T')[0]}
                className={`w-full rounded-xl border bg-[#080d17]/80 py-3 pl-10 pr-4 text-sm text-white transition-all duration-200 focus:outline-none focus:ring-2 [color-scheme:dark] ${
                  errors.dob
                    ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-950/15'
                    : 'border-slate-700/80 focus:border-emerald-400 focus:ring-emerald-400/20 hover:border-emerald-500/50'
                }`}
              />
            </div>
            {errors.dob && (
              <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.dob}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: Breathing Style Mastery & Rank */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/40">
              <Flame className="h-4 w-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {t.sectionExpedition}
            </h3>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 font-kanji text-xs font-bold text-rose-400/80 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            全集中・呼吸
          </span>
        </div>

        {/* Breathing Style Experience Radio Cards */}
        <div id="field-archaeologyExp" className="space-y-2.5">
          <label className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200">
            <span className="flex items-center gap-1.5">
              {t.archaeologyExpLabel} <span className="text-emerald-400">*</span>
            </span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.keys(t.archaeologyExpOptions) as ArchaeologyExp[]).map((key) => {
              const opt = t.archaeologyExpOptions[key];
              const isSelected = formData.archaeologyExp === key;
              return (
                <div
                  key={key}
                  id={`archaeology-exp-card-${key}`}
                  onClick={() => handleExpRadioChange(key)}
                  className={`group relative flex cursor-pointer items-start gap-3 rounded-2xl border p-3.5 sm:p-4 transition-all duration-200 ${
                    isSelected
                      ? 'border-emerald-400 bg-gradient-to-r from-emerald-950/40 via-teal-950/20 to-slate-950/80 shadow-md shadow-emerald-500/15 ring-1 ring-emerald-400/30'
                      : 'border-slate-800 bg-[#080d17]/50 hover:border-emerald-500/40 hover:bg-[#0c1424]/60'
                  }`}
                >
                  <input
                    type="radio"
                    id={`exp-${key}`}
                    name="archaeologyExp"
                    value={key}
                    checked={isSelected}
                    onChange={() => handleExpRadioChange(key)}
                    className="mt-1 h-4 w-4 accent-emerald-500 text-emerald-500 focus:ring-emerald-400 cursor-pointer"
                  />
                  <div className="space-y-0.5">
                    <label
                      htmlFor={`exp-${key}`}
                      className="block text-xs sm:text-sm font-bold text-white cursor-pointer group-hover:text-emerald-300 transition-colors"
                    >
                      {opt.label}
                    </label>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {errors.archaeologyExp && (
            <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.archaeologyExp}</span>
            </p>
          )}
        </div>

        {/* Preferred Mission Region Dropdown */}
        <div id="field-expeditionRegion" className="space-y-1.5">
          <label
            htmlFor="expeditionRegion"
            className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200"
          >
            <span className="flex items-center gap-1.5">
              {t.expeditionRegionLabel} <span className="text-emerald-400">*</span>
            </span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-emerald-500/70">
              <MapPin className="h-4 w-4" />
            </div>
            <select
              id="expeditionRegion"
              name="expeditionRegion"
              value={formData.expeditionRegion}
              onChange={handleInputChange}
              className={`w-full appearance-none rounded-xl border bg-[#080d17]/80 py-3 pl-10 pr-10 text-sm text-white transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer ${
                errors.expeditionRegion
                  ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-950/15'
                  : 'border-slate-700/80 focus:border-emerald-400 focus:ring-emerald-400/20 hover:border-emerald-500/50'
              }`}
            >
              <option value="" disabled className="bg-slate-900 text-slate-400">
                {t.expeditionRegionPlaceholder}
              </option>
              {t.expeditionRegions.map((region) => (
                <option
                  key={region.value}
                  value={region.value}
                  className="bg-slate-900 text-slate-100 py-2"
                >
                  {region.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.expeditionRegion && (
            <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.expeditionRegion}</span>
            </p>
          )}
        </div>
      </div>

      {/* SECTION 3: Identity Verification & Slayer Oath */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 ring-1 ring-purple-500/40">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {t.sectionVerification}
            </h3>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 font-kanji text-xs font-bold text-purple-400/80 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
            藤の花・契り
          </span>
        </div>

        {/* Slayer ID / Training Certificate Upload */}
        <div id="field-passportFile" className="space-y-2">
          <label className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200">
            <span className="flex items-center gap-1.5">
              {t.passportLabel} <span className="text-emerald-400">*</span>
            </span>
          </label>

          <input
            ref={fileInputRef}
            type="file"
            id="passportFile"
            name="passportFile"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
            className="hidden"
          />

          {!formData.passportFile ? (
            <div
              id="passport-dropzone"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-all duration-200 ${
                dragActive
                  ? 'border-emerald-400 bg-emerald-500/10 scale-[1.01]'
                  : errors.passportFile
                  ? 'border-rose-500/70 bg-rose-950/15 hover:border-rose-400'
                  : 'border-slate-700 bg-[#080d17]/50 hover:border-emerald-400/60 hover:bg-[#0c1424]/60'
              }`}
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950/40 text-emerald-400 ring-1 ring-emerald-500/30">
                <UploadCloud className="h-6 w-6" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                <span>{t.passportDropText} </span>
                <span className="text-emerald-400 underline underline-offset-2">
                  {t.passportBrowseText}
                </span>
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                {t.passportSupportedText}
              </p>
            </div>
          ) : (
            <div
              id="passport-selected-card"
              className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-emerald-400">
                    {t.passportSelectedText}
                  </span>
                  <p className="truncate text-xs sm:text-sm font-bold text-white font-mono">
                    {formData.passportFile.name}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {(formData.passportFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                id="remove-passport-file-btn"
                onClick={() => handleFileChange(null)}
                className="flex items-center gap-1 rounded-lg bg-slate-800/80 px-2.5 py-1.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition-colors cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{t.removeFileText}</span>
              </button>
            </div>
          )}

          {errors.passportFile && (
            <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.passportFile}</span>
            </p>
          )}
        </div>

        {/* Demon Slayer Sacred Oath Checkbox (Subject to BUG 2) */}
        <div id="field-agreeTerms" className="space-y-1.5 pt-2">
          <div
            id="terms-checkbox-container"
            className={`flex items-start gap-3 rounded-2xl border p-4 transition-all duration-200 ${
              errors.agreeTerms
                ? 'border-rose-500/80 bg-rose-950/20'
                : formData.agreeTerms
                ? 'border-emerald-400/40 bg-slate-900/60'
                : 'border-slate-800 bg-[#080d17]/50 hover:border-emerald-500/30'
            }`}
          >
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mt-0.5 h-4.5 w-4.5 rounded border-slate-700 bg-slate-900 accent-emerald-500 text-emerald-500 focus:ring-emerald-400 cursor-pointer"
            />
            <div className="space-y-1 text-xs sm:text-sm">
              <label
                htmlFor="agreeTerms"
                className="font-medium text-slate-200 cursor-pointer leading-snug"
              >
                {t.agreeTermsLabel} <span className="text-emerald-400">*</span>
              </label>
              <div>
                <button
                  type="button"
                  id="open-terms-link-btn"
                  onClick={onOpenTerms}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 cursor-pointer"
                >
                  <span>{t.termsLinkText}</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
          {errors.agreeTerms && (
            <p className="flex items-center gap-1 text-xs font-medium text-rose-400 animate-in fade-in">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.agreeTerms}</span>
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons: Submit and Clear */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3.5 pt-4 border-t border-emerald-500/20">
        <button
          type="button"
          id="clear-form-btn"
          onClick={handleClear}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-300 hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>{t.clearButton}</span>
        </button>

        <button
          type="submit"
          id="submit-form-btn"
          disabled={isSubmitting}
          className="relative group overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 px-8 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-xl shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-400 hover:shadow-emerald-500/40 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
              <span>{t.submittingText}</span>
            </>
          ) : (
            <>
              <Sword className="h-4 w-4 stroke-[2.6] transition-transform group-hover:rotate-45" />
              <span>{t.submitButton}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

