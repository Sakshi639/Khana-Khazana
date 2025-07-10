# FoodieExpress - Food Ordering Website Frontend

A complete responsive food ordering website frontend built with ReactJS, featuring modern UI/UX design and comprehensive functionality.

## 🚀 Features

### Core Functionality
- **Homepage**: Hero section, search bar, category browsing, featured dishes
- **Menu Listing**: Advanced filtering (category, price, dietary, spice level), sorting, search
- **Food Details**: Modal with customization options, add-ons, quantity selection
- **Shopping Cart**: Real-time updates, quantity management, promo codes, price calculation
- **Checkout**: Form validation, delivery scheduling, order summary
- **Order Confirmation**: Order tracking, delivery information, customer support

### Design & UX
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Modern UI**: Clean, intuitive interface with food-themed color scheme
- **Interactive Elements**: Smooth animations, loading skeletons, hover effects
- **Accessibility**: Proper ARIA labels, keyboard navigation, screen reader support

### Technical Features
- **React Router**: Seamless page navigation
- **Context API**: Global state management for cart functionality
- **React Hook Form**: Form validation and handling
- **Tailwind CSS**: Utility-first styling with custom theme
- **Lucide Icons**: Consistent iconography throughout the app
- **Error Handling**: Graceful fallbacks and error states

## 🛠️ Tech Stack

- **Frontend Framework**: ReactJS (Functional components with Hooks)
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router v6
- **State Management**: Context API
- **Form Handling**: React Hook Form with validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: PNPM

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- PNPM (recommended) or NPM

### Quick Start

1. **Extract the project files**
   ```bash
   unzip food-ordering-app.zip
   cd food-ordering-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#ea580c) - Food-themed accent color
- **Secondary**: Green (#16a34a) - Success states, vegetarian indicators
- **Background**: Light gray (#f8fafc) / Dark (#0f172a)
- **Cards**: White (#ffffff) / Dark gray (#1e293b)
- **Text**: Dark gray (#1e293b) / Light gray (#f1f5f9)

### Typography
- **Font Family**: Inter (system font fallback)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Captions**: Light weight (300)

### Components
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Cards**: Consistent border radius and shadows
- **Forms**: Proper validation states and error handling
- **Modals**: Overlay with backdrop blur
- **Badges**: Color-coded for different categories

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Touch-friendly interface
- Swipe gestures support
- Optimized image loading
- Collapsible navigation
- Bottom-sheet style modals

## 🧪 Testing the Application

### Manual Testing Checklist

1. **Homepage**
   - [ ] Hero section displays correctly
   - [ ] Search functionality works
   - [ ] Category navigation functions
   - [ ] Featured dishes load properly

2. **Menu Page**
   - [ ] All food items display with images
   - [ ] Filters work (category, price, dietary, spice)
   - [ ] Search filters results correctly
   - [ ] Sorting options function
   - [ ] Grid/list view toggles work

3. **Food Modal**
   - [ ] Opens when clicking food items
   - [ ] Add-ons selection works
   - [ ] Quantity selector functions
   - [ ] Price updates correctly
   - [ ] Add to cart works

4. **Cart Page**
   - [ ] Items display correctly
   - [ ] Quantity updates work
   - [ ] Remove items functions
   - [ ] Promo codes apply discounts
   - [ ] Price calculations are accurate

5. **Checkout**
   - [ ] Form validation works
   - [ ] Required fields are enforced
   - [ ] Delivery time selection works
   - [ ] Order submission functions

6. **Confirmation**
   - [ ] Order details display correctly
   - [ ] Customer information shows
   - [ ] Delivery estimate appears

### Test Data

**Promo Codes** (for testing):
- `SAVE10` - 10% discount
- `WELCOME15` - 15% discount  
- `STUDENT20` - 20% discount

## 🚀 Deployment Options

### Option 1: Static Hosting (Netlify, Vercel)
1. Build the project: `pnpm build`
2. Upload the `dist/` folder to your hosting provider
3. Configure redirects for SPA routing

### Option 2: Traditional Web Server
1. Build the project: `pnpm build`
2. Copy `dist/` contents to your web server
3. Configure server to serve `index.html` for all routes

### Option 3: Docker
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📁 Project Structure

```
food-ordering-app/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/       # Generic UI components
│   │   ├── food/         # Food-specific components
│   │   └── layout/       # Layout components
│   ├── contexts/         # React contexts
│   ├── data/            # Mock data and constants
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🔧 Customization

### Adding New Food Items
Edit `src/data/mockData.js` to add new food items:

```javascript
{
  id: 'new-item',
  name: 'New Dish',
  description: 'Description here',
  price: 12.99,
  category: 'main',
  image: 'image-url',
  isVegetarian: false,
  isVegan: false,
  spiceLevel: 'mild',
  rating: 4.5,
  reviewCount: 100,
  prepTime: '15-20 min',
  addOns: [
    { id: 'addon1', name: 'Extra Sauce', price: 1.50 }
  ]
}
```

### Modifying Colors
Update the color scheme in `src/App.css`:

```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
  /* ... other colors */
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/layout/Navbar.jsx`

## 🐛 Troubleshooting

### Common Issues

**Images not loading**
- Check image URLs in `mockData.js`
- Ensure fallback images are accessible
- Verify network connectivity

**Routing not working in production**
- Configure server redirects for SPA
- Check base URL configuration
- Ensure all routes are properly defined

**Styles not applying**
- Verify Tailwind CSS is properly configured
- Check for CSS conflicts
- Ensure custom styles are loaded

**Cart not persisting**
- Check localStorage availability
- Verify context provider wraps the app
- Check for JavaScript errors in console

## 📞 Support

For technical support or questions:
- **Email**: support@foodieexpress.com
- **Phone**: +1 (555) 123-4567

## 📄 License

This project is for educational and demonstration purposes. Feel free to use and modify as needed.

## 🙏 Acknowledgments

- **Unsplash**: Food images
- **Lucide**: Icon library
- **Tailwind CSS**: Styling framework
- **React**: Frontend framework

---

**Built with ❤️ for food lovers everywhere!**

