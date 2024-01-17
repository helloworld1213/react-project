//传入一个style样式字符串,我们负责将其转成object并返回出去
function styleStrToObj(styleStr) {
  const obj = {};
  // 1.将比如font-size之类的转成fontSize
  //2.将;换成"",比如fontSize: 30px;换成 fontSize: 30px
  //3.以分号切割
  const s = styleStr
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    })
    .replace(/;\s?$/g, "")
    .split(/:|;/g);

  //4.遍历
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "");
  }
  return obj;
}

export { styleStrToObj };
