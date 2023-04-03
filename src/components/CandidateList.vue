<template>
    <div class="card my-4">
        <div class="card-body">
            <h2 class="card-title mb-4">Candidates</h2>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="candidate in candidates" :key="candidate.id">
                    <td>{{ candidate.email }}</td>
                    <td>{{ candidate.fullName }}</td>
                    <td>{{ candidate.gender }}</td>
                    <td>{{ candidate.phone }}</td>
                    <td>{{ candidate.status }}</td>
                    <td>
                        <button class="btn btn-secondary" @click="editCandidate(candidate)">Edit</button>
                        <button class="btn btn-danger" @click="deleteCandidate(candidate.id)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CandidateList',
    props: {
        candidates: Array,
    },
    methods: {
        editCandidate(candidate) {
            this.$emit('update', candidate)
        },
        deleteCandidate(candidateId) {
            if (confirm('Are you sure you want to delete this candidate?')) {
                this.$emit('delete', candidateId)
            }
        },
    },
}
</script>
