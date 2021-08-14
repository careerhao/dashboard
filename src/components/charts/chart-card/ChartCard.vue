<template>
    <div class="chart-card">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
            <el-skeleton-item 
                v-show="!imageOk" 
                variant="image" 
                class="chart-card__image" 
            />
            <img 
                v-show="imageOk"
                :src="imageurl" 
                class="chart-card__image" 
                @load="imageLoaded"
                @error="imageError"
            >
            <div class="chart-card__bottom clearfix">
                <span>{{ name }}</span>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'ChartCard',
    props: {
        imageurl: {
            type: String,
            required: false,
            default: '',
        },
        name: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isImageLoaded: false,
            isImageError: false,
        }
    },
    computed: {
        imageOk() {
            return this.imageurl !== '' && this.isImageLoaded && !this.isImageError;
        }
    },
    methods: {
        imageLoaded() {
            this.isImageLoaded = true;
        },
        imageError() {
            this.isImageError = true;
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/main';

.chart-card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__image {
        width: 100%;
        min-height: 100px;
  }

  &__bottom {
        display: flex;
        justify-content: center;
        align-items: center;

        color: $gray;
    }
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
  
.clearfix:after {
    clear: both
}
.el-submenu .el-menu-item {
    height: auto !important;
    padding: 0.5rem 1.25rem !important;

    &:first-child {
        padding-top: 0;
    }

    &:hover {
        background-color: $light-gray;
    }
}
</style>   