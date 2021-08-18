<template>
    <el-row>
        <el-col>
            <el-dialog 
                title="Update Project" 
                :visible="isEditingProjectModalOpen" 
                :before-close="toggleDialog"
                width="30%"
                :destroy-on-close="true"
            >
                <el-form :model="form" ref="form" status-icon :rules="rules">
                    <el-form-item label="Project Name" prop="name">
                        <el-input 
                            v-model="form.name" 
                            autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item label="Description">
                        <el-input
                            class="text-input--overwrite"
                            type="textarea"
                            placeholder="(No description)"
                            v-model="form.description"
                            maxlength="150"
                            show-word-limit
                        ></el-input>                
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary"  @click.native="toggleDialog">Cancel</el-button>
                    <el-button class="button-plain--overwrite" @click.native="submit">Update</el-button>
                </div>
            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { deepClone } from '@/utils'

export default {
    name: 'ProjectUpdate',
    props: {
        projectInfo: {
            required: true,
            type: Object,
            default: () => {},
        }
    },
    data() {
        let validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Name is required'));
            } else if(!/^[\u4E00-\u9FA5A-Za-z0-9_.]+$/.test(value)) {
                callback(new Error('Invalid name'))
            } else {
                callback();
            }
        };
        return {
            form: {
                name: '',
            },
            rules: {
                name: [
                    { required: true, validator: validateName, trigger: 'blur' },
                ],
            },
        };
    },
    mounted() {
        this.form = deepClone(this.projectInfo);
    },
    computed: {
        ...mapState({
            isEditingProjectModalOpen: state => state.projects.isEditingProjectModalOpen,
        })
    },
    methods: {
        toggleDialog() {
            this.$emit('toggleEditProjectModal');
        },
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$emit('submitForm', this.form); 
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';
</style>