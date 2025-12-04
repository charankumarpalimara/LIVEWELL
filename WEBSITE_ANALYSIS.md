# Live Well Rehabilitation Network - Website Analysis & Admin Dashboard Requirements

## Website Purpose

**Live Well Rehabilitation Network** is India's No. 1 Integrated Autism Network dedicated to:
- Providing comprehensive rehabilitation services for children with autism, ADHD, and other neurological disorders
- Mainstreaming children with inclusion, equality, and equity
- Offering integrated therapy services (Autism Therapy, Speech Therapy, Occupational Therapy, etc.)
- Selling child development products (educational toys, therapy equipment, books, etc.)
- Operating multiple branches across India
- Providing career opportunities in the therapy field

---

## Data Management Requirements for Admin Dashboard

Based on the website analysis, here are all the sections that need admin management:

### 1. **HERO SECTION BANNERS** (Home Page Carousel)
**Location:** `src/components/home/HeroCarousel.jsx`

**Data Structure:**
```javascript
{
  title: "LIVE WELL REHABILITATION NETWORK",
  subtitle: "INDIA'S NO 1 Integrated Autism Network",
  description: "Mainstream your kid with inclusion, equality, equity",
  gradient: "linear-gradient(...)",
  image: "image_url",
  order: 1,
  isActive: true
}
```

**Admin Needs:**
- Add/Edit/Delete carousel slides
- Upload banner images
- Set order/sequence
- Enable/Disable slides
- Edit text content (title, subtitle, description)
- Set gradient colors

---

### 2. **PRODUCTS** (E-commerce Products)
**Location:** `src/data/products.js` & `src/pages/Products.jsx`

**Data Structure:**
```javascript
{
  id: 1,
  name: "Educational Building Blocks",
  price: 29.99,
  image: "image_url",
  category: "Toys", // Educational, Sensory, Therapy, Toys, Books
  description: "Product description...",
  rating: 4.5,
  inStock: true,
  // Additional fields for detail page:
  benefits: [...],
  specifications: {...},
  reviews: [...]
}
```

**Admin Needs:**
- CRUD operations (Create, Read, Update, Delete)
- Upload product images
- Manage categories
- Set pricing
- Stock management
- Product details (benefits, specifications)
- Manage reviews/ratings
- Featured products selection

---

### 3. **THERAPIES/SERVICES** (11 Therapy Services)
**Location:** `src/pages/Services.jsx` & `src/pages/ServiceDetail.jsx`

**Data Structure:**
```javascript
{
  id: 1,
  title: "Autism Therapy",
  icon: "icon_name",
  image: "image_url",
  description: "Service description...",
  successRate: 98,
  color: "#e31e24",
  url: "/autism-therapy",
  // Detail page content:
  overview: "...",
  benefits: [...],
  process: [...],
  faqs: [...],
  testimonials: [...]
}
```

**Services List:**
1. Autism Therapy
2. Speech Therapy
3. Occupational Therapy
4. Behavior Therapy
5. Special Education
6. Play Therapy
7. Music Therapy
8. ABA Therapy
9. Early Intervention
10. Sensory Integration
11. Physiotherapy

**Admin Needs:**
- CRUD operations for each therapy
- Upload service images
- Set success rates
- Manage service colors
- Edit detailed content (overview, benefits, process, FAQs)
- Manage service-specific testimonials

---

### 4. **BLOGS/ARTICLES**
**Location:** `src/components/home/BlogPostsSection.jsx`

**Data Structure:**
```javascript
{
  id: 1,
  title: "Understanding Early Signs of Autism in Children",
  excerpt: "Article excerpt...",
  image: "image_url",
  author: "Dr. Priya Sharma",
  date: "March 15, 2024",
  category: "Autism Awareness",
  readTime: "5 min read",
  color: "#00aeef",
  content: "Full article content...",
  tags: [...],
  isPublished: true
}
```

**Admin Needs:**
- CRUD operations
- Rich text editor for content
- Upload featured images
- Set categories
- Publish/Unpublish articles
- Manage authors
- SEO settings (meta title, description)

---

### 5. **TESTIMONIALS** (Parent Reviews)
**Location:** `src/components/home/TestimonialsSection.jsx`

**Data Structure:**
```javascript
{
  id: 1,
  name: "Priya Sharma",
  child: "Aarav, 6 years",
  service: "Autism Therapy",
  testimonial: "Review text...",
  rating: 5,
  color: "#00aeef",
  image: "parent_image_url",
  isApproved: true,
  date: "2024-03-15"
}
```

**Admin Needs:**
- CRUD operations
- Approve/Reject testimonials
- Upload parent images
- Link to services
- Set display order
- Featured testimonials

---

### 6. **THERAPY DOCTORS/TEAM MEMBERS**
**Location:** `src/pages/About.jsx` (Our Team Section)

**Data Structure:**
```javascript
{
  id: 1,
  name: "Dr. Priya Sharma",
  role: "Chief Therapist",
  image: "image_url",
  specialty: "Autism Specialist",
  bio: "Detailed bio...",
  qualifications: [...],
  experience: "10+ years",
  email: "email@example.com",
  isActive: true,
  order: 1
}
```

**Admin Needs:**
- CRUD operations
- Upload profile images
- Manage roles and specialties
- Set display order
- Enable/Disable team members
- Add qualifications and experience

---

### 7. **ABOUT SECTIONS** (Mission, Vision, Story)
**Location:** `src/pages/About.jsx`

