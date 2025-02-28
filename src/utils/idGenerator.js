// 身份证号和银行卡号生成工具类

// 随机生成中文姓名
export function generateChineseName() {
  const familyNames = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜';
  const givenNames = '世永书林志明永铭浩然泽洋明杰宇航子墨浩宇绍辉雨泽子默';
  
  const familyName = familyNames[Math.floor(Math.random() * familyNames.length)];
  const nameLength = Math.random() < 0.5 ? 1 : 2;
  let givenName = '';
  
  for (let i = 0; i < nameLength; i++) {
    givenName += givenNames[Math.floor(Math.random() * givenNames.length)];
  }
  
  return familyName + givenName;
}

// 生成随机出生日期（1960-2000年）
function generateBirthDate() {
  const start = new Date(1960, 0, 1).getTime();
  const end = new Date(2000, 11, 31).getTime();
  const timestamp = start + Math.random() * (end - start);
  const date = new Date(timestamp);
  
  return {
    date: date,
    str: date.getFullYear().toString().padStart(4, '0') +
         (date.getMonth() + 1).toString().padStart(2, '0') +
         date.getDate().toString().padStart(2, '0')
  };
}

// 生成随机地区代码（这里使用一些示例代码）
function generateAreaCode() {
  const areaCodes = [
    '110100', '120100', '130100', '140100', '150100', '210100', '220100',
    '230100', '310100', '320100', '330100', '340100', '350100', '360100'
  ];
  return areaCodes[Math.floor(Math.random() * areaCodes.length)];
}

// 生成身份证号
export function generateIdNumber() {
  const areaCode = generateAreaCode();
  const birthDate = generateBirthDate();
  const sequence = Math.floor(Math.random() * 999).toString().padStart(3, '0');
  
  // 计算校验码
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const codes = '10X98765432';
  
  const id17 = areaCode + birthDate.str + sequence;
  let sum = 0;
  
  for (let i = 0; i < 17; i++) {
    sum += parseInt(id17[i]) * weights[i];
  }
  
  const checkCode = codes[sum % 11];
  return id17 + checkCode;
}

// 生成随机民族
export function generateNationality() {
  const nationalities = [
    '汉', '满', '蒙古', '回', '藏', '维吾尔', '苗', '彝', '壮', '布依',
    '朝鲜', '白', '哈尼', '傣', '黎', '傈僳', '佤', '畲', '水', '东乡'
  ];
  return nationalities[Math.floor(Math.random() * nationalities.length)];
}

// 生成随机地址
export function generateAddress() {
  const provinces = ['北京市', '上海市', '广东省', '江苏省', '浙江省', '山东省'];
  const cities = ['市辖区', '广州市', '深圳市', '南京市', '杭州市', '济南市'];
  const districts = ['海淀区', '朝阳区', '福田区', '姑苏区', '西湖区', '历下区'];
  const streets = ['XX街道', 'XX路', 'XX大道', 'XX胡同'];
  const numbers = ['1号', '2号', '3号', '88号', '666号'];
  
  const province = provinces[Math.floor(Math.random() * provinces.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const district = districts[Math.floor(Math.random() * districts.length)];
  const street = streets[Math.floor(Math.random() * streets.length)];
  const number = numbers[Math.floor(Math.random() * numbers.length)];
  
  return `${province}${city}${district}${street}${number}`;
}

// 生成签发机关
export function generateIssuingAuthority() {
  const cities = ['北京市', '上海市', '广州市', '深圳市', '杭州市', '南京市'];
  const departments = ['公安局', '市公安局', '县公安局'];
  
  const city = cities[Math.floor(Math.random() * cities.length)];
  const department = departments[Math.floor(Math.random() * departments.length)];
  
  return city + department;
}

// 生成有效期限
export function generateValidityPeriod() {
  const currentDate = new Date();
  const startYear = currentDate.getFullYear();
  const startMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const startDay = currentDate.getDate().toString().padStart(2, '0');
  const endYear = startYear + 20;
  
  return `${startYear}.${startMonth}.${startDay}-${endYear}.${startMonth}.${startDay}`;
}