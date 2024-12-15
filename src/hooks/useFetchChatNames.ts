import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchChatNames = () => {
  const query = useQuery({
    queryKey: ["chatNames"],
    queryFn: async () => {
      const response = await axios.get('/api/chat-names');
      if(response.status !== 200) {
        throw new Error('Failed to fetch chat names');
      }
      return response.data.data;
    }
  })

  return { ...query }
};

export default useFetchChatNames;
