window.FED_BOARD_DATA = {
  updated: "2026-10-26",
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
      date: "2026-10-14",
      memberId: "michelle-bowman",
      type: "演讲",
      title: "《Supervisory Modernization After Silicon Valley Bank》（曼谷经济节，重塑布雷顿森林体系委员会）",
      summary: "Bowman 系统阐述 SVB 独立审查对全球监管现代化的启示。她指出一线检查员早在 FDIC 接管前九个月就已掌握 SVB 的利率与流动性风险信息，但决策权归属不清、问责缺位导致行动迟延；监管关注点偏重流程、治理与控制（倒闭前累计 54 项 MRAs/MRAs 却无一要求处置核心财务风险），「组织可以极度繁忙却仍忽略最要紧的风险」。她再次否认社交媒体触发挤兑与 2018 年 EGRRCPA 分级监管是主因，并批评 BCBS 与 FSB 在 SVB 事件后几乎逐字照搬不完整报告、据此推进的监管工作「并不成立」；作为 FSB 监管与监管合作常设委员会主席，她主张国际标准制定机构回归安全与金融稳定的核心授权、严格验证数据，并强调现代化不等于少监管，而是按风险重要性与机构规模量体裁衣、让检查员能及时果断行动。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20261014a.htm"
    },
    {
      date: "2026-10-08",
      memberId: "christopher-waller",
      type: "演讲",
      title: "《The Signaling Value of the Summary of Economic Projections》（伊斯坦布尔经济论坛，土耳其央行）",
      summary: "Waller 回顾其从 2025 年下半年连续降息到 2026 年 9 月支持加息的完整心路：去年降息是对就业走弱的「保险」，今年上半年劳动力市场企稳、中东冲突推高油价、AI 基建推升高科技消费品价格、贸易冲突再起，8 月通胀数据偏热后「多月证据的总和」使其判断原有政策不足以及时将通胀带回 2%。他提出介于「什么都不说」与「强前瞻指引」之间的「信号选项」：可告知市场政策利率最终大概率上移的总量（如 75 个基点），但不锁定节奏与单次幅度、保留数据依赖——SEP 正在扮演这一信号角色（18 位提交点阵图者中 16 位预计年内至少再加息一次，4 位预计两次）。据期货市场定价，市场已预期未来数月累计加息约 50 个基点。他明确短期内政策重心在通胀一侧，若数据符合预期将继续加息，加息不必连续开会进行但应在可接受时间内到位。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20261008a.htm"
    },
    {
      date: "2026-10-07",
      memberId: null,
      type: "纪要",
      title: "FOMC 发布 9 月 15-16 日会议纪要：全员支持加息，多数与会者认为年内可能还需再加息一次",
      summary: "纪要显示 18 位提交预测的与会者全部支持将联邦基金利率上调 25 个基点至 3.75%-4.00%，理由是通胀仍处高位（8 月 PCE 同比约 3.8%、核心 3.4%）、劳动力市场接近充分就业且近期有所走强、经济活动稳健扩张；几乎所有人判断通胀风险偏上行、劳动力市场风险已明显消退并大体平衡。通胀压力被反复点名于三处：中东冲突推高的油价与成品油价格、AI 基建热潮（AI 相关需求正推升核心商品价格，其影响仍在扩大而关税效应在消退）、以及进一步加征关税的可能性；多位与会者担心高通胀持续逾五年后可能开始影响预期与工资物价制定。多数与会者认为年底前再加息一次很可能是合适的，但强调每次会议视数据而定；数人称当前利率「不具限制性或仅轻度限制性」，个别人还上调了中性利率估计。资产负债表方面，少数人建议完善国债市场出现功能障碍时的策略、沟通与工具，同时限制美联储在国债市场的足迹。会后确定下次会议为 2026 年 10 月 27-28 日。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm"
    },
    {
      date: "2026-10-06",
      memberId: "michelle-bowman",
      type: "演讲",
      title: "《Modernizing the Regulatory and Supervisory Landscape》（社区银行研究会议，圣路易斯）：宣布监管职能重组为五大区域",
      summary: "Bowman 宣布美联储监管职能启动结构性重组：借鉴州银行监管者会议（CSBS）的区域架构，按州界（而非联储分区）重新划分为五个区域，每区由对区内全部监管活动负责的区域负责人领导，检查员仍留在现有联储驻地、继续监管各自银行——此举旨在厘清决策权与问责、并加强与州及联邦伙伴的协调。她还披露后续改革清单：年内将考虑更新监管规则中的固定金额资产门槛（按通胀与经济增长调整并设五年再校准机制）、推进按资产规模定义银行组合结构及大行量体裁衣框架的更广泛改革、并继续推进 CAMELS 评级改革（M 项不再单独驱动综合评级）；在社区银行端，批评现行并购竞争分析系统性低估农村市场竞争、「陈旧且有害」，要求 FFIEC 层面推动新设银行审批标准明晰化与 Call Report 精简。她同时为 SSOP（监管运营原则声明）辩护，称其标志着检查文化从「流程清单」回归「重大实质性风险」的转折，而 SVB 独立审查暴露的委员会文化曾成为拖延行动与逃避问责的温床。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20261006a.htm"
    },
    {
      date: "2026-10-01",
      memberId: "michelle-bowman",
      type: "演讲",
      title: "《Modernizing Financial Regulation: Initial Observations from eSLR》（大西洋理事会 CEO 峰会）：杠杆率改革初步成效",
      summary: "Bowman 通报 2025 年 11 月定稿、2026 年 4 月 1 日生效的 eSLR 重新校准（GSIB 杠杆缓冲由固定 2% 改为其方法一附加资本的 50%，存款子公司上限 1%）的早期成效：八家美国 GSIB 中七家提前采用，六家交易商母公司 2026 年一季度合计新增近 5 万亿美元 eSLR 缓冲空间；监管数据显示交易商国债持仓从调整期初约 6000 亿美元升至 4 月底逾 7000 亿美元，增幅集中于此前受约束最紧的低缓冲机构。市场反馈显示 GSIB 杠杆容量从 2025 年四季度的 1.8 万亿美元跃升至新规则后的 6.4 万亿美元，交易商利用新增容量增加国债持仓并做空国债期货对冲，吸收了部分此前由对冲基金持有的基差交易头寸，有助于降低该类高杠杆策略在冲击下的市场脆弱性；报价价差收窄、拍卖周期日内波动下降、融资条件平静。她总结的核心教训是监管必须随证据持续现代化——eSLR 从「绑死约束」回归「风险资本后备」正是规则本意。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20261001a.htm"
    },
    {
      date: "2026-10-01",
      memberId: "philip-jefferson",
      type: "演讲",
      title: "《The U.S. Economy and Monetary Policy》（弗吉尼亚大学达顿商学院）：支持 9 月加息，通胀风险偏上行",
      summary: "Jefferson 称经济在能源冲击、AI 基建热潮与贸易政策变化的连环冲击下仍具韧性：上半年 GDP 增速 2.4% 约与潜在增速持平，AI 相关投资继续支撑增长；劳动力市场已稳定，失业率 8 月降至 4.1% 接近充分就业，裁员维持低位、职位空缺与失业人数之比回到 1 以上。通胀端 8 月 PCE 同比 3.4%、已连续五年多高于目标，近期抬头主要由能源价格驱动，核心服务除住房外价格在工资增速放缓背景下仍小幅上行，AI 热潮正推升相关商品与服务的生产成本；短期调查预期偏高，但多数长期预期仍锚定在与 2% 一致的水平。他明确支持 9 月加息 25 个基点至 3.75%-4.00%，认为这是确保长期通胀预期锚定、维护公众对 2% 目标信心的必要之举；基准情形是通胀短期维持高位、待能源与其他价格冲击消退后回归目标，但风险偏上行。对未来路径，他强调需观察数据趋势、前景与风险平衡，注意到 9 月会后各期限收益率进一步上行，「做出判断可能需要更多时间」。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm"
    },
    {
      date: "2026-10-01",
      memberId: "christopher-waller",
      type: "演讲",
      title: "《The Data Version of Godzilla versus Kong: FRED Takes on AI》（FRED Con 2026，圣路易斯联储）",
      summary: "Waller 盛赞 FRED 是美联储「做过的最大公益」：从 1961 年邮寄数据摘要起步，如今收录逾 85 万条序列、2025 年触达 1800 万独立用户。面对 AI 浪潮，他披露 FRED 流量正以每年 150% 增长且大部分来自 AI 与机器人，约一半访问已由 AI 代理完成；FRED 团队推出 MCP 连接器（Model Context Protocol），让用户自带 AI 代理（BYOAI）检索数据，并正为 AI 代理开发理解经济数据的技能、链接 FRASER 与 ALFRED 历史文档库。他同时警示 AI 生成内容的幻觉、偏见与错误归因风险——AI 可能无法准确标注数据来源、混淆相关与因果；宣布美联储理事会发布的部分数据将很快直接路由至 FRED 及其工具。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20261001a.htm"
    },
    {
      date: "2026-09-30",
      memberId: "lisa-cook",
      type: "演讲",
      title: "《The Dual Mandate in Rural America》（2026 Investing in Rural America Conference）",
      summary: "Cook 强调美联储双重使命同样适用于农村地区。她指出，农村地区的通胀在疫情后一度跑赢城市地区，能源和住房成本上升对农村家庭影响更大；农村劳动力参与率长期低于城市，特别是 25-54 岁男性参与率偏低。她重申美联储致力于在保持劳动力市场强劲的同时将通胀降至 2% 目标，并强调联邦储备系统持续通过研究和社区发展工作支持农村经济活力。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/cook20260930a.htm"
    },
    {
      date: "2026-09-29",
      memberId: "christopher-waller",
      type: "演讲",
      title: "《Payments in the Age of AI Agents》（Sibos 2026）",
      summary: "Waller 探讨人工智能代理（AI Agents）对全球支付体系的影响。他指出支付行业长期处于运用 AI 抗击欺诈和提升运营效率的前沿，当前正向代理型商务演进。演讲重点讨论了 AI 如何提升跨境支付效率与安全性，以及 AI 代理自主交易可能给支付基础设施带来的变革性影响。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/files/waller20260929a.pdf"
    },
    {
      date: "2026-09-29",
      memberId: "michelle-bowman",
      type: "演讲",
      title: "《Opening Remarks at the Community Bank Cyber Workshop》（社区银行网络安全研讨会）",
      summary: "Bowman 强调网络安全风险日益复杂，对社区银行构成挑战。她指出董事会和高管需要采取主动的网络风险管理，监管机构也在根据机构风险状况和新兴威胁调整 IT 检查方式，继续为社区银行提供相关资源以应对网络安全挑战。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20260929a.htm"
    },
    {
      date: "2026-09-29",
      memberId: "michael-barr",
      type: "演讲",
      title: "《Economic Conditions and Monetary Policy》（Detroit Economic Club）",
      summary: "Barr 回顾当前经济形势：GDP 增长保持稳健，通胀仍高于美联储 2% 目标，劳动力市场大致处于供需平衡状态。他重点分析了 AI 对经济的影响，包括短期投资推动、对通胀的潜在影响，以及中长期生产率提升的可能路径。基于通胀风险上升、劳动力市场风险有所缓解的判断，他支持在 9 月会议上将政策利率上调以更好地平衡双重使命风险。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/barr20260929a.htm"
    },
    {
      date: "2026-09-28",
      memberId: "lisa-cook",
      type: "演讲",
      title: "《An Update on AI and the Economy》（Oakland Tech Week）",
      summary: "Cook 从历史视角审视 AI 作为通用目的技术对经济的影响。她认为 AI 投资短期推高了芯片等相关产品价格并可能对能源等广泛使用的投入品造成通胀压力，但长期生产率提升有望增加经济供给能力。她同时关注 AI 对劳动力市场的潜在结构性影响，强调需要密切监测 AI 的采用速度、传播范围以及对不同规模企业的影响，以便货币政策及时应对通胀和就业方面的风险。",
      source: "Federal Reserve",
      url: "https://www.federalreserve.gov/newsevents/speech/cook20260928a.htm"
    },
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
      label: "Bowman 演讲：Supervisory Modernization After Silicon Valley Bank（2026-10-14）",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20261014a.htm"
    },
    {
      label: "Waller 演讲：The Signaling Value of the Summary of Economic Projections（2026-10-08）",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20261008a.htm"
    },
    {
      label: "FOMC 会议纪要（2026 年 9 月 15-16 日会议，2026-10-07 发布）",
      url: "https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm"
    },
    {
      label: "Bowman 演讲：Modernizing the Regulatory and Supervisory Landscape（2026-10-06）",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20261006a.htm"
    },
    {
      label: "Bowman 演讲：Modernizing Financial Regulation: Initial Observations from eSLR（2026-10-01）",
      url: "https://www.federalreserve.gov/newsevents/speech/bowman20261001a.htm"
    },
    {
      label: "Jefferson 演讲：The U.S. Economy and Monetary Policy（2026-10-01）",
      url: "https://www.federalreserve.gov/newsevents/speech/jefferson20261001a.htm"
    },
    {
      label: "Waller 演讲：The Data Version of Godzilla versus Kong: FRED Takes on AI（2026-10-01）",
      url: "https://www.federalreserve.gov/newsevents/speech/waller20261001a.htm"
    },
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
