<template>
    <el-row class="project-share">
        <el-col>
            <el-dialog
                title="Share Project"
                :visible="isSharingProjectModalOpen"
                :before-close="toggleDialog"
                width="30%"
                :destroy-on-close="true"
            >
                <el-tabs v-model="activeName" :stretch="true">
                    <el-tab-pane label="Url" name="first">
                        <div class="project-share__content">
                            <div class="project-share__label">
                                <label>Please tell our friend to visit the following link: </label>
                                <div class="project-share__icon"  @click="copy('id')">
                                    <i class="el-icon-document-copy" />
                                </div>
                            </div>
                            <div class="project-share__label">
                            <el-link
                                type="info"
                                class="project-share__link"
                                :href="`${getUrl}${projectInfo.id}`"
                            >
                                {{ `${getUrl}${projectInfo.id}` }}
                            </el-link>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Name" name="second">
                        <div class="project-share__content">
                            <div class="project-share__label">
                                <label> {{ `Here is the project name: ${projectInfo.name} `}}</label>
                                <div class="project-share__icon"  @click="copy('name')">
                                    <i class="el-icon-document-copy" />
                                </div>
                            </div>
                            <div class="project-share__label--column">
                                <label>Let's hit the following link: </label>
                                <el-link
                                    type="info"
                                    class="project-share__link"
                                    :href="`${getUrl}`"
                                >
                                    {{ getUrl }}
                                </el-link>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

const ghUrl = process.env.NODE_ENV !== 'production' ? '' : process.env.URL_FOR_GITHUB;

export default {
    name: 'ProjectShare',
    props: {
        projectInfo: {
            required: true,
            type: Object,
            default: () => {},
        }
    },
    data() {
        return {
            activeName: 'first',
        }
    },
    computed: {
        ...mapState({
            isSharingProjectModalOpen: state => state.projects.isSharingProjectModalOpen,
        }),
        getUrl() {
            // For github gh-page, normal url should remove this /dashboard/
            return `${window.location.origin}${ghUrl}/#/share/`;
        }
    },
    methods: {
        toggleDialog() {
            this.$emit('toggleShareProjectModal');
        },
        copy(data) {
            let tempData = '';

            if(data === 'id') {
                tempData = `${this.getUrl}${this.projectInfo.id}`;
            } else {
                tempData = this.projectInfo.name;
            }

            // Create temp input
            const input = document.createElement("input");
            // Put temp input to somewhere else
            document.body.appendChild(input);
            // Feed in the required value to that temp input
            input.setAttribute("value", tempData);
            // Select and exec the copy command
            input.select();

            // If return false means device not support copy command
            if (document.execCommand("copy")) {
                document.execCommand("copy");
                this.$notify({
                    title: 'Success',
                    type: 'success',
                    message: `Copied ${tempData} to the clipboard`,
                    duration: 2000,
                    offset: 50
                });
            } else {
                this.$notify.error({
                    title: 'Failed',
                    message: `Copied ${tempData} to the clipboard failed`,
                    duration: 0,
                    offset: 50
                });
            }
            // Remove temp input node
            document.body.removeChild(input);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.project-share  {
    &__content {
        padding: 1rem;
    }

    &__icon {
        padding: 1rem;
        font-size: 1.5rem;
    }

    &__label {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: .5rem 0;

        label {
            font-size: 1.125rem;
        }

        &--column {
            display: flex;
            align-items: center;

            padding: .5rem 0;
        }
    }

    &__link {
        font-size: .875rem;
    }
}
</style>