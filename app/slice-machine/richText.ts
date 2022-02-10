import { RichText, RichTextBlock } from 'prismic-reactjs';

export const hasRichTextContent = (richText?: RichTextBlock[]): boolean => {
  const text = richText && RichText.asText(richText);

  return !!text;
};
