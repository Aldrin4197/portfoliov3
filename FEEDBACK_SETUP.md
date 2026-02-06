# Feedback System - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start PHP Server (for feedback persistence)
Open a new terminal and run:
```bash
php -S localhost:8000
```

### 3. Start Vite Dev Server
In another terminal:
```bash
npm run dev
```

### 4. Access the App
Open http://localhost:5173

## How It Works

- **Frontend**: React + TypeScript + DaisyUI (Vite dev server on port 5173)
- **Backend**: PHP scripts (PHP server on port 8000)
- **Storage**: JSON file at `/public/feedbacks.json`
- **Proxy**: Vite proxies `/api/*` requests to PHP server

## Feedback Flow

1. User submits feedback via form
2. Frontend sends POST to `/api/save-feedback.php`
3. PHP appends feedback to `feedbacks.json`
4. Viewer loads feedbacks from `/api/get-feedbacks.php`

## Production Deployment

For production, you need a PHP-enabled web server (Apache/Nginx with PHP):

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy the `public` folder and `api` folder to your server

3. Ensure proper permissions:
   ```bash
   chmod 755 public
   chmod 664 public/feedbacks.json
   ```

4. Update API URLs in code if needed (remove `/api` prefix)

## Fallback

If PHP server is not running, the app falls back to localStorage (browser-only storage).
