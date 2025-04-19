import { defineEventHandler, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const questionTopic = body.topic || 'Общие знания'

  // Call Google AI API (Gemini 2.0 Flash) to generate quiz questions
  // This is a placeholder example, adjust according to actual Google AI API usage

  const response = await $fetch('https://api.google.com/ai/generate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.googleApiKey}`,
      'Content-Type': 'application/json',
    },
    body: {
      model: 'gemini-2.0-flash',
      prompt: `Сгенерируй 5 вопросов викторины на тему: ${questionTopic} на русском языке.`,
      max_tokens: 500,
    },
  }) as { choices?: { text?: string }[] }

  return {
    questions: response.choices?.[0]?.text?.split('\\n').filter(Boolean) || [],
  }
})
