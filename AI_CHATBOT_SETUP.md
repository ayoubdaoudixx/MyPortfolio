# AI Chatbot Setup Guide

## Overview
Your portfolio now includes an AI-powered chatbot that can answer questions about your professional background using the data from `resume.tsx`. The chatbot uses Groq's Llama 3.3 70B model for intelligent, blazing-fast, context-aware responses.

## Features
✅ **Dynamic Knowledge Base**: Automatically loads all data from `resume.tsx`  
✅ **Personalized Responses**: Responds as Ayoub Daoudi in first-person  
✅ **Conversation History**: Maintains context within the same session  
✅ **Beautiful UI**: Clean, minimal design with Tailwind CSS  
✅ **Floating Chat Icon**: Bottom-right corner for easy access  
✅ **Mobile Responsive**: Works seamlessly on all devices  

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

This will install the `groq-sdk` package (v0.7.0) that was added to your `package.json`.

### 2. Configure Groq API Key

1. Get your Groq API key from [Groq Console](https://console.groq.com/keys)
   - Sign up for free at [groq.com](https://groq.com)
   - Navigate to API Keys section
   - Create a new API key
2. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
3. Add your API key to `.env.local`:
   ```env
   GROQ_API_KEY=gsk_your_actual_api_key_here
   ```

**Important**: Never commit your `.env.local` file to version control. It's already in `.gitignore`.

### 3. Run the Development Server
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio with the AI chatbot.

## How It Works

### Architecture
```
User Input → Frontend (ai-chatbot.tsx) → API Route (/api/chat) → Groq API → Response
```

### Components Created

1. **`/src/components/ai-chatbot.tsx`**
   - React component with chat UI
   - Manages conversation state
   - Handles user input and displays messages
   - Floating chat button and expandable window

2. **`/src/app/api/chat/route.ts`**
   - Next.js API route handler
   - Loads and formats data from `resume.tsx`
   - Sends requests to Groq API
   - Returns AI-generated responses

3. **Updated `package.json`**
   - Added `groq-sdk` dependency

4. **Updated `/src/app/page.tsx`**
   - Integrated `<AIChatbot />` component

## Example Questions the Chatbot Can Answer

- "What are Ayoub's strongest AI skills?"
- "Tell me about his experience at IMT Atlantique."
- "Which certifications is he working on?"
- "What kind of projects has he built with LangChain?"
- "What is his educational background?"
- "Does he have experience with TensorFlow?"
- "What internships has he completed?"
- "How can I contact him?"

## Customization

### Change AI Model
Edit `/src/app/api/chat/route.ts`:
```typescript
const completion = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile", // Other options: "llama-3.1-70b-versatile", "mixtral-8x7b-32768"
  messages: groqMessages,
  temperature: 0.7,
  max_tokens: 500,
});
```

**Available Groq Models:**
- `llama-3.3-70b-versatile` - Latest Llama model, excellent quality (recommended)
- `llama-3.1-70b-versatile` - Previous Llama version, still very good
- `mixtral-8x7b-32768` - Mixtral model, good for longer contexts

### Adjust Response Length
Modify the `max_tokens` parameter (currently 500) to allow longer or shorter responses.

### Change Chatbot Personality
Edit the `systemPrompt` in `/src/app/api/chat/route.ts` to adjust tone and behavior.

### Customize UI Colors
The chatbot uses your existing Tailwind theme. Modify classes in `/src/components/ai-chatbot.tsx` to customize appearance.

## Cost Considerations

**Groq is FREE for developers!** 🎉

- Groq offers generous free tier with high rate limits
- Ultra-fast inference speeds (up to 10x faster than traditional APIs)
- No credit card required to get started
- Perfect for portfolio projects and production use

**Why Groq?**
- ⚡ **Blazing Fast**: Responses in milliseconds
- 💰 **Free Tier**: Generous limits for personal projects
- 🚀 **High Quality**: Llama 3.3 70B rivals GPT-4 performance
- 🔧 **Easy to Use**: Drop-in replacement for OpenAI API

## Troubleshooting

### "Groq API key not configured" error
- Ensure `.env.local` exists with valid `GROQ_API_KEY`
- Restart the development server after adding the key
- Verify the key starts with `gsk_`

### Chatbot not responding
- Check browser console for errors
- Verify API key is valid at [console.groq.com](https://console.groq.com)
- Check Groq API status at [status.groq.com](https://status.groq.com)

### TypeScript errors
- Run `npm install` to ensure all dependencies are installed
- Restart your IDE/editor

## Security Notes

- ✅ API key is stored in `.env.local` (server-side only)
- ✅ Never exposed to the client
- ✅ API route runs on the server
- ✅ Rate limiting recommended for production

## Production Deployment

When deploying to Vercel, Netlify, or other platforms:

1. Add `GROQ_API_KEY` to your environment variables in the platform dashboard
2. Ensure the API route is deployed correctly
3. Consider adding rate limiting to prevent abuse (though Groq has built-in limits)
4. Monitor API usage in Groq console dashboard

## Support

For issues or questions:
- Check the Groq API documentation: [console.groq.com/docs](https://console.groq.com/docs)
- Review Next.js API routes: [nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- Join Groq Discord community for support

---

**Enjoy your AI-powered portfolio! 🚀**
