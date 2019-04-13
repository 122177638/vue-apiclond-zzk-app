module.exports = {
  pie: {
    title: {
      text: "标题",
      left: "center",
      top: 15
    },
    legend: {
      bottom: 20,
      right: 40,
      left: 40,
    },
    series: [
      {
        type: "pie",
        radius: ["35%", "50%"],
        center: ["50%", "45%"],
        selectedMode: "single",
        data: [
          {
            value: 1548,
            name: "幽州"
          },
          {
            value: 535,
            name: "荆州"
          },
          {
            value: 510,
            name: "兖州"
          },
          {
            value: 634,
            name: "益州"
          },
          {
            value: 735,
            name: "西凉"
          }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
};
