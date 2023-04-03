<template>
    <div class="container">
        <h1 class="text-center my-4">Candidate Manager</h1>
        <CandidateForm @create="createCandidate" />
        <CandidateList :candidates="candidates" @update="updateCandidate" @delete="deleteCandidate" />
    </div>
</template>

<script>
import CandidateForm from './components/CandidateForm.vue'
import CandidateList from './components/CandidateList.vue'
import { getCandidates, createCandidate, updateCandidate, deleteCandidate } from './api/candidates.js'

export default {
    name: 'App',
    components: {
        CandidateForm,
        CandidateList,
    },
    data() {
        return {
            candidates: [],
        }
    },
    created() {
        this.fetchCandidates()
    },
    methods: {
        async fetchCandidates() {
            const candidates = await getCandidates()
            this.candidates = candidates
        },
        async createCandidate(candidateData) {
            const newCandidate = await createCandidate(candidateData)
            this.candidates.push(newCandidate)
        },
        async updateCandidate(candidateData) {
            const updatedCandidate = await updateCandidate(candidateData)
            const index = this.candidates.findIndex(c => c.id === updatedCandidate.id)
            this.candidates.splice(index, 1, updatedCandidate)
        },
        async deleteCandidate(candidateId) {
            await deleteCandidate(candidateId)
            const index = this.candidates.findIndex(c => c.id === candidateId)
            this.candidates.splice(index, 1)
        },
    },
}
</script>

<style>
.container {
    max-width: 800px;
    margin: 0 auto;
}
</style>
