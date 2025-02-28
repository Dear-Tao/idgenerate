<template>
  <div class="id-card-container">
    <!-- 身份证正面 -->
    <div class="id-card front">
      <div class="content">
        <div class="info">
          <div class="info-item">
            <span class="label">姓 名</span>
            <span class="value">{{ name }}</span>
          </div>
          <div class="info-item">
            <span class="label">性 别</span>
            <span class="value">{{ gender }}</span>
            <span class="label">民 族</span>
            <span class="value">{{ ethnicity }}</span>
          </div>
          <div class="info-item">
            <span class="label">出 生</span>
            <span class="value">{{ birthDate }}</span>
          </div>
          <div class="info-item address">
            <span class="label">住 址</span>
            <span class="value">{{ address }}</span>
          </div>
        </div>
        <div class="photo-placeholder" @click="$emit('avatar-click')">
          <img v-if="avatar" :src="avatar" alt="头像" class="avatar-image" />
          <el-icon v-else size="64"><Avatar /></el-icon>
        </div>
      </div>
      <div class="info-item id-number">
            <span class="label">公民身份号码</span>
            <span class="value">{{ idNumber }}</span>
          </div>
    </div>

    <!-- 身份证背面 -->
    <div class="id-card back">
      <div class="back-content">
        <div class="validity">
          <div class="header">
            <div class="emblem-container">
                <img src="../assets/emblem.png" alt="国徽" class="emblem" />
                <h1>中华人民共和国</h1>
            </div>
            <h2>居民身份证</h2>
          </div>
          <div class="info-item"> 
            <div class="info-row">
              <div class="info-col">
                <span class="label">签发机关</span>
                <span class="value">{{ issuingAuthority }}</span>
              </div>
              <div class="info-col">
                <span class="label">有效期限</span>
                <span class="value">{{ validityPeriod }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons-vue'

defineProps({
  name: {
    type: String,
    default: '张三'
  },
  gender: {
    type: String,
    default: '男'
  },
  ethnicity: {
    type: String,
    default: '汉'
  },
  birthDate: {
    type: String,
    default: '1990年1月1日'
  },
  address: {
    type: String,
    default: '北京市东城区东长安街1号'
  },
  idNumber: {
    type: String,
    default: '110101199001010001'
  },
  issuingAuthority: {
    type: String,
    default: '北京市公安局'
  },
  validityPeriod: {
    type: String,
    default: '2020.01.01-2040.01.01'
  },
  avatar: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.id-card-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.id-card {
  width: 430px;
  height: 260px;
  padding: 30px;
  border-radius: 12px;
  background-color: #e8f4ff;
  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
}

.front {
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 25px;
}

.emblem-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: -50px;
}

.emblem {
  width: 90px;
  height: 90px;
}

.header h1 {
  font-size: 22px;
  margin: -70px 0 0;
  color: #000;
  font-weight: bold;
  letter-spacing: 8px;
  margin-left: 20px;
}

.header h2 {
  font-size: 33px;
  margin: -45px 0 0;
  color: #000;
  font-weight: bold;
  margin-left: 88px;
  letter-spacing: 16px;
}

.content {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

.info {
  flex: 1;
  /* padding-right: 25px; */
  margin-top: 30px;
}

.photo-placeholder {
  width: 122px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-left: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 45px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-item {
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
}

.label {
  width: 60px;
  color: #0090D0;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}

.value {
  flex: 1;
  color: #222;
  font-size: 16px;
  padding-left: 0;
  text-align: left;
  font-weight: bold;
  letter-spacing: 2px;
}


.address {
  margin-top: 12px;
}

.address .value {
  line-height: 1.6;
}

.id-number {
  margin-top: 18px;
}

.id-number .label {
  width: 100px;
}

.back {
  background-color: #e8f4ff;
}

.back-content {
  margin-top: 20px;
}

.validity {
  padding: 0 25px;
}

.header {
  text-align: center;
  margin-bottom: 10px;
}

.validity .info-item {
  margin-bottom: 18px;
  margin-top: 28px;
  padding-left: 25px;
}

.validity .info-item .label {
  width: 80px;
  color: #222;
  font-weight: bold;
}

.id-number .value {
  padding-left: 20px;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
}

.info-col {
  flex: 1;
  text-align: left;
}

.info-col .label {
  width: 80px;
  color: #222;
  font-weight: bold;
}

.info-col .value {
  padding-left: 20px;
}



</style>