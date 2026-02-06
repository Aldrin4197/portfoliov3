# Development Setup Guide

This guide provides comprehensive instructions for setting up and running the portfolio application locally.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Servers](#development-servers)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **PHP** (v7.4 or higher)
   - Download from: https://www.php.net/downloads
   - Verify installation: `php --version`
   - Note: PHP is required for the feedback system backend

### Optional but Recommended
- **Git** for version control
- A code editor (VS Code, WebStorm, etc.)

---

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd portfoliov3
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required Node.js packages including:
- React and React DOM
- Vite (build tool)
- TailwindCSS and DaisyUI (styling)
- Framer Motion (animations)
- TypeScript
- And other dependencies

### 3. Verify Required Files
Ensure the following files exist:
- `public/feedbacks.json` - Feedback data storage (should contain `[]`)
- `public/intspace.png` - Favicon file
- `.env` - Environment variables (if needed)

---

## Development Servers

The application requires **TWO servers** running simultaneously:

### Server 1: PHP Backend (Port 8000)

The PHP backend handles feedback data persistence. Start it first:

```bash
php -S localhost:8000
```

**What this does:**
- Starts a PHP development server on port 8000
- Serves the API endpoints in the `api/` folder
- Handles reading/writing to `public/feedbacks.json`

**Keep this terminal open** while developing.

### Server 2: Vite Dev Server (Port 5173)

The Vite server serves the React application with hot module replacement:

```bash
npm run dev
```

**What this does:**
- Starts Vite development server on port 5173
- Enables hot module replacement (HMR)
- Proxies `/api/*` requests to the PHP server (port 8000)
- Compiles TypeScript and React components on-the-fly

**Keep this terminal open** while developing.

### Accessing the Application

Once both servers are running:
- Open your browser and navigate to: **http://localhost:5173**
- The React application will be served by Vite
- API calls will be proxied to the PHP server

---

## Configuration

### Vite Configuration
The `vite.config.ts` file contains important settings:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
    },
  },
}
```

This proxies all `/api/*` requests from the Vite dev server to the PHP backend.

### PHP Backend
The PHP scripts in the `api/` folder:
- `get-feedbacks.php` - Retrieves all feedbacks
- `save-feedback.php` - Saves new feedback

Both scripts:
- Set CORS headers for cross-origin requests
- Read/write to `public/feedbacks.json`
- Return JSON responses

### Environment Variables
If you need to configure environment-specific settings, create a `.env` file in the root directory:

```env
# Example environment variables
VITE_API_URL=http://localhost:8000
```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. 404 Error: `/intspace.png` not found

**Problem:** The favicon file is missing.

**Solution:**
```bash
# Verify the file exists
ls -la public/intspace.png

# If missing, the file should be created as part of setup
# It's a placeholder favicon for the portfolio
```

#### 2. 404 Error: `/api/get-feedbacks.php` or `/api/save-feedback.php`

**Problem:** The PHP server is not running or not accessible.

**Solutions:**
1. **Check if PHP server is running:**
   ```bash
   # In a separate terminal
   php -S localhost:8000
   ```

2. **Verify the PHP server port:**
   - Make sure it's running on port 8000
   - Check `vite.config.ts` to confirm the proxy target

3. **Check PHP installation:**
   ```bash
   php --version
   ```

#### 3. CORS Errors

**Problem:** Browser blocks requests due to CORS policy.

**Solution:**
The PHP backend already includes CORS headers:
```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```

If you still see CORS errors:
1. Ensure the PHP server is running on port 8000
2. Verify Vite's proxy configuration in `vite.config.ts`
3. Clear browser cache and restart both servers

#### 4. File Permission Errors (feedbacks.json)

**Problem:** PHP cannot write to `public/feedbacks.json`.

**Solution:**
```bash
# On Unix/Linux/Mac
chmod 664 public/feedbacks.json

# Ensure the directory is writable
chmod 755 public/
```

On Windows, right-click the file → Properties → Security → Edit permissions.

#### 5. Port Already in Use

**Problem:** Port 8000 or 5173 is already in use.

**Solutions:**

For PHP (port 8000):
```bash
# Use a different port
php -S localhost:8001

# Update vite.config.ts to match:
# target: 'http://localhost:8001'
```

For Vite (port 5173):
```bash
# Vite will automatically try the next available port
# Or specify a custom port:
npm run dev -- --port 3000
```

#### 6. TypeScript Errors

**Problem:** TypeScript compilation errors.

**Solution:**
```bash
# Check for type errors
npx tsc --noEmit

# Ensure all dependencies are installed
npm install
```

#### 7. Module Not Found Errors

**Problem:** Missing dependencies or import errors.

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

#### 8. Feedback System Not Working

**Problem:** Feedback submissions fail or don't persist.

**Checklist:**
1. ✅ PHP server running on port 8000
2. ✅ Vite dev server running on port 5173
3. ✅ `public/feedbacks.json` exists and is writable
4. ✅ No console errors in browser DevTools
5. ✅ Network tab shows successful API calls

**Debug steps:**
```bash
# Test PHP endpoint directly
curl http://localhost:8000/api/get-feedbacks.php

# Check feedbacks.json content
cat public/feedbacks.json
```

---

## Project Structure

```
portfoliov3/
├── api/                      # PHP backend
│   ├── get-feedbacks.php     # GET feedbacks endpoint
│   └── save-feedback.php     # POST feedback endpoint
├── public/                   # Static assets & build output
│   ├── assets/               # Images and compiled assets
│   ├── feedbacks.json        # Feedback data storage
│   ├── intspace.png          # Favicon
│   └── index.html            # Production HTML
├── src/                      # Source code
│   ├── components/           # React components
│   ├── data/                 # Data and types
│   └── main.tsx              # App entry point
├── index.html                # Development HTML template
├── vite.config.ts            # Vite configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── DEVELOPMENT_SETUP.md      # This file
```

---

## Build and Deployment

### Production Build

To create a production build:

```bash
npm run build
```

This will:
1. Compile TypeScript
2. Bundle React components
3. Output to the `public/` directory

### Preview Production Build

```bash
npm run preview
```

### Deployment Checklist

1. ✅ Run `npm run build`
2. ✅ Test the production build with `npm run preview`
3. ✅ Ensure `public/feedbacks.json` exists and has proper permissions
4. ✅ Deploy the `public/` folder and `api/` folder together
5. ✅ Configure your web server to:
   - Serve the `public/` folder as the document root
   - Route `/api/*` requests to the PHP scripts
   - Enable PHP execution for the `api/` folder
6. ✅ Set proper file permissions (especially for `feedbacks.json`)

---

## Additional Resources

- **React Documentation:** https://react.dev/
- **Vite Documentation:** https://vitejs.dev/
- **TailwindCSS:** https://tailwindcss.com/
- **DaisyUI Components:** https://daisyui.com/
- **PHP Documentation:** https://www.php.net/docs.php

---

## Getting Help

If you encounter issues not covered in this guide:

1. Check the browser console for JavaScript errors
2. Check the terminal for server errors
3. Review the Network tab in DevTools for failed requests
4. Ensure both servers are running simultaneously
5. Verify file permissions for `feedbacks.json`

---

## Quick Reference

### Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `php -S localhost:8000` | Start PHP backend |

### Default Ports

| Service | Port | URL |
|---------|------|-----|
| Vite Dev Server | 5173 | http://localhost:5173 |
| PHP Backend | 8000 | http://localhost:8000 |

---

**Happy coding! 🚀**
