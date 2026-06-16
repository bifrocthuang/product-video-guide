// ====================== 全局配置 ======================
const CONFIG = {
  // ====================== 说明文本库（完全保留你原来的内容） ======================
  textLibrary: {
    // 摩托车贴纸通用安装说明（Duke390/790/890通用）
    "motorcycle_install": `
安装说明：
1. 本产品采用带导气槽的专用背胶，支持水贴法安装，我们已附赠喷壶和小刮板。喷水后可反复对位调整，确保贴纸精准贴合车身。
2. 请使用干净自来水，或加入1-2滴洗洁精的清水（⚠️ 洗洁精切勿多加，过量会影响背胶粘性）。
3. 粘贴完成后，用刮板从中间向四周刮平排出水分，再用吹风机吹干。建议使用家用普通吹风机；若使用专业热风枪，温度请控制在170℃-180℃，并保持适当距离，避免高温损坏贴纸。
4. 安装完成后，请等待24小时再高速骑行或清洗车辆。待水分完全挥发后，贴纸会达到最佳牢固度，避免过早使用导致脱落。
5. 后期维护：贴纸具备防晒防水性能，表面有保护层，无需特殊保养。清洗车辆时，请勿用高压水枪直接对着贴纸边缘冲洗，高水压冲击可能导致翘边或脱落。
6. 如需观看1080P高清视频，可点击下方按钮跳转B站登录后观看（⚠️ 部分视频时长较长，非WIFI环境下请注意流量消耗）。
    `,

    // 门窗贴纸通用安装说明
    "window_stripe_notice": `
安装说明：
1. 本产品采用水贴法安装，我们已附赠喷壶和小刮板。喷水后可反复对位调整，大幅降低安装难度。
2. 请使用干净自来水，或加入1-2滴洗洁精的清水（⚠️ 洗洁精切勿多加，过量会影响背胶粘性）。
3. 粘贴完成后，用刮板从中间向四周轻轻刮平，排出多余水分。
4. ⚠️ 重要提示：请勿立即撕下转移膜！请等待1-2天，待水分完全挥发后再撕下。若撕下时贴纸被带起，说明水分未干，请重新盖好转移膜，继续晾干后再尝试。
    `
  },

  // ====================== 视频库 ======================
  videos: {
    // 门窗贴纸系列
    "window_full_sticker": {
      title: "门窗整张与拼接贴纸教程",
      bvid: "BV1p45d6AEgm"
    },
    "window_stripe_sticker": {
      title: "门窗条纹贴纸安装教程",
      bvid: "BV1A45d6PEKz"
    },

    // Duke790/890系列
    "duke790_890_rear_frame": {
      title: "790-890Duke-后副车架安装教程",
      bvid: "BV1Sh5R66EGH"
    },
    "duke790_890_side_panel": {
      title: "790+890侧板R教程",
      bvid: "BV1Ck5R6AEzC"
    },

    // Duke390系列 - 原有视频
    "duke390_side_panel": {
      title: "KTM390DUKE侧板大R安装教程",
      bvid: "BV1tY5R6gEdb"
    },

    // Duke390系列 - 新增前挡泥板视频
    "duke390_fender_a_duke": {
      title: "390前挡泥板-A款+duke",
      bvid: "BV1MojV68ELU"
    },
    "duke390_fender_a_rocket": {
      title: "390前挡泥板-A款+弯道火箭",
      bvid: "BV1mojV6bELp"
    },
    "duke390_fender_b": {
      title: "390前挡泥板-B款",
      bvid: "BV1mojV68Efd"
    },
    "duke390_fender_c": {
      title: "390前挡泥板-C款",
      bvid: "BV1DSjV6PEUF"
    },
    "duke390_fender_d": {
      title: "390前挡泥板-D款",
      bvid: "BV1QSjV6PExw"
    },
    "duke390_fender_e": {
      title: "390前挡泥板-E款",
      bvid: "BV1QSjV6PEgi"
    },
    "duke390_fender_f_duke": {
      title: "390前挡泥板-F款+DUKE",
      bvid: "BV1QmjV6vEvR"
    },
    "duke390_fender_f_rocket": {
      title: "390前挡泥板-F款+弯道火箭",
      bvid: "BV1SXjV6wE68"
    },
    "duke390_fender_g_duke": {
      title: "390前挡泥板-G款+DUKE",
      bvid: "BV1SXjV6wErP"
    },
    "duke390_fender_g_rocket": {
      title: "390前挡泥板-G款+弯道火箭",
      bvid: "BV13DjV6eE3L"
    }
  },

  // ====================== 单个视频说明映射 ======================
  descriptions: {
    "window_full_sticker": "window_stripe_notice",
    "window_stripe_sticker": "window_stripe_notice",
    "duke790_890_rear_frame": "motorcycle_install",
    "duke790_890_side_panel": "motorcycle_install",
    "duke390_side_panel": "motorcycle_install",
    // 新增前挡泥板视频全部复用通用摩托车安装说明
    "duke390_fender_a_duke": "motorcycle_install",
    "duke390_fender_a_rocket": "motorcycle_install",
    "duke390_fender_b": "motorcycle_install",
    "duke390_fender_c": "motorcycle_install",
    "duke390_fender_d": "motorcycle_install",
    "duke390_fender_e": "motorcycle_install",
    "duke390_fender_f_duke": "motorcycle_install",
    "duke390_fender_f_rocket": "motorcycle_install",
    "duke390_fender_g_duke": "motorcycle_install",
    "duke390_fender_g_rocket": "motorcycle_install"
  },

  // ====================== 产品分组 ======================
  groups: {
    "menchuang": {
      name: "门窗贴纸系列教程",
      desc: "包含整张、条纹、拼接等多种贴纸安装方法",
      videos: ["window_full_sticker", "window_stripe_sticker"],
      description: "window_stripe_notice",
    },
    "Duke790890CS":{
      name: "Duke790/890贴纸教程",
      desc: "Duke790/890后附车架和油箱侧板相关教程",
      videos: ["duke790_890_rear_frame", "duke790_890_side_panel"],
      description: "motorcycle_install",
    },
    "Duke390CB":{
      name:"KTM390DUKE贴纸安装教程",
      desc:"KTM390DUKE贴纸安装教程，请选择对应的商品查看教程",
      description: "motorcycle_install",
      // 新增：子分组导航（仅该分组启用）
      subGroups: [
        {
          name: "390 Duke 侧板大R贴纸",
          videos: ["duke390_side_panel"]
        },
        {
          name: "390 Duke 前挡泥板贴纸",
          videos: [
            "duke390_fender_a_duke",
            "duke390_fender_a_rocket",
            "duke390_fender_b",
            "duke390_fender_c",
            "duke390_fender_d",
            "duke390_fender_e",
            "duke390_fender_f_duke",
            "duke390_fender_f_rocket",
            "duke390_fender_g_duke",
            "duke390_fender_g_rocket"
          ]
        }
      ]
    }
  }
}

// ====================== 混合引用例子 ======================
/*
descriptions: {
  "duke390_side_panel": "motorcycle_install",
  "window_stripe_sticker": "window_stripe_notice",

  // ✅ 混合使用：通用说明 + 独有提示
  "duke790_890_side_panel": `
${CONFIG.textLibrary.motorcycle_install}

侧板安装特别提示：
1. 安装前先对比贴纸和侧板的形状
2. 对齐边缘时要预留1mm的边距
3. 拐角处要慢慢拉伸，不要用力拉扯
  `
}
*/
