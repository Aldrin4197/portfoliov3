# Feedback System

## Overview
A 5-star rating feedback system integrated into the portfolio using DaisyUI components.

## Features
- ⭐ 5-star rating system with DaisyUI styling
- 📝 User feedback form (name, email, rating, comment)
- 💾 Data persistence using localStorage
- 📊 Feedback viewer with management capabilities
- 📥 Export feedbacks to JSON
- 🗑️ Delete individual or all feedbacks

## Components

### 1. `feedback.tsx`
Main feedback form component with:
- Name input
- Email input
- 5-star rating selector (DaisyUI)
- Optional comment textarea
- Form validation
- Success notification

### 2. `feedbackViewer.tsx`
Admin viewer component with:
- View all submitted feedbacks
- Export all feedbacks to JSON file
- Delete individual feedbacks
- Clear all feedbacks
- Display rating with stars
- Show submission timestamp

## Data Storage

### localStorage
Feedbacks are stored in the browser's localStorage under the key `"feedbacks"`.

### JSON Export
You can export all feedbacks to a JSON file with the format:
```json
[
  {
    "id": "feedback_1738789200000",
    "name": "John Doe",
    "email": "john@example.com",
    "rating": 5,
    "comment": "Great portfolio!",
    "timestamp": "2026-02-05T10:30:00.000Z"
  }
]
```

## Usage

### Adding Feedback
1. Scroll to the "Share Your Feedback" section
2. Fill in your name and email
3. Click on stars to rate (1-5)
4. Optionally add a comment
5. Click "Submit Feedback"

### Viewing Feedbacks (Admin)
1. Scroll to the feedback viewer section
2. Click "View Feedbacks" button
3. See all submitted feedbacks
4. Export to JSON or delete as needed

## Technical Details

- **Framework**: React with TypeScript
- **Styling**: TailwindCSS + DaisyUI
- **Animations**: Framer Motion
- **Storage**: Browser localStorage
- **Icons**: React Icons (FaStar, FaDownload, FaTrash, FaArrowUp)

## File Structure
```
src/
  components/
    feedback.tsx          # Main feedback form
    feedbackViewer.tsx    # Admin feedback viewer
  data/
    feedbackData.ts       # TypeScript interfaces
public/
  feedbacks.json          # Example/backup JSON storage
```

## Future Enhancements
- [ ] Backend API integration
- [ ] Database storage (MongoDB, PostgreSQL)
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Feedback moderation
- [ ] Response system
- [ ] Average rating display
