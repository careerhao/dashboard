<template>
    <el-row :gutter="20" class="project-card">
        <el-col
            v-for="(item,index) in projects"
            :key="`card_${index}`"
            :xs="24"
            :sm="12"
            :lg="6"
            class="project-card__col"
        >
            <el-card
                shadow="none"
                class="project-card__box"
                :class="{
                    'project-card__box--disabled' :
                    isProjectCreating(item.id)
                }"
            >
    		    <div class="project-card__header">
    			    <span><strong>{{ item.name }}</strong></span>
  			    </div>
  			    <div class="project-card__description">
    			    <div class="project-card__wrapper">
                        <span class="project-card__description-text project-card__description--none" v-if="item.description === ''">
                            <i>{{ `(${currentLang.noDescription})` }}</i>
                        </span>
                        <span v-else class="project-card__description-text">
                            {{ item.description }}
                        </span>
    			    </div>
                    <i
                        class="project-card__description-text
                            project-card__description-modified
                            project-card__description--none "
                    >
                        {{ currentLang.lastModified }}: {{ parseTime(item.timestamp) }}
                    </i>
  			    </div>
                <div class="project-card__footer">
                    <div class="project-card__more-options">
                        <el-dropdown trigger="click" class="project-card__more-options">
                            <span class="el-dropdown-link">
                                <i class="el-icon-more el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item
                                    icon="el-icon-edit"
                                    class="el-dropdown-items"
                                    :disabled="isProjectCreating(item.id)"
                                    @click.native="editProject(item)"
                                >
                                    {{ currentLang.edit }}
                                </el-dropdown-item>
                                <el-dropdown-item
                                    icon="el-icon-share"
                                    class="el-dropdown-items"
                                    @click.native="shareProject(item)"
                                >
                                    {{ currentLang.share }}
                                </el-dropdown-item>
                                <el-dropdown-item
                                    icon="el-icon-delete"
                                    class="el-dropdown-items--danger"
                                    :disabled="isProjectCreating(item.id)"
                                    divided
                                    @click.native="removeProject(item)"
                                >
                                    {{ currentLang.remove }}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="project-card__open">
                        <el-button
                            plain
                            size="medium"
                            class="button-plain--overwrite"
                            :disabled="isProjectCreating(item.id)"
                            :loading="isProjectCreating(item.id)"
                            @click.native="selectProject(item)"
                        >
                            {{ currentLang.open }}
                        </el-button>
                    </div>
                </div>
            </el-card>
		</el-col>
    </el-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { dateTime, isToday, isThisYear } from '@/utils';
export default {
    name: 'ProjectCard',
    props: {
        projects: {
            required: true,
            type: Array,
        },
        editing: {
            required: false,
            type: String,
        },
        creatingProjectId: {
            required: false,
            type: String,
            default: '',
        }
        // isAdmin: {
        //     required: false,
        //     type: Boolean,
        // },
    },
    computed: {
        ...mapGetters('projects',{
            isProjectCreating: 'isProjectCreating',
        }),
        ...mapGetters('config', {
            currentLang: 'currentLang',
        }),
    },
    methods: {
        selectProject(id) {
            this.$emit('selectProject', id);
        },
        editProject(item) {
            this.$emit('editProject', item);
        },
        removeProject(item) {
            this.$emit('removeProject', item);
        },
        shareProject(item) {
            this.$emit('shareProject', item);
        },
        parseTime(timestamp) {
            const time = new Date(parseInt(timestamp))

            return isToday(time) ? dateTime(time).split(',')[1] : dateTime(time).split(',')[0];
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.project-card {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;

    &__col {
        margin-bottom: 2rem;
    }

    &__box {
        background-color: $white;
        border:1px solid $almost-gray;
        border-radius: $border-radius;

        &--disabled {
            opacity: .7;
        }
    }

    &__header {
        display:flex;
        justify-content: space-between;
    }

    &__description {
        display: flex;
        flex-direction: column;

        padding: 1rem 0;

        &-text {
            font-size: .75rem;
            color: $gray;
            word-wrap: break-word;
            word-break: break-all;
        }

        &-modified {
            align-self: flex-end;

            margin-top: 1rem;
        }

        &--none {
            color: $gray-light;
        }
    }
    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: .75rem;
        border-top: 1px solid $almost-gray;
    }
}
</style>