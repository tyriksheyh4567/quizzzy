<template>
  <div class="container">
    <h1>Викторина на русском языке</h1>
    <form @submit.prevent="generateQuestions">
      <label for="topic">Тема викторины:</label>
      <input id="topic" v-model="topic" placeholder="Введите тему" />
      <button type="submit">Сгенерировать вопросы</button>
    </form>

    <div v-if="loading">Загрузка вопросов...</div>

    <ul v-if="questions.length > 0">
      <li v-for="(question, index) in questions" :key="index">
        {{ index + 1 }}. {{ question }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const topic = ref('')
const questions = ref<string[]>([])
const loading = ref(false)

async function generateQuestions() {
  loading.value = true
  questions.value = []
  try {
    const response = await $fetch('/api/questions', {
      method: 'POST',
      body: { topic: topic.value || 'Общие знания' },
    })
    questions.value = response.questions || []
  } catch (error) {
    alert('Ошибка при получении вопросов')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input {
  padding: 0.5rem;
  font-size: 1rem;
}
button {
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}
ul {
  list-style-type: decimal;
  padding-left: 1.5rem;
}
</style>
