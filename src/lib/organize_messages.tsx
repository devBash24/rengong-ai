// import { IChat } from "@/Context/Chat/chatProvider";

interface IChat{
    id: string;
    name: string;
    date: string;
}





// Define the transformed data structure
export interface IGroupedChats {
    today: IChat[];
    yesterday: IChat[];
    previous7Days: IChat[];
    previous30Days: IChat[];
    older: Record<string, IChat[]>; // Older grouped by month (e.g., "October 2023")
}

// Helper function to format a date to "Month Year" (e.g., "October 2023")
const formatToMonthYear = (date: Date): string => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

// Main function to group chats
export const groupChatsByDate = (chats: IChat[]): IGroupedChats => {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfToday.getDate() - 1);
    const startOf7DaysAgo = new Date(startOfToday);
    startOf7DaysAgo.setDate(startOfToday.getDate() - 7);
    const startOf30DaysAgo = new Date(startOfToday);
    startOf30DaysAgo.setDate(startOfToday.getDate() - 30);

    const groupedChats: IGroupedChats = {
        today: [],
        yesterday: [],
        previous7Days: [],
        previous30Days: [],
        older: {},
    };

    chats.forEach(chat => {
        const chatDate = new Date(chat.date);

        if (chatDate >= startOfToday) {
            groupedChats.today.push(chat);
        } else if (chatDate >= startOfYesterday && chatDate < startOfToday) {
            groupedChats.yesterday.push(chat);
        } else if (chatDate >= startOf7DaysAgo && chatDate < startOfYesterday) {
            groupedChats.previous7Days.push(chat);
        } else if (chatDate >= startOf30DaysAgo && chatDate < startOf7DaysAgo) {
            groupedChats.previous30Days.push(chat);
        } else {
            const monthYear = formatToMonthYear(chatDate);
            if (!groupedChats.older[monthYear]) {
                groupedChats.older[monthYear] = [];
            }
            groupedChats.older[monthYear].push(chat);
        }
    });

    return groupedChats;
};
