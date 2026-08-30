window.TASK_FORCE_DATA = {
  updated: "2026-08-31",
  groups: [
    {
      id: "communications",
      number: "01",
      name: "沟通工作组",
      en: "Communications",
      mandate: "评估美联储在不确定性环境下如何传达政策审议与决策。",
      signal: "政策信号 / 市场预期",
      color: "#2459a6"
    },
    {
      id: "balance-sheet",
      number: "02",
      name: "资产负债表政策工作组",
      en: "Balance Sheet Policy",
      mandate: "审查美联储当前资产负债表体制的成本、收益和制度影响。",
      signal: "流动性 / 金融稳定",
      color: "#b64045"
    },
    {
      id: "data",
      number: "03",
      name: "数据工作组",
      en: "Data",
      mandate: "提高影响美联储政策判断的真实经济信号的质量与时效性。",
      signal: "实时数据 / 分配效应",
      color: "#23766f"
    },
    {
      id: "productivity-jobs",
      number: "04",
      name: "生产力与就业工作组",
      en: "Productivity and Jobs",
      mandate: "评估包括人工智能在内的新型通用目的技术对经济的影响，为美联储政策判断提供信息。",
      signal: "AI / 增长 / 劳动力",
      color: "#9a6a16"
    },
    {
      id: "inflation",
      number: "05",
      name: "通胀框架工作组",
      en: "Inflation Frameworks",
      mandate: "重新审视美联储如何理解并应对通胀的驱动因素。",
      signal: "价格形成 / 财政约束",
      color: "#72566f"
    }
  ],
  members: [
    {
      id: "peter-fisher",
      group: "communications",
      name: "Peter R. Fisher",
      title: "华盛顿大学 Foster 商学院实践教授",
      type: "前央行与财政官员",
      portrait: "assets/portraits/peter-fisher-original.jpg",
      portraitPosition: "50% 18%",
      core: "把央行沟通视为货币政策工具，强调稳定、可预期的信号框架。",
      bio: "长期横跨央行、财政部与全球资产管理行业，兼具政策制定、市场操作和危机处置经验。",
      career: [
        "哈佛学院历史学学士、哈佛法学院 JD。",
        "1985-2001 年任职纽约联储，后任执行副行长兼公开市场账户管理人，直接对 FOMC 负责；参与 1998 年 LTCM 危机处置。",
        "2001-2003 年任美国财政部国内金融副部长，获财政部 Alexander Hamilton Medal。",
        "此后任 BlackRock 固定收益部门主管、Dartmouth Tuck 商学院临床教授；现任华盛顿大学 Foster 商学院实践教授。"
      ],
      contributions: [
        {
          title: "沟通即政策工具",
          text: "政策声明、路径指引和市场互动会直接改变资产定价；沟通失真本身就可能制造政策冲击。"
        },
        {
          title: "危机中的可信信号",
          text: "主张央行建立可预测的沟通纪律，同时保留在极端情形下迅速行动的空间。"
        }
      ],
      tags: ["央行沟通", "国债市场", "危机管理"],
      photoCredit: "MIT Sloan",
      photoSource: "https://mitsloan.mit.edu/centers-initiatives/mit-gcfp/mit-sloan-appoints-peter-r-fisher-distinguished-senior-fellow-golub-center"
    },
    {
      id: "arminio-fraga",
      group: "communications",
      name: "Arminio Fraga",
      title: "Gávea Investimentos 创始人兼董事长；前巴西央行行长",
      type: "前央行官员",
      portrait: "assets/portraits/arminio-fraga.jpg",
      portraitPosition: "50% 22%",
      core: "以高可信度的通胀目标制稳定汇率危机后的预期。",
      bio: "新兴市场通胀目标制的代表性实践者，既有学术训练，也有宏观对冲基金和央行治理经验。",
      career: [
        "普林斯顿大学经济学博士，师从 John Taylor、William Branson、Alan Blinder 与 Joseph Stiglitz。",
        "曾任索罗斯基金管理公司 Managing Director。",
        "1999-2002 年任巴西央行行长，在雷亚尔危机后重建货币政策可信度。",
        "创办 Gávea Investimentos；2013 年获普林斯顿大学詹姆斯·麦迪逊奖章。"
      ],
      contributions: [
        {
          title: "宏观三支柱",
          text: "推动通胀目标制、浮动汇率和初级财政盈余相互配合，成为新兴市场宏观稳定的经典框架。"
        },
        {
          title: "先锚定，再降息",
          text: "危机初期将利率大幅上调以重建预期，随后在通胀目标可信度恢复后快速降息。"
        }
      ],
      tags: ["通胀目标制", "新兴市场", "汇率危机"],
      photoCredit: "Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Arminio_Fraga"
    },
    {
      id: "mervyn-king",
      group: "communications",
      name: "Mervyn King",
      cnName: "默文·金勋爵",
      title: "纽约大学经济学教授；前英国央行行长",
      type: "前央行官员",
      portrait: "assets/portraits/mervyn-king.jpg",
      portraitPosition: "50% 18%",
      core: "可信的央行可以通过预期引导改变市场路径，同时必须正视激进不确定性。",
      bio: "通胀目标制设计者、英国央行前行长，也是金融体系流动性与不确定性研究的重要声音。",
      career: [
        "毕业于剑桥大学国王学院与哈佛大学，曾在哈佛大学和 MIT 任教。",
        "1991 年加入英国央行，2003-2013 年任英国央行行长。",
        "现任纽约大学艾伦·格林斯潘讲席教授。"
      ],
      contributions: [
        {
          title: "马拉多纳货币政策理论",
          text: "当央行建立足够可信度后，预期本身就能引导市场利率沿政策目标移动。"
        },
        {
          title: "金融炼金术",
          text: "在《The End of Alchemy》中批评银行将短期可兑付负债转为长期非流动资产所形成的结构性脆弱。"
        },
        {
          title: "PFAS 流动性框架",
          text: "主张央行以预设折扣率对预存抵押品提供流动性，用简单、可执行的规则约束银行。"
        }
      ],
      tags: ["通胀目标制", "银行改革", "不确定性"],
      photoCredit: "UK Parliament / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Mervyn_King,_Baron_King_of_Lothbury"
    },
    {
      id: "karen-dynan",
      group: "balance-sheet",
      name: "Karen Dynan",
      title: "哈佛大学经济学教授；彼得森国际经济研究所非常驻高级研究员",
      type: "宏观经济学者",
      portrait: "assets/portraits/karen-dynan.jpg",
      portraitPosition: "50% 19%",
      core: "从家庭行为、财政稳定器和供需错配理解货币政策面临的真实约束。",
      bio: "研究家庭金融与宏观政策，曾长期服务于美联储，并担任美国财政部首席经济学家。",
      career: [
        "在美联储工作 17 年，研究重点涵盖消费、家庭资产负债表与宏观波动。",
        "2014-2017 年任美国财政部经济政策副部长兼首席经济学家。",
        "曾任布鲁金斯学会经济研究项目副总裁兼联合主任。",
        "现任哈佛大学经济学教授、彼得森国际经济研究所非常驻高级研究员。"
      ],
      contributions: [
        {
          title: "自动财政稳定器",
          text: "主张把稳定器设计得更持续、更少依赖临时刺激，以降低政策时点和规模误判。"
        },
        {
          title: "MPC 异质性",
          text: "低收入家庭边际消费倾向显著更高，精准转移支付比普惠刺激更有效率。"
        },
        {
          title: "疫情通胀诊断",
          text: "强调供给无弹性与需求激增共同造成的错配，而不是把通胀简单归因于单一供给冲击。"
        }
      ],
      tags: ["财政政策", "家庭金融", "通胀"],
      photoCredit: "U.S. Treasury / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Karen_Dynan"
    },
    {
      id: "raghuram-rajan",
      group: "balance-sheet",
      name: "Raghuram Rajan",
      title: "芝加哥大学 Booth 商学院金融学讲席教授；前印度央行行长",
      type: "前央行与国际机构官员",
      portrait: "assets/portraits/raghuram-rajan.jpg",
      portraitPosition: "50% 17%",
      core: "超低利率与非对称救助会鼓励尾部风险，金融稳定必须进入政策反应函数。",
      bio: "金融稳定研究领军人物，曾任 IMF 首席经济学家和印度央行行长，以危机前预警闻名。",
      career: [
        "MIT 金融学博士；2003 年获首届费舍尔·布莱克奖。",
        "2003-2006 年任 IMF 首席经济学家兼研究部主任。",
        "2013-2016 年任印度央行行长。",
        "现任芝加哥大学 Booth 商学院金融学讲席教授。"
      ],
      contributions: [
        {
          title: "2005 年危机预警",
          text: "在杰克逊霍尔会议警告金融创新扭曲激励、累积尾端风险，后来被视为全球金融危机前最清晰的预警之一。"
        },
        {
          title: "Fault Lines",
          text: "把收入不平等、全球失衡和金融体系摩擦视为危机的三条结构性断层线。"
        },
        {
          title: "反对非对称宽松",
          text: "批评宽松激进而紧缩犹豫的政策模式，认为其会制造风险承担和资产价格依赖。"
        }
      ],
      tags: ["金融稳定", "危机预警", "银行业", "不平等"],
      photoCredit: "IMF / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Raghuram_Rajan"
    },
    {
      id: "jeremy-stein",
      group: "balance-sheet",
      name: "Jeremy Stein",
      title: "哈佛大学经济学教授；前美联储理事",
      type: "前美联储理事与学者",
      portrait: "assets/portraits/jeremy-stein.jpg",
      portraitPosition: "50% 22%",
      core: "期限溢价、银行信贷与收益追逐共同决定资产负债表政策的真实传导。",
      bio: "连接公司金融、银行体系和货币政策传导的学者，曾直接参与美联储政策制定。",
      career: [
        "普林斯顿大学经济学学士、MIT 经济学博士。",
        "2008 年任美国金融学会会长。",
        "2012-2014 年任美联储理事。",
        "现任哈佛大学 Moise Y. Safra 讲席经济学教授。"
      ],
      contributions: [
        {
          title: "收益追逐与期限溢价",
          text: "低利率会推动投资者增配长久期资产，放大政策对远期实际利率和期限溢价的影响。"
        },
        {
          title: "渐进主义悖论",
          text: "市场一旦预见央行会渐进调整，反而可能产生更剧烈的即时定价反应。"
        },
        {
          title: "银行信贷渠道",
          text: "微观数据表明小银行贷款投放对货币政策更敏感，金融结构决定政策传导强度。"
        }
      ],
      tags: ["期限溢价", "货币传导", "银行信贷"],
      photoCredit: "Federal Reserve / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Jeremy_C._Stein"
    },
    {
      id: "raj-chetty",
      group: "data",
      name: "Raj Chetty",
      title: "哈佛大学 William A. Ackman 讲席教授；Opportunity Insights 主任",
      type: "实证经济学者",
      portrait: "assets/portraits/raj-chetty.png",
      portraitPosition: "50% 25%",
      core: "用行政与平台级大数据把收入流动、社区环境和机会差异变成可监测的政策信号。",
      bio: "大规模行政数据实证研究的代表人物，长期研究代际流动、社会网络和创新机会。",
      career: [
        "获约翰·贝茨·克拉克奖章、麦克阿瑟奖，并当选美国国家科学院院士。",
        "在哈佛大学创建 Opportunity Insights。",
        "研究使用匿名税务记录、人口普查数据及大规模社交网络数据。"
      ],
      contributions: [
        {
          title: "美国梦褪色",
          text: "发现收入超过父母的比例从 1940 年代出生人群的约 90% 降至 1980 年代中期出生人群的约 50%。"
        },
        {
          title: "机会地图集",
          text: "把经济流动性绘制到人口普查区尺度，揭示相邻社区之间巨大的长期机会差异。"
        },
        {
          title: "经济关联度",
          text: "跨阶层友谊是上升流动性的强预测指标，社会网络质量提供传统统计之外的实时线索。"
        }
      ],
      tags: ["社会流动", "大数据", "不平等", "社会网络"],
      photoCredit: "A.SK Award / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Raj_Chetty"
    },
    {
      id: "doug-mcmillon",
      group: "data",
      name: "Doug McMillon",
      title: "沃尔玛前总裁兼 CEO",
      type: "大型企业经营者",
      portrait: "assets/portraits/doug-mcmillon.jpg",
      portraitPosition: "50% 20%",
      core: "用全球最大零售网络的高频经营数据观察需求、价格、库存与就业。",
      bio: "从沃尔玛小时工成长为 CEO，长期管理全球最大的私人雇主和高度数据化的供应链。",
      career: [
        "职业生涯始于沃尔玛小时工，后历任采购、山姆会员店与国际业务负责人。",
        "2014-2026 年任沃尔玛总裁兼 CEO。",
        "领导覆盖约 210 万员工的全球零售与供应链体系。"
      ],
      contributions: [
        {
          title: "高频零售数据",
          text: "销售、库存、天气与供应链信号可以比传统宏观统计更快识别消费与价格变化。"
        },
        {
          title: "AI 的全面岗位影响",
          text: "认为 AI 会改变从一线到管理层的每一个岗位，企业重点应放在成为高质量应用者。"
        },
        {
          title: "需求预测实践",
          text: "推动融合历史销售、天气和趋势信息的预测系统，用于库存和供应链优化。"
        }
      ],
      tags: ["零售数据", "供应链", "AI 应用"],
      photoCredit: "Walmart / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Doug_McMillon"
    },
    {
      id: "kevin-murphy",
      group: "data",
      name: "Kevin Murphy",
      title: "芝加哥大学 Booth 商学院 George J. Stigler 讲席教授",
      type: "劳动经济学者",
      portrait: "assets/portraits/kevin-murphy.jpg",
      portraitPosition: "50% 20%",
      core: "用工资分布、技能供需与人力资本数据解释劳动力市场的结构变化。",
      bio: "芝加哥学派劳动经济学代表人物，把工资不平等研究从平均值推进到完整分布。",
      career: [
        "芝加哥大学博士，师从 Sherwin Rosen。",
        "1997 年获约翰·贝茨·克拉克奖章，2005 年获麦克阿瑟奖，2008 年获约翰·冯·诺依曼奖。",
        "现任芝加哥大学 Booth 商学院 George J. Stigler 讲席教授。"
      ],
      contributions: [
        {
          title: "工资分布方法",
          text: "通过工资分位数追踪不平等趋势，使技能、教育与需求变化得到更直接的检验。"
        },
        {
          title: "技能偏向型需求",
          text: "与 Katz 的研究显示，大学工资溢价上升源于技能需求增速超过技能劳动力供给。"
        },
        {
          title: "健康的经济价值",
          text: "估算寿命延长带来的巨大社会财富，拓展了宏观福利衡量的边界。"
        }
      ],
      tags: ["工资不平等", "技能需求", "人力资本"],
      photoCredit: "Hoover Institution",
      photoSource: "https://www.hoover.org/profiles/kevin-m-murphy"
    },
    {
      id: "marc-andreessen",
      group: "productivity-jobs",
      name: "Marc Andreessen",
      title: "Andreessen Horowitz 联合创始人兼普通合伙人",
      type: "科技投资人",
      portrait: "assets/portraits/marc-andreessen.jpg",
      portraitPosition: "50% 18%",
      core: "技术进步是长期生产率和物质丰裕的核心来源，AI 的供给效应可能远超传统估计。",
      bio: "Netscape 联合创始人和硅谷风险投资人，以强烈的技术乐观主义影响 AI 与生产率讨论。",
      career: [
        "Mosaic 浏览器联合创造者、Netscape 联合创始人。",
        "2009 年联合创办 Andreessen Horowitz。",
        "通过 a16z 投资多家软件与人工智能企业。"
      ],
      contributions: [
        {
          title: "技术乐观主义",
          text: "把技术进步视为生产率和全民物质福祉增长的长期引擎。"
        },
        {
          title: "消费者丰裕",
          text: "认为 AI 若显著降低劳动成本，也会通过生产率提升压低商品和服务价格。"
        },
        {
          title: "反对劳动总量固定",
          text: "人的需求会随技术能力扩展，因此自动化并不必然意味着就业总量永久收缩。"
        }
      ],
      tags: ["技术乐观主义", "AI 经济学", "生产率"],
      photoCredit: "Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Marc_Andreessen"
    },
    {
      id: "charles-jones",
      group: "productivity-jobs",
      name: "Charles I. Jones",
      cnName: "Chad Jones",
      title: "斯坦福大学商学院 STANCO 25 讲席教授；目前在 Anthropic 休假",
      type: "增长经济学者",
      portrait: "assets/portraits/charles-jones.jpg",
      portraitPosition: "50% 17%",
      core: "增长取决于研究投入与研究生产率的拉锯，AI 可能改变两者的长期平衡。",
      bio: "现代增长经济学代表人物，研究创意生产、研发效率和跨国生产率差异。",
      career: [
        "MIT 经济学博士。",
        "斯坦福大学商学院 STANCO 25 讲席教授；2019 年当选美国艺术与科学院院士。",
        "目前休假加入 Anthropic Institute，研究 AI 对长期增长的多情景影响。"
      ],
      contributions: [
        {
          title: "半内生增长理论",
          text: "指出研发人员增加并未带来同比例 TFP 加速，长期增长更依赖人口增速与研究生产率。"
        },
        {
          title: "创意越来越难找",
          text: "跨半导体、农业和制药等领域发现维持同样技术进步需要投入越来越多研究资源。"
        },
        {
          title: "发展核算",
          text: "把跨国人均收入巨大差异的重要部分归因于全要素生产率和制度环境。"
        }
      ],
      tags: ["增长理论", "研发生产率", "创意经济"],
      photoCredit: "AEA / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Charles_I._Jones"
    },
    {
      id: "asha-sharma",
      group: "productivity-jobs",
      name: "Asha Sharma",
      title: "微软执行副总裁兼 Xbox CEO",
      type: "科技企业经营者",
      portrait: "assets/portraits/asha-sharma.jpg",
      portraitPosition: "50% 30%",
      core: "AI 应提升生产与创作工具，但企业需要为质量、岗位重构和人的主导权设定边界。",
      bio: "具有平台、零售科技与人工智能产品经验的大型科技企业经营者。",
      career: [
        "曾任 Instacart 首席运营官和 Meta 高管。",
        "2024 年加入微软并出任 CoreAI 总裁。",
        "2026 年出任微软执行副总裁兼 Xbox CEO。"
      ],
      contributions: [
        {
          title: "高质量 AI 边界",
          text: "强调企业不能为了短期效率牺牲产品质量，也不能用低质量生成内容淹没生态。"
        },
        {
          title: "人类主导创意",
          text: "AI 可辅助渲染、原型和代码，但创意内容和审美判断仍应由人承担。"
        },
        {
          title: "组织与就业视角",
          text: "提供大型科技雇主如何在组织重构中吸收 AI 生产率收益的一线经验。"
        }
      ],
      tags: ["AI 治理", "技术就业", "组织管理"],
      photoCredit: "Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Asha_Sharma"
    },
    {
      id: "greg-mankiw",
      group: "inflation",
      name: "N. Gregory Mankiw",
      title: "哈佛大学 Robert M. Beren 讲席教授；前总统经济顾问委员会主席",
      type: "宏观经济学者",
      portrait: "assets/portraits/greg-mankiw-aea.jpg",
      portraitPosition: "50% 16%",
      core: "微小调价成本和信息更新摩擦可以在宏观层面形成显著价格粘性。",
      bio: "新凯恩斯宏观经济学奠基人之一，也是全球影响力最大的宏观经济学教材作者之一。",
      career: [
        "29 岁即获哈佛大学终身教职。",
        "2003-2005 年任美国总统经济顾问委员会主席。",
        "著有《Macroeconomics》等广泛使用的宏观经济学教材。",
        "现任哈佛大学 Robert M. Beren 讲席经济学教授。"
      ],
      contributions: [
        {
          title: "菜单成本理论",
          text: "微小调价成本可通过总需求外部性放大为宏观价格粘性，为货币政策影响实体经济提供微观基础。"
        },
        {
          title: "粘性信息模型",
          text: "企业和家庭不连续更新信息集，信息扩散速度本身会产生通胀惯性。"
        },
        {
          title: "新古典综合",
          text: "在承认市场机制的同时，为逆周期稳定政策和市场化外部性工具提供理论支撑。"
        }
      ],
      tags: ["新凯恩斯", "菜单成本", "价格粘性"],
      photoCredit: "American Economic Association",
      photoSource: "https://www.aeaweb.org/about-aea/honors-awards/distinguished-fellows/n-gregory-mankiw"
    },
    {
      id: "thomas-sargent",
      group: "inflation",
      name: "Thomas J. Sargent",
      title: "纽约大学 W.R. Berkley 讲席教授；2011 年诺贝尔经济学奖得主",
      type: "宏观经济学者",
      portrait: "assets/portraits/thomas-sargent.jpg",
      portraitPosition: "50% 16%",
      core: "通胀稳定取决于预期、政策制度与财政约束，货币政策不能脱离财政可信度独立运行。",
      bio: "理性预期革命的代表人物，以货币财政互动、政策制度和历史通胀研究著称。",
      career: [
        "哈佛大学经济学博士。",
        "曾任美国经济学会会长、计量经济学会会长，并在明尼苏达大学、芝加哥大学和斯坦福大学任教。",
        "2011 年获诺贝尔经济学奖。",
        "现任纽约大学 W.R. Berkley 讲席经济学教授。"
      ],
      contributions: [
        {
          title: "理性预期与政策无效性",
          text: "可预见的系统性扩张会被价格和工资提前吸收，政策制度与意外成分比单次操作更重要。"
        },
        {
          title: "不愉快的货币主义算术",
          text: "在财政主导下，央行收紧可能推高未来货币融资需求，甚至带来更高通胀。"
        },
        {
          title: "四次大通胀的终结",
          text: "历史经验显示，可信的财政改革往往是恶性通胀稳定化的前提。"
        }
      ],
      tags: ["理性预期", "财政货币协调", "诺贝尔奖"],
      photoCredit: "Nobel Foundation / Wikimedia Commons",
      photoSource: "https://en.wikipedia.org/wiki/Thomas_J._Sargent"
    },
    {
      id: "william-white",
      group: "inflation",
      name: "William White",
      title: "C.D. Howe 研究所高级研究员；前 BIS 经济顾问",
      type: "前央行与国际机构官员",
      portrait: "assets/portraits/william-white-alt.png",
      portraitPosition: "50% 25%",
      core: "即使 CPI 温和，信贷繁荣与资产价格也会累积金融失衡，货币政策应在繁荣期逆风干预。",
      bio: "长期服务于加拿大央行和国际清算银行，是把金融周期纳入货币政策框架的早期倡导者。",
      career: [
        "曾任英国央行、加拿大央行经济学家，后升任加拿大央行副行长。",
        "1995-2008 年任 BIS 经济顾问兼货币经济部主任。",
        "曾任 OECD 经济与发展审查委员会主席。",
        "现任 C.D. Howe 研究所高级研究员。"
      ],
      contributions: [
        {
          title: "逆风干预",
          text: "即使消费通胀稳定，金融自由化和低利率仍可能鼓励过度风险承担，央行应在繁荣期主动收紧。"
        },
        {
          title: "价格稳定并不够",
          text: "危机前反复警告资产负债表扩张和信贷失衡，主张把金融周期作为独立政策维度。"
        },
        {
          title: "批评无金融部门模型",
          text: "认为忽略货币、银行、信贷与违约的模型无法解释驱动繁荣和萧条的关键机制。"
        }
      ],
      tags: ["金融周期", "逆风干预", "宏观审慎"],
      photoCredit: "Institute for New Economic Thinking",
      photoSource: "https://www.ineteconomics.org/research/experts/wwhite"
    }
  ],
  activities: [
    {
      date: "2026-08-28",
      memberId: "marc-andreessen",
      type: "新闻稿",
      title: "a16z 宣布募集 11 亿美元《Machine Age Fund》，专项投资 AI 计算基础设施",
      summary: "Andreessen 联合创办的 a16z 宣布为最新基金 Machine Age Fund 募集 11 亿美元（公告由 Ben Horowitz、Martin Casado、Raghu Raghuram、David Ulevitch、David George 等合伙人与 GP 执笔），将专项投资 AI 运行依赖的芯片、内存、网络、存储以及数据中心、机器人、家用 AI 设备等全栈基础设施。公告称 AI 正从对话走向推理与知识工作，token 消耗强度呈数量级上升，而供给侧受制于电力、互连与算力密度等物理极限，需以「机器时代」的硬件重构解围——机架功率已从 5-10 kW 升至 100-250 kW 并将迈向 1 MW，数据中心正从数十 MW 走向 GW 级园区。作为生产力与就业工作组的技术投资人代表，该基金的 AI 资本密集度与供给端议题与其长期论断相呼应。",
      source: "a16z",
      url: "https://a16z.com/the-machine-age-fund/"
    },
    {
      date: "2026-08-27",
      memberId: "arminio-fraga",
      type: "受访",
      title: "Folha 报道：Fraga 公开支持拟递交 2026 总统候选人的巴西结构性养老改革方案",
      summary: "据 Folha 报道，Fraga 对一份即将呈递巴西总统候选人的第二轮养老改革提案公开表示支持。该方案由经济学家 Paulo Tafner 牵头：参数端将最低退休年龄由男女 62/65 岁逐步统一并提升至 67 岁（以「育儿贡献年」给予女性补偿）；结构端将现行百分百现收现付制改为混合制——一半缴费进入由私营保险机构与公共基金管理的资本化账户、另一半进入 INSS 名义账户制。据测算，参数改革每年节省约 2% GDP、结构改革约 7% GDP，可把养老支出稳定在 10% GDP 附近（若不改革 2100 年将升至 17%），延续了 Fraga 一贯的高实际利率与财政纪律主张。",
      source: "Folha de S.Paulo",
      url: "https://www1.folha.uol.com.br/mercado/2026/08/nova-proposta-de-reforma-da-previdencia-busca-estabilizar-gasto-com-idade-minima-de-67-anos-e-capitalizacao.shtml"
    },
    {
      date: "2026-08-20",
      memberId: "peter-fisher",
      type: "受访",
      title: "Foster 商学院专访《Peter R. Fisher Brings a Career in Markets and Monetary Policy to Foster》",
      summary: "Fisher 以金融学实践教授身份正式加入华盛顿大学 Foster 商学院新设的一年制 MS Finance 项目，并接受专访。他强调「不确定性下的决策」是金融教育的核心，学生必须理解资产负债表错配——「我们总是做多某些东西、做空另一些东西」，并应常问「我为什么可能是错的」；他表示无意教学生成为央行家，而是要培养「对央行与银行叙事的怀疑性消费者」。专访并确认他已于 2026 年 7 月获主席 Warsh 任命进入美联储沟通工作组，与 King、Fraga 共事。",
      source: "University of Washington Foster School of Business",
      url: "https://foster.uw.edu/news/ms-finance-peter-r-fisher/"
    },
    {
      date: "2026-08-15",
      memberId: "arminio-fraga",
      type: "播客",
      title: "Folha《Desenquadrando》视频播客：巴西重蹈覆辙，财政堪比 Dilma 危机前夜",
      summary: "Fraga 将巴西当前财政状况比作 Dilma 政府危机前夜，称留给下一届政府的是「被诅咒的遗产」。他批评宏观政策完全失调——央行加息抗通胀、政府在选举年扩张支出，形成「拔河」式博弈；并指出失业率降至 5.4% 的亮眼数据掩盖了财政问题，「短期刺激解决不了问题」。",
      source: "Folha de S.Paulo",
      url: "https://www1.folha.uol.com.br/mercado/2026/08/arminio-fraga-diz-que-brasil-repete-erros-e-compara-cenario-economico-ao-pre-crise-do-governo-dilma.shtml"
    },
    {
      date: "2026-08-14",
      memberId: "raghuram-rajan",
      type: "专栏",
      title: "《How Corporations Can Mitigate an AI Jobocalypse》（Project Syndicate）",
      summary: "Rajan 认为 AI 引发的岗位替代「即将到来」，但速度、广度与受影响行业未知，取决于企业采纳节奏——美国少于 20 人的企业仅约 20% 使用 AI，250 人以上企业为 37%。即便冲击弱于最悲观预期，也应动员企业参与缓解就业影响以维护社会团结；政府需审视现有政策激励，大雇主应着眼自身长期利益，为技能再培训与岗位过渡做好准备。",
      source: "Project Syndicate",
      url: "https://www.project-syndicate.org/commentary/corporations-can-mitigate-ai-jobs-apocalypse-by-raghuram-g-rajan-2026-08"
    },
    {
      date: "2026-08-11",
      memberId: "arminio-fraga",
      type: "出席",
      title: "CIEE 圣保罗市场调节圆桌：批评 Banco Master 案监管执行「荒谬」，主张重估存款保险基金",
      summary: "Fraga 称 Banco Master 案暴露的是监管执行的失败而非规则设计问题，「堪称荒谬（grotesca）」；认为存款保险基金（FGC）激励机制扭曲，让银行能以 CDI+6% 的高息揽储并获系统保护。他还指出高实际利率压制巴西资本市场发展，「不存在自愿压低利率的路径」。",
      source: "Brasil 247",
      url: "https://www.brasil247.com/economia/arminio-fraga-ve-falha-grotesca-na-aplicacao-da-regulacao-no-caso-master/"
    },
    {
      date: "2026-08-10",
      memberId: "karen-dynan",
      type: "专栏",
      title: "《How the Rise of AI Matters for Fiscal Policy》：AI 的财政后果取决于收益归属",
      summary: "Dynan 与 Elmendorf、Sheiner 基于 CBO 预测构建四种 AI 情景测算美国联邦债务走势：生产率提速、收入向顶层集中、岗位流失与收益全部归于资本。结论是 AI 的财政影响既取决于其提高国民收入的程度，也取决于谁获得这些收入及政策如何回应；因冲击深具不确定性，政策应「购买保险」——小规模建立工资保险、强化培训或适度公共持股。",
      source: "Global Business & Finance Magazine（原文 VoxEU/CEPR）",
      url: "https://gbfinancemag.com/how-the-rise-of-ai-matters-for-fiscal-policy/"
    },
    {
      date: "2026-07-06",
      memberId: "asha-sharma",
      type: "重组",
      title: "Xbox 宣布「Big Reset」重组：FY27 裁员约 3,200 人",
      summary: "Sharma 在全员邮件中宣布裁减约 3,200 个岗位（约 1,600 个立即生效），称投资将向 Activision、Bethesda 与 Blizzard 集中；表示已公开的第一方游戏不受影响。这是她就任 Xbox CEO 后最大规模的组织重构，直接对应工作组关注的 AI 时代岗位重构议题。",
      source: "Insider Gaming",
      url: "https://insider-gaming.com/xbox-july-2026-layoffs/"
    },
    {
      date: "2026-06-30",
      memberId: "charles-jones",
      type: "就任",
      title: "正式加入 Anthropic Institute，研究 AI 的经济影响",
      summary: "Jones 自斯坦福休假，加入 Jack Clark 领导的 Anthropic Institute，评估 AI 对经济增长的多情景影响与存在性风险；其模型给出超级智能约三分之一的灾难概率与约三分之二的生活水平大幅提升概率。",
      source: "Crypto Briefing",
      url: "https://cryptobriefing.com/anthropic-hires-chad-jones-ai-risks/"
    },
    {
      date: "2026-07-22",
      memberId: "arminio-fraga",
      type: "播客",
      title: "巴西 CBN 电台《50 Debates Para o Brasil》：央行独立性辩论",
      summary: "与 Unicamp 教授 Belluzzo 辩论央行自主权。Fraga 主张央行独立性是民选政府设定通胀目标后的合法授权，可保护货币政策免受短期选举压力，是巴西的制度进步；并指出当前财政与货币政策相互背离是巴西高利率的根源。",
      source: "Jornal da CBN",
      url: "https://cbn.globo.com/coberturas/noticia/2026/07/22/50-debates-para-o-brasil-autonomia-do-banco-central-protege-a-economia-ou-limita-o-governo.ghtml"
    },
    {
      date: "2026-07-21",
      memberId: "marc-andreessen",
      type: "专栏",
      title: "《Making a Billion Intelligent Machines》（a16z 合著文章）",
      summary: "与 Erik Torenberg、Elena Burger 合著，介绍被投企业 Applied Intuition 的物理 AI 代理开发平台 Dana；论证随着智能成本持续下降，智能将被部署到汽车、国防、建筑、采矿、卡车等十亿台机器上。",
      source: "a16z",
      url: "https://a16z.com/making-a-billion-intelligent-machines/"
    },
    {
      date: "2026-07-20",
      memberId: "karen-dynan",
      type: "出席",
      title: "NBER 夏季研究院 CRIW 会议（剑桥，7 月 20-21 日）",
      summary: "以收入与财富研究会议（CRIW）主席身份担任三位组织者之一，主持 2026 年 NBER 夏季研究院 CRIW 分会。",
      source: "NBER",
      url: "https://www.nber.org/conferences/si-2026-conference-research-income-and-wealth"
    },
    {
      date: "2026-07-17",
      memberId: "greg-mankiw",
      type: "博客",
      title: "《Thank you, British Academy》",
      summary: "宣布当选英国国家学术院（British Academy）国际院士，表示深感荣幸。",
      source: "Greg Mankiw's Blog",
      url: "https://gregmankiw.blogspot.com/2026/07/thank-you-british-academy.html"
    },
    {
      date: "2026-07-15",
      memberId: "greg-mankiw",
      type: "博客",
      title: "《1873》：评 Liaquat Ahamed 新书",
      summary: "称这本关于 1873 年全球金融危机的新书「出色」；指出书中铁路繁荣的讨论与当前 AI 热潮颇有共鸣——都是吸引投机者并造成损失的变革性技术。",
      source: "Greg Mankiw's Blog",
      url: "https://gregmankiw.blogspot.com/2026/07/1873.html"
    },
    {
      date: "2026-07-14",
      memberId: "karen-dynan",
      type: "出席",
      title: "《Understanding the national debt and the risks of a fiscal crisis》网络研讨会",
      summary: "作为座谈成员讨论 31.5 万亿美元联邦债务的成因、利息负担、高债务是否会引发通胀、财政问题如何演变为危机；与 Daniel Bergstresser、Douglas Elmendorf 同场。",
      source: "Shorenstein Center × EconoFact",
      url: "https://shorensteincenter.org/resource/understanding-the-national-debt-and-the-risks-of-a-fiscal-crisis/"
    },
    {
      date: "2026-07-10",
      memberId: "greg-mankiw",
      type: "博客",
      title: "《The Fed's New Task Forces》",
      summary: "确认自己与 Sargent、White 共同任职于美联储新成立的通胀框架特别工作组；表示现阶段评论工作组的工作为时尚早，婉拒记者采访，并指引记者参考其两年前的相关旧文。",
      source: "Greg Mankiw's Blog",
      url: "https://gregmankiw.blogspot.com/2026/07/the-feds-new-task-forces.html"
    }
  ],
  sources: [
    {
      label: "a16z 公告：The Machine Age Fund（2026-08-28）",
      url: "https://a16z.com/the-machine-age-fund/"
    },
    {
      label: "Fraga 表态：Folha 养老改革方案报道（2026-08-27）",
      url: "https://www1.folha.uol.com.br/mercado/2026/08/nova-proposta-de-reforma-da-previdencia-busca-estabilizar-gasto-com-idade-minima-de-67-anos-e-capitalizacao.shtml"
    },
    {
      label: "Foster 商学院专访：Peter R. Fisher Brings a Career in Markets and Monetary Policy to Foster（2026-08-20）",
      url: "https://foster.uw.edu/news/ms-finance-peter-r-fisher/"
    },
    {
      label: "Fraga 播客：Folha《Desenquadrando》（2026-08-15）",
      url: "https://www1.folha.uol.com.br/mercado/2026/08/arminio-fraga-diz-que-brasil-repete-erros-e-compara-cenario-economico-ao-pre-crise-do-governo-dilma.shtml"
    },
    {
      label: "Rajan 专栏：How Corporations Can Mitigate an AI Jobocalypse（2026-08-14）",
      url: "https://www.project-syndicate.org/commentary/corporations-can-mitigate-ai-jobs-apocalypse-by-raghuram-g-rajan-2026-08"
    },
    {
      label: "Fraga 圆桌：Banco Master 监管评论（2026-08-11）",
      url: "https://www.brasil247.com/economia/arminio-fraga-ve-falha-grotesca-na-aplicacao-da-regulacao-no-caso-master/"
    },
    {
      label: "Dynan 专栏：How the Rise of AI Matters for Fiscal Policy（2026-08-10）",
      url: "https://gbfinancemag.com/how-the-rise-of-ai-matters-for-fiscal-policy/"
    },
    {
      label: "美联储新闻稿：任务组领导与目标（2026-07-09）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260709a.htm"
    },
    {
      label: "美联储专题页：Chairman's Task Forces for Advancing Monetary Policy",
      url: "https://www.federalreserve.gov/monetarypolicy/task-forces.htm"
    }
  ]
};
