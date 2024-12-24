export function formatText(text: string): string {
  // Convert **bold** to <strong> with Tailwind class for bold text
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong class='font-bold'>$1</strong>");

  // Convert *italic* to <em> with Tailwind class for italic text
  text = text.replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>");

  // Identify and format unordered lists (* item)
  text = text.replace(/(\n|^)\* (.*?)(?=\n|$)/g, "<li class='list-disc pl-5'>$2</li>");
  text = text.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul class='mb-4'>$1</ul>");

  // Identify and format ordered lists (1. item)
  text = text.replace(/(\n|^)\d+\. (.*?)(?=\n|$)/g, "<li class='list-decimal pl-5'>$2</li>");
  text = text.replace(/(<li>[\s\S]*?<\/li>)/g, "<ol class='mb-4'>$1</ol>");

  // Wrap standalone sections with paragraphs and apply Tailwind paragraph styles
  // text = text.replace(/(?<!<\/?(ul|ol|li|strong|em|p)>)([\s\S]*?)(?=\n|$)/g, (match, p1) => {
  //   if (p1 && p1.trim()) return `<p class='mb-4 text-gray-800'>${p1.trim()}</p>`;
  //   return p1 || '';  // Return p1 or an empty string if it's undefined or null
  // });

  // // Return the formatted text inside a container with Tailwind classes
  return `<div class="formatted-text">${text}</div>`;
}
