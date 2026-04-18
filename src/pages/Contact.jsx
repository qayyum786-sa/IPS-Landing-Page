/**
 * Contact.jsx — Contact & Enrollment Form
 *
 * Uses EmailJS (@emailjs/browser) to send emails directly from the browser.
 * No backend / Express server required.
 *
 * ── Setup ────────────────────────────────────────────────────────────────────
 * 1. Sign up at https://www.emailjs.com (free tier = 200 emails/month)
 * 2. Create a Service (Gmail / Outlook / SMTP) → copy SERVICE_ID
 * 3. Create an Email Template with these variables:
 *      {{from_name}}, {{phone}}, {{from_email}},
 *      {{student_class}}, {{branch}}, {{branch_email}}, {{reply_to}}
 * 4. Copy your TEMPLATE_ID and PUBLIC_KEY
 * 5. Fill in the three constants below (or use import.meta.env.VITE_* vars)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'
import {
  User, Phone, Mail, BookOpen,
  MapPin, Send, CheckCircle2,
  AlertCircle, ArrowLeft, Loader2,
} from 'lucide-react'
import Footer from '../components/Footer.jsx'

// ── EmailJS configuration ── replace with your own values ──────────────────
const EMAILJS_SERVICE_ID  = 'service_gh1s51i'
const EMAILJS_TEMPLATE_ID = 'template_krigf7k'
const EMAILJS_PUBLIC_KEY  = 'o4RtMU_6mfwTGu1Ev'

// Branch → email routing table
const BRANCH_EMAILS = {
  Sayeedabad: 'admin.akb@ipsinternational.co.in',
  Tolichowki:  'admin.tol@ipsinternational.co.in',
  Jahanuma:    'admin.jah@ipsinternational.co.in',
  Karimnagar:  'admin.karimnagar@ipsinternational.co.in',
}

const BRANCHES  = Object.keys(BRANCH_EMAILS)
const CLASSES   = ['Nursery','LKG','UKG','Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10']

// ── Validation helpers ──────────────────────────────────────────────────────
function validate(form) {
  const errs = {}
  if (!form.from_name.trim())       errs.from_name     = 'Full name is required'
  if (!/^\d{10}$/.test(form.phone)) errs.phone         = 'Enter a valid 10-digit phone number'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email))
                                    errs.from_email    = 'Enter a valid email address'
  if (!form.student_class)          errs.student_class = 'Please select a class'
  if (!form.branch)                 errs.branch        = 'Please select a branch'
  return errs
}

// ── Field component ─────────────────────────────────────────────────────────
function Field({ label, icon, error, children }) {
  return (
    <div>
      <label className="form-label flex items-center gap-1.5">
        {icon}
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-red-500 text-xs font-medium">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function Contact() {
  const formRef = useRef(null)

  const [form, setForm] = useState({
    from_name: '', phone: '', from_email: '',
    student_class: '', branch: '',
  })
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errMsg,  setErrMsg]  = useState('')

  const onChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const onSubmit = async e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    const templateParams = {
      ...form,
      branch_email: BRANCH_EMAILS[form.branch],
      reply_to:     form.from_email,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ from_name:'', phone:'', from_email:'', student_class:'', branch:'' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrMsg('Something went wrong. Please try calling us directly.')
      setStatus('error')
    }
  }

  // ── Success screen ──────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <>
        <main className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-ips-bg">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-emerald-600" />
            </div>
            <h2 className="font-display font-black text-3xl text-ips-text mb-3">
              Enquiry Received!
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Thank you for reaching out to IPS International. Our team will contact you within 24 hours.
              A confirmation email has been sent to your inbox.
            </p>
            <Link to="/" className="btn-purple mx-auto">
              ← Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // ── Form ────────────────────────────────────────────────────────────────
  return (
    <>
      <main className="bg-ips-bg">

        {/* Page header */}
        <div
          className="relative py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#1e0a3c,#4c1d95)' }}
        >
          <div className="dot-pattern absolute inset-0 pointer-events-none" />
          <div className="relative z-10">
            <div className="section-label text-violet-400">Admissions 2026–27</div>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-3">
              Contact &amp; Enrollment
            </h1>
            <p className="text-violet-300 text-base max-w-xl mx-auto">
              Fill in the form below and our team will reach out within 24 hours. Or call your nearest branch directly.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Sidebar info ── */}
            <aside className="space-y-5">
              {/* Back link */}
              <Link to="/" className="inline-flex items-center gap-1.5 text-ips-purple text-sm font-semibold
                                      hover:text-ips-purple-dk transition-colors mb-2">
                <ArrowLeft size={15} /> Back to Home
              </Link>

              <div className="card">
                <h3 className="font-bold text-ips-text text-base mb-4">Branch Contacts</h3>
                <div className="space-y-4">
                  {BRANCHES.map(branch => (
                    <div key={branch} className="flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <div className="w-8 h-8 bg-ips-purple-lt rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={14} className="text-ips-purple" />
                      </div>
                      <div>
                        <div className="font-bold text-ips-text text-sm">{branch}</div>
                        <a href={`tel:+91${Object.values(BRANCH_EMAILS)[BRANCHES.indexOf(branch)].split('@')[0]}`}
                           className="text-gray-500 text-xs hover:text-ips-purple transition-colors">
                          {/* Show phone from BRANCH_EMAILS key lookup */}
                          {['9848963139','9848864865','9133995666','8686122181'][BRANCHES.indexOf(branch)]}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919848963139?text=Hello%2C%20I%20am%20interested%20in%20admissions%20at%20IPS%20International."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30
                           rounded-2xl p-4 hover:bg-[#25D366]/15 transition-colors"
              >
                <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.505L4 29l7.696-1.809A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#1a7a3c] text-sm">Chat on WhatsApp</div>
                  <div className="text-gray-500 text-xs">Quick response guaranteed</div>
                </div>
              </a>
            </aside>

            {/* ── Form card ── */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="font-display font-black text-2xl text-ips-text mb-1">
                  Admission Enquiry Form
                </h2>
                <p className="text-gray-500 text-sm mb-7">
                  All fields are required. Your information is kept strictly confidential.
                </p>

                {status === 'error' && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700
                                  text-sm font-medium rounded-xl px-4 py-3 mb-6">
                    <AlertCircle size={16} /> {errMsg}
                  </div>
                )}

                <form ref={formRef} onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Full Name */}
                    <Field label="Full Name" icon={<User size={11}/>} error={errors.from_name}>
                      <input
                        type="text" name="from_name" value={form.from_name}
                        onChange={onChange} placeholder="Your full name"
                        className={`form-input ${errors.from_name ? 'border-red-400 focus:ring-red-200' : ''}`}
                      />
                    </Field>

                    {/* Phone */}
                    <Field label="Phone Number" icon={<Phone size={11}/>} error={errors.phone}>
                      <input
                        type="tel" name="phone" value={form.phone}
                        onChange={onChange} placeholder="10-digit mobile number"
                        maxLength={10}
                        className={`form-input ${errors.phone ? 'border-red-400 focus:ring-red-200' : ''}`}
                      />
                    </Field>

                    {/* Email */}
                    <Field label="Email Address" icon={<Mail size={11}/>} error={errors.from_email}>
                      <input
                        type="email" name="from_email" value={form.from_email}
                        onChange={onChange} placeholder="you@example.com"
                        className={`form-input ${errors.from_email ? 'border-red-400 focus:ring-red-200' : ''}`}
                      />
                    </Field>

                    {/* Class */}
                    <Field label="Class / Grade" icon={<BookOpen size={11}/>} error={errors.student_class}>
                      <select
                        name="student_class" value={form.student_class}
                        onChange={onChange}
                        className={`form-input ${errors.student_class ? 'border-red-400 focus:ring-red-200' : ''}`}
                      >
                        <option value="">Select class</option>
                        {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </Field>

                    {/* Branch */}
                    <Field label="Preferred Branch" icon={<MapPin size={11}/>} error={errors.branch}>
                      <select
                        name="branch" value={form.branch}
                        onChange={onChange}
                        className={`form-input ${errors.branch ? 'border-red-400 focus:ring-red-200' : ''}`}
                      >
                        <option value="">Select branch</option>
                        {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>

                  {/* Branch email routing preview */}
                  {form.branch && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500
                                    bg-violet-50 border border-violet-100 rounded-xl px-3 py-2">
                      <Mail size={12} className="text-ips-purple flex-shrink-0" />
                      Your enquiry will be routed to:
                      <span className="font-bold text-ips-purple">{BRANCH_EMAILS[form.branch]}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-7 btn-purple w-full justify-center py-4 text-base rounded-2xl
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={18} /> Submit Enquiry</>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-gray-400">
                    By submitting you agree to be contacted by IPS International regarding admissions.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
