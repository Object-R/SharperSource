export const ABROAD_CHOOSE = [
  {
    value: '1',
    label: '根据成绩检索目标院校(CGPA-Based Admission Cases Enquiry)'
  }, {
    value: '2',
    label: '根据目标院校检索成绩(Target Postgraduate School-Based Admission Cases Enquiry)'
  }
]
export const ABROAD_OPTION_0 = [
  {
    label: "0次",
    value: "0次",
  }, {
    label: "1次",
    value: "1次",
  }, {
    label: "2次",
    value: "2次",
  }, {
    label: "3次",
    value: "3次",
  }, {
    label: "4次",
    value: "4次",
  }, {
    label: "5次及以上",
    value: "5次及以上",
  },
]
export const ABROAD_OPTION_1 = [
  {
    label: "",
    value: "",
  }, {
    label: "GMAT",
    value: "GMAT",
  }, {
    label: "GRE",
    value: "GRE",
  },
]
export const ABROAD_OPTION_2 = [
  {
    label: "",
    value: "",
  }, {
    label: "IELTS",
    value: "IELTS",
  }, {
    label: "TOEFL",
    value: "TOEFL",
  },
]
export const ABROAD_OPTION_3 = [
  {
    label: "0小时",
    value: "0小时",
  }, {
    label: "1-80小时",
    value: "1-80小时",
  }, {
    label: "81-160小时",
    value: "81-160小时",
  }, {
    label: "161-320小时",
    value: "161-320小时",
  }, {
    label: "321-540小时",
    value: "321-540小时",
  }, {
    label: "540小时以上",
    value: "540小时以上",
  },
]
export const ABROAD_OPTION_4 = [
  {
    label: "",
    value: "",
  }, {
    label: "市场营销 Marketing and Communication",
    value: "市场营销 Marketing and Communication",
  }, {
    label: "金融学 Finance",
    value: "金融学 Finance",
  }, {
    label: "会计学 Professional Accountancy",
    value: "会计学 Professional Accountancy",
  }, {
    label: "国际商务-环球商务管理 Global Business Studies -  Global Business Management",
    value: "国际商务-环球商务管理 Global Business Studies -  Global Business Management",
  }, {
    label: "国际商务-环球供应链管理 Global Business Studies -  Global Supply Chain and Logistics Management",
    value: "国际商务-环球供应链管理 Global Business Studies -  Global Supply Chain and Logistics Management",
  }, {
    label: "国际商务-环球金融管理 Global Business Studies -  Global Financial Management",
    value: "国际商务-环球金融管理 Global Business Studies -  Global Financial Management",
  }, {
    label: "国际商务-环球商务与创新 Global Business Studies -  Global Business and Innovation",
    value: "国际商务-环球商务与创新 Global Business Studies -  Global Business and Innovation",
  }, {
    label: "经济学-经济科学 Economics - Economic Science",
    value: "经济学-经济科学 Economics - Economic Science",
  }, {
    label: "经济学-应用经济学 Economics - Applied Economics",
    value: "经济学-应用经济学 Economics - Applied Economics",
  }, {
    label: "经济学-国际商务经济学 Economics - Global Business Economics",
    value: "经济学-国际商务经济学 Economics - Global Business Economics",
  }, {
    label: "金融工程-金融科技 Financial Engineering - FinTech",
    value: "金融工程-金融科技 Financial Engineering - FinTech",
  },
]
export const ABROAD_OPTION_7 = [
  {
    label: "根据成绩检索目标院校(CGPA-Based Admission Cases Enquiry)",
    value: "根据成绩检索目标院校(CGPA-Based Admission Cases Enquiry)",
  }, {
    label: "根据目标院校检索成绩(Target Postgraduate School-Based Admission Cases Enquiry)",
    value: "根据目标院校检索成绩(Target Postgraduate School-Based Admission Cases Enquiry)",
  },
]
export const ABROAD_OPTION_8 = [
  {
    label: "",
    value: "",
  }, {
    label: "2018",
    value: "2018",
  }, {
    label: "2019",
    value: "2019",
  }, {
    label: "2020",
    value: "2020",
  }, {
    label: "2021",
    value: "2021",
  }, {
    label: "2022",
    value: "2022",
  },
]
export const ABROAD_OPTION_9 = [
  {
    label: "",
    value: "",
  }, {
    label: "中国境内-Mainland China",
    value: "中国境内-Mainland China",
  }, {
    label: "港澳地区-HongKong|Macao",
    value: "港澳地区-HongKong|Macao",
  }, {
    label: "新加坡-Singapore",
    value: "新加坡-Singapore",
  }, {
    label: "美国-United States",
    value: "美国-United States",
  }, {
    label: "英国-United Kingdom",
    value: "英国-United Kingdom",
  }, {
    label: "澳新-Australia&New Zealand",
    value: "澳新-Australia&New Zealand",
  }, {
    label: "加拿大-Canada",
    value: "加拿大-Canada",
  }, {
    label: "法国-France",
    value: "法国-France",
  }, {
    label: "意大利-Italy",
    value: "意大利-Italy",
  }, {
    label: "日韩-Japan&Korea",
    value: "日韩-Japan&Korea",
  }, {
    label: "其他国家和地区-Others",
    value: "其他国家和地区-Others",
  }
]

