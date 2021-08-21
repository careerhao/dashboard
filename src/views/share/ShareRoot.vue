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
                                    :placeholder="`${currentLang.projectName}`"
                                />
                            </el-form-item>
                        </el-form>
                        <el-button
                            class="share-root__button"
                            plain
                            @click.native="redirect"
                            :loading="loading"
                        >
                            {{ currentLang.explore }}
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
        let validateName = (rule, value, callback) => {
            const valueTrimmed = value.replace(/(^\s*)|(\s*$)/g, "")
            if (valueTrimmed === '') {
                callback(new Error(`${this.currentLang.nameIsRequired}`));
            } else if(!/^[\u4E00-\u9FA5A-Za-z0-9 _.]+$/.test(valueTrimmed)) {
                callback(new Error(`${this.currentLang.invalid}`))
            } else {
                callback();
            }
        };
        return {
            loading: false,
            form: {
                name: '',
            },
            rules: {
                name: [
                    { required: true, validator: validateName, trigger: 'blur' },
                ],
            }
        }
    },
    computed: {
        ...mapGetters('config', {
            currentLang: 'currentLang',
        })
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
                                title: `${this.currentLang.message.error}`,
                                message: `${this.currentLang.message.cannotFind}`,
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
