<template>
    <el-row :gutter="20" class="project-card">
        <el-col v-for="(item,index) in projects" 
            :key="`card_${index}`" 
            :xs="24" 
            :sm="12" 
            :lg="6"
            class="project-card__col"
        >
            <el-card shadow="always" class="project-card__box">
    		    <div class="project-card__header">
    			    <span><strong>{{ item.name }}</strong></span>
  			    </div>
  			    <div class="project-card__description">
    			    <span class="project-card__description--none" v-if="item.description === ''">
                        <i>(No description)</i>
    			    </span>
                    <span v-else>
                        {{ item.description }}
                    </span>
  			    </div>
                <div class="project-card__footer">
                    <div class="project-card__more-options">
                        <el-dropdown trigger="click" class="project-card__more-options">
                            <span class="el-dropdown-link">
                                <i class="el-icon-more el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-edit">编辑</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-share" disabled>分享</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-delete" divided>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="project-card__open">
                        <el-button plain size="medium" @click.native="selectProject(item)">打开</el-button>
                    </div>
                </div>
            </el-card>
		</el-col>
    </el-row>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        projects: {
            required: true,
            type: Array,
        },
        // isAdmin: {
        //     required: false,
        //     type: Boolean,
        // },
    },
    methods: {
        selectProject(id) {
            this.$emit('selectProject', id);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/modules/_all';
 
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
    }

    &__header {
        display:flex;
        justify-content: space-between;
    }

    &__description {
        padding: 1rem 0;
        font-size: 12px;

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