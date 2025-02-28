<script setup>
import { ref, onMounted } from 'vue'
import { generateChineseName, generateIdNumber, generateNationality, generateAddress, generateIssuingAuthority, generateValidityPeriod } from './utils/idGenerator'
import { generateBankInfo } from './utils/bankGenerator'
import IdCard from './components/IdCard.vue'

const personalInfo = ref({
  name: '',
  gender: '',
  ethnicity: '',
  birthDate: '',
  address: '',
  idNumber: '',
  issuingAuthority: '',
  validityPeriod: '',
  avatar: ''
})

const debitCardInfo = ref({
  bankName: '',
  cardNumber: '',
  cardType: 'debit'
})

const creditCardInfo = ref({
  bankName: '',
  cardNumber: '',
  cardType: 'credit'
})

const generatePersonalInfo = () => {
  personalInfo.value.name = generateChineseName()
  personalInfo.value.idNumber = generateIdNumber()
  personalInfo.value.ethnicity = generateNationality()
  personalInfo.value.address = generateAddress()
  personalInfo.value.issuingAuthority = generateIssuingAuthority()
  personalInfo.value.validityPeriod = generateValidityPeriod()
  // 从身份证号中提取性别和出生日期
  personalInfo.value.gender = parseInt(personalInfo.value.idNumber.substr(16, 1)) % 2 === 0 ? '女' : '男'
  const birth = personalInfo.value.idNumber.substr(6, 8)
  personalInfo.value.birthDate = `${birth.substr(0, 4)}年${parseInt(birth.substr(4, 2))}月${parseInt(birth.substr(6, 2))}日`
}

const generateBankCards = () => {
  const debitInfo = generateBankInfo('debit')
  const creditInfo = generateBankInfo('credit')
  debitCardInfo.value = debitInfo
  creditCardInfo.value = creditInfo
}

const handleAvatarUpload = async (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      personalInfo.value.avatar = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
const avatarInput = ref(null)

const handleAvatarClick = () => {
  avatarInput.value.click()
}
onMounted(() => {
  generatePersonalInfo()
  generateBankCards()
})
</script>

<template>
  <div class="container">
    <el-card class="info-card">
      <div class="card-header">
        <h2>身份证信息生成器</h2>
        <div class="header-actions">
          <el-button @click="handleAvatarClick">
            上传头像
          </el-button>
          <input
            ref="avatarInput"
            type="file"
            class="avatar-input"
            accept="image/*"
            @change="handleAvatarUpload"
          />
          <el-button type="primary" @click="generatePersonalInfo">生成信息</el-button>
        </div>
      </div>
      <IdCard v-bind="personalInfo" @avatar-click="handleAvatarClick" />
    </el-card>

    <!-- 银行卡信息生成部分 -->
    <el-card class="info-card">
      <div class="card-header">
        <h2>银行卡信息生成器</h2>
        <el-button type="primary" @click="generateBankCards">生成银行卡</el-button>
      </div>
      <div class="bank-cards-container">
        <!-- 储蓄卡 -->
        <div v-if="debitCardInfo.bankName" class="bank-card debit-card">
          <div class="bank-card-content">
            <div class="bank-name">{{ debitCardInfo.bankName }}</div>
            <div class="card-type">储蓄卡</div>
            <div class="card-number">{{ debitCardInfo.cardNumber }}</div>
          </div>
        </div>
        <!-- 信用卡 -->
        <div v-if="creditCardInfo.bankName" class="bank-card credit-card">
          <div class="bank-card-content">
            <div class="bank-name">{{ creditCardInfo.bankName }}</div>
            <div class="card-type">信用卡</div>
            <div class="card-number">{{ creditCardInfo.cardNumber }}</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 20px;
}

.info-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header h2 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.avatar-input {
  display: none;
}

.bank-cards-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.bank-card {
  width: 410px;
  height: 230px;
  border-radius: 15px;
  padding: 25px;
  color: #333;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.debit-card {
  background: linear-gradient(135deg, #e8f4ff, #b3e0ff);
}

.credit-card {
  background: linear-gradient(135deg, #ffd700, #ffa500);
}

.bank-card-content {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bank-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-type {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}

.card-number {
  font-size: 30px;
  letter-spacing: 2px;
}
</style>
