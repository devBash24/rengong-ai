import { IChat } from "@/Context/Chat/chatProvider";


export const sampleChats: IChat[] = [
    {
      id: 1,
      name: "John Doe",
      messages: [
        {
          id: 101,
          isUser: true,
          message: "Hello! How are you?"
        },
        {
          id: 102,
          isUser: false,
          message: "I'm good, thanks! How about you?"
        }
      ],
      date: "2023-05-15T10:30:00Z"
    },
    {
      id: 2,
      name: "Jane Smith",
      messages: [
        {
          id: 201,
          isUser: true,
          message: "What's your favorite programming language?"
        },
        {
          id: 202,
          isUser: false,
          message: "I'm quite fond of TypeScript!"
        },
        {
          id: 203,
          isUser: true,
          message: "That's interesting! Have you used it in any projects?"
        },
        {
          id: 204,
          isUser: false,
          message: "Yes, I've used it for a few chatbot applications."
        }
      ],
      date: "2023-05-15T11:45:00Z"
    },
    {
      id: 3,
      name: "Bob Johnson",
      messages: [
        {
          id: 301,
          isUser: true,
          message: "I'm having trouble with my code. Can you help me out?"
        },
        {
          id: 302,
          isUser: false,
          message: "Of course! What seems to be the issue?"
        },
        {
          id: 303,
          isUser: true,
          message: "My function isn't returning the expected output."
        },
        {
          id: 304,
          isUser: false,
          message: "Let's take a look at your code then. Could you share it with me?"
        }
      ],
      date: "2023-05-16T09:30:00Z"
    },
    {
      id: 4,
      name: "Alice Brown",
      messages: [
        {
          id: 401,
          isUser: true,
          message: "Have you tried using async/await in your functions?"
        },
        {
          id: 402,
          isUser: false,
          message: "Yes, I've found it very helpful for managing asynchronous operations!"
        },
        {
          id: 403,
          isUser: true,
          message: "That's great! It can make your code much more readable and maintainable."
        },
        {
          id: 404,
          isUser: false,
          message: "Absolutely! It's one of my favorite features in TypeScript."
        }
      ],
      date: "2023-05-17T14:15:00Z"
    },
    {
      id: 5,
      name: "Charlie Davis",
      messages: [
        {
          id: 501,
          isUser: true,
          message: "How do you handle errors in your code?"
        },
        {
          id: 502,
          isUser: false,
          message: "I use try/catch blocks to catch and handle exceptions."
        },
        {
          id: 503,
          isUser: true,
          message: "That's a good practice! Do you have any tips for debugging?"
        },
        {
          id: 504,
          isUser: false,
          message: "Yes, I always recommend using console.log() statements strategically."
        }
      ],
      date: "2023-05-18T10:00:00Z"
    }
  ];