export const ABROAD_RULES = {
  gpa: [
    {
      required: true,
      message: "请输入平均绩点",
      trigger: "blur"
    },
  ],
  major: [
    {
      required: true,
      message: "请输入专业",
      trigger: "blur"
    },
  ],
  internship_count: [
    {
      required: false,
      message: "请选择实习次数",
      trigger: "blur",
    },
  ],
  internship_total: [
    {
      required: false,
      message: "请选择实习时长",
      trigger: "blur",
    },
  ],
  standard_subject: [
    {
      required: false,
      message: "请选择标化科目",
      trigger: "blur",
    },
  ],
  standard_score: [
    {
      required: false,
      message: "请输入标化成绩",
      trigger: "blur",
    },
  ],
  language_subject: [
    {
      required: false,
      message: "请选择语言科目",
      trigger: "blur",
    },
  ],
  language_score: [
    {
      required: false,
      message: "请输入语言成绩",
      trigger: "blur",
    },
  ],
}

export const OPTION_5_ABROAD = [
  {
    label: "<650",
    value: "<650",
  },
  {
    label: "650-680",
    value: "650-680",
  },
  {
    label: "690-710",
    value: "690-710",
  },
  {
    label: ">710",
    value: ">710",
  },
]

export const OPTION_5_GMAT = [
  {
    label: "<650",
    value: "<650",
  },
  {
    label: "650-680",
    value: "650-680",
  },
  {
    label: "690-710",
    value: "690-710",
  },
  {
    label: ">710",
    value: ">710",
  },
]

export const OPTION_5_GRE = [
  {
    label: "<310",
    value: "<310",
  },
  {
    label: "310-319",
    value: "310-319",
  },
  {
    label: "320-324",
    value: "320-324",
  },
  {
    label: "325-329",
    value: "325-329",
  },
  {
    label: ">=330",
    value: ">=330",
  },
]

export const OPTIONS_6_IELTS = [
  {
    label: "<6",
    value: "<6",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "6.5",
    value: "6.5",
  },
  {
    label: "7",
    value: "7",
  },
  {
    label: "7.5",
    value: "7.5",
  },
  {
    label: ">=8",
    value: ">=8",
  },
]

export const OPTIONS_6_TOEFL = [
  {
    label: "<95",
    value: "<95",
  },
  {
    label: "95-99",
    value: "95-99",
  },
  {
    label: "100-104",
    value: "100-104",
  },
  {
    label: "105-109",
    value: "105-109",
  },
  {
    label: ">=110",
    value: ">=110",
  },
]

export const BUSINESS_OPTIONS_0 = [
  {
    label: "Economics",
    value: "Economics",
  },
  {
    label: "Business Analytics",
    value: "Business Analytics",
  },
  {
    label: "Management",
    value: "Management",
  },
]

export const BUSINESS_OPTIONS_1 = [
  {
    label: "UK",
    value: "UK",
  },
  {
    label: "HK",
    value: "HK",
  },
  {
    label: "USA",
    value: "USA",
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "Italy",
    value: "Italy",
  },
  {
    label: "France",
    value: "France",
  },
  {
    label: "Sweden",
    value: "Sweden",
  },
  {
    label: "Canada",
    value: "Canada",
  },
  {
    label: "Australia",
    value: "Australia",
  },
  {
    label: "Singapore",
    value: "Singapore",
  },
]

export const BUSINESS_OPTIONS_2 = [
  {
    label: "Y",
    value: "Y",
  },
  {
    label: "N",
    value: "N",
  },
  {
    label: "N/A",
    value: "N/A",
  },
]

export const BUSINESS_OPTIONS_3 = [
  {
    label: "Connected",
    value: "Connected",
  },
  {
    label: "In-progress",
    value: "In-progress",
  },
  {
    label: "To be connected",
    value: "To be connected",
  },
]
