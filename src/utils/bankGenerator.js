// 银行卡号生成工具类

// 银行列表及其对应的BIN号范围
const BANKS = [
  {
    "name": "建设银行",
    "debitPrefixes": [
      {"bin": "436742", "length": "19"}
    ],
    "creditPrefixes": [
      {"bin": "436718", "length": "16"},
      {"bin": "436738", "length": "16"},
      {"bin": "436745", "length": "16"},
      {"bin": "436748", "length": "16"},
      {"bin": "453242", "length": "16"},
      {"bin": "489592", "length": "16"},
      {"bin": "491031", "length": "16"},
      {"bin": "532420", "length": "16"},
      {"bin": "532430", "length": "16"},
      {"bin": "532450", "length": "16"},
      {"bin": "532458", "length": "16"},
      {"bin": "544033", "length": "16"},
      {"bin": "552245", "length": "16"},
      {"bin": "552801", "length": "16"},
      {"bin": "622280", "length": "19"},
      {"bin": "622700", "length": "19"},
      {"bin": "622725", "length": "16"},
      {"bin": "622728", "length": "16"}
    ]
  },
  {
    "name": "中国银行",
    "debitPrefixes": [
      {"bin": "456351", "length": "19"},
      {"bin": "622348", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "438088", "length": "16"},
      {"bin": "451291", "length": "16"},
      {"bin": "493878", "length": "16"},
      {"bin": "512315", "length": "16"},
      {"bin": "512316", "length": "16"},
      {"bin": "512411", "length": "16"},
      {"bin": "512412", "length": "16"},
      {"bin": "512695", "length": "16"},
      {"bin": "512732", "length": "16"},
      {"bin": "514957", "length": "16"},
      {"bin": "514958", "length": "16"},
      {"bin": "518378", "length": "16"},
      {"bin": "518379", "length": "16"},
      {"bin": "518474", "length": "16"},
      {"bin": "518475", "length": "16"},
      {"bin": "518476", "length": "16"},
      {"bin": "522153", "length": "16"},
      {"bin": "524864", "length": "16"},
      {"bin": "524865", "length": "16"},
      {"bin": "525745", "length": "16"},
      {"bin": "525746", "length": "16"},
      {"bin": "540297", "length": "16"},
      {"bin": "540838", "length": "16"},
      {"bin": "541068", "length": "16"},
      {"bin": "547628", "length": "16"},
      {"bin": "547648", "length": "16"},
      {"bin": "547766", "length": "16"},
      {"bin": "552742", "length": "16"},
      {"bin": "553131", "length": "16"},
      {"bin": "558808", "length": "16"},
      {"bin": "558809", "length": "16"},
      {"bin": "558868", "length": "16"}
    ]
  },
  {
    "name": "工商银行",
    "debitPrefixes": [
      {"bin": "955880", "length": "16"},
      {"bin": "955881", "length": "16"},
      {"bin": "955882", "length": "16"},
      {"bin": "955888", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "438125", "length": "16"},
      {"bin": "438126", "length": "16"},
      {"bin": "451804", "length": "16"},
      {"bin": "451810", "length": "16"},
      {"bin": "458060", "length": "16"},
      {"bin": "458071", "length": "16"},
      {"bin": "510529", "length": "16"},
      {"bin": "530970", "length": "16"},
      {"bin": "530980", "length": "16"},
      {"bin": "530990", "length": "16"},
      {"bin": "558360", "length": "16"}
    ]
  },
  {
    "name": "兴业银行",
    "debitPrefixes": [
      {"bin": "438588", "length": "18"},
      {"bin": "438589", "length": "18"}
    ],
    "creditPrefixes": [
      {"bin": "451289", "length": "16"},
      {"bin": "486493", "length": "16"},
      {"bin": "486494", "length": "16"},
      {"bin": "523036", "length": "16"},
      {"bin": "524070", "length": "16"},
      {"bin": "527414", "length": "16"}
    ]
  },
  {
    "name": "上海银行",
    "debitPrefixes": [
      {"bin": "438600", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "486466", "length": "16"},
      {"bin": "519498", "length": "16"},
      {"bin": "520131", "length": "16"}
    ]
  },
  {
    "name": "招商银行",
    "debitPrefixes": [
      {"bin": "622588", "length": "16"},
      {"bin": "622580", "length": "16"},
      {"bin": "622598", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "439188", "length": "16"},
      {"bin": "439225", "length": "16"},
      {"bin": "439227", "length": "16"},
      {"bin": "468203", "length": "16"},
      {"bin": "479228", "length": "16"},
      {"bin": "479229", "length": "16"},
      {"bin": "512425", "length": "16"},
      {"bin": "518710", "length": "16"},
      {"bin": "518718", "length": "16"},
      {"bin": "545619", "length": "16"},
      {"bin": "545623", "length": "16"},
      {"bin": "545947", "length": "16"},
      {"bin": "552534", "length": "16"},
      {"bin": "552587", "length": "16"},
      {"bin": "622579", "length": "16"},
      {"bin": "622581", "length": "16"},
      {"bin": "622582", "length": "16"}
    ]
  },
  {
    "name": "中信实业银行",
    "debitPrefixes": [
      {"bin": "442729", "length": "16"},
      {"bin": "442730", "length": "16"},
      {"bin": "433670", "length": "16"},
      {"bin": "433680", "length": "16"},
      {"bin": "622690", "length": "16"},
      {"bin": "622691", "length": "16"},
      {"bin": "622692", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "400360", "length": "16"},
      {"bin": "403391", "length": "16"},
      {"bin": "404157", "length": "16"},
      {"bin": "404171", "length": "16"},
      {"bin": "404172", "length": "16"},
      {"bin": "404173", "length": "16"},
      {"bin": "404174", "length": "16"},
      {"bin": "433666", "length": "16"},
      {"bin": "514906", "length": "16"},
      {"bin": "518212", "length": "16"},
      {"bin": "520108", "length": "16"},
      {"bin": "556617", "length": "16"},
      {"bin": "622678", "length": "16"},
      {"bin": "622679", "length": "16"},
      {"bin": "622680", "length": "16"},
      {"bin": "622688", "length": "16"},
      {"bin": "622689", "length": "16"}
    ]
  },
  {
    "name": "中国光大银行",
    "debitPrefixes": [
      {"bin": "622660", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "481699", "length": "16"},
      {"bin": "486497", "length": "16"},
      {"bin": "543159", "length": "16"},
      {"bin": "622650", "length": "16"},
      {"bin": "622655", "length": "16"},
      {"bin": "622658", "length": "16"}
    ]
  },
  {
    "name": "民生银行",
    "debitPrefixes": [
      {"bin": "622615", "length": "16"},
      {"bin": "622617", "length": "16"},
      {"bin": "622619", "length": "16"},
      {"bin": "622622", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "472067", "length": "16"},
      {"bin": "472068", "length": "16"},
      {"bin": "512466", "length": "16"},
      {"bin": "517636", "length": "16"},
      {"bin": "552288", "length": "16"},
      {"bin": "556610", "length": "16"},
      {"bin": "622600", "length": "16"},
      {"bin": "622601", "length": "16"},
      {"bin": "622602", "length": "16"},
      {"bin": "622603", "length": "16"}
    ]
  },
  {
    "name": "农业银行",
    "debitPrefixes": [
      {"bin": "103000", "length": "19"}
    ],
    "creditPrefixes": [
      {"bin": "491020", "length": "16"},
      {"bin": "519412", "length": "16"},
      {"bin": "520082", "length": "16"},
      {"bin": "535910", "length": "16"},
      {"bin": "535918", "length": "16"},
      {"bin": "552599", "length": "16"},
      {"bin": "558730", "length": "16"}
    ]
  },
  {
    "name": "交通银行",
    "debitPrefixes": [
      {"bin": "622258", "length": "17"},
      {"bin": "622259", "length": "17"},
      {"bin": "622260", "length": "19"},
      {"bin": "622261", "length": "19"}
    ],
    "creditPrefixes": [
      {"bin": "458123", "length": "16"},
      {"bin": "458124", "length": "16"},
      {"bin": "491040", "length": "16"},
      {"bin": "520169", "length": "16"},
      {"bin": "521899", "length": "16"},
      {"bin": "537830", "length": "16"},
      {"bin": "552853", "length": "16"}
    ]
  },
  {
    "name": "浦东发展银行",
    "debitPrefixes": [
      {"bin": "984301", "length": "16"}
    ],
    "creditPrefixes": [
      {"bin": "456418", "length": "16"},
      {"bin": "498451", "length": "16"},
      {"bin": "622500", "length": "16"},
      {"bin": "622516", "length": "16"},
      {"bin": "622517", "length": "16"},
      {"bin": "622518", "length": "16"},
      {"bin": "622519", "length": "16"}
    ]
  }
];

