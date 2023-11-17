<template>
    <div class="business-wrap">
        <section>
            <div class="section-box">
                <div class="section-header">
                    <span class="title">
                        Upload
                    </span>
                </div>
            </div>

            <div>
                <div class="search-box">
                    <el-form :model="searchInfo" ref="ruleForm" label-position="right" size="mini">
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <el-form-item prop="bucket_id" :label="'Bucket_ID'" label-width="40%"
                                    style="width: 100%" class="item">
                                    <el-input placeholder="Please input" v-model="searchInfo.bucket_id" :disabled="false">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item prop="bucket_name" :label="'Bucket_Name'" label-width="40%"
                                    style="width: 100%" class="item">
                                    <el-input placeholder="Please input" v-model="searchInfo.bucket_name" :disabled="false">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item prop="key_id" :label="'Key_ID'" label-width="40%"
                                    style="width: 100%" class="item">
                                    <el-input placeholder="Please input" v-model="searchInfo.key_id" :disabled="false">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item prop="key" :label="'Key'" label-width="40%" style="width: 100%"
                                    class="item">
                                    <el-input placeholder="Please input" v-model="searchInfo.key" :disabled="false">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item prop="local_path" :label="'Local_Path'" label-width="40%" style="width: 100%"
                                    class="item">
                                    <el-input placeholder="Please input" v-model="searchInfo.local_path" :disabled="false">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item prop="local_file" :label="'Local_File'" label-width="40%" style="width: 100%"
                                    class="item">
                                    <el-input placeholder="Please input" v-model="searchInfo.local_file" :disabled="false">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item prop="remote_file" :label="'Remote_File'" label-width="40%" style="width: 100%"
                                    class="item">
                                    <el-input placeholder="" v-model="searchInfo.remote_file" :disabled="true">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div>
                        <el-button type="primary" @click="onSubmitBusiness()" class="submit-btn" plain size="mini">
                            Submit
                        </el-button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            loading: false,
            searchInfo: {
                command: "upload",
                bucket_id: "",
                bucket_name: "",
                key_id: "",
                key: "",
                local_path: "",
                local_file: "",
                remote_file: "",
            },
        };
    },
    methods: {
        onSubmitBusiness() {
            const { command, bucket_id, bucket_name, key_id, key, local_path, local_file, remote_file } = this.searchInfo
            if (!command && !bucket_id && !bucket_name && !key_id && !key && !local_path && !local_file && !remote_file) {
                alert('Please input !')
                return
            }
            let params = 'http://124.71.210.102:8082/global-back/upload'

            this.axios.post(params,
                {
                    "command": this.searchInfo.command,
                    "key_id": this.searchInfo.key_id,
                    "key": this.searchInfo.key,
                    "bucket_id": this.searchInfo.bucket_id,
                    "bucket_name": this.searchInfo.bucket_name,
                    "remote_file": this.searchInfo.local_file,
                    "local_path": this.searchInfo.local_path,
                    "local_file": this.searchInfo.local_file,
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': "*",
                    }
                }
            ).then(res => {
                if (parseInt(res.data.code) == 200) {
                    this.$message({
                        message: "OK !",
                        type: "success",
                    });
                    this.loading = true;
                }
                this.loading = false;
            }).catch((err) => {
                console.log(err);
            });
        },
    }
}
</script>

<style scoped>
section {
    padding: 20px;
    box-sizing: border-box;
    padding-bottom: 170px;
    box-sizing: border-box;
}

.submit-btn {
    display: block;
    margin: 20px auto;
    width: 300px;
}

.business-wrap {
    width: 100%;
    background-color: #f5f5f5;
}

.search-box {
    padding: 20px 20px 10px 20px;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    background-color: #fff;
}

.section-box {
    padding: 20px;
    margin-bottom: 20px;
    background: #343536;
    color: #Fff;
    display: flex;
    align-items: center;
}

.section-header {
    display: flex;
    align-items: center;
}

.section-header .title {
    font-size: 18px;
    font-weight: 600;
    flex-shrink: 0;
}

.section-header .en-title {
    font-size: 14px;
    flex-shrink: 0;
    margin-left: 8px;
}
</style>
