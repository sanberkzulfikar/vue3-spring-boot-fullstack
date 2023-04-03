<template>
    <div class="card my-4">
        <div class="card-body">
            <h2 class="card-title mb-4">{{ mode }} Candidate</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="email" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-control" v-model="fullName" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Gender</label>
                    <select class="form-select" v-model="gender" required>
                        <option value="">Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone</label>
                    <input type="tel" class="form-control" v-model="phone" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Status</label>
                    <select class="form-select" v-model="status" required>
                        <option value="">Select a status</option>
                        <option value="applied">Applied</option>
                        <option value="technical-evaluation">Technical-Evaluation</option>
                        <option value="offer-sent">Offer-Sent</option>
                        <option value="interview">Interview</option>
                        <option value="hired">Hired</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">{{ mode }} Candidate</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CandidateForm',
    props: {
        candidate: Object,
        mode: {
            type: String,
            default: 'New',
        },
    },
    data() {
        return {
            email: '',
            fullName: '',
            gender: '',
            phone: '',
            status: '',
        }
    },
    watch: {
        candidate: {
            immediate: true,
            handler(candidate) {
                if (candidate) {
                    this.email = candidate.email
                    this.fullName = candidate.fullName
                    this.gender = candidate.gender
                    this.phone = candidate.phone
                    this.status = candidate.status
                }
            },
        },
    },
    methods: {
        submitForm() {
            const candidateData = {
                email: this.email,
                fullName: this.fullName,
                gender: this.gender,
                phone: this.phone,
                status: this.status,
            }
            if (this.mode === 'New') {
                this.$emit('create', candidateData)
            } else {
                candidateData.id = this.candidate.id
                this.$emit('update', candidateData)
            }
            this.clearForm()
        },
        clearForm() {
            this.email = ''
            this.fullName = ''
            this.gender = ''
            this.phone = ''
            this.status = ''
        },
    },
}
</script>
