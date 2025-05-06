# NextGenixTech Website

A modern, responsive website for NextGenixTech IT consultancy with Tailwind CSS, Framer Motion animations, and a custom CMS.

## Features

- Responsive, modern design with vibrant color scheme
- Interactive animations powered by Framer Motion
- Dynamic content sections for services, industries, testimonials and resources
- Custom CMS for content management
- Optimized for performance and SEO

## Admin Features

### 1. Accessing Admin Pages

Admin pages are available at the following URLs:
- Main Admin Dashboard: `/admin`
- Testimonials Manager: `/admin/testimonials`
- Resources Manager: `/admin/resources`

### 2. Managing Testimonials

The Testimonials Manager allows you to add, edit, and delete client testimonials that appear in the "Real Results for Real Businesses" section.

**Key features:**
- Add new client testimonials with metrics (e.g., "37% cost reduction")
- Edit existing testimonials
- Toggle visibility with the "Active" status
- Delete testimonials that are no longer needed

**Best practices:**
- Include a compelling metric and metric title (e.g., "37%" as the metric, "Reduced Cloud Costs" as the title)
- Keep testimonial text concise and focused on results
- Use high-quality, professional profile images (square format, 256×256 pixels minimum)

### 3. Managing Resources & Case Studies

The Resources Manager allows you to manage articles, whitepapers, and case studies in the resources section.

**Key features:**
- Add new content with various details (title, description, content, etc.)
- Categorize content by type (article, whitepaper, case study) and categories
- Create SEO-friendly slugs for URLs
- Schedule content with publishing dates

**Integration with Notion:**
For case studies created in Notion, you can:
1. Create your case study in Notion with all content, images, etc.
2. Export to HTML or copy the share link
3. In the Resources manager, create a new Case Study and paste the Notion content or link in the Content field
4. Fill in the rest of the required details
5. The system will automatically parse and display the Notion content properly on the website

**Image guidelines:**
- Resource/Case Study Images: Landscape format (16:9 ratio), minimum 1200×675 pixels
- Ensure all images are high-quality and properly sized for web display

## Technical Information

- Frontend: React with TypeScript
- Styling: Tailwind CSS with custom components
- Animations: Framer Motion
- Backend: Express.js
- Database: In-memory storage for demonstration
- Email for contact: connect.nextgenixtech@gmail.com

## Development

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Access the site locally at: http://localhost:5000

## Deployment

The site is deployed using Replit. No additional configuration is needed.

## Contact

For any questions or issues, please contact the development team at connect.nextgenixtech@gmail.com.