window.FED_BOARD_DATA = {
  updated: "2026-09-21",
  lanes: [
    {
      id: "leadership",
      number: "01",
      name: "主席与副主席",
      en: "Chair & Vice Chairs",
      color: "#164b7a"
    },
    {
      id: "governors",
      number: "02",
      name: "理事",
      en: "Governors",
      color: "#23766f"
    }
  ],
  votingStructure: [
    {
      id: "board",
      number: "01",
      name: "理事会成员",
      en: "Board of Governors",
      rule: "7 位理事全部为 FOMC 永久票委，每次会议均有投票权。",
      signal: "永久投票权 × 7",
      color: "#164b7a"
    },
    {
      id: "new-york",
      number: "02",
      name: "纽约联储主席",
      en: "President, New York Fed",
      rule: "纽约联储主席（现任 John C. Williams）为 FOMC 永久票委，并任委员会副主席。",
      signal: "永久投票权 × 1",
      color: "#23766f"
    },
    {
      id: "rotating",
      number: "03",
      name: "轮值地区联储主席",
      en: "Rotating Reserve Bank Presidents",
      rule: "其余 11 家地区联储主席每年轮换 4 个投票席位。2026 年轮值：克利夫兰 Hammack、明尼阿波利斯 Kashkari、达拉斯 Logan、费城 Paulson。",
      signal: "轮值投票权 × 4",
      color: "#9a6a16"
    }
  ],
  governors: [
    {
      id: "kevin-warsh",
      lane: "leadership",
      role: "主席",
      roleEn: "Chair",
      name: "Kevin M. Warsh",
      term: "主席任期至 2030-05；理事任期至 2040-01",
      voting: "FOMC 永久票委（委员会主席）",
      portrait: "assets/portraits/governors/kevin-warsh.jpg",
      portraitPosition: "50% 20%",
      core: "以央行制度改革与通胀信誉重建为纲领的新任主席。",
      bio: "曾是最年轻的美联储理事，历经金融危机决策核心；2026 年 5 月重返美联储出任主席。",
      career: [
        "1970 年生于纽约州奥尔巴尼；斯坦福大学学士（1992）、哈佛法学院 JD（1995）。",
        "1995-2002 年任职摩根士丹利并购部门。",
        "2002-2006 年任总统经济政策特别助理兼国家经济委员会执行秘书。",
        "2006-2011 年任美联储理事，35 岁成为史上最年轻理事，深度参与金融危机处置。",
        "此后任斯坦福胡佛研究所研究员，并为 Duquesne Family Office 合伙人。",
        "2026 年 5 月获参议院确认（理事 51-45、主席 54-45），5 月 22 日宣誓就任美联储主席。"
      ],
      stances: [
        {
          title: "制度审查",
          text: "上任后推动对美联储政策框架的系统性反思，2026 年 7 月 9 日宣布成立五个货币政策特别工作组，邀请 15 位外部专家联合主持。"
        },
        {
          title: "通胀信誉优先",
          text: "在 7 月 29 日议息后的发布会上强调「我们将实现价格稳定」，在通胀高于目标时维持利率不变。"
        },
        {
          title: "批评量化宽松惯性",
          text: "长期批评危机后 QE 的常态化使用，主张更小、更纯粹的资产负债表，减少央行对资产定价的持续干预。"
        }
      ],
      tags: ["央行改革", "通胀信誉", "资产负债表"],
      photoCredit: "Federal Reserve",
      photoSource: "https://www.federalreserve.gov/aboutthefed/bios/board/warsh.htm"
    },
    {
      id: "philip-jefferson",
      lane: "leadership",
      role: "副主席",
      roleEn: "Vice Chair",
      name: "Philip N. Jefferson",
      term: "副主席任期至 2027-09；理事任期至 2036-01",
      voting: "FOMC 永久票委",
      portrait: "assets/portraits/governors/philip-jefferson.jpg",
      portraitPosition: "50% 20%",
      core: "低调的数据依赖派中间委员，在分裂的委员会中扮演平衡角色。",
      bio: "研究贫困与不平等的经济学者出身，长期在文理学院任教并从事学术行政，2022 年进入理事会，2023 年起任副主席。",
      career: [
        "弗吉尼亚大学经济学博士（1990）。",
        "长期任教于斯沃斯莫尔学院，后任戴维森学院学术事务副校长。",
        "曾任美国经济学会副会长，研究聚焦贫困、不平等与计量方法。",
        "2022 年 5 月出任美联储理事，2023 年 9 月起任副主席。"
      ],
      stances: [
        {
          title: "数据依赖",
          text: "公开表态一贯强调逐次会议依据数据决策，避免预设路径，鲜少释放个人倾向信号。"
        },
        {
          title: "双重使命平衡",
          text: "在通胀与就业两个目标之间强调对称评估，被视为理事会中立场最居中的成员之一。"
        }
      ],
      tags: ["数据依赖", "中间派", "不平等研究"],
      photoCredit: "Federal Reserve",
      photoSource: "https://www.federalreserve.gov/aboutthefed/bios/board/jefferson.htm"
    },
    {
      id: "michelle-bowman",
      lane: "leadership",
      role: "监管副主席",
      roleEn: "Vice Chair for Supervision",
      name: "Michelle W. Bowman",
      term: "监管副主席任期至 2029-06；理事任期至 2034-01",
      voting: "FOMC 永久票委",
      portrait: "assets/portraits/governors/michelle-bowman.jpg",
      portraitPosition: "50% 20%",
      core: "社区银行出身的监管负责人，对通胀保持高度警惕。",
      bio: "来自堪萨斯的第五代社区银行家，2018 年填补理事会为社区银行经验专设的席位，2025 年 6 月起执掌银行监管。",
      career: [
        "堪萨斯大学学士、沃什伯恩大学法学院 JD。",
        "曾任堪萨斯州银行监理官，并在家族社区银行任职。",
        "2018 年 11 月出任美联储理事（社区银行经验席位）。",
        "2025 年 6 月 9 日就任负责监管的副主席。"
      ],
      stances: [
        {
          title: "监管减负与分层",
          text: "主张按银行规模与风险分层监管，反对一刀切提高资本要求，推动重新审视巴塞尔 III 终局方案。"
        },
        {
          title: "通胀警惕",
          text: "多次表示通胀回到 2% 之前不应过早宣告胜利；在 2025 年曾支持更早降息，2026 年随通胀反弹转向强调耐心。"
        }
      ],
      tags: ["银行监管", "社区银行", "通胀警惕"],
      photoCredit: "Federal Reserve",
      photoSource: "https://www.federalreserve.gov/aboutthefed/bios/board/bowman.htm"
    },
    {
      id: "michael-barr",
      lane: "governors",
      role: "理事",
      roleEn: "Governor",
      name: "Michael S. Barr",
      term: "理事任期至 2032-01",
      voting: "FOMC 永久票委",
      portrait: "assets/portraits/governors/michael-barr.jpg",
      portraitPosition: "50% 20%",
      core: "《多德-弗兰克法案》设计者之一，银行资本与消费者保护的坚定派。",
      bio: "法学学者出身的金融监管设计师，曾任监管副主席并主导硅谷银行倒闭复盘，2025 年初卸任监管职务后留任理事。",
      career: [
        "耶鲁大学学士、牛津大学罗德学者、耶鲁大学法学院 JD。",
        "克林顿与奥巴马政府财政部任职，参与起草《多德-弗兰克法案》并推动设立 CFPB。",
        "密歇根大学法学院教授、公共政策学院院长。",
        "2022 年 7 月出任理事并任监管副主席，牵头硅谷银行事件独立复盘；2025 年 2 月卸任监管副主席，留任理事。"
      ],
      stances: [
        {
          title: "银行资本充足",
          text: "主张大型银行持有更高资本以吸收尾部损失，认为硅谷银行事件暴露了监管与银行自身风险管理的双重失灵。"
        },
        {
          title: "消费者保护",
          text: "长期倡导金融消费者保护与普惠金融服务，是 CFPB 制度设计的关键人物。"
        }
      ],
      tags: ["银行资本", "金融监管", "消费者保护"],
      photoCredit: "Federal Reserve",
      photoSource: "https://www.federalreserve.gov/aboutthefed/bios/board/barr.htm"
    },
    {
      id: "lisa-cook",
      lane: "governors",
      role: "理事",
      roleEn: "Governor",
      name: "Lisa D. Cook",
      term: "理事任期至 2038-01",
      voting: "FOMC 永久票委（就罢免诉讼留任中）",
      portrait: "assets/portraits/governors/lisa-cook.jpg",
      portraitPosition: "50% 20%",
      core: "研究创新与长期增长的学者，身处美联储独立性保卫战的风暴中心。",
      bio: "理事会历史上首位非裔女性理事；2025 年 8 月遭总统试图罢免后提起诉讼，法院裁定其在诉讼期间留任，案件已成为央行独立性边界的标志性判例。",
      career: [
        "斯佩尔曼学院学士、牛津大学哲学硕士、加州大学伯克利分校经济学博士。",
        "密歇根州立大学经济学与国际关系教授；研究创新与经济增长、种族不平等的长期经济代价。",
        "2022 年 5 月出任美联储理事，2023 年 9 月获连任确认，任期至 2038 年。",
        "2025 年 8 月被总统宣布「因故」罢免后起诉，联邦法院裁定罢免暂缓执行，其继续履职并参与 FOMC 投票。"
      ],
      stances: [
        {
          title: "创新驱动增长",
          text: "研究显示歧视与排斥会压制创新产出、拖累整体经济增长，为包容性政策提供实证基础。"
        },
        {
          title: "捍卫理事任期保障",
          text: "其诉讼主张理事只能因法定事由被罢免，判决结果将界定总统与美联储之间的权力边界。"
        }
      ],
      tags: ["创新经济学", "任期诉讼", "央行独立性"],
      photoCredit: "Federal Reserve",
      photoSource: "https://www.federalreserve.gov/aboutthefed/bios/board/cook.htm"
    },
    {
      id: "jerome-powell",
      lane: "governors",
      role: "理事（前任主席）",
      roleEn: "Governor, former Chair",
      name: "Jerome H. Powell",
      term: "理事任期至 2028-01",
      voting: "FOMC 永久票委",
      portrait: "assets/portraits/governors/jerome-powell.jpg",
      portraitPosition: "50% 20%",
      core: "执掌美联储八年的前主席，卸任后以普通理事身份继续投票。",
      bio: "私募股权与财政系统出身的实用主义者，两届主席任内经历疫情冲击与四十年一遇的通胀，卸任主席后罕见地留任理事。",
      career: [
        "普林斯顿大学政治学学士（1975）、乔治城大学 JD（1979）。",
        "老布什政府财政部助理部长；后任凯雷集团合伙人。",
        "2012 年 5 月出任美联储理事；2018 年 2 月就任主席，2022 年获连任。",
        "2026 年 5 月 15 日主席任期届满，以理事身份留任（理事任期至 2028 年 1 月）。"
      ],
      stances: [
        {
          title: "央行独立性",
          text: "任内多次公开拒绝政治干预，坚持按双重使命决策；其留任理事被解读为对理事会独立性的持续背书。"
        },
        {
          title: "实用主义路线",
          text: "疫情期间启动无限量宽松与紧急工具，2022 年起又以沃尔克式加息应对通胀，风格以结果而非教条为导向。"
        }
      ],
      tags: ["前主席", "央行独立性", "危机应对"],
      photoCredit: "Federal Reserve",
      photoSource: "https://www.federalreserve.gov/aboutthefed/bios/board/powell.htm"
    },
    {
      id: "christopher-waller",
      lane: "governors",
      role: "理事",
      roleEn: "Governor",
      name: "Christopher J. Waller",
      term: "理事任期至 2030-01",
      voting: "FOMC 永久票委",
      portrait: "assets/portraits/governors/christopher-waller.jpg",
      portraitPosition: "50% 20%",
      core: "立场鲜明、转向果断的研究派出身理事，2026 年从降息旗手转为加息警告者。",
      bio: "长期执掌圣路易斯联储研究部的宏观学者，2020 年进入理事会；发言密度高、观点变化快，是市场最密切跟踪的理事之一。",
      career: [
        "华盛顿州立大学经济学博士（1985）。",
        "曾任圣母大学、肯塔基大学教授，2009 年起任圣路易斯联储研究部主任。",
        "2020 年 12 月出任美联储理事。",
        "2025 年多次主张预防式降息（含 7 月投下支持降息的反对票）；2026 年 7 月发表《货币政策站在十字路口》演讲，转而警示若通胀顽固可能重新加息。"
      ],
      stances: [
        {
          title: "灵活转向",
          text: "2025 年力主尽早降息以保就业，2026 年通胀反弹后公开承认政策站在十字路口、不排除反向加息，以愿意改口著称。"
        },
        {
          title: "数据框架发声者",
          text: "频繁就中性利率、通胀预期与金融条件发声，其演讲常被视为 FOMC 内部辩论方向的风向标。"
        }
      ],
      tags: ["政策转向", "中性利率", "高产发声"],
      photoCredit: "Federal Reserve",
      photoSource: "https://www.federalreserve.gov/aboutthefed/bios/board/waller.htm"
    }
  ],
  activities: [
    {
      date: "2026-09-18",
      memberId: "michelle-bowman",
      type: "演讲",
      title: "《Initial Findings from Independent Review of Silicon Valley Bank》：公布 SVB 倒闭独立审查初步发现",
      summary: "Bowman 在伦敦市长官邸（Mansion House）午餐会宣布由其上任后委托 Starling Advisory Group 开展的硅谷银行（SVB）倒闭独立审查初步发现（系列报告第一篇）。报告的七项关键发现：倒闭源于证券组合未实现会计损失超过资本、94% 未受保存款集中于风险投资支持的科技企业、贴现窗口融资运营准备不足等脆弱性叠加；监管人员在 2022 年 3 月起「就已知道或应当知道」这些风险，却始终未及时果断要求其化解；监管迟延并非由 2018 年 EGRRCPA 的分级监管要求或前任监管副主席的指示造成，核心症结是长期「风险厌恶」文化——检查员个人认为不采取行动比冒行动失误的风险更安全——并因决策权归属不清而进一步加剧；Charles River Associates 受 Starling 委托分析确认，社交媒体并未触发或加速挤兑，96% 的相关讨论出现在倒闭已成定局之后。Bowman 称已发布《监管运营原则声明》重定向监督重点，并要求检查团队按月直接向监管主管上报任何不确定事项，以消除递责顾虑、强化问责。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20260918b.htm"
    },
    {
      date: "2026-09-18",
      memberId: "michelle-bowman",
      type: "演讲",
      title: "《The Final Chapter on Modernizing Bank Regulatory Stress Testing》：压力测试改革进入收官，SCB 波动率将减半",
      summary: "Bowman 称金融危机后压力测试框架多年改革的「最后一章」即将落地。理事会在未来数周内将考虑对框架的最终修订：其一是「增强透明度与公共问责」终局规则，要求公布各压力测试模型的方程、变量、系数、假设、局限与决策依据，并公开情景设计流程；其二是以银行最近两次年度测试结果的均值校准压力资本缓冲（SCB），并把生效日由 10 月 1 日推迟至次年 1 月 1 日，两项合计可将 SCB 波动率降低一半且不实质改变总体资本要求。她还表示将建议就修订 2027 年测试所使用的非利息收入模型公开征求意见，并预告扩大「前瞻性」压力测试——针对单家机构的特定脆弱性设计测试，其结果不影响资本要求、也不对外公开，仅用于深化对重大金融与非金融风险敞口的理解。她预计今年年底前理事会还将敲定大型与小型银行风险资本要求的改革以及对全球系统重要性银行（G-SIB）附加资本的改进。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20260918a.htm"
    },
    {
      date: "2026-09-16",
      memberId: null,
      type: "议息",
      title: "FOMC 以 12-0 全票加息 25 个基点至 3.75%-4.00%，为连续数次按兵不动后首次加息",
      summary: "FOMC 在 9 月 15-16 日会议后以 12-0 全票决定将联邦基金利率目标区间上调 25 个基点至 3.75%-4.00%，为连续数次维持利率不变后的首次加息。声明称经济正以稳健步伐扩张，产出与资本投资强劲，就业增长与劳动力队伍保持同步、失业率变动不大，而通胀仍处高位；本次行动将支持通胀更快回到 2% 目标——「委员会将实现价格稳定」——并继续维持充足准备金体制。随会议发布的季度经济预测摘要（SEP）显示，2026 年联邦基金利率中位预测由 6 月的 3.8% 上调至 4.1%，暗示年内可能进一步小幅收紧；2026 年 PCE 通胀中位 3.7%、核心 3.4%、失业率 4.1%、GDP 2.3%，通胀预计要到 2028 年才回落至 2%。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"
    },
    {
      date: "2026-09-11",
      memberId: "michael-barr",
      type: "新闻稿",
      title: "四机构就第三方风险管理指引草案征求意见，Barr 理事投下异议票",
      summary: "美联储联合 FDIC、NCUA、OCC 就基于原则、不具拘束力的第三方关系风险管理指引公开征求意见（在《联邦公报》发布后 60 天截止），计划在最终定稿后以新指引取代现行指引，并同步就社区银行与核心服务商往来发表联合声明；美联储另就一份面向美联储监管的传统社区银行的配套指南单独征求意见。理事 Barr 以单独声明方式行使异议权（dissent）：他支持原则导向，但认为草案引入「重大财务风险」的触发标准、以及「机构将对银行组织的合理决定给予充分考量」等措辞，可能削弱监管在问题转危前及时纠错的能力，并让人误解监管者会顺从银行自身判断；两份文件均排除消费者合规事项，若最终取代现行指引将在该领域留下覆盖缺口，或迫使银行同时遵守两套指引徒增困惑与负担；为传统社区银行单设指南却把业务模式更复杂、尤其需要指引的银行—金融科技合作排除在外。Cook 理事则发表声明支持，并欢迎就网络安全以及消费者保护、记录管理和反洗钱责任分配等细节征求评论。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260911a.htm"
    },
    {
      date: "2026-09-10",
      memberId: null,
      type: "新闻稿",
      title: "监管机构发布临时最终规则：更多社区银行有资格适用 18 个月检查周期",
      summary: "根据《21 世纪 ROAD to Housing Act》的要求，美联储、FDIC 与 OCC 发布临时最终规则，把可适用 18 个月延长现场检查周期的合格小型机构总资产门槛由 30 亿美元提高至 60 亿美元，使更多低风险社区银行的检查周期由 12 个月延长至 18 个月（须满足「经营良好且资本充足」等法定条件）；两轮检查之间继续按现行做法开展非现场监测，并为外国银行在美的分支机构及代理处作出平行调整。规则在《联邦公报》发布后立即生效，征求意见期 30 天。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260910a.htm"
    },
    {
      date: "2026-09-03",
      memberId: "christopher-waller",
      type: "演讲",
      title: "《The Economic Outlook and Some Comments on My Policy Communication》（Reuters NEXT Newsmaker 专访）",
      summary: "Waller 表示三个月核心 PCE 通胀已从 2 月的 4.76% 稳步降至 7 月的 3.05%，趋势令人鼓舞；若 8 月数据延续此改善，他愿支持 9 月 15-16 日 FOMC 维持利率不变，但若通胀反弹则不排除加息。他重申赞同 Warsh 不应在此时使用前瞻指引的立场，强调应区分「反应函数」（基于数据的条件性政策声明）与「前瞻指引」（脱离数据的利率路径承诺），并以棒球裁判的「好球带」比喻前者。经济方面他预计 2026 年 GDP 增长略超 2%，AI 基建投资是合法增长组成部分，不应折价；劳动力市场稳定，失业率 4.1% 接近均衡水平。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20260903a.htm"
    },
    {
      date: "2026-09-01",
      memberId: "michael-barr",
      type: "演讲",
      title: "《Unlocking Opportunities for Workers and Entrepreneurs with a Criminal Record》（第二次机会贷款论坛）",
      summary: "Barr 在开场经济评述中指出通胀仍远高于 2% 目标且已持续五年多，2024 年降至约 2% 后在 2025 年因关税、中东冲突和 AI 基建三重冲击重新偏离轨道；在 9 月 FOMC 上将再次讨论通胀前景与政策立场——若数据显示通胀正在回落则可再观察，否则应果断加息。演讲主体聚焦刑事记录人群的金融包容性：利用 AI 驱动的现金流信贷评估和替代数据可帮助「薄档案」人群获得信用，并以德克萨斯 PEP 项目（500+ 家企业、部分年收入超百万美元）为例论证第二次机会贷款的可行性。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/barr20260901a.htm"
    },
    {
      date: "2026-08-28",
      memberId: "kevin-warsh",
      type: "演讲",
      title: "Jackson Hole 主旨演讲《In Our Time》：改革前瞻指引，重申 2% 通胀目标与「价格优先」",
      summary: "Warsh 在上任满百日前夕发表杰克逊霍尔主旨演讲，宣布将改变美联储主席「前瞻指引」的形式与功能：这一危机时代工具已「过度停留」，常态下应限缩使用，过度预告未来决策反而「以清晰之名制造歧义」并束缚政策空间。他重申 2% PCE 目标是固定而坚定的，但「价格稳定并非自我执行」，65 个月的通胀偏高「责任就在央行」；当前 PCE 同比 3.7%、半年化 4.1%，「美联储此刻压倒性的焦点应在价格」，若潜在通胀未清晰且足够快地走向目标，「我们就还有工作要做」。经济方面他认为基本面走强——设备与无形资产投资同比增约 9%（过半来自 AI 基建）、标普 500 盈利同比增逾 20%、失业率 4.1% 接近充分就业，但住房与农业出现压力，并提示应紧盯增速的二阶导数。他还主张短期利率是达成双重使命的压倒性工具、非常规政策仅应限用于真正危机、并强调「货币很重要」；谈到任务组时，他表示与五个工作组负责人的「早期沟通令人鼓舞」，但建议不会影响当前政策判断。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/warsh20260828a.htm"
    },
    {
      date: "2026-08-19",
      memberId: null,
      type: "纪要",
      title: "FOMC 发布 7 月 28-29 日会议纪要：若通胀不回落，收紧「可能是必要的」",
      summary: "纪要显示委员会以 9-3 维持联邦基金利率在 3.50%-3.75%，三位轮值票委再度投反对票主张加息 25 个基点。多数与会者认为若通胀未能回落，政策收紧可能是必要的，部分人担心当前金融条件尚不够具限制性；通胀风险被普遍视为偏上行——中东冲突、关税传导与 AI 建设热潮推高的数据中心材料、电子设备与电力价格被多次点名。资产负债表政策占讨论相当篇幅：多位与会者表示资产负债表工作组的研究结论将成为未来 FOMC 审议的重要输入；Warsh 还在会上提议将每年八次议息会议改为约六次、每两个月一次以留出更多审议时间（未作决定，且不影响 2026 年内日程）。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260819a.htm"
    },
    {
      date: "2026-08-05",
      memberId: "lisa-cook",
      type: "演讲",
      title: "《Outlook for the U.S. and Alaskan Economies》（安克雷奇经济发展公司午餐会）",
      summary: "Cook 直言「通胀过高」：6 月 PCE 同比 3.7%、核心 3.3%，中东冲突推高的能源价格与企业 AI 基建投资推高的半导体、高科技设备价格是两大意外压力来源；劳动力市场处于「低招聘、低裁员」均衡。她认为通胀风险高于就业风险，明确表态「必要时已准备好加息」，但支持暂不行动，理由是关税传导基本过去、油价有望年底回落、AI 相关价格压力将随供应链调整缓解；同时警告通胀已连续五年高于目标，若看不到持续反通胀迹象将出手。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/cook20260805a.htm"
    },
    {
      date: "2026-07-29",
      memberId: null,
      type: "议息",
      title: "FOMC 以 9-3 维持联邦基金利率 3.50%-3.75% 不变",
      summary: "连续第五次会议按兵不动。三位轮值票委——克利夫兰 Hammack、明尼阿波利斯 Kashkari、达拉斯 Logan——投反对票，主张加息 25 个基点，为 2016 年 9 月以来首次三人反对。理事会 7 位成员均投赞成票。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm"
    },
    {
      date: "2026-07-29",
      memberId: "kevin-warsh",
      type: "发布会",
      title: "议息后新闻发布会：「我们将实现价格稳定」",
      summary: "Warsh 强调委员会对 2% 通胀目标的承诺，表示在通胀明显高于目标、地缘不确定性推升能源价格的背景下，维持利率不变是合适的；拒绝对 9 月会议预设方向。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm"
    },
    {
      date: "2026-07-13",
      memberId: "christopher-waller",
      type: "演讲",
      title: "《Monetary Policy at a Crossroads》（纽约商业经济协会）",
      summary: "Waller 表示货币政策正站在十字路口：若通胀如预期回落可维持现状，但若通胀持续高企，FOMC 应准备好重新加息。这番表态被视为理事会内部鹰派转向的风向标。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20260713a.htm"
    },
    {
      date: "2026-06-17",
      memberId: "kevin-warsh",
      type: "议息",
      title: "首次以主席身份主持 FOMC 会议",
      summary: "Warsh 上任后的首次议息会议维持利率不变；同步公布的点阵图中位数转向鹰派，暗示 2026 年底前存在加息可能，市场开始重估新主席的政策反应函数。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
    },
    {
      date: "2026-05-22",
      memberId: "kevin-warsh",
      type: "就任",
      title: "宣誓就任美联储主席",
      summary: "参议院以 51-45 确认其理事提名、54-45 确认其主席提名后，Warsh 宣誓就任第 17 任美联储主席，接替 Powell；主席任期四年，理事任期至 2040 年 1 月。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/other20260522a.htm"
    },
    {
      date: "2026-05-15",
      memberId: "jerome-powell",
      type: "卸任",
      title: "Powell 主席任期届满，留任理事",
      summary: "Powell 八年主席任期（2018-2026）正式结束。由于理事任期至 2028 年 1 月，他选择继续留在理事会并保留 FOMC 永久投票权，延续央行独立性的象征意义。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/aboutthefed/bios/board/powell.htm"
    }
  ],
  sources: [
    {
      label: "FOMC 声明与实施说明（2026-09-16）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"
    },
    {
      label: "经济预测摘要（SEP）：2026 年 9 月会议（2026-09-16）",
      url: "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm"
    },
    {
      label: "Bowman 演讲：The Final Chapter on Modernizing Bank Regulatory Stress Testing（2026-09-18）",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20260918a.htm"
    },
    {
      label: "Bowman 演讲：Initial Findings from Independent Review of Silicon Valley Bank（2026-09-18）",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20260918b.htm"
    },
    {
      label: "四机构新闻稿：第三方风险管理指引征求意见（2026-09-11）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260911a.htm"
    },
    {
      label: "Barr 理事声明：第三方风险管理指引异议（2026-09-11）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/barr-statement-20260911a.htm"
    },
    {
      label: "Cook 理事声明：第三方风险管理指引支持（2026-09-11）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/cook-statement-20260911a.htm"
    },
    {
      label: "四机构新闻稿：18 个月检查周期资格门槛上调（2026-09-10）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260910a.htm"
    },
    {
      label: "Waller 演讲：The Economic Outlook and Some Comments on My Policy Communication（Reuters NEXT，2026-09-03）",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20260903a.htm"
    },
    {
      label: "Barr 演讲：Unlocking Opportunities for Workers and Entrepreneurs with a Criminal Record（2026-09-01）",
      url: "https://www.federalreserve.gov/newsevents/speech/barr20260901a.htm"
    },
    {
      label: "Warsh 演讲：In Our Time（Jackson Hole，2026-08-28）",
      url: "https://www.federalreserve.gov/newsevents/speech/warsh20260828a.htm"
    },
    {
      label: "FOMC 会议纪要（2026 年 7 月 28-29 日会议，2026-08-19 发布）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260819a.htm"
    },
    {
      label: "Cook 演讲：Outlook for the U.S. and Alaskan Economies（2026-08-05）",
      url: "https://www.federalreserve.gov/newsevents/speech/cook20260805a.htm"
    },
    {
      label: "美联储理事会：现任成员",
      url: "https://www.federalreserve.gov/aboutthefed/bios/board/default.htm"
    },
    {
      label: "FOMC 声明与实施说明（2026-07-29）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm"
    },
    {
      label: "Waller 演讲：Monetary Policy at a Crossroads（2026-07-13）",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20260713a.htm"
    },
    {
      label: "美联储新闻稿：Warsh 宣誓就任主席（2026-05-22）",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/other20260522a.htm"
    },
    {
      label: "美国国会研究局报告 R48233：美联储理事会成员沿革",
      url: "https://www.congress.gov/crs-product/R48233"
    }
  ]
};
