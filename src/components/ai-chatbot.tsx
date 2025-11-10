"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Send, X, Loader2, RefreshCw, Eye, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initialize with greeting message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "👋 Hi! I'm Ayoub's AI Assistant. You can ask me anything about his background, projects, or skills.",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Handle scroll to hide/show buttons on mobile
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only apply on mobile/tablet (< 768px)
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Scrolling down & past 50px
          setShowButtons(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setShowButtons(true);
        }
      } else {
        // Always show on desktop
        setShowButtons(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    // Add user message to chat
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Send to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      // Add assistant response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message || "Sorry, I couldn't process that request.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again later or contact Ayoub directly at ayoubdaoudi2001@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "👋 Hi! I'm Ayoub's AI Assistant. You can ask me anything about his background, projects, or skills.",
      },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Resume Action Buttons - Top Right (vertical on desktop, horizontal on mobile) */}
      <div className={`fixed top-0 left-0 right-0 md:top-6 md:right-6 md:left-auto z-50 flex flex-row md:flex-col gap-2 md:gap-3 justify-center md:justify-start p-3 md:p-0 bg-background/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none transition-transform duration-300 ${
        showButtons ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
      }`}>
        {/* View Resume Button */}
        <Button
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="h-10 px-4 md:h-11 md:px-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
          aria-label="View Resume"
        >
          <Eye className="h-4 w-4" />
          <span className="text-xs md:text-sm font-medium">View Resume</span>
        </Button>
        
        {/* Download Resume Button */}
        <Button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'Ayoub_Daoudi_Resume.pdf';
            link.click();
          }}
          className="h-10 px-4 md:h-11 md:px-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
          aria-label="Download Resume"
        >
          <Download className="h-4 w-4" />
          <span className="text-xs md:text-sm font-medium">Download Resume</span>
        </Button>
      </div>

      {/* Floating Chat Button - Bottom Right */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
          aria-label="Open AI Assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ayoub&apos;s AI Assistant</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                onClick={handleNewChat}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                aria-label="Start new chat"
                title="New Chat"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-background border border-border rounded-bl-sm shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background border border-border rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-background border-t border-border">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-full border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="h-10 w-10 rounded-full shrink-0"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by AI • Information from resume
            </p>
          </div>
        </div>
      )}
    </>
  );
}
