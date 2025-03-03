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

// 生成随机地区代码
function generateAreaCode() {
  const areaCodes = [
    '110100', '120100', '130100', '140100', '150100', '210100', '220100', '230100',
    '310100', '320100', '330100', '340100', '350100', '360100', '370100', '410100',
    '420100', '430100', '440100', '450100', '460100', '500100', '510100', '520100',
    '530100', '540100', '610100', '620100', '630100', '640100', '650100'
  ];
  return areaCodes[Math.floor(Math.random() * areaCodes.length)];
}

// 地区码与城市的映射关系
const areaCodeCityMap = {
  '110100': '北京市',
  '120100': '天津市',
  '130100': '石家庄市',
  '140100': '太原市',
  '150100': '呼和浩特市',
  '210100': '沈阳市',
  '220100': '长春市',
  '230100': '哈尔滨市',
  '310100': '上海市',
  '320100': '南京市',
  '330100': '杭州市',
  '340100': '合肥市',
  '350100': '福州市',
  '360100': '南昌市',
  '370100': '济南市',
  '410100': '郑州市',
  '420100': '武汉市',
  '430100': '长沙市',
  '440100': '广州市',
  '450100': '南宁市',
  '460100': '海口市',
  '500100': '重庆市',
  '510100': '成都市',
  '520100': '贵阳市',
  '530100': '昆明市',
  '540100': '拉萨市',
  '610100': '西安市',
  '620100': '兰州市',
  '630100': '西宁市',
  '640100': '银川市',
  '650100': '乌鲁木齐市'
};

// 保存最近生成的地区码
let lastGeneratedAreaCode = null;

// 生成身份证号
export function generateIdNumber() {
  const areaCode = generateAreaCode();
  lastGeneratedAreaCode = areaCode; // 保存生成的地区码
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

// 地区码与省市区的映射关系
const areaCodeAddressMap = {
  '110100': { province: '北京市', city: '北京市', districts: ['东城区', '西城区', '朝阳区', '海淀区', '丰台区', '石景山区'] },
  '120100': { province: '天津市', city: '天津市', districts: ['和平区', '河东区', '河西区', '南开区', '河北区', '红桥区'] },
  '130100': { province: '河北省', city: '石家庄市', districts: ['长安区', '桥西区', '新华区', '井陉矿区', '裕华区'] },
  '140100': { province: '山西省', city: '太原市', districts: ['小店区', '迎泽区', '杏花岭区', '尖草坪区', '万柏林区'] },
  '150100': { province: '内蒙古自治区', city: '呼和浩特市', districts: ['新城区', '回民区', '玉泉区', '赛罕区'] },
  '210100': { province: '辽宁省', city: '沈阳市', districts: ['和平区', '沈河区', '大东区', '皇姑区', '铁西区'] },
  '220100': { province: '吉林省', city: '长春市', districts: ['南关区', '宽城区', '朝阳区', '二道区', '绿园区'] },
  '230100': { province: '黑龙江省', city: '哈尔滨市', districts: ['道里区', '南岗区', '道外区', '平房区', '松北区'] },
  '310100': { province: '上海市', city: '上海市', districts: ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区'] },
  '320100': { province: '江苏省', city: '南京市', districts: ['玄武区', '秦淮区', '建邺区', '鼓楼区', '浦口区'] },
  '330100': { province: '浙江省', city: '杭州市', districts: ['上城区', '下城区', '江干区', '拱墅区', '西湖区'] },
  '340100': { province: '安徽省', city: '合肥市', districts: ['瑶海区', '庐阳区', '蜀山区', '包河区'] },
  '350100': { province: '福建省', city: '福州市', districts: ['鼓楼区', '台江区', '仓山区', '马尾区', '晋安区'] },
  '360100': { province: '江西省', city: '南昌市', districts: ['东湖区', '西湖区', '青云谱区', '湾里区', '青山湖区'] },
  '370100': { province: '山东省', city: '济南市', districts: ['历下区', '市中区', '槐荫区', '天桥区', '历城区'] },
  '410100': { province: '河南省', city: '郑州市', districts: ['中原区', '二七区', '管城回族区', '金水区', '上街区'] },
  '420100': { province: '湖北省', city: '武汉市', districts: ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区'] },
  '430100': { province: '湖南省', city: '长沙市', districts: ['芙蓉区', '天心区', '岳麓区', '开福区', '雨花区'] },
  '440100': { province: '广东省', city: '广州市', districts: ['荔湾区', '越秀区', '海珠区', '天河区', '白云区'] },
  '450100': { province: '广西壮族自治区', city: '南宁市', districts: ['兴宁区', '青秀区', '江南区', '西乡塘区', '良庆区'] },
  '460100': { province: '海南省', city: '海口市', districts: ['秀英区', '龙华区', '琼山区', '美兰区'] },
  '500100': { province: '重庆市', city: '重庆市', districts: ['渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区'] },
  '510100': { province: '四川省', city: '成都市', districts: ['锦江区', '青羊区', '金牛区', '武侯区', '成华区'] },
  '520100': { province: '贵州省', city: '贵阳市', districts: ['南明区', '云岩区', '花溪区', '乌当区', '白云区'] },
  '530100': { province: '云南省', city: '昆明市', districts: ['五华区', '盘龙区', '官渡区', '西山区', '东川区'] },
  '540100': { province: '西藏自治区', city: '拉萨市', districts: ['城关区', '堆龙德庆区', '达孜区', '林周县', '当雄县'] },
  '610100': { province: '陕西省', city: '西安市', districts: ['新城区', '碑林区', '莲湖区', '灞桥区', '未央区'] },
  '620100': { province: '甘肃省', city: '兰州市', districts: ['城关区', '七里河区', '西固区', '安宁区', '红古区'] },
  '630100': { province: '青海省', city: '西宁市', districts: ['城东区', '城中区', '城西区', '城北区', '大通回族土族自治县'] },
  '640100': { province: '宁夏回族自治区', city: '银川市', districts: ['兴庆区', '西夏区', '金凤区', '永宁县', '贺兰县'] },
  '650100': { province: '新疆维吾尔自治区', city: '乌鲁木齐市', districts: ['天山区', '沙依巴克区', '新市区', '水磨沟区', '头屯河区'] }
};

// 生成随机地址
export function generateAddress() {
  // 使用最近生成的地区码，如果没有则重新生成
  const areaCode = lastGeneratedAreaCode || generateAreaCode();
  const addressInfo = areaCodeAddressMap[areaCode];
  
  const streets = ['人民路', '中山路', '解放路', '建设路', '和平路', '新华路'];
  const numbers = ['1号', '2号', '3号', '88号', '666号'];
  
  const district = addressInfo.districts[Math.floor(Math.random() * addressInfo.districts.length)];
  const street = streets[Math.floor(Math.random() * streets.length)];
  const number = numbers[Math.floor(Math.random() * numbers.length)];
  
  return `${addressInfo.province}${addressInfo.city}${district}${street}${number}`;
}

// 生成签发机关
export function generateIssuingAuthority() {
  // 使用最近生成的地区码，如果没有则重新生成
  const areaCode = lastGeneratedAreaCode || generateAreaCode();
  const city = areaCodeCityMap[areaCode];
  const departments = ['公安局', '市公安局', '县公安局'];
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