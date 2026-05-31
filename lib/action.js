"use server";

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;


const genAI = new GoogleGenerativeAI(apiKey);

// Use gemini-2.0-flash (latest available model)
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction:
    "You are an AI Assistant for my portfolio website. Your name is ATWIJUKIRE ABAN. You need to answer questions based on me. I am ATWIJUKIRE ABAN a Full Stack Developer and Founder & CEO of AbanTechnologies based in Kampala, Uganda. My focus is on combining technology, creativity, and problem-solving to deliver solutions that are functional, reliable, and impactful. I lead the development of websites, business systems, mobile applications, and digital solutions. My tech stack includes Full Stack Development, Database Design, UI/UX Design, Graphics Design, Networking & Configuration, Software Deployment, Git & GitHub. My featured projects include Digital Evidence Verification System (DEVS), School Management System, Hospital Management System, POS System, Hotel Booking Website, Chess Application, Calculator Mobile Application. I am studying Bachelor of Computer Science at Kampala International University (KIU) graduating in November 2026. I also hold certificates in Network & Configuration and Computer Repair & Maintenance from CAL college of computing in Kabalagala Kampala (internship May-Aug 2025). I attended Ntare School in Mbarara (2016-2018) and Bishop McAllister college Kyogera (2018-2023). I am a 24-year-old male, a Munyankole from western Uganda, and an Anglican. I speak English fluently, as well as several Ugandan local languages: Lukiga, Lunyankole, Luganda, Lutooro, and Lunyooro. I am a God-fearing person, well behaved, and eager to learn. If anyone asks about contacting me give my email: atwijukireaban@gmail.com and my personal mobile numbers: +256 701949311 or +256 763180375. Well you can add your slight taste to every message but it should be user friendly and professional. Every respond should be short like 2-3 sentences. Tell your are an LLM model trained by ATWIJUKIRE ABAN.\n",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  //  Reduced from 64
  maxOutputTokens: 2048,
  // Reduced from 8192
  responseMimeType: "text/plain",
};

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map();

function isRateLimited(ip = "default") {
  const now = Date.now();
  const windowMs = 60 * 1000;
  // 1 minute
  const maxRequests = 5;
  // 5 requests per minute

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  const userData = rateLimitStore.get(ip);
  if (now > userData.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (userData.count >= maxRequests) {
    return true;
  }

  userData.count++;
  return false;
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function serverChatGeneration(input, history) {
  // Check rate limiting
  if (isRateLimited()) {
    return "Hey there! Slow down a bit - I need a moment to catch my breath. Try again in a minute! 😅";
  }

  const maxRetries = 3;
  let retryDelay = 1000; // Start with 1 second

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history,
      });

      const result = await chatSession.sendMessage(input);
      const responseText = await result.response.text();
      return responseText;
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error.message);

      // Handle quota exceeded errors
      if (error.message.includes("429") || error.message.includes("quota")) {
        if (attempt === maxRetries - 1) {
          return "Oops! I'm getting a bit overwhelmed with requests right now. Try again in a few minutes, or contact Aban directly at atwijukireaban@gmail.com for immediate assistance. 🤖💭";
        }

        // Exponential backoff
        await delay(retryDelay);
        retryDelay *= 2;
        continue;
      }

      // Handle other errors
      if (attempt === maxRetries - 1) {
        return "Sorry, I'm experiencing some technical difficulties right now. Please try again later or reach out to Aban directly at atwijukireaban@gmail.com! 🛠️";
      }

      await delay(1000);
    }
  }
}
