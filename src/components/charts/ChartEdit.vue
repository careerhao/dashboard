<template>
    <el-row>
        <el-col>
            <el-dialog 
                :title="currentLang.editChart" 
                :visible="isEditShow" 
                :before-close="toggleDialog"
                width="30%"
                :destroy-on-close="true"
            > 
                    <el-form :model="form">
                    <el-form-item :label="currentLang.chartName">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item :label="currentLang.chartType">
                        <el-input v-model="form.type" disabled autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-radio v-model="dataSource" :label="1">API</el-radio>
                        <el-radio v-model="dataSource" :label="2">SQL</el-radio>
                        <el-radio v-model="dataSource" :label="3">Wbsocket</el-radio>
                    </el-form-item>
                    <el-form-item v-show="dataSource === 1" label="URL">
                        <el-input v-model="form.url" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item v-show="dataSource === 2" label="SQL">
                        <el-input
                            class="text-input--overwrite"
                            type="textarea"
                            placeholder="SELECT from"
                            v-model="form.url"
                            maxlength="150"
                            show-word-limit
                        ></el-input>                
                    </el-form-item>
                    <el-form-item v-show="dataSource === 3">
                        <label>Coming soon...</label>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary"  @click.native="toggleDialog">{{ currentLang.cancel }}</el-button>
                    <el-button class="button-plain--overwrite" @click.native="submit">{{ currentLang.confirm }}</el-button>
                </div>
            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { deepClone } from '@/utils'

export default {
    name: 'ChartEdit',
    props: {
        chartData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            form: {},
            dataSource: 1,
        };
    },
    created() {
        this.form = deepClone(this.chartData);
    },
    beforeDestroy() {
        this.form = {};
    },
    computed: {
        ...mapState({
			isEditShow: state => state.currentProject.isEditChartShow,
        }),
        ...mapGetters('config', {
            currentLang: 'currentLang',
        }),
        byUrl() {
            return this.dataSource === 1;
        }
    },
    methods: {
        toggleDialog() {
            this.$emit('toggleEditChartDialog');
        },
        submit() {
            this.$emit('submitForm', {
                ...this.form,
                byUrl: this.byUrl
            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';
</style>