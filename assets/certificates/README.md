# Certificate Management Guide

This folder stores your internship certificates and certifications that display in the portfolio.

## How to Add Your Certificates

### File Structure
Place your certificate files in this folder with the following naming convention:

```
certificates/
├── Cyfotok_AI_Internship.jpg         (Certificate image preview)
├── Cyfotok_AI_Internship.pdf         (Full certificate PDF)
├── Zscaler_ZTCA.jpg                  (Certificate image preview)
├── Zscaler_ZTCA_Certification.pdf    (Full certificate PDF)
├── Cyfotok_CEH_Training.jpg          (Certificate image preview)
└── Cyfotok_CEH_Training.pdf          (Full certificate PDF)
```

## Current Certificates Configured

The certificate viewer on your portfolio currently displays 3 internship certificates:

### 1. **Artificial Intelligence Intern** - Cyfotok Infosec LLP
- **Period:** October - November 2024
- **Files:**
  - `Cyfotok_AI_Internship.jpg` - Thumbnail/preview image
  - `Cyfotok_AI_Internship.pdf` - Full certificate PDF

### 2. **Zero Trust Cloud Security Intern** - EduSkills & Zscaler (AICTE Virtual Internship)
- **Period:** April - June 2025
- **Files:**
  - `Zscaler_ZTCA.jpg` - Thumbnail/preview image
  - `Zscaler_ZTCA_Certification.pdf` - Full certificate PDF

### 3. **Ethical Hacking & Bug Hunting Trainee** - Cyfotok Infosec LLP
- **Period:** August 2024
- **Files:**
  - `Cyfotok_CEH_Training.jpg` - Thumbnail/preview image
  - `Cyfotok_CEH_Training.pdf` - Full certificate PDF

## Steps to Add Your Certificate Files

1. **Save your certificates:**
   - Export your certificate as a **JPG/PNG** (for preview thumbnail)
   - Export your certificate as a **PDF** (for full viewing)

2. **Name them properly:**
   - Follow the naming convention: `[Company/Program]_[Certificate_Type].jpg/pdf`
   - Use underscores instead of spaces
   - Examples: `Google_Cloud_Certified.jpg`, `AWS_Solutions_Architect.pdf`

3. **Place in this folder:**
   - Copy both the image and PDF to `assets/certificates/`

4. **Update the HTML** (if adding new certificates):
   - Open `index.html`
   - Find the `<div id="certificateModal">` section
   - Add a new `<div class="certificate-item">` block following the existing pattern
   - Update the image src and PDF links to your new files

## Image Optimization Tips

- **JPG images:** Use 1200x900px or larger (will be displayed at 300x250px)
- **File size:** Keep images under 500KB for fast loading
- **Format:** JPEG works best for certificate photos
- Use tools like TinyPNG.com or Squoosh to compress images

## Features

✅ Click "3+ Internships" stat card to open the certificate viewer
✅ View certificates in a modal with separate columns
✅ Download full PDFs from the modal
✅ Responsive design works on mobile and desktop
✅ Smooth animations and transitions
✅ Click overlay or press ESC to close the modal

## URL Structure in HTML

The certificate modal in `index.html` references files at:
- `assets/certificates/[filename].jpg` - For preview images
- `assets/certificates/[filename].pdf` - For downloadable PDFs

Make sure your filenames match exactly!
