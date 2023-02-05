<script setup lang="ts">
    import { ref } from "vue";

    const showModal = ref(false);
    const showDebugModal = ref(false);
    const newNote = ref("");
    const notes = ref([]);
    const errorMessage = ref("");

    const generateRandomColor = () => {
        return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    }

    const addNote = () => {
        if (newNote.value.length < 5) {
            return errorMessage.value = "Note needs to be 5 characters or more!"
        }
        notes.value.push({
            id: Math.floor(Math.random() * 1000000),
            text: newNote.value,
            date: new Date().toLocaleDateString("en-US"),
            backgroundColor: generateRandomColor(),
        })
        showModal.value = false;
        newNote.value = "";
        errorMessage.value = ""
    }
</script>

<template>
    <main>
        <div class="overlay" v-if="showModal">
            <div class="modal">
                <textarea name="note" id=note rows="10" cols="30" v-model.trim="newNote"></textarea>
                <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
                <button @click="addNote">Add note</button>
                <button class="close" @click="showModal = false">Close</button>
            </div>
        </div>
        <div class="container">
            <header>
                <h2>Notes</h2>
                <div>
                    <button @click="showModal = true">+</button>
                    <button @click="showDebugModal = true">D</button>
                </div>
            </header>
            <div class="cards-container">
                <div class="card" v-for="note in notes" :key="note.id" :style="{backgroundColor: note.backgroundColor}">
                    <p class="main-text">{{ note.text }}</p>
                    <p class="date">{{ note.date }}</p>
                </div>
            </div>
            <div class="note-state-container" v-if="showDebugModal">
                <h2>Notes in state:</h2>
                <p class="note-state">
                    {{ notes }}
                </p>
                <button @click="showDebugModal = false">Close</button>
                <button @click="notes = []">Reset State</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
}

.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h2 {
    font-weight: bolder;
    font-size: 50px;
    margin-bottom: 25px;
}

header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 100%;
    color: white;
    font-size: 20px;
}

.card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
}

.main-text {
    color: black;
}
.date {
    font-size: 13px;
    font-weight: lighter;
    color: black;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    width: 750px;
    background-color: black;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
}

.modal .close {
    background-color: red;
    margin-top: 7px;
}

.error-message {
    color: red;
}

.note-state-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.77);
    display: flex;
    padding: 15px;
    border-radius: 15px;
}

.note-state-container h2 {
    font-weight: bolder;
}
.note-state {
    padding: 5px;
}
</style>
