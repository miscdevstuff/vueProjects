<script setup lang="ts">
    import { defineEmits, defineProps } from "vue";

    const { question } = defineProps(["question"]);
    const emit = defineEmits(["selectOption"]);

    const emitSelectedOption = (isCorrect) => {
        emit("selectOption", isCorrect);
    };
</script>

<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
        <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .question-container {
        margin: 20px;
    }

    .question {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label {
        width: 50px;
        height: 50px;
        display: flex;
        background-color: bisque;
        color: black;
        font-size: 30px;
        align-items: center;
        justify-content: center;
    }

    .option-value {
        background-color: rgb(244, 239, 239);
        color: black;
        width: 100%;
        font-size: 30px;
        padding: 0 20px;
    }
</style>