// 银行卡号生成工具类

// 银行列表及其对应的BIN号范围
const BANKS = [
  { 
    name: '工商银行',
    debitPrefixes: ['620200', '620302', '620402', '620403', '620405', '620406', '620407'],
    creditPrefixes: ['625955', '625956', '625957', '625958', '625959']
  },
  { 
    name: '建设银行',
    debitPrefixes: ['621700', '622280', '622700', '622707'],
    creditPrefixes: ['622966', '622988', '625955', '625956']
  },
  { 
    name: '农业银行',
    debitPrefixes: ['622841', '622824', '622826', '622845'],
    creditPrefixes: ['625996', '625997', '625998']
  },
  { 
    name: '中国银行',
    debitPrefixes: ['621660', '621661', '621662', '621663'],
    creditPrefixes: ['625200', '625201', '625202']
  },
  { 
    name: '交通银行',
    debitPrefixes: ['622260', '622262', '622261', '622268'],
    creditPrefixes: ['625958', '625959', '625957']
  },
  { 
    name: '招商银行',
    debitPrefixes: ['622580', '622588', '622598'],
    creditPrefixes: ['622575', '622576', '622577']
  },
  { 
    name: '浦发银行',
    debitPrefixes: ['622516', '622517', '622518', '622519'],
    creditPrefixes: ['625957', '625958', '625959']
  },
  { 
    name: '民生银行',
    debitPrefixes: ['622615', '622616', '622617', '622618'],
    creditPrefixes: ['625958', '625959', '625957']
  },
  { 
    name: '中信银行',
    debitPrefixes: ['622680', '622681', '622682', '622683'],
    creditPrefixes: ['625957', '625958', '625959']
  },
  { 
    name: '光大银行',
    debitPrefixes: ['622660', '622661', '622662', '622663'],
    creditPrefixes: ['625957', '625958', '625959']
  }
];

// 不同银行卡类型的长度范围
const CARD_LENGTH = {
  DEFAULT: 16,  // 大多数银行卡长度
  UNIONPAY: 19  // 银联标准卡长度
};

// 生成随机银行信息
export function generateBankInfo(type = 'debit') {
  const bank = BANKS[Math.floor(Math.random() * BANKS.length)];
  const prefixes = type === 'debit' ? bank.debitPrefixes : bank.creditPrefixes;
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const cardNumber = generateBankCardNumber(prefix);
  
  return {
    bankName: bank.name,
    cardNumber: cardNumber,
    cardType: type
  };
}

// 生成银行卡号
function generateBankCardNumber(prefix) {
  // 确定卡号长度（不包括校验码）
  const length = Math.random() < 0.3 ? CARD_LENGTH.UNIONPAY : CARD_LENGTH.DEFAULT;
  const remainingLength = length - prefix.length - 1; // -1 为校验码预留位置
  
  // 生成随机数字（不包括最后一位校验码）
  let number = prefix;
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