**Sections to Manage:**
- Hero Section (Title, Description, Image)
- Our Story Section (Content, Image, Stats Badge)
- Mission Card (Title, Description, Icon)
- Vision Card (Title, Description, Icon)
- Why Choose Us Section (4 items with icons)
- Our Approach Section (5-step timeline)

**Admin Needs:**
- Edit text content
- Upload images
- Manage statistics (10+ Years, 50+ Experts, etc.)
- Edit mission/vision content
- Manage "Why Choose Us" items
- Edit approach/timeline steps

---

### 8. **BRANCHES** (6+ Locations)
**Location:** `src/pages/Branches.jsx`

**Data Structure:**
```javascript
{
  id: 1,
  name: "Live Well - Hyderabad (Banjara Hills)",
  address: "Full address...",
  phone: "+91 8977510100",
  email: "banjarahills@livewellrehab.com",
  timing: "Mon - Sat: 8:00 AM - 7:30 PM",
  state: "Telangana",
  city: "Hyderabad",
  isHeadquarters: true,
  services: ["Autism Therapy", "Speech Therapy", ...],
  image: "branch_image",
  mapUrl: "Google Maps URL",
  coordinates: { lat: 0, lng: 0 }
}
```

**Admin Needs:**
- CRUD operations
- Upload branch images
- Manage contact information
- Set services available at each branch
- Mark headquarters
- Set map coordinates
- Manage operating hours

---

### 9. **CAREER DATA** (Job Listings)
**Location:** `src/pages/Careers.jsx`

**Data Structure:**
```javascript
{
  id: 1,
  title: "Speech Language Pathologist",
  department: "Clinical", // Clinical, Education, Operations, Administration
  location: "Hyderabad",
  type: "Full-time", // Full-time, Part-time, Contract
  experience: "2-5 years",
  salary: "₹4,00,000 - ₹6,00,000",
  posted: "2 days ago",
  description: "Job description...",
  requirements: [...],
  responsibilities: [...],
  icon: "icon_name",
  color: "#f7941d",
  urgent: true,
  isActive: true
}
```

**Admin Needs:**
- CRUD operations
- Manage job categories/departments
- Set locations
- Edit job descriptions
- Manage requirements and responsibilities
- Mark urgent positions
- Publish/Unpublish jobs
- View applications

---

### 10. **GALLERY** (Images & Videos)
**Location:** `src/pages/Gallery.jsx` & `src/components/home/GallerySection.jsx`

**Data Structure:**
```javascript
{
  id: 1,
  title: "Autism Therapy Session",
  category: "Therapy", // Therapy, Activities, Education
  src: "image_url",
  color: "#e31e24",
  isVideo: false,
  videoUrl: "youtube_url", // if isVideo is true
  thumbnail: "thumbnail_url"
}
```

**Admin Needs:**
- Upload images/videos
- Organize by categories
- Add titles and descriptions
- Manage video links (YouTube/Vimeo)
- Set display order
- Featured gallery items
- Bulk upload

---

### 11. **SUCCESS RATES** (Statistics)
**Location:** `src/components/home/SuccessRatesSection.jsx` & `src/pages/Services.jsx`

**Data Structure:**
```javascript
{
  name: "Autism Integrated Therapy",
  rate: 98,
  color: "#e31e24"
}
```

**Admin Needs:**
- Update success rates
- Add/Remove statistics
- Set colors
- Manage display order

---

### 12. **WHY CHOOSE US** (Home Page Section)
**Location:** `src/components/home/WhyChooseUsSection.jsx`

**Admin Needs:**
- Edit feature items
- Manage icons
- Update descriptions
- Set display order

---

## Admin Dashboard Features Required

### Core Features:
1. **Authentication & Authorization**
   - Login/Logout
   - Role-based access (Admin, Editor, etc.)
   - Password management

2. **Dashboard Overview**
   - Statistics (Total Products, Services, Branches, etc.)
   - Recent activities
   - Quick actions

3. **Content Management**
   - Rich text editor
   - Image upload & management
   - Media library
   - Bulk operations

4. **Data Management**
   - CRUD operations for all sections
   - Search & Filter
   - Sorting & Pagination
   - Import/Export (CSV, JSON)

5. **Settings**
   - Site settings
   - SEO settings
   - Email templates
   - Notification settings

### Recommended Tech Stack for Admin Dashboard:
- **Frontend:** React (to match existing site)
- **UI Library:** Ant Design (already used in main site)
- **State Management:** Context API or Redux
- **Form Handling:** Ant Design Forms
- **Image Upload:** Ant Design Upload or custom solution
- **Rich Text Editor:** React Quill or Draft.js
- **Data Storage:** JSON files (for static) or API integration
- **Authentication:** Simple JWT or session-based

---

## Data Files Structure Recommendation

Create separate data files for better organization:

```
src/data/
  ├── products.js
  ├── services.js
  ├── blogs.js
  ├── testimonials.js
  ├── teamMembers.js
  ├── branches.js
  ├── careers.js
  ├── gallery.js
  ├── heroBanners.js
  ├── aboutContent.js
  └── settings.js
```

---

## Summary

The admin dashboard needs to manage **12 main content sections**:
1. Hero Banners (3 slides)
2. Products (12+ items)
3. Therapies/Services (11 services)
4. Blogs (4+ articles)
5. Testimonials (4+ reviews)
6. Team Members (4+ doctors)
7. About Sections (Multiple subsections)
8. Branches (6+ locations)
9. Career Data (8+ job listings)
10. Gallery (12+ images/videos)
11. Success Rates (4+ statistics)
12. Why Choose Us (Multiple features)

All these should be manageable through a centralized admin dashboard with proper authentication, CRUD operations, and media management capabilities.

