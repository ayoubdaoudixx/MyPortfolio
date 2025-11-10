# Resume Buttons Setup

## What Was Added

I've added two resume action buttons next to the chatbot icon in the bottom-right corner of your portfolio:

### 1. **View Resume Button**
- **Icon**: Eye icon 👁️
- **Text**: "View Resume"
- **Action**: Opens your resume in a new browser tab
- **Style**: Outlined button with border

### 2. **Download Resume Button**
- **Icon**: Download icon ⬇️
- **Text**: "Download Resume"
- **Action**: Downloads the resume as `Ayoub_Daoudi_Resume.pdf`
- **Style**: Outlined button with border

### 3. **Chat Button**
- Remains at the bottom of the button stack
- Opens the AI chatbot when clicked

## Resume File Location

Your resume PDF should be placed at:
```
/public/resume.pdf
```

✅ **Good news!** I found that `resume.pdf` already exists in your `/public` folder, so the buttons will work immediately!

## How to Update Your Resume

To update your resume:

1. Replace the file at `/public/resume.pdf` with your new resume
2. Make sure the filename stays as `resume.pdf`
3. The changes will be reflected immediately (no code changes needed)

## Button Layout

When the chat is closed, you'll see a vertical stack of buttons:
```
┌─────────────────────┐
│  👁️  View Resume    │
├─────────────────────┤
│  ⬇️  Download Resume│
├─────────────────────┤
│       💬           │  ← Chat icon
└─────────────────────┘
```

When the chat is open, the buttons are hidden and only the chat window is visible.

## Customization

If you want to change the downloaded filename, edit this line in `/src/components/ai-chatbot.tsx`:
```typescript
link.download = 'Ayoub_Daoudi_Resume.pdf'; // Change this to your preferred filename
```

## Design Features

- ✅ Clear text labels on each button
- ✅ Icons for visual clarity
- ✅ Hover effects with color transitions
- ✅ Consistent styling with your portfolio theme
- ✅ Mobile responsive
- ✅ Smooth animations

---

**Your resume buttons are ready to use! 🎉**