// 不同银行卡类型的长度范围
const CARD_LENGTH = {
  DEFAULT: 16,  // 大多数银行卡长度
  UNIONPAY: 19  // 银联标准卡长度
};

// 生成随机银行信息
export function generateBankInfo() {
  const bank = BANKS[Math.floor(Math.random() * BANKS.length)];
  const isDebit = Math.random() < 0.5;
  const prefixes = isDebit ? bank.debitPrefixes : bank.creditPrefixes;
  
  if (prefixes.length === 0) {
    // 如果当前类型没有前缀，使用另一种类型
    const alternativePrefixes = isDebit ? bank.creditPrefixes : bank.debitPrefixes;
    if (alternativePrefixes.length === 0) {
      throw new Error(`${bank.name}没有可用的卡号前缀`);
    }
    const prefix = alternativePrefixes[Math.floor(Math.random() * alternativePrefixes.length)];
    const cardNumber = generateBankCardNumber(prefix);
    
    return {
      bankName: bank.name,
      cardType: isDebit ? '储蓄卡' : '信用卡',
      cardNumber: cardNumber
    };
  }
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const cardNumber = generateBankCardNumber(prefix);
  
  return {
    bankName: bank.name,
    cardType: isDebit ? '储蓄卡' : '信用卡',
    cardNumber: cardNumber
  };
}

// 生成银行卡号
function generateBankCardNumber(prefix) {
  // 使用prefix中指定的长度
  const length = parseInt(prefix.length);
  const remainingLength = length - prefix.bin.length - 1; // -1 为校验码预留位置
  
  // 生成随机数字（不包括最后一位校验码）
  let number = prefix.bin;
  for (let i = 0; i < remainingLength; i++) {
    number += Math.floor(Math.random() * 10);
  }
  
  // 计算校验码（使用 Luhn 算法）
  const checkCode = calculateLuhnCode(number);
  
  return number + checkCode;
}

// 计算 Luhn 校验码
function calculateLuhnCode(number) {
  const digits = number.split('').reverse();
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    let digit = parseInt(digits[i]);
    
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
  }
  
  const checkCode = (10 - (sum % 10)) % 10;
  return checkCode.toString();
}