<template>
    <div class="index-wrap">
        <div class="inner">
            <div class="content">
                <div class="check-item" @click="goPage(1)">
                    Upload
                </div>
                <div class="check-item" @click="goPage(2)">
                    Download
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        goPage(type) {
            if (Number(type) === 1) {
                this.$router.push("/global-front/upload")
            }
            if (Number(type) === 2) {
                this.$router.push("/global-front/download")
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.index-wrap {
    width: 100%;
    height: 100vh;
    background: #fff;
}

.inner {
    width: 600px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -240px;
    margin-left: -290px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.check-item {
    width: 100%;
    background: rgba(47, 81, 229, 70%);
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    padding: 26px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    opacity: 1;
}

.check-item:first-child {
    margin-bottom: 40px;
}

.check-item:hover {
    opacity: 0.7;
}
</style>
  