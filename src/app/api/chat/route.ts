import { DATA } from "@/data/resume";
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Convert resume data to a comprehensive string for context
function getResumeContext(): string {
  const context = `
# About Ayoub Daoudi

**Name:** ${DATA.name}
**Location:** ${DATA.location}
**Email:** ${DATA.contact.email}
**Phone:** ${DATA.contact.tel}

**Professional Summary:**
${DATA.summary}

**Description:**
${DATA.description}

## Skills
${DATA.skills.join(", ")}

## Work Experience
${DATA.work
  .map(
    (job) => `
### ${job.title} at ${job.company}
**Location:** ${job.location}
**Period:** ${job.start} - ${job.end}
**Description:** ${job.description}
`
  )
  .join("\n")}

## Education
${DATA.education
  .map(
    (edu) => `
### ${edu.degree}
**School:** ${edu.school}
**Period:** ${edu.start} - ${edu.end}
`
  )
  .join("\n")}

## Projects
${DATA.projects
  .map(
    (project) => `
### ${project.title}
**Date:** ${project.dates}
**Description:** ${project.description}
**Technologies:** ${project.technologies.join(", ")}
`
  )
  .join("\n")}

## Certifications
${DATA.hackathons
  .map(
    (cert) => `
### ${cert.title}
**Dates:** ${cert.dates}
**Location:** ${cert.location}
**Description:** ${cert.description}
`
  )
  .join("\n")}

## Contact & Social Media
- LinkedIn: ${DATA.contact.social.LinkedIn.url}
- GitHub: ${DATA.contact.social.GitHub.url}
- Email: ${DATA.contact.email}
`;

  return context;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    // Check if Groq API key is configured
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key not configured" },
        { status: 500 }
      );
    }

    const resumeContext = getResumeContext();

    // System prompt that defines the chatbot's behavior
    const systemPrompt = `You are Ayoub Daoudi’s AI Assistant — a professional, friendly chatbot integrated into Ayoub’s portfolio. Your purpose is to help visitors quickly learn about my (Ayoub’s) background, skills, experience, education, projects, and certifications.

RESPONSE GUIDELINES:

1. Speak in the first person as Ayoub Daoudi (use “I”, “me”, “my”).  
2. Keep answers concise, clear, and relevant — 2 to 4 sentences unless more detail is requested.  
3. Respond only using information from the provided context below. Do not invent or assume facts.  
4. If something isn’t included in the context, reply:  
   “I don’t have that information in my knowledge base, but feel free to reach out to me at ${DATA.contact.email}.”  
5. Maintain a polite, professional, and approachable tone.  
6. When mentioning skills or projects, briefly highlight the most relevant tools or technologies.  
7. If asked about availability or collaboration, invite users to contact me at ${DATA.contact.email}.  
8. Always respond in the same language the user uses.

CONTEXT (My Professional Information):  
${resumeContext}

Remember: You are Ayoub Daoudi speaking directly to the visitor.`;

    // Prepare messages for Groq
    const groqMessages = [
      { role: "system" as const, content: systemPrompt },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
    ];

    // Call Groq API
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b", // Using Llama 3.3 70B for fast, high-quality responses
      messages: groqMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0].message.content;

    return NextResponse.json({
      message: assistantMessage,
      success: true,
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process chat request",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
