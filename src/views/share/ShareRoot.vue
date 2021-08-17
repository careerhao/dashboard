<template>
    <div class="share-root">
        <div class="share-root share-root__wrapper">
            <el-card class="share-root__card">
                <div class="share-root__content">
                    <h1 class="share-root__welcome">Welcome to Dash!</h1>
                    <div class="share-root__form">
                        <el-form  :model="form" ref="form" status-icon :rules="rules">
                            <el-form-item prop="name">
                                <el-input
                                    class="share-root__input"
                                    v-model="form.name"
                                    placeholder="Project Name"
                                />
                            </el-form-item>
                        </el-form>
                        <el-button
                            class="share-root__button"
                            plain
                            @click.native="redirect"
                            :loading="loading"
                        >
                            Let's Go
                        </el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import projectServices from '@/services/projectList';

export default {
    name: "ShareRoot",
    data() {
        return {
            loading: false,
            form: {
                name: '',
            },
            rules: {
                name: [
                    { required: true, message: 'Name is required', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        redirect() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    projectServices
                        .getProjectByName(this.form.name)
                        .then(res => {
                            this.$router.push({ path: `/share/${res.id}`})
                        }, err => {
                            console.error(err);

                            this.$notify.error({
                                title: 'Error',
                                message: `Cannot find the project, please try again.`,
                                duration: 0,
                            });
                            throw err;
                        })
                        .finally(() => this.loading = false);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.share-root {
    display: flex;
    justify-content: center;
    align-items: center;

    &__wrapper {
        height: 40rem;
    }

    &__card {
        padding: 5rem;
    }

    &__welcome {
        color: $gray;
    }

    &__form {
        padding: 2rem 0;
    }

    &__input {
    }

    &__button {
        width: 100%;
        margin: 1rem 0;
    }

}
</style